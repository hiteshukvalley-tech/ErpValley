import { cn } from '@/utils/cn'

/** Simple tag list for integrations, technologies and deliverables. */
export function Chips({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item) => (
        <li key={item} className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm font-medium text-fg shadow-card">
          {item}
        </li>
      ))}
    </ul>
  )
}
