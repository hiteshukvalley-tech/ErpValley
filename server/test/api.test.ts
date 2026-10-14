import { MongoMemoryServer } from 'mongodb-memory-server'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createApp } from '../src/app.js'
import { connectDatabase, disconnectDatabase } from '../src/db/connect.js'
import { Post } from '../src/models/index.js'
import { loadClientContent } from '../src/scripts/clientContent.js'
import { seedDatabase, type SeedContent } from '../src/seed/seedDatabase.js'

let mongo: MongoMemoryServer
let content: SeedContent
const app = createApp({ corsOrigins: ['http://localhost:5300'] })

beforeAll(async () => {
  mongo = await MongoMemoryServer.create()
  await connectDatabase(mongo.getUri('erpvalley-test'))
  content = await loadClientContent()
  await seedDatabase(content)
})

afterAll(async () => {
  await disconnectDatabase()
  await mongo?.stop()
})

describe('seeding', () => {
  it('converts icon components to Lucide icon names', () => {
    expect(content.products[0].icon).toBe('LayoutDashboard')
    expect(JSON.stringify(content)).not.toContain('$$typeof')
  })

  it('is idempotent: running again updates in place and creates nothing new', async () => {
    const report = await seedDatabase(content)
    for (const [name, r] of Object.entries(report)) expect(r.upserted, name).toBe(0)
  })
})

describe('health and settings', () => {
  it('reports the database connection', async () => {
    const res = await request(app).get('/api/health').expect(200)
    expect(res.body).toEqual({ status: 'ok', database: 'connected' })
  })

  it('returns site settings with erpvalley.in as the public URL', async () => {
    const res = await request(app).get('/api/settings').expect(200)
    expect(res.body.data).toMatchObject({ name: 'ERPVALLEY', url: 'https://erpvalley.in' })
    expect(res.body.data).not.toHaveProperty('_id')
  })
})

describe('content API', () => {
  it.each([
    ['products', 'products'],
    ['industries', 'industries'],
    ['services', 'services'],
  ] as const)('/api/%s lists every entry in navigation order', async (path, key) => {
    const res = await request(app).get(`/api/${path}`).expect(200)
    expect(res.body.data.map((d: { slug: string }) => d.slug)).toEqual(content[key].map((d) => d.slug))
  })

  it('returns one product by slug in the client content shape', async () => {
    const res = await request(app).get('/api/products/crm').expect(200)
    const expected = content.products.find((p) => p.slug === 'crm')
    expect(res.body.data).toEqual(expected)
  })

  it('returns articles newest first and filters by category and kind', async () => {
    const all = await request(app).get('/api/posts').expect(200)
    const dates = all.body.data.map((p: { publishedAt: string }) => p.publishedAt)
    expect(dates).toEqual([...dates].sort().reverse())

    const finance = await request(app).get('/api/posts?category=Finance').expect(200)
    expect(finance.body.data.length).toBeGreaterThan(0)
    expect(finance.body.data.every((p: { category: string }) => p.category === 'Finance')).toBe(true)

    const guides = await request(app).get('/api/posts?kind=guide').expect(200)
    expect(guides.body.data.every((p: { kind: string }) => p.kind === 'guide')).toBe(true)
  })

  it('rejects an unknown post category with 400', async () => {
    const res = await request(app).get('/api/posts?category=Nope').expect(400)
    expect(res.body.error.message).toBe('Invalid request')
  })

  it('returns 404 for unknown or malformed slugs', async () => {
    await request(app).get('/api/products/does-not-exist').expect(404)
    await request(app).get('/api/services/..%2Fsecret').expect(404)
  })

  it('only lists published case studies', async () => {
    const res = await request(app).get('/api/case-studies').expect(200)
    expect(res.body.data).toEqual([])
  })

  it('validates article bodies', async () => {
    const bad = new Post({ ...content.posts[0], slug: 'bad-post', body: [{ type: 'ul' }] })
    await expect(bad.validate()).rejects.toThrow(/needs items/)
  })
})

describe('search API', () => {
  const search = (q: string) => request(app).get('/api/search').query({ q }).expect(200)

  it('finds products, services and articles, all terms required', async () => {
    expect((await search('inventory')).body.data.map((r: { title: string }) => r.title)).toContain('Inventory Management')
    expect((await search('data migration')).body.data.map((r: { to: string }) => r.to)).toContain('/services/data-migration')
    expect((await search('spreadsheets')).body.data.some((r: { group: string }) => r.group === 'Articles')).toBe(true)
  })

  it('ranks title matches first', async () => {
    const res = await search('payroll')
    expect(res.body.data[0].title).toBe('HR & Payroll')
  })

  it('returns nothing for empty, one-letter or unmatched queries', async () => {
    for (const q of ['', 'a', 'zzqxv']) expect((await search(q)).body.data).toEqual([])
  })
})

describe('HTTP hardening', () => {
  it('sets security headers and allows the client origin', async () => {
    const res = await request(app).get('/api/health').set('Origin', 'http://localhost:5300')
    expect(res.headers['x-content-type-options']).toBe('nosniff')
    expect(res.headers['x-powered-by']).toBeUndefined()
    expect(res.headers['access-control-allow-origin']).toBe('http://localhost:5300')
  })

  it('does not allow other origins', async () => {
    const res = await request(app).get('/api/health').set('Origin', 'https://evil.example')
    expect(res.headers['access-control-allow-origin']).toBeUndefined()
  })

  it('returns JSON 404s for unknown routes', async () => {
    const res = await request(app).get('/api/nope').expect(404)
    expect(res.body.error.message).toMatch(/Not found/)
  })

  it('rejects malformed JSON with 400, not 500', async () => {
    await request(app).post('/api/search').set('Content-Type', 'application/json').send('{bad').expect(400)
  })
})
