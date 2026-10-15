import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import * as company from '@/content/company'
import { cookiePolicy, privacyPolicy, termsOfService } from '@/content/legal'
import { industries } from '@/content/industries'
import { posts } from '@/content/posts'
import { products } from '@/content/products'
import { services } from '@/content/services'
import type { CaseStudyContent } from '@/content/types'
import { CaseStudyView } from '@/pages/company/CaseStudyDetailPage'
import { search } from '@/services/searchIndex'
import { brokenLinksOnPage, renderAt, settled } from './utils'

const staticPages: [path: string, h1: RegExp][] = [
  ['/about', /connected system/i],
  ['/process', /six stages/i],
  ['/technology', /proven technology/i],
  ['/values', /what we stand for/i],
  ['/team', /people behind/i],
  ['/leadership', /leadership/i],
  ['/partners', /grow with erpvalley/i],
  ['/careers', /build the systems/i],
  ['/portfolio', /our work/i],
  ['/engagement-models', /work with us/i],
  ['/hire-developers', /dedicated developers/i],
  ['/developers', /right specialist/i],
  ['/pricing', /pricing tailored/i],
  ['/faq', /frequently asked/i],
  ['/case-studies', /verified outcomes/i],
  ['/blog', /erp insights/i],
  ['/guides', /step-by-step/i],
  ['/whitepapers', /whitepapers/i],
  ['/reports', /industry reports/i],
  ['/webinars', /webinars/i],
  ['/search', /search erpvalley/i],
  ['/newsletter', /inbox/i],
  ['/contact', /talk to the erpvalley team/i],
  ['/book-demo', /working with your processes/i],
  ['/request-quote', /quote scoped/i],
  ['/privacy', /privacy/i],
  ['/terms', /terms/i],
  ['/cookies', /cookie/i],
]

describe('company, resource and legal pages', () => {
  it.each(staticPages)('%s renders with its heading and no broken links', async (path, h1) => {
    await renderAt(path)
    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent(h1)
    expect(brokenLinksOnPage()).toEqual([])
  })

  it.each(posts.map((p) => [p.slug, p.title]))('/blog/%s renders the article', async (slug, title) => {
    await renderAt(`/blog/${slug}`)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(title)
    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(brokenLinksOnPage()).toEqual([])
  })

  it.each(['/blog/unknown-article', '/case-studies/unknown-project'])('%s renders 404', async (path) => {
    await renderAt(path)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('This page doesn’t exist')
  })

  it('case studies page shows an honest empty state while none are published', async () => {
    await renderAt('/case-studies')
    expect(screen.getByText('Case studies are being prepared')).toBeInTheDocument()
  })

  it('case study template renders every required section', async () => {
    const fixture: CaseStudyContent = {
      slug: 'test-fixture',
      title: 'Test fixture case study',
      client: 'Fixture Client',
      industry: 'distribution',
      summary: 'Fixture summary.',
      metaDescription: 'Fixture meta description.',
      context: 'Fixture context.',
      challenge: ['Fixture challenge.'],
      solution: ['Fixture solution.'],
      approach: [
        { title: 'Discover', text: 'a' },
        { title: 'Build', text: 'b' },
        { title: 'Launch', text: 'c' },
      ],
      technologies: ['React', 'Node.js'],
      outcomes: ['Fixture outcome confirmed by client.'],
      products: ['inventory-management'],
      services: ['erp-implementation'],
    }
    render(
      <ThemeProvider>
        <MemoryRouter>
          <CaseStudyView study={fixture} related={[fixture]} content={{ industries, products, services }} />
        </MemoryRouter>
      </ThemeProvider>,
    )
    for (const heading of ['Fixture Client', 'The challenge', 'The solution', 'How the project was delivered', 'Results confirmed by the client', 'Technology used']) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }
    expect(screen.getByText('Fixture outcome confirmed by client.')).toBeInTheDocument()
  })
})

describe('blog', () => {
  it('filters articles by category', async () => {
    const user = userEvent.setup()
    const router = await renderAt('/blog')
    await user.click(screen.getByRole('button', { name: 'Finance' }))
    await settled(router)
    expect(screen.getByRole('button', { name: 'Finance' })).toHaveAttribute('aria-pressed', 'true')
    const titles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    const expected = posts.filter((p) => p.category === 'Finance').map((p) => p.title)
    expect(titles).toEqual(expected)
  })
})

describe('search', () => {
  it('finds products, services and articles', async () => {
    expect(search('inventory').map((r) => r.title)).toContain('Inventory Management')
    expect(search('data migration').map((r) => r.to)).toContain('/services/data-migration')
    expect(search('spreadsheets').some((r) => r.group === 'Articles')).toBe(true)
    expect(search('zzqxv')).toEqual([])
  })

  it('submits a query and shows grouped results', async () => {
    const user = userEvent.setup()
    const router = await renderAt('/search')
    await user.type(screen.getByRole('searchbox', { name: 'Search the site' }), 'payroll')
    await user.click(screen.getByRole('button', { name: 'Search' }))
    await settled(router)
    expect(router.state.location.search).toBe('?q=payroll')
    expect(await screen.findByRole('status')).toHaveTextContent(/results? for “payroll”/)
    expect(screen.getAllByRole('link', { name: /HR & Payroll/ }).length).toBeGreaterThan(0)
  })

  it('shows an empty state when nothing matches', async () => {
    await renderAt('/search?q=zzqxv')
    expect(screen.getByText('No results found')).toBeInTheDocument()
  })
})

describe('faq page', () => {
  it('groups questions by topic with working jump links', async () => {
    await renderAt('/faq')
    const nav = screen.getByRole('navigation', { name: 'FAQ topics' })
    for (const topic of ['General', 'Pricing', 'Implementation', 'Security and data', 'Hiring developers']) {
      expect(within(nav).getByRole('link', { name: topic })).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 2, name: topic })).toBeInTheDocument()
    }
  })
})

describe('content rules', () => {
  it('company, article and legal content makes no unverifiable claims', async () => {
    const text = JSON.stringify([company, posts, privacyPolicy, termsOfService, cookiePolicy], (k, v) => (k === 'icon' ? undefined : v))
    expect(text).not.toMatch(/(?<!not )\b(certified|guarantee[ds]?|award-winning|industry-leading|#1|SOC ?2|ISO ?27001)\b/i)
    expect(text).not.toMatch(/\d+(\.\d+)?\s?%/)
    expect(text).not.toMatch(/studies show|according to (a|the) (survey|study|report)/i)
  })

  it('legal documents are marked as templates with placeholders, not invented facts', async () => {
    for (const doc of [privacyPolicy, termsOfService, cookiePolicy]) {
      expect(doc.summary).toMatch(/template/i)
      expect(JSON.stringify(doc)).toContain('[Company legal name]')
    }
  })

  it('every article has a unique slug and valid date', async () => {
    expect(new Set(posts.map((p) => p.slug)).size).toBe(posts.length)
    for (const p of posts) expect(Number.isNaN(Date.parse(p.publishedAt))).toBe(false)
  })
})
