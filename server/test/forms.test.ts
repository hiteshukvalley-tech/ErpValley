import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { MongoMemoryServer } from 'mongodb-memory-server'
import request from 'supertest'
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { createApp } from '../src/app.js'
import { connectDatabase, disconnectDatabase } from '../src/db/connect.js'
import { Lead, Subscriber } from '../src/models/index.js'
import * as forms from '../src/validation/forms.js'

let mongo: MongoMemoryServer
const app = createApp({ corsOrigins: ['http://localhost:5300'], formLimitPerWindow: 1000 })

beforeAll(async () => {
  mongo = await MongoMemoryServer.create()
  await connectDatabase(mongo.getUri('erpvalley-forms-test'))
  await Promise.all([Lead.init(), Subscriber.init()])
})

afterAll(async () => {
  await disconnectDatabase()
  await mongo?.stop()
})

beforeEach(async () => {
  await Promise.all([Lead.deleteMany({}), Subscriber.deleteMany({})])
})

const person = { name: 'Asha Rao', email: 'Asha@Example.com', consent: true, page: '/contact' }
const contact = { ...person, topic: 'Sales', message: 'We would like to know more about the CRM module.' }
const demo = { ...person, company: 'Rao Traders', companySize: '11-50', modules: ['crm', 'inventory-management'] }
const quote = {
  ...demo,
  services: ['erp-implementation'],
  timeline: 'Within 3 months',
  message: 'We need finance, CRM and inventory for two warehouses.',
}

describe('lead forms', () => {
  it.each([
    ['contact', contact],
    ['demo', demo],
    ['quote', quote],
  ] as const)('stores a valid %s request', async (type, body) => {
    const res = await request(app).post(`/api/leads/${type}`).send(body).expect(201)
    expect(res.body).toEqual({ data: { received: true } })
    const lead = await Lead.findOne().lean()
    expect(lead).toMatchObject({ type, status: 'new', name: 'Asha Rao', email: 'asha@example.com', page: '/contact' })
    expect(lead?.consentAt).toBeInstanceOf(Date)
    expect(lead).not.toHaveProperty('consent')
    expect(lead).not.toHaveProperty('website')
  })

  it('returns field errors for invalid input and stores nothing', async () => {
    const res = await request(app)
      .post('/api/leads/contact')
      .send({ name: 'A', email: 'not-an-email', topic: 'Pizza', message: 'short', phone: 'call me' })
      .expect(400)
    expect(Object.keys(res.body.error.issues).sort()).toEqual(['consent', 'email', 'message', 'name', 'phone', 'topic'])
    expect(res.body.error.issues.email).toEqual(['Enter a valid email address'])
    expect(await Lead.countDocuments()).toBe(0)
  })

  it('requires company details for demo and quote requests', async () => {
    const res = await request(app).post('/api/leads/demo').send(person).expect(400)
    expect(res.body.error.issues.company).toEqual(['Enter your company name'])
    expect(res.body.error.issues.companySize).toEqual(['Choose your company size'])
  })

  it('rejects malformed module slugs and unknown fields cannot be stored', async () => {
    await request(app).post('/api/leads/demo').send({ ...demo, modules: ['../etc'] }).expect(400)
    await request(app).post('/api/leads/demo').send({ ...demo, status: 'closed', type: 'quote' }).expect(201)
    expect(await Lead.findOne().lean()).toMatchObject({ type: 'demo', status: 'new' })
  })

  it('pretends to accept bot submissions (honeypot filled) but stores nothing', async () => {
    await request(app).post('/api/leads/contact').send({ ...contact, website: 'https://spam.example' }).expect(201)
    expect(await Lead.countDocuments()).toBe(0)
  })

  it('never exposes leads through the API', async () => {
    await request(app).post('/api/leads/contact').send(contact).expect(201)
    await request(app).get('/api/leads').expect(404)
    await request(app).get('/api/leads/contact').expect(404)
  })
})

describe('newsletter', () => {
  it('subscribes once per address and answers the same way for repeats', async () => {
    const body = { email: 'Ops@Example.com', consent: true, page: '/newsletter' }
    const first = await request(app).post('/api/newsletter').send(body).expect(201)
    const second = await request(app).post('/api/newsletter').send({ ...body, email: 'ops@example.com' }).expect(201)
    expect(second.body).toEqual(first.body)
    const subs = await Subscriber.find().lean()
    expect(subs).toHaveLength(1)
    expect(subs[0]).toMatchObject({ email: 'ops@example.com', status: 'subscribed', page: '/newsletter' })
  })

  it('requires consent', async () => {
    const res = await request(app).post('/api/newsletter').send({ email: 'ops@example.com' }).expect(400)
    expect(res.body.error.issues.consent).toEqual(['Please agree to the privacy policy'])
  })
})

describe('form protection', () => {
  it('rate-limits form submissions per client', async () => {
    const strict = createApp({ corsOrigins: [], formLimitPerWindow: 2 })
    await request(strict).post('/api/newsletter').send({ email: 'a@example.com', consent: true }).expect(201)
    await request(strict).post('/api/newsletter').send({ email: 'b@example.com', consent: true }).expect(201)
    const res = await request(strict).post('/api/newsletter').send({ email: 'c@example.com', consent: true }).expect(429)
    expect(res.body.error.message).toMatch(/Too many submissions/)
    // Reading content is not affected by the form limit.
    await request(strict).get('/api/health').expect(200)
  })

  it('offers the same choices as the website forms', async () => {
    const clientForms = resolve(dirname(fileURLToPath(import.meta.url)), '../../client/src/config/forms.ts')
    const client = await import(pathToFileURL(clientForms).href)
    for (const list of ['CONTACT_TOPICS', 'COMPANY_SIZES', 'TIMELINES'] as const) {
      expect(client[list], list).toEqual(forms[list])
    }
  })
})

// Runs last: disconnects the database.
describe('when the database is down', () => {
  it('answers 503 instead of hanging', async () => {
    await disconnectDatabase()
    const res = await request(app).post('/api/leads/contact').send(contact).expect(503)
    expect(res.body.error.message).toMatch(/temporarily unavailable/)
    await request(app).get('/api/nope').expect(404)
  })
})
