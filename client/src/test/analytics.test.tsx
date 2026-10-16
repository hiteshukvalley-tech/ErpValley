import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { resolveGtmId } from '@/config/gtm'
import { ATTRIBUTION_COOKIE, captureAttribution, getAttribution, safeUrl, trackEvent } from '@/services/analytics'
import { renderAt, settled } from './utils'

const events = (name: string) => (window.dataLayer ?? []).filter((e) => e.event === name)

/** Simulates a full page load at `url`, arriving from `referrer`. */
function loadPage(url: string, referrer = '') {
  window.history.replaceState(null, '', url)
  Object.defineProperty(document, 'referrer', { value: referrer, configurable: true })
  captureAttribution()
}

beforeEach(() => {
  vi.stubEnv('VITE_GTM_ID', 'GTM-TEST123')
  delete window.dataLayer
  document.cookie = `${ATTRIBUTION_COOKIE}=; Max-Age=0; Path=/`
})

afterEach(() => {
  vi.unstubAllEnvs()
  window.history.replaceState(null, '', '/')
})

describe('GTM configuration', () => {
  it.each([
    ['GTM-ABC1234', undefined, 'GTM-ABC1234'],
    [' gtm-abc1234 ', 'true', 'GTM-ABC1234'],
    ['GTM-ABC1234', 'false', ''],
    ['GTM-ABC1234', '0', ''],
    ['', 'true', ''],
    [undefined, undefined, ''],
    ["GTM-X');alert(1)//", undefined, ''],
  ])('id %j, enabled %j → %j', (id, enabled, expected) => {
    expect(resolveGtmId(id, enabled)).toBe(expected)
  })

  it('does nothing when no container ID is set', () => {
    vi.stubEnv('VITE_GTM_ID', '')
    loadPage('/?utm_source=google')
    trackEvent('anything')
    expect(window.dataLayer).toBeUndefined()
    expect(document.cookie).not.toContain(ATTRIBUTION_COOKIE)
  })

  it('does nothing when tracking is switched off', () => {
    vi.stubEnv('VITE_GTM_ENABLED', 'false')
    loadPage('/?utm_source=google')
    expect(window.dataLayer).toBeUndefined()
    expect(document.cookie).not.toContain(ATTRIBUTION_COOKIE)
  })
})

describe('UTM and attribution capture', () => {
  it('stores campaign parameters and the referrer, and pushes utm_captured', () => {
    loadPage('/products/crm?utm_source=google&utm_medium=cpc&utm_campaign=erp&utm_term=crm&utm_content=ad1&gclid=abc&fbclid=xyz', 'https://www.google.com/search?q=erp')
    const expected = {
      utm_source: 'google',
      utm_medium: 'cpc',
      utm_campaign: 'erp',
      utm_term: 'crm',
      utm_content: 'ad1',
      gclid: 'abc',
      fbclid: 'xyz',
      referrer: 'https://www.google.com/search?q=erp',
    }
    expect(getAttribution()).toMatchObject(expected)
    expect(getAttribution().landing_page).toContain('/products/crm?utm_source=google')
    expect(events('utm_captured')).toEqual([expect.objectContaining({ event: 'utm_captured', ...expected })])
    expect(document.cookie).toContain(ATTRIBUTION_COOKIE)
  })

  it('keeps the first touch on later visits without campaign parameters', () => {
    loadPage('/?utm_source=newsletter&utm_campaign=october')
    loadPage('/pricing', 'https://example.org/')
    expect(getAttribution()).toMatchObject({ utm_source: 'newsletter', utm_campaign: 'october', referrer: '' })
    expect(events('utm_captured')).toHaveLength(2)
    expect(events('utm_captured')[1]).toMatchObject({ utm_source: 'newsletter' })
  })

  it('replaces the stored values when a new campaign link is used', () => {
    loadPage('/?utm_source=newsletter&utm_campaign=october')
    loadPage('/?utm_source=linkedin&utm_medium=social')
    expect(getAttribution()).toMatchObject({ utm_source: 'linkedin', utm_medium: 'social', utm_campaign: '' })
  })

  it('records a direct visit once, and ignores same-site referrers', () => {
    loadPage('/about', `${window.location.origin}/`)
    expect(getAttribution()).toMatchObject({ utm_source: '', referrer: '' })
    expect(getAttribution().landing_page).toContain('/about')
  })

  it('removes personal data from URLs', () => {
    expect(safeUrl('/newsletter?email=a%40b.com&utm_source=x')).toBe(`${window.location.origin}/newsletter?utm_source=x`)
  })
})

describe('dataLayer events', () => {
  it('pushes a page_view on the first render and on every route change', async () => {
    const user = userEvent.setup()
    const router = await renderAt('/')
    expect(events('page_view')).toHaveLength(1)
    await user.click(screen.getAllByRole('link', { name: /Explore Solutions/ })[0])
    await settled(router)
    const views = events('page_view')
    expect(views).toHaveLength(2)
    expect(views[1]).toMatchObject({ event: 'page_view', page_title: expect.stringContaining('ERP Products') })
  })

  it('pushes form_submit with attribution but no personal data after a lead form is sent', async () => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', 'test-access-key')
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ success: true }), { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)
    loadPage('/contact?utm_source=google&utm_campaign=erp')

    const user = userEvent.setup()
    await renderAt('/contact')
    await user.type(screen.getByLabelText(/Full name/), 'Asha Rao')
    await user.type(screen.getByLabelText(/Work email/), 'asha@example.com')
    await user.type(screen.getByLabelText(/^Phone/), '+91 98765 43210')
    await user.selectOptions(screen.getByLabelText(/What is this about/), 'Sales')
    await user.click(screen.getByLabelText(/^Message/))
    await user.paste('We would like to know more about the CRM module.')
    await user.click(screen.getByRole('checkbox', { name: /privacy policy/ }))
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    await screen.findByRole('heading', { name: 'Thank you, Asha' })

    const [submit] = events('form_submit')
    expect(submit).toMatchObject({ form_name: 'Contact message', page_path: '/contact', utm_source: 'google', utm_campaign: 'erp' })
    const pushed = JSON.stringify(window.dataLayer)
    for (const pii of ['asha@example.com', 'Asha Rao', '98765']) expect(pushed).not.toContain(pii)

    // The enquiry email shows where the lead came from.
    const body = JSON.parse(String((fetchMock.mock.calls[0] as unknown as [string, RequestInit])[1].body))
    expect(body).toMatchObject({ 'UTM source': 'google', 'UTM campaign': 'erp' })
  })

  it('does not count failed submissions', async () => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', '')
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    const user = userEvent.setup()
    await renderAt('/newsletter')
    await user.type(screen.getByLabelText('Business email'), 'ops@example.com')
    await user.click(screen.getByRole('checkbox', { name: /receive ERPVALLEY emails/ }))
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    await screen.findByRole('alert')
    expect(events('form_submit')).toEqual([])
  })
})
