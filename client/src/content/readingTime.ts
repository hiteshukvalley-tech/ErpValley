import type { PostContent } from './types'

/** Estimated reading time at 220 words per minute. */
export const readingMinutes = (p: PostContent) =>
  Math.max(1, Math.round(p.body.reduce((n, b) => n + (b.type === 'ul' ? b.items.join(' ') : b.text).split(/\s+/).length, 0) / 220))
