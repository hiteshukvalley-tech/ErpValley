import { Reveal } from '@/components/ui/Reveal'
import type { IconItem } from '@/content/types'
import { cn } from '@/utils/cn'

interface IconGridProps {
  items: IconItem[]
  columns?: 2 | 3 | 4
  /** card: bordered cards; plain: icon + text without a card; accent: problem-style tinted icons. */
  variant?: 'card' | 'plain' | 'accent'
}

const colClass = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }

export function IconGrid({ items, columns = 3, variant = 'card' }: IconGridProps) {
  return (
    <ul className={cn('grid gap-5', colClass[columns])}>
      {items.map((item, i) => (
        <li key={item.title}>
          <Reveal delay={(i % columns) * 70} className="h-full">
            <div
              className={cn(
                'h-full',
                variant !== 'plain' && 'rounded-card border border-line bg-surface p-6 shadow-card',
                variant === 'plain' && 'flex gap-4',
              )}
            >
              <span
                className={cn(
                  'inline-flex size-11 shrink-0 items-center justify-center rounded-xl',
                  variant === 'accent' ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400' : 'bg-primary-soft text-link',
                )}
              >
                <item.icon className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className={cn('text-base font-bold', variant !== 'plain' && 'mt-4')}>{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{item.text}</p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
