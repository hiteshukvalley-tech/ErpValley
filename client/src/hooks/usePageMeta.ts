import { useEffect } from 'react'
import { siteConfig } from '@/config/site'

const SITE = 'ERPVALLEY'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.content = content
}

/**
 * Sets the title, description, canonical URL and basic Open Graph tags for the current page.
 * Canonical URLs always point at the public domain (siteConfig.url), never localhost.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const fullTitle = title.includes(SITE) ? title : `${title} | ${SITE}`
    document.title = fullTitle

    const path = window.location.pathname.replace(/\/+$/, '') || '/'
    const canonical = `${siteConfig.url}${path === '/' ? '/' : path}`
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical

    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:url', canonical)
    if (description) {
      upsertMeta('name', 'description', description)
      upsertMeta('property', 'og:description', description)
    }
  }, [title, description])
}
