import { Router } from 'express'
import type { Model } from 'mongoose'
import { z } from 'zod'
import { Industry, Post, Product, Service } from '../models/index.js'

export type SearchGroup = 'Products' | 'Industries' | 'Services' | 'Articles'

export interface SearchResult {
  to: string
  title: string
  summary: string
  group: SearchGroup
  score: number
}

const searchQuery = z.object({
  q: z.string().trim().max(100).default(''),
  limit: z.coerce.number().int().min(1).max(50).default(50),
})

/**
 * Builds a MongoDB $text search string where every term is required.
 * Each term is quoted, so "data migration" matches documents containing both words.
 */
export function toTextSearch(q: string) {
  const terms = q
    .toLowerCase()
    .replace(/["\\]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1)
  return terms.map((t) => `"${t}"`).join(' ')
}

interface Source {
  // `any`: each source queries a different model.
  model: Model<any>
  group: SearchGroup
  fields: string
  toResult: (doc: Record<string, string>) => Omit<SearchResult, 'group' | 'score'>
}

const sources: Source[] = [
  {
    model: Product,
    group: 'Products',
    fields: 'slug name summary',
    toResult: (d) => ({ to: `/products/${d.slug}`, title: d.name, summary: d.summary }),
  },
  {
    model: Industry,
    group: 'Industries',
    fields: 'slug name summary',
    toResult: (d) => ({ to: `/industries/${d.slug}`, title: `ERP for ${d.name}`, summary: d.summary }),
  },
  {
    model: Service,
    group: 'Services',
    fields: 'slug name summary',
    toResult: (d) => ({ to: `/services/${d.slug}`, title: d.name, summary: d.summary }),
  },
  {
    model: Post,
    group: 'Articles',
    fields: 'slug title excerpt',
    toResult: (d) => ({ to: `/blog/${d.slug}`, title: d.title, summary: d.excerpt }),
  },
]

export async function searchContent(q: string, limit = 50): Promise<SearchResult[]> {
  const text = toTextSearch(q)
  if (!text) return []
  const perSource = await Promise.all(
    sources.map(async ({ model, group, fields, toResult }) => {
      const docs = await model
        .find({ $text: { $search: text } }, { score: { $meta: 'textScore' } })
        .select(`${fields} -_id`)
        .sort({ score: { $meta: 'textScore' } })
        .limit(limit)
        .lean<(Record<string, string> & { score: number })[]>()
      return docs.map((d) => ({ ...toResult(d), group, score: d.score }))
    }),
  )
  return perSource
    .flat()
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

export const searchRouter = Router().get('/', async (req, res) => {
  const { q, limit } = searchQuery.parse(req.query)
  const data = await searchContent(q, limit)
  res.json({ query: q, data })
})
