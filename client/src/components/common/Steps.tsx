import { Reveal } from '@/components/ui/Reveal'
import type { TextItem } from '@/content/types'
import { cn } from '@/utils/cn'

/**
 * Numbered process/workflow steps. Horizontal with a connector line on large screens,
 * vertical timeline on small screens.
 */
export function Steps({ steps, onDark, ringClass = 'ring-bg' }: { steps: TextItem[]; onDark?: boolean; ringClass?: string }) {
  const cols = steps.length >= 5 ? 'lg:grid-cols-5' : steps.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
  return (
    <ol className={cn('relative grid gap-6', cols)}>
      <span
        className={cn('absolute left-5 top-5 hidden h-px lg:block', onDark ? 'bg-line-dark' : 'bg-line')}
        style={{ right: `calc(100% / ${steps.length} - 1.25rem)` }}
        aria-hidden
      />
      {steps.map((step, i) => (
        <li key={step.title} className="relative flex gap-4 lg:block">
          {i < steps.length - 1 && (
            <span
              className={cn('absolute bottom-[-1.5rem] left-5 top-10 w-px lg:hidden', onDark ? 'bg-line-dark' : 'bg-line')}
              aria-hidden
            />
          )}
          <Reveal delay={i * 70} className="contents lg:block">
            <span className={cn('relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-white ring-4', ringClass)}>
              {i + 1}
            </span>
            <div className="lg:mt-5">
              <h3 className={cn('text-base font-bold', onDark && 'text-white')}>{step.title}</h3>
              <p className={cn('mt-1.5 text-sm leading-relaxed', onDark ? 'text-mist' : 'text-fg-muted')}>{step.text}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
