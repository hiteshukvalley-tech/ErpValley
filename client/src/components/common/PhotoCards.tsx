import { ArrowRight, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Photo } from '@/components/ui/Photo'
import { Reveal } from '@/components/ui/Reveal'
import type { PhotoAsset } from '@/content/photos'
import { fillLastRowSm } from '@/utils/grid'

export interface PhotoCardItem {
  to: string
  title: string
  text: string
  icon: LucideIcon
  photo: PhotoAsset
}

/**
 * Grid of linked cards with a photo header, for overview pages (industries, services).
 * `extra` renders one more card at the end (e.g. a call to action), so a short last row is filled.
 */
export function PhotoCards({ items, cta = 'Learn more', extra }: { items: PhotoCardItem[]; cta?: string; extra?: ReactNode }) {
  return (
    <ul className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${fillLastRowSm}`}>
      {items.map((item, i) => (
        <li key={item.to}>
          <Reveal delay={(i % 3) * 60} className="h-full">
            <Link
              to={item.to}
              className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-card card-link"
            >
              <span className="relative block aspect-[16/10] overflow-hidden">
                <Photo
                  photo={item.photo}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  decorative
                  className="card-photo"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent" aria-hidden />
                <span className="absolute bottom-3 left-3 inline-flex size-10 items-center justify-center rounded-lg bg-primary text-white shadow-pop">
                  <item.icon className="size-5" aria-hidden />
                </span>
              </span>
              <span className="flex flex-1 flex-col p-6">
                <span className="font-display text-lg font-bold text-fg group-hover:text-link">{item.title}</span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{item.text}</span>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-link">
                  {cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
      {extra && <li>{extra}</li>}
    </ul>
  )
}
