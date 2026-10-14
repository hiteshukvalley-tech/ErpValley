import type { LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

export function IconBadge({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      className={cn('inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-link', className)}
    >
      <Icon className="size-5" aria-hidden />
    </span>
  )
}
