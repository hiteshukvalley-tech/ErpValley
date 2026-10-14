import { Router } from 'express'
import type { Model } from 'mongoose'
import { z } from 'zod'
import { HttpError } from '../middleware/errors.js'
import { CaseStudy, Industry, Post, POST_CATEGORIES, POST_KINDS, Product, PUBLIC_EXCLUDE, Service } from '../models/index.js'

/*
 * Read-only public content API. Responses use the same shapes as client/src/content/types.ts,
 * except that icons are Lucide icon names (strings).
 */

const slugParam = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(120)

interface CollectionOptions {
  label: string
  sort: Record<string, 1 | -1>
  /** Extra conditions applied to every query (e.g. only published case studies). */
  baseFilter?: Record<string, unknown>
  /** Validated query-string filters for the list endpoint. */
  listFilter?: (query: unknown) => Record<string, unknown>
}

// `any`: each router serves a different model.
function collectionRouter(model: Model<any>, { label, sort, baseFilter = {}, listFilter }: CollectionOptions) {
  const router = Router()

  router.get('/', async (req, res) => {
    const filter = { ...baseFilter, ...listFilter?.(req.query) }
    const data = await model.find(filter).sort(sort).select(PUBLIC_EXCLUDE).lean()
    res.json({ data })
  })

  router.get('/:slug', async (req, res) => {
    const slug = slugParam.safeParse(req.params.slug)
    const doc = slug.success ? await model.findOne({ ...baseFilter, slug: slug.data }).select(PUBLIC_EXCLUDE).lean() : null
    if (!doc) throw new HttpError(404, `${label} not found`)
    res.json({ data: doc })
  })

  return router
}

const postQuery = z.object({
  category: z.enum(POST_CATEGORIES).optional(),
  kind: z.enum(POST_KINDS).optional(),
})

export const productsRouter = collectionRouter(Product, { label: 'Product', sort: { order: 1 } })
export const industriesRouter = collectionRouter(Industry, { label: 'Industry', sort: { order: 1 } })
export const servicesRouter = collectionRouter(Service, { label: 'Service', sort: { order: 1 } })
export const caseStudiesRouter = collectionRouter(CaseStudy, {
  label: 'Case study',
  sort: { order: 1 },
  baseFilter: { published: true },
})
export const postsRouter = collectionRouter(Post, {
  label: 'Article',
  sort: { publishedAt: -1, slug: 1 },
  listFilter: (query) => {
    const { category, kind } = postQuery.parse(query)
    return { ...(category && { category }), ...(kind && { kind }) }
  },
})
