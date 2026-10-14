import { industries } from '@/content/industries'
import { posts } from '@/content/posts'
import { products } from '@/content/products'
import { services } from '@/content/services'
import { joinText as join, matchDocs, pageDocs, type SearchDoc } from './search'

/** Client-side index of the bundled content, used when the API search is unavailable. */
export const searchIndex: SearchDoc[] = [
  ...products.map((p) => ({
    to: `/products/${p.slug}`,
    title: p.name,
    summary: p.summary,
    group: 'Products' as const,
    text: join(p.headline, p.summary, p.purpose, p.features.map((f) => `${f.title} ${f.text}`), p.capabilityGroups.flatMap((g) => g.items)),
  })),
  ...industries.map((i) => ({
    to: `/industries/${i.slug}`,
    title: `ERP for ${i.name}`,
    summary: i.summary,
    group: 'Industries' as const,
    text: join(i.headline, i.summary, i.overview, i.challenges.map((c) => `${c.title} ${c.text}`)),
  })),
  ...services.map((s) => ({
    to: `/services/${s.slug}`,
    title: s.name,
    summary: s.summary,
    group: 'Services' as const,
    text: join(s.headline, s.summary, s.capabilities.map((c) => `${c.title} ${c.text}`), s.technologies),
  })),
  ...posts.map((p) => ({
    to: `/blog/${p.slug}`,
    title: p.title,
    summary: p.excerpt,
    group: 'Articles' as const,
    text: join(p.excerpt, p.tags, p.category, p.body.map((b) => (b.type === 'ul' ? b.items.join(' ') : b.text))),
  })),
  ...pageDocs,
]

export const search = (query: string, limit = 50) => matchDocs(searchIndex, query, limit)
