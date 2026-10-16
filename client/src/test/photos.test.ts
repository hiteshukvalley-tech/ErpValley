import { describe, expect, it } from 'vitest'
import { challengePhotos, industryPhotos, photos, productStories, servicePhotos, type PhotoAsset } from '@/content/photos'
import { challenges } from '@/content/home'

/** File names in public/images/photos (the glob only lists paths; nothing is loaded). */
const files = new Set(Object.keys(import.meta.glob('../../public/images/photos/*.webp')).map((p) => p.split('/').pop()!))

const used: PhotoAsset[] = [
  ...Object.values(photos),
  ...Object.values(industryPhotos),
  ...Object.values(productStories).map((s) => s.photo),
  ...Object.values(servicePhotos),
  ...challengePhotos,
]

describe('photos', () => {
  it.each(used.map((p) => [p.key, p]))('%s has both sizes on disk and alt text', (_key, photo) => {
    expect(files.has(`${photo.key}-800.webp`)).toBe(true)
    expect(files.has(`${photo.key}-1600.webp`)).toBe(true)
    expect(photo.alt.length).toBeGreaterThan(15)
  })

  it('has one photo per homepage challenge', () => {
    expect(challengePhotos).toHaveLength(challenges.length)
  })

  it('ships no unused photo files', () => {
    const keys = new Set(used.map((p) => p.key))
    const orphans = [...files]
      .map((f) => f.replace(/-(800|1600)\.webp$/, ''))
      .filter((k) => !keys.has(k))
    expect([...new Set(orphans)]).toEqual([])
  })
})
