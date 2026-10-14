import { screen, within } from '@testing-library/react'
import type { LucideIcon } from 'lucide-react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { caseStudies } from '@/content/caseStudies'
import { contentIcons } from '@/content/icons'
import { industries } from '@/content/industries'
import { posts } from '@/content/posts'
import { products } from '@/content/products'
import { services } from '@/content/services'
import { clearContentCache, reviveIcons } from '@/services/content'
import { renderAt } from './utils'

/** Content as the API returns it: icons as Lucide names. */
const asApiJson = (value: unknown) =>
  JSON.stringify(value, (key, v) => (key === 'icon' ? (v as LucideIcon).displayName : v))

const json = (body: string) => new Response(body, { headers: { 'content-type': 'application/json' } })

/** Mocks fetch with a handler per API path (e.g. "/api/products"); other paths fail. */
function mockApi(routes: Record<string, () => Response>) {
  const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
    const url = new URL(String(input), 'http://localhost')
    const handler = routes[url.pathname]
    if (!handler) throw new TypeError(`No mock for ${url.pathname}`)
    return handler()
  })
  vi.stubGlobal('fetch', fetchMock)
  return fetchMock
}

beforeEach(clearContentCache)
afterEach(clearContentCache)

describe('content icons', () => {
  it('lists every icon used in the bundled content under its Lucide name', () => {
    const used = new Set<LucideIcon>()
    JSON.stringify([products, industries, services, posts, caseStudies], (key, v) => {
      if (key === 'icon') used.add(v)
      return v
    })
    for (const icon of used) expect(contentIcons[icon.displayName!], icon.displayName).toBe(icon)
  })

  it('turns icon names back into components, with a fallback for unknown names', () => {
    const revived = reviveIcons<{ icon: LucideIcon; items: { icon: LucideIcon }[] }>({
      icon: 'Factory',
      items: [{ icon: 'NotARealIcon' }],
    }, contentIcons)
    expect(revived.icon).toBe(contentIcons.Factory)
    expect(revived.items[0].icon).toBe(contentIcons.Layers)
  })
})

describe('content from the API', () => {
  it('renders pages from API data when the API is available', async () => {
    const edited = products.map((p) => (p.slug === 'crm' ? { ...p, name: 'CRM from the API' } : p))
    const fetchMock = mockApi({ '/api/products': () => json(asApiJson({ data: edited })) })
    await renderAt('/products/crm')
    const crumbs = screen.getByRole('navigation', { name: 'Breadcrumb' })
    expect(within(crumbs).getByText('CRM from the API')).toBeInTheDocument()
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('falls back to the bundled content when the API answers with something other than JSON', async () => {
    mockApi({ '/api/products': () => new Response('<!doctype html>', { headers: { 'content-type': 'text/html' } }) })
    await renderAt('/products/crm')
    const crumbs = screen.getByRole('navigation', { name: 'Breadcrumb' })
    expect(within(crumbs).getByText(products.find((p) => p.slug === 'crm')!.name)).toBeInTheDocument()
  })

  it('shows the not-found page for slugs the API does not have', async () => {
    mockApi({ '/api/products': () => json(asApiJson({ data: products.filter((p) => p.slug !== 'crm') })) })
    await renderAt('/products/crm')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('This page doesn’t exist')
  })

  it('searches content through the API and site pages locally', async () => {
    const fetchMock = mockApi({
      '/api/search': () =>
        json(JSON.stringify({ data: [{ to: '/services/erp-consulting', title: 'API result', summary: 'From the API.', group: 'Services', score: 2 }] })),
    })
    await renderAt('/search?q=pricing')
    expect(String(fetchMock.mock.calls[0][0])).toBe('/api/search?q=pricing')
    expect(screen.getByRole('link', { name: /API result/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Pages' })).toBeInTheDocument()
  })
})
