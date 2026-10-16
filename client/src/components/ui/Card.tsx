import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface CardProps {
  className?: string
  interactive?: boolean
  children: ReactNode
}

export function Card({ className, interactive, children }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card border border-line bg-surface p-6 shadow-card',
        // Plain cards are containers (forms, notices) and stay still; interactive ones use the shared link hover.
        interactive && 'card-link',
        className,
      )}
    >
      {children}
    </div>
  )
}
