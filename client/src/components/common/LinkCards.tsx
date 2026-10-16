import { ArrowUpRight, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/utils/cn'
import { fillLastRowSm } from '@/utils/grid'

export interface LinkCardItem {
  to: string
  title: string
  text: string
  icon: LucideIcon
}

/** Grid of linked cards for related modules, services and industries. */
export function LinkCards({ items, columns = 3 }: { items: LinkCardItem[]; columns?: 2 | 3 | 4 }) {
  const cols = { 2: 'sm:grid-cols-2', 3: `sm:grid-cols-2 lg:grid-cols-3 ${fillLastRowSm}`, 4: 'sm:grid-cols-2 lg:grid-cols-4' }[columns]
  return (
    <ul className={cn('grid gap-4', cols)}>
      {items.map((item, i) => (
        <li key={item.to}>
          <Reveal delay={(i % columns) * 60} className="h-full">
            <Link
              to={item.to}
              className="group flex h-full gap-4 rounded-card border border-line bg-surface p-5 shadow-card card-link"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg card-icon bg-primary-soft text-link">
                <item.icon className="size-5" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-start justify-between gap-2">
                  <span className="font-display font-bold text-fg">{item.title}</span>
                  <ArrowUpRight className="size-4 shrink-0 text-fg-muted transition-colors group-hover:text-link" aria-hidden />
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-fg-muted">{item.text}</span>
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
