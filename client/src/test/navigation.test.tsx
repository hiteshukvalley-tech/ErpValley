import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { footerColumns, legalLinks, mainNav, pageRegistry } from '@/config/navigation'
import { renderAt, settled } from './utils'

describe('header navigation', () => {
  it('renders all six menus and the Book a Demo CTA', async () => {
    await renderAt('/')
    const nav = screen.getByRole('navigation', { name: 'Main' })
    for (const label of ['Products', 'Solutions', 'Industries', 'Services', 'Resources', 'Company']) {
      expect(within(nav).getByRole('button', { name: label })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Book a Demo' })[0]).toHaveAttribute('href', '/book-demo')
  })

  it('opens a dropdown on click and closes it with Escape', async () => {
    const user = userEvent.setup()
    await renderAt('/')
    const trigger = screen.getByRole('button', { name: 'Products' })
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    const panel = document.getElementById(trigger.getAttribute('aria-controls')!)!
    expect(within(panel).getByRole('link', { name: /CRM/ })).toHaveAttribute('href', '/products/crm')
    await user.keyboard('{Escape}')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveFocus()
  })

  it('navigates from a dropdown link and closes the menu', async () => {
    const user = userEvent.setup()
    const router = await renderAt('/')
    const trigger = screen.getByRole('button', { name: 'Industries' })
    await user.click(trigger)
    const panel = document.getElementById(trigger.getAttribute('aria-controls')!)!
    await user.click(within(panel).getByRole('link', { name: /Healthcare/ }))
    await settled(router)
    expect(router.state.location.pathname).toBe('/industries/healthcare')
    // The new page renders in a React transition, so wait for it to appear.
    expect(await screen.findByRole('navigation', { name: 'Breadcrumb' })).toHaveTextContent('Healthcare')
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Industries' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the mobile menu and closes it with Escape', async () => {
    const user = userEvent.setup()
    await renderAt('/')
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Site menu' })
    await user.click(within(dialog).getByRole('button', { name: 'Services' }))
    expect(within(dialog).getByRole('link', { name: 'Data Migration' })).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})

describe('routing', () => {
  it('renders the homepage hero', async () => {
    await renderAt('/')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Run Your Business Smarter with ERPVALLEY.')
    expect(screen.getByRole('link', { name: /Explore Solutions/ })).toHaveAttribute('href', '/products')
  })

  it('renders 404 for unknown paths', async () => {
    await renderAt('/does-not-exist')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('This page doesn’t exist')
  })

  it('renders the 500 page', async () => {
    await renderAt('/500')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Something went wrong')
  })

  it('every menu, footer and legal link resolves to a registered page (no dead links)', async () => {
    const links = [
      ...mainNav.flatMap((m) => [...(m.to ? [m.to] : []), ...m.groups.flatMap((g) => g.items.map((i) => i.to))]),
      ...mainNav.flatMap((m) => (m.feature ? [m.feature.to] : [])),
      ...footerColumns.flatMap((c) => c.links.map((l) => l.to)),
      ...legalLinks.map((l) => l.to),
    ]
    const missing = links.filter((to) => !pageRegistry.has(to))
    expect(missing).toEqual([])
  })
})
