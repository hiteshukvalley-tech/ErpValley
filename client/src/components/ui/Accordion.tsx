import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'
import { cn } from '@/utils/cn'

export interface AccordionItem {
  q: string
  a: string
}

/** Accessible disclosure list (one panel open at a time). */
export function Accordion({ items, defaultOpen = 0 }: { items: AccordionItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen)
  const baseId = useId()

  return (
    <ul className="divide-y divide-line rounded-card border border-line bg-surface">
      {items.map((item, i) => {
        const isOpen = open === i
        const btnId = `${baseId}-btn-${i}`
        const panelId = `${baseId}-panel-${i}`
        return (
          <li key={item.q}>
            <h3 className="font-sans">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-fg transition-colors hover:text-link sm:px-6"
              >
                {item.q}
                <ChevronDown
                  className={cn('size-5 shrink-0 text-fg-muted transition-transform duration-200', isOpen && 'rotate-180 text-link')}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-5 leading-relaxed text-fg-muted sm:px-6"
            >
              {item.a}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
