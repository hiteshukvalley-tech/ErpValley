import { useLoaderData } from 'react-router-dom'
import type { CaseStudyContent, IndustryContent, PostContent, ProductContent, ServiceContent } from '@/content/types'

/*
 * Content for products, industries, services, articles and case studies, from the files in src/content.
 * Pages read it through route loaders, so each large content file is downloaded only when a page needs it.
 */

export interface Collections {
  products: ProductContent[]
  industries: IndustryContent[]
  services: ServiceContent[]
  posts: PostContent[]
  caseStudies: CaseStudyContent[]
}

export type CollectionName = keyof Collections

const sources: { [K in CollectionName]: () => Promise<Collections[K]> } = {
  products: () => import('@/content/products').then((m) => m.products),
  industries: () => import('@/content/industries').then((m) => m.industries),
  services: () => import('@/content/services').then((m) => m.services),
  posts: () => import('@/content/posts').then((m) => m.posts),
  caseStudies: () => import('@/content/caseStudies').then((m) => m.caseStudies),
}

/** Loads one collection (the module is cached by the bundler after the first load). */
export function loadCollection<K extends CollectionName>(name: K): Promise<Collections[K]> {
  return sources[name]()
}

/** Route loader that provides the named collections to the page. */
export const contentLoader =
  <K extends CollectionName>(...names: K[]) =>
  async (): Promise<Pick<Collections, K>> =>
    Object.fromEntries(await Promise.all(names.map(async (n) => [n, await loadCollection(n)]))) as Pick<Collections, K>

/** Reads the collections provided by `contentLoader` in the current route. */
export const useContent = <K extends CollectionName>() => useLoaderData() as Pick<Collections, K>

const indexes = new WeakMap<object, Map<string, unknown>>()

/** Slug lookup for a collection, built once per loaded list. */
export function bySlug<T extends { slug: string }>(items: T[]): Map<string, T> {
  let index = indexes.get(items)
  if (!index) indexes.set(items, (index = new Map(items.map((i) => [i.slug, i]))))
  return index as Map<string, T>
}
