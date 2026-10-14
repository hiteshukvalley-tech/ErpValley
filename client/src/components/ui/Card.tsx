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
        interactive && 'transition duration-200 hover:-translate-y-0.5 hover:border-link/50 hover:shadow-pop',
        className,
      )}
    >
      {children}
    </div>
  )
}
