import type { LucideIcon } from 'lucide-react'
import { useLoaderData } from 'react-router-dom'
import type { CaseStudyContent, IndustryContent, PostContent, ProductContent, ServiceContent } from '@/content/types'
import { fetchApi } from './api'

/*
 * Content for products, industries, services, articles and case studies.
 * Pages read it through route loaders: each collection is fetched from the API once per visit and cached.
 * If the API cannot be reached, the copy bundled with the website is used instead, so the site always works.
 */

export interface Collections {
  products: ProductContent[]
  industries: IndustryContent[]
  services: ServiceContent[]
  posts: PostContent[]
  caseStudies: CaseStudyContent[]
}

export type CollectionName = keyof Collections

const endpoints: Record<CollectionName, string> = {
  products: '/products',
  industries: '/industries',
  services: '/services',
  posts: '/posts',
  caseStudies: '/case-studies',
}

const bundled: { [K in CollectionName]: () => Promise<Collections[K]> } = {
  products: () => import('@/content/products').then((m) => m.products),
  industries: () => import('@/content/industries').then((m) => m.industries),
  services: () => import('@/content/services').then((m) => m.services),
  posts: () => import('@/content/posts').then((m) => m.posts),
  caseStudies: () => import('@/content/caseStudies').then((m) => m.caseStudies),
}

/**
 * Turns Lucide icon names (anywhere under an `icon` key) back into icon components from `icons`
 * (content/icons.ts). Names that are not listed get the Layers icon.
 */
export function reviveIcons<T>(value: unknown, icons: Record<string, LucideIcon>): T {
  const revive = (v: unknown): unknown => {
    if (Array.isArray(v)) return v.map(revive)
    if (v && typeof v === 'object') {
      return Object.fromEntries(
        Object.entries(v).map(([key, x]) => [key, key === 'icon' && typeof x === 'string' ? (icons[x] ?? icons.Layers) : revive(x)]),
      )
    }
    return v
  }
  return revive(value) as T
}

const cache = new Map<CollectionName, Promise<unknown>>()

async function fetchCollection<K extends CollectionName>(name: K): Promise<Collections[K]> {
  try {
    const body = await fetchApi<{ data?: unknown }>(endpoints[name])
    if (!Array.isArray(body.data)) throw new Error(`Unexpected response from ${endpoints[name]}`)
    // Loaded on demand, so the icon list is only downloaded when the API is in use.
    const { contentIcons } = await import('@/content/icons')
    return reviveIcons<Collections[K]>(body.data, contentIcons)
  } catch {
    return bundled[name]()
  }
}

/** Loads one collection, from the API when available, otherwise from the bundled content. */
export function loadCollection<K extends CollectionName>(name: K): Promise<Collections[K]> {
  if (!cache.has(name)) cache.set(name, fetchCollection(name))
  return cache.get(name) as Promise<Collections[K]>
}

/** Forgets loaded content (used by tests). */
export function clearContentCache() {
  cache.clear()
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
