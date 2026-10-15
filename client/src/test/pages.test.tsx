import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { pageRegistry, productItems, industryItems, serviceItems } from '@/config/navigation'
import { industries, industryBySlug } from '@/content/industries'
import { products, productBySlug } from '@/content/products'
import { services, serviceBySlug } from '@/content/services'
import { renderAt } from './utils'

/** Internal link paths on the page, without query strings (e.g. /book-demo?module=crm → /book-demo). */
const internalLinks = () =>
  [...new Set(screen.getAllByRole('link').map((a) => a.getAttribute('href')!.split(/[?#]/)[0]))].filter((h) => h.startsWith('/'))

describe('content integrity', () => {
  it('has one content entry per menu item, with matching names', async () => {
    expect(products.map((p) => `/products/${p.slug}`)).toEqual(productItems.map((i) => i.to))
    expect(industries.map((i) => `/industries/${i.slug}`)).toEqual(industryItems.map((i) => i.to))
    expect(services.map((s) => `/services/${s.slug}`)).toEqual(serviceItems.map((i) => i.to))
    products.forEach((p, i) => expect(p.name).toBe(productItems[i].label))
    industries.forEach((p, i) => expect(p.name).toBe(industryItems[i].label))
    services.forEach((p, i) => expect(p.name).toBe(serviceItems[i].label))
  })

  it('product entries have the required section sizes and valid relations', async () => {
    for (const p of products) {
      expect(p.benefits, p.slug).toHaveLength(4)
      expect(p.features, p.slug).toHaveLength(6)
      expect(p.capabilityGroups, p.slug).toHaveLength(3)
      expect(p.useCases, p.slug).toHaveLength(3)
      expect(p.faqs, p.slug).toHaveLength(4)
      expect(p.relatedModules, p.slug).not.toContain(p.slug)
      p.relatedModules.forEach((r) => expect(productBySlug.has(r), `${p.slug} → ${r}`).toBe(true))
    }
  })

  it('industry entries have the required section sizes and valid modules', async () => {
    for (const i of industries) {
      expect(i.challenges, i.slug).toHaveLength(4)
      expect(i.workflow.steps.length, i.slug).toBeGreaterThanOrEqual(4)
      expect(i.useCases, i.slug).toHaveLength(3)
      expect(i.faqs, i.slug).toHaveLength(4)
      i.modules.forEach((m) => expect(productBySlug.has(m.slug), `${i.slug} → ${m.slug}`).toBe(true))
    }
  })

  it('service entries have the required section sizes and valid relations', async () => {
    for (const s of services) {
      expect(s.problems, s.slug).toHaveLength(4)
      expect(s.capabilities, s.slug).toHaveLength(6)
      expect(s.relatedServices, s.slug).toHaveLength(3)
      expect(s.relatedServices, s.slug).not.toContain(s.slug)
      expect(s.faqs, s.slug).toHaveLength(4)
      s.relatedServices.forEach((r) => expect(serviceBySlug.has(r), `${s.slug} → ${r}`).toBe(true))
      s.relatedProducts.forEach((r) => expect(productBySlug.has(r), `${s.slug} → ${r}`).toBe(true))
    }
  })

  it('every page has a unique headline and meta description of sensible length', async () => {
    const all = [...products, ...industries, ...services]
    expect(new Set(all.map((x) => x.headline)).size).toBe(all.length)
    expect(new Set(all.map((x) => x.metaDescription)).size).toBe(all.length)
    for (const x of all) {
      expect(x.metaDescription.length, x.slug).toBeGreaterThanOrEqual(110)
      expect(x.metaDescription.length, x.slug).toBeLessThanOrEqual(170)
    }
  })

  it('makes no unverifiable claims (certifications, guarantees, statistics)', async () => {
    const text = JSON.stringify([products, industries, services], (k, v) => (k === 'preview' || k === 'icon' ? undefined : v))
    // "not certified" disclaimers are allowed; positive certification claims are not.
    expect(text).not.toMatch(/(?<!not )\b(certified|guarantee[ds]?|award-winning|industry-leading|#1|SOC ?2|ISO ?27001|HIPAA[- ]compliant|GDPR[- ]compliant)\b/i)
    expect(text).not.toMatch(/\d+(\.\d+)?\s?%/)
  })
})

describe('detail pages render', () => {
  it.each(products.map((p) => [p.slug, p.headline]))('/products/%s', async (slug, headline) => {
    await renderAt(`/products/${slug}`)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(headline)
    expect(within(screen.getByRole('navigation', { name: 'Breadcrumb' })).getByText(productBySlug.get(slug as never)!.name)).toBeInTheDocument()
    expect(internalLinks().filter((h) => h !== '/' && !pageRegistry.has(h))).toEqual([])
  })

  it.each(industries.map((i) => [i.slug, i.headline]))('/industries/%s', async (slug, headline) => {
    await renderAt(`/industries/${slug}`)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(headline)
    expect(within(screen.getByRole('navigation', { name: 'Breadcrumb' })).getByText(industryBySlug.get(slug as never)!.name)).toBeInTheDocument()
    expect(internalLinks().filter((h) => h !== '/' && !pageRegistry.has(h))).toEqual([])
  })

  it.each(services.map((s) => [s.slug, s.headline]))('/services/%s', async (slug, headline) => {
    await renderAt(`/services/${slug}`)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(headline)
    expect(within(screen.getByRole('navigation', { name: 'Breadcrumb' })).getByText(serviceBySlug.get(slug as never)!.name)).toBeInTheDocument()
    expect(internalLinks().filter((h) => h !== '/' && !pageRegistry.has(h))).toEqual([])
  })

  it.each(['/products/unknown', '/industries/unknown', '/services/unknown'])('%s renders 404', async (path) => {
    await renderAt(path)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('This page doesn’t exist')
  })
})

describe('overview pages', () => {
  it('products overview lists every module grouped by category', async () => {
    await renderAt('/products')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('One platform')
    for (const p of products) expect(screen.getAllByRole('link', { name: new RegExp(`Explore ${p.name}`) }).length).toBeGreaterThan(0)
  })

  it('comparison page has a table row per module', async () => {
    await renderAt('/products/compare')
    const table = screen.getByRole('table')
    expect(within(table).getAllByRole('row')).toHaveLength(products.length) // header + modules (excluding platform)
  })

  it.each([
    ['/industries', industries.length],
    ['/services', services.length],
  ])('%s lists every entry', async (path, count) => {
    await renderAt(path)
    const list = screen.getByRole('main').querySelectorAll('section ul > li a')
    expect(list.length).toBeGreaterThanOrEqual(count)
  })
})
