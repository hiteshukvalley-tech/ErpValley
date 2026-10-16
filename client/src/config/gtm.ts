/*
 * Google Tag Manager settings, shared by vite.config.ts (which injects the snippet into index.html at build time)
 * and services/analytics.ts (which pushes events to the dataLayer). Set VITE_GTM_ID in .env.local and in the
 * host's build settings; set VITE_GTM_ENABLED=false to switch tracking off for an environment.
 * No container ID is ever hardcoded: without a valid ID nothing is loaded and nothing is tracked.
 */

const GTM_ID = /^GTM-[A-Z0-9]{4,12}$/

/** The container ID to use, or '' when tracking is off or the ID is missing or malformed. */
export function resolveGtmId(id: string | undefined, enabled: string | undefined): string {
  if (/^(false|0|off|no)$/i.test(enabled?.trim() ?? '')) return ''
  const value = id?.trim().toUpperCase() ?? ''
  return GTM_ID.test(value) ? value : ''
}
