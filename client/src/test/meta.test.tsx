import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { siteConfig } from '@/config/site'
import { renderAt } from './utils'

describe('site URL and page metadata', () => {
  it('uses erpvalley.in as the public domain', async () => {
    expect(siteConfig.url).toBe('https://erpvalley.in')
  })

  it.each([
    ['/', 'https://erpvalley.in/'],
    ['/products/crm', 'https://erpvalley.in/products/crm'],
    ['/pricing', 'https://erpvalley.in/pricing'],
  ])('%s gets a canonical URL on erpvalley.in', async (path, expected) => {
    window.history.replaceState(null, '', path)
    await renderAt(path)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(expected)
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(expected)
  })
})
