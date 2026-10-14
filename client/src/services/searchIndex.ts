import { pageRegistry } from '@/config/navigation'
import { industries } from '@/content/industries'
import { posts } from '@/content/posts'
import { products } from '@/content/products'
import { services } from '@/content/services'

export type SearchGroup = 'Products' | 'Industries' | 'Services' | 'Articles' | 'Pages'

export interface SearchDoc {
  to: string
  title: string
  summary: string
  group: SearchGroup
  /** Lower-cased text used for matching (title weighted separately). */
  text: string
}

const join = (...parts: (string | string[])[]) => parts.flat().join(' ').toLowerCase()

/** Client-side index of public content. Replaced by the API search endpoint in Step 5. */
export const searchIndex: SearchDoc[] = (() => {
  const docs: SearchDoc[] = [
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
  ]
  const covered = new Set(docs.map((d) => d.to))
  for (const [to, item] of pageRegistry) {
    if (covered.has(to) || to.startsWith('/products/') || to.startsWith('/industries/') || to.startsWith('/services/')) continue
    docs.push({ to, title: item.label, summary: item.description, group: 'Pages', text: join(item.description) })
  }
  return docs
})()

/** Every query term must appear; title matches rank higher. */
export function search(query: string, limit = 50): SearchDoc[] {
  const terms = query.toLowerCase().split(/\s+/).filter((t) => t.length > 1)
  if (!terms.length) return []
  return searchIndex
    .map((doc) => {
      const title = doc.title.toLowerCase()
      let score = 0
      for (const t of terms) {
        const inTitle = title.includes(t)
        if (!inTitle && !doc.text.includes(t)) return null
        score += inTitle ? 5 : 1
      }
      return { doc, score }
    })
    .filter((r): r is { doc: SearchDoc; score: number } => r !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.doc)
}
