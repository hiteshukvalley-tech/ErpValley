import type { Model } from 'mongoose'
import { CaseStudy, Industry, Post, Product, Service, SiteSetting } from '../models/index.js'

type Doc = Record<string, unknown> & { slug: string }

export interface SeedContent {
  products: Doc[]
  industries: Doc[]
  services: Doc[]
  posts: Doc[]
  caseStudies: Doc[]
  site: { name: string; tagline: string; url: string; contact: Record<string, string>; social: Record<string, string> }
}

export interface SeedReport {
  [collection: string]: { upserted: number; updated: number }
}

/**
 * Upserts content by slug. Running it again updates existing documents from the source and
 * never deletes anything, so documents created later (e.g. in an admin panel) are kept.
 * Array order becomes the `order` field, matching the website navigation.
 */
async function upsertBySlug(model: Model<any>, docs: Doc[], extra: (doc: Doc, i: number) => Record<string, unknown>) {
  if (!docs.length) return { upserted: 0, updated: 0 }
  const result = await model.bulkWrite(
    docs.map((doc, i) => ({
      replaceOne: { filter: { slug: doc.slug }, replacement: { ...doc, ...extra(doc, i) }, upsert: true },
    })),
  )
  return { upserted: result.upsertedCount, updated: result.modifiedCount }
}

export async function seedDatabase(content: SeedContent): Promise<SeedReport> {
  // Build indexes first (including text search indexes), since production disables autoIndex.
  await Promise.all([Product, Industry, Service, Post, CaseStudy, SiteSetting].map((m) => m.createIndexes()))

  const report: SeedReport = {
    products: await upsertBySlug(Product, content.products, (_d, i) => ({ order: i })),
    industries: await upsertBySlug(Industry, content.industries, (_d, i) => ({ order: i })),
    services: await upsertBySlug(Service, content.services, (_d, i) => ({ order: i })),
    posts: await upsertBySlug(Post, content.posts, () => ({})),
    // Case studies in the client content are already client-approved, so they are published.
    caseStudies: await upsertBySlug(CaseStudy, content.caseStudies, (_d, i) => ({ order: i, published: true })),
  }

  // Site settings are created once and then left alone, so later edits are not overwritten.
  const site = await SiteSetting.updateOne({ key: 'site' }, { $setOnInsert: { key: 'site', ...content.site } }, { upsert: true })
  report.settings = { upserted: site.upsertedCount, updated: 0 }

  return report
}
