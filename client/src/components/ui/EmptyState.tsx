import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  text: string
  actions?: ReactNode
  className?: string
}

export function EmptyState({ icon: Icon, title, text, actions, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-2xl flex-col items-center rounded-card border border-dashed border-line bg-surface px-6 py-12 text-center',
        className,
      )}
    >
      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary-soft text-link">
        <Icon className="size-6" aria-hidden />
      </span>
      <h2 className="mt-5 text-xl font-bold">{title}</h2>
      <p className="mt-2 max-w-md leading-relaxed text-fg-muted">{text}</p>
      {actions && <div className="mt-6 flex flex-wrap justify-center gap-3">{actions}</div>}
    </div>
  )
}
