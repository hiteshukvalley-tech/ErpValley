import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export function Badge({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-link',
        className,
      )}
    >
      {children}
    </span>
  )
}
