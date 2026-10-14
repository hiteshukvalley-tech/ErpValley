import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { cn } from '@/utils/cn'
import { Breadcrumbs, type Crumb } from './Breadcrumbs'

interface DetailHeroProps {
  crumbs: Crumb[]
  eyebrow: string
  icon?: LucideIcon
  title: string
  description: string
  actions: ReactNode
  /** Optional visual shown beside the text on large screens. */
  visual?: ReactNode
  /** Short facts under the CTAs (e.g. typical users). */
  meta?: ReactNode
}

/** Two-column hero for product, industry and service detail pages. */
export function DetailHero({ crumbs, eyebrow, icon: Icon, title, description, actions, visual, meta }: DetailHeroProps) {
  return (
    <section className="bg-hero relative overflow-hidden text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden
      />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <Breadcrumbs items={crumbs} />
        <div className={cn('mt-8 grid items-center gap-12', visual && 'lg:grid-cols-[1fr_1.1fr]')}>
          <div className="max-w-2xl">
            <p className="eyebrow text-logo-blue">
              {Icon && (
                <span className="inline-flex size-7 items-center justify-center rounded-md bg-logo-blue/15">
                  <Icon className="size-4" aria-hidden />
                </span>
              )}
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">{title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-mist">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
            {meta && <div className="mt-8 text-sm text-mist">{meta}</div>}
          </div>
          {visual && <div className="min-w-0">{visual}</div>}
        </div>
      </Container>
    </section>
  )
}
