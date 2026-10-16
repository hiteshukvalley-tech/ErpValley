import type { PhotoAsset } from '@/content/photos'
import { cn } from '@/utils/cn'

interface PhotoProps {
  photo: PhotoAsset
  /** CSS `sizes` hint so the browser picks the 800 or 1600 px file. */
  sizes?: string
  /** Above-the-fold photos load immediately; everything else loads lazily. */
  priority?: boolean
  /** Decorative photos (text on the page already says the same thing) are hidden from screen readers. */
  decorative?: boolean
  className?: string
}

const src = (key: string, w: 800 | 1600) => `/images/photos/${key}-${w}.webp`

/**
 * Responsive photo from public/images/photos. Fills its container (object-cover); give the container
 * an aspect ratio or a height. A neutral background shows while the image loads, so layout never shifts.
 */
export function Photo({ photo, sizes = '(min-width: 1024px) 50vw, 100vw', priority, decorative, className }: PhotoProps) {
  return (
    <img
      src={src(photo.key, 800)}
      srcSet={`${src(photo.key, 800)} 800w, ${src(photo.key, 1600)} 1600w`}
      sizes={sizes}
      width={1600}
      height={1066}
      alt={decorative ? '' : photo.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : undefined}
      className={cn('size-full bg-bg-alt object-cover', className)}
    />
  )
}
