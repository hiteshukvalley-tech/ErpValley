import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import type { SeedContent } from '../seed/seedDatabase.js'

/*
 * Loads the website content from client/src/content so it can be seeded into MongoDB.
 * Runs under tsx (npm run seed), which can import the client's TypeScript files directly.
 * Requires the client dependencies to be installed (the content files import lucide-react).
 */

const CONTENT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '../../../client/src/content')

// The path is computed so TypeScript does not type-check the client files with the server's settings.
const load = (file: string) => import(pathToFileURL(resolve(CONTENT_DIR, file)).href)

/** Replaces Lucide icon components (anywhere under an `icon` key) with their names, e.g. "Factory". */
export function serializeIcons<T>(value: T): T {
  if (Array.isArray(value)) return value.map(serializeIcons) as T
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, v]) => [key, key === 'icon' ? iconName(v) : serializeIcons(v)]),
    ) as T
  }
  return value
}

function iconName(icon: unknown): string {
  const name = (icon as { displayName?: string } | null)?.displayName
  if (!name) throw new Error('Content has an icon without a displayName; is it a Lucide icon?')
  return name
}

/** Same defaults as client/src/config/site.ts. Empty values stay empty until they are confirmed. */
const defaultSite: SeedContent['site'] = {
  name: 'ERPVALLEY',
  tagline: 'ERP software and IT solutions that connect your whole business.',
  url: 'https://erpvalley.in',
  contact: { email: '', salesEmail: '', phone: '', address: '' },
  social: { linkedin: '', x: '', youtube: '' },
}

export async function loadClientContent(): Promise<SeedContent> {
  const [{ products }, { industries }, { services }, { posts }, { caseStudies }] = await Promise.all([
    load('products.ts'),
    load('industries.ts'),
    load('services.ts'),
    load('posts.ts'),
    load('caseStudies.ts'),
  ])
  return serializeIcons({ products, industries, services, posts, caseStudies, site: defaultSite })
}
