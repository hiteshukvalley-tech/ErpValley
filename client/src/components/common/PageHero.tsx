import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
  children?: ReactNode
}

/** Standard dark hero used at the top of inner pages. */
export function PageHero({ eyebrow, title, description, actions, children }: PageHeroProps) {
  return (
    <section className="bg-hero text-white">
      <Container className="py-16 sm:py-20 lg:py-24">
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
