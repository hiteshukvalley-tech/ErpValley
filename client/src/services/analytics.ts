import { resolveGtmId } from '@/config/gtm'

/*
 * Visitor tracking through Google Tag Manager. The site only pushes events to window.dataLayer; GA4, Meta Pixel
 * and any other tools are configured inside the GTM dashboard, never in this code.
 * Nothing here runs unless a GTM container ID is configured (config/gtm.ts).
 * Never push personal data (names, emails, phone numbers, messages) to the dataLayer.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export const gtmId = () =>
  resolveGtmId(import.meta.env.VITE_GTM_ID as string | undefined, import.meta.env.VITE_GTM_ENABLED as string | undefined)

export const trackingEnabled = () => gtmId() !== ''

/** Pushes one event to the GTM dataLayer. Does nothing when tracking is off. */
export function trackEvent(event: string, data: Record<string, unknown> = {}) {
  if (!trackingEnabled() || typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...data })
}

/* ---------- First-party attribution (UTM parameters, click IDs, referrer) ---------- */

const CAMPAIGN_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'] as const

export type Attribution = Record<(typeof CAMPAIGN_PARAMS)[number] | 'referrer' | 'landing_page' | 'captured_at', string>

export const ATTRIBUTION_COOKIE = 'ev_attribution'
const MAX_AGE = 30 * 24 * 60 * 60 // 30 days, in seconds
const MAX_LENGTH = 200

/** Query parameters that can carry personal data; they are removed before a URL is sent to the dataLayer. */
const PII_PARAMS = ['email', 'e', 'phone', 'tel', 'name']

/** Same URL without personal-data query parameters. */
export function safeUrl(url: string): string {
  try {
    const u = new URL(url, window.location.origin)
    for (const p of PII_PARAMS) u.searchParams.delete(p)
    return u.href
  } catch {
    return ''
  }
}

const clip = (v: string | null | undefined) => (v ?? '').trim().slice(0, MAX_LENGTH)

function readCookie(): Attribution | null {
  const raw = document.cookie.split('; ').find((c) => c.startsWith(`${ATTRIBUTION_COOKIE}=`))
  if (!raw) return null
  try {
    const value = JSON.parse(decodeURIComponent(raw.slice(ATTRIBUTION_COOKIE.length + 1)))
    return value && typeof value === 'object' ? (value as Attribution) : null
  } catch {
    return null
  }
}

function writeCookie(value: Attribution) {
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${ATTRIBUTION_COOKIE}=${encodeURIComponent(JSON.stringify(value))}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax${secure}`
}

/** The external page the visitor came from, or '' (internal navigation and direct visits have none). */
function externalReferrer() {
  try {
    const ref = document.referrer && new URL(document.referrer)
    return ref && ref.origin !== window.location.origin ? safeUrl(ref.href) : ''
  } catch {
    return ''
  }
}

/** Stored attribution for the current visitor (empty values when there is none or tracking is off). */
export function getAttribution(): Attribution {
  const stored = trackingEnabled() ? readCookie() : null
  const empty = Object.fromEntries([...CAMPAIGN_PARAMS, 'referrer', 'landing_page', 'captured_at'].map((k) => [k, ''])) as Attribution
  if (!stored) return empty
  return Object.fromEntries(Object.keys(empty).map((k) => [k, clip(String(stored[k as keyof Attribution] ?? ''))])) as Attribution
}

/**
 * Runs once per full page load. Keeps the first touch for 30 days, and replaces it only when the URL carries
 * new campaign parameters (a new ad click or campaign link). Then pushes the stored values as "utm_captured".
 */
export function captureAttribution() {
  if (!trackingEnabled() || typeof document === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const fromUrl = Object.fromEntries(CAMPAIGN_PARAMS.map((p) => [p, clip(params.get(p))]))
  const hasCampaign = Object.values(fromUrl).some(Boolean)

  if (hasCampaign || !readCookie()) {
    writeCookie({
      ...(fromUrl as Record<(typeof CAMPAIGN_PARAMS)[number], string>),
      referrer: clip(externalReferrer()),
      landing_page: clip(safeUrl(window.location.pathname + window.location.search)),
      captured_at: new Date().toISOString(),
    })
  }
  trackEvent('utm_captured', getAttribution())
}

/* ---------- Standard events ---------- */

let lastPageView = ''

/**
 * Virtual page view for the single-page app, sent by usePageMeta once a page has set its title, so it fires on
 * the first load and on every route change. Repeats for the same path and query (React StrictMode, #anchor jumps,
 * title updates) are ignored.
 */
export function trackPageView(path: string, title: string) {
  const location = safeUrl(path)
  const page = location ? location.slice(new URL(location).origin.length) : ''
  if (page === lastPageView) return
  lastPageView = page
  trackEvent('page_view', { page_path: page, page_location: location, page_title: title })
}

/** A lead, quote, demo or newsletter form was sent successfully. Only the form name and attribution, no PII. */
export function trackFormSubmit(formName: string) {
  trackEvent('form_submit', { form_name: formName, page_path: window.location.pathname, ...getAttribution() })
}

/** Attribution as labelled fields for the lead email, so the team can see where each enquiry came from. */
export function attributionEmailFields(): Record<string, string> {
  const a = getAttribution()
  return {
    'UTM source': a.utm_source,
    'UTM medium': a.utm_medium,
    'UTM campaign': a.utm_campaign,
    'UTM term': a.utm_term,
    'UTM content': a.utm_content,
    'Google click ID': a.gclid,
    'Facebook click ID': a.fbclid,
    'First referrer': a.referrer,
    'Landing page': a.landing_page,
  }
}
