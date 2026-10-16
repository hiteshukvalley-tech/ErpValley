import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { Photo } from '@/components/ui/Photo'
import type { PhotoAsset } from '@/content/photos'

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
  children?: ReactNode
  /** Background photo, darkened on the text side so the copy stays readable. */
  image?: PhotoAsset
}

/** Standard dark hero used at the top of inner pages. */
export function PageHero({ eyebrow, title, description, actions, children, image }: PageHeroProps) {
  return (
    <section className="bg-hero relative overflow-hidden text-white">
      {image && (
        <div className="absolute inset-0" aria-hidden>
          <Photo photo={image} sizes="100vw" priority decorative />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/40" />
        </div>
      )}
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow text-logo-blue">{eyebrow}</p>}
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">{title}</h1>
          {description && <p className="mt-5 text-lg leading-relaxed text-mist">{description}</p>}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {children}
      </Container>
    </section>
  )
}
