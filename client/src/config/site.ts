/**
 * Business details shown in the footer and contact page.
 * Leave a value empty until it is confirmed — empty values are not rendered.
 * In Step 5+ these move to the SiteSetting collection and become editable in the admin panel.
 */
export const siteConfig: SiteConfig = {
  name: 'ERPVALLEY',
  tagline: 'ERP software and IT solutions that connect your whole business.',
  /** Public site address. Override per environment with VITE_SITE_URL (no trailing slash). */
  url: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/+$/, '') || 'https://erpvalley.in',
  contact: {
    email: '',
    salesEmail: '',
    phone: '',
    address: '',
  },
  social: {
    linkedin: '',
    x: '',
    youtube: '',
  },
}

interface SiteConfig {
  name: string
  tagline: string
  url: string
  contact: { email: string; salesEmail: string; phone: string; address: string }
  social: Record<'linkedin' | 'x' | 'youtube', string>
}
