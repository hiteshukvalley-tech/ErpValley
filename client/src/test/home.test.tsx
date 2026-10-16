import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { pageRegistry } from '@/config/navigation'
import { renderAt } from './utils'

beforeEach(async () => {
  await renderAt('/')
})

describe('homepage', () => {
  it('renders every section in the specified order', () => {
    const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)
    const expected = [
      'Software, setup and support. Everything in one place.',
      'One platform. An app for every department.',
      'From disconnected tools to one connected business',
      'See how ERPVALLEY works for your teams',
      'ERP solutions for every industry',
      'A flexible platform that connects to your tools',
      'How we deliver ERP projects',
      'A clear path from first call to go-live',
      'Questions businesses ask us',
      'Ready to run your business smarter?',
    ]
    const positions = expected.map((t) => headings.indexOf(t))
    expect(positions.every((p) => p >= 0)).toBe(true)
    expect([...positions].sort((a, b) => a - b)).toEqual(positions)
  })

  it('does not show the hidden technology section', () => {
    expect(screen.queryByRole('heading', { name: 'Modern technology, built to last' })).not.toBeInTheDocument()
  })

  it('has a single h1 with the hero headline and both hero CTAs', () => {
    const h1s = screen.getAllByRole('heading', { level: 1 })
    expect(h1s).toHaveLength(1)
    expect(h1s[0]).toHaveTextContent('Run Your Business Smarter with ERPVALLEY.')
    const hero = h1s[0].closest('section')!
    expect(within(hero).getByRole('link', { name: /Book a Free Demo/ })).toHaveAttribute('href', '/book-demo')
    expect(within(hero).getByRole('link', { name: /Explore Solutions/ })).toHaveAttribute('href', '/products')
  })

  it('labels the dashboard mockup as sample data', () => {
    expect(screen.getByText('Product preview with sample data.')).toBeInTheDocument()
  })

  it('switches featured product tabs by click and arrow keys', async () => {
    const user = userEvent.setup()
    const tabs = screen.getAllByRole('tab')
    expect(tabs.map((t) => t.textContent)).toEqual(['Finance', 'CRM', 'Inventory', 'Analytics'])
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')

    await user.click(tabs[1])
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel')).toHaveTextContent('A sales pipeline your whole team can see')

    await user.keyboard('{ArrowRight}')
    expect(tabs[2]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[2]).toHaveFocus()
    await user.keyboard('{End}')
    expect(tabs[3]).toHaveAttribute('aria-selected', 'true')
    await user.keyboard('{ArrowRight}')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
  })

  it('opens and closes FAQ answers', async () => {
    const user = userEvent.setup()
    const first = screen.getByRole('button', { name: 'What is ERPVALLEY?' })
    const second = screen.getByRole('button', { name: 'Do I have to use every module?' })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(second).toHaveAttribute('aria-expanded', 'false')
    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-expanded', 'false')
    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
  })

  it('every internal link on the page points to a registered route', () => {
    const hrefs = [...new Set(screen.getAllByRole('link').map((a) => a.getAttribute('href')!))]
    const broken = hrefs.filter((h) => h.startsWith('/') && h !== '/' && !pageRegistry.has(h))
    expect(broken).toEqual([])
  })
})
