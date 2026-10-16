import { pageRegistry } from '@/config/navigation'

export type SearchGroup = 'Products' | 'Industries' | 'Services' | 'Articles' | 'Pages'

export interface SearchHit {
  to: string
  title: string
  summary: string
  group: SearchGroup
}

export interface SearchDoc extends SearchHit {
  /** Lower-cased text used for matching (title weighted separately). */
  text: string
}

export const joinText = (...parts: (string | string[])[]) => parts.flat().join(' ').toLowerCase()

/** Every query term must appear; title matches rank higher. */
export function matchDocs(docs: SearchDoc[], query: string, limit = 50): SearchHit[] {
  const terms = query.toLowerCase().split(/\s+/).filter((t) => t.length > 1)
  if (!terms.length) return []
  return docs
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
    .map(({ doc: { text: _text, ...hit } }) => hit)
}

/** Site pages from the navigation registry. Content pages (products, industries, …) are indexed separately. */
export const pageDocs: SearchDoc[] = [...pageRegistry]
  .filter(([to]) => !/^\/(products|industries|services|blog|case-studies)\//.test(to))
  .map(([to, item]) => ({ to, title: item.label, summary: item.description, group: 'Pages', text: joinText(item.description) }))

/** Searches the whole site in the browser. The index (all content) is loaded on the first search. */
export async function searchSite(query: string): Promise<SearchHit[]> {
  if (!query.trim()) return []
  const { search } = await import('./searchIndex')
  return search(query)
}

/** Route loader for /search?q= */
export async function searchLoader({ request }: { request: Request }) {
  const query = new URL(request.url).searchParams.get('q')?.trim() ?? ''
  return { results: await searchSite(query) }
}
