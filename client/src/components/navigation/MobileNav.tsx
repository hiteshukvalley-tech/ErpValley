import { ChevronDown, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '@/components/common/Logo'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { mainNav } from '@/config/navigation'
import { cn } from '@/utils/cn'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      // Keep Tab focus inside the drawer while it is open.
      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
      <div className="absolute inset-0 bg-midnight/60" onClick={onClose} aria-hidden />
      <div
        ref={panelRef}
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-bg shadow-pop"
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-line px-4">
          <Logo />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-fg"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-2 py-3">
          <ul>
            {mainNav.map((menu) => {
              const isOpen = expanded === menu.label
              const items = menu.groups.flatMap((g) => g.items)
              return (
                <li key={menu.label} className="border-b border-line last:border-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setExpanded(isOpen ? null : menu.label)}
                    className="flex w-full items-center justify-between px-3 py-3.5 text-left text-base font-semibold text-fg"
                  >
                    {menu.label}
                    <ChevronDown className={cn('size-5 text-fg-muted transition-transform', isOpen && 'rotate-180')} aria-hidden />
                  </button>
                  {isOpen && (
                    <ul className="pb-3">
                      {items.map((item) => (
                        <li key={item.to + item.label}>
                          <Link
                            to={item.to}
                            onClick={onClose}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-fg-muted hover:bg-bg-alt hover:text-fg"
                          >
                            <item.icon className="size-4 shrink-0 text-link" aria-hidden />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                      {menu.to && (
                        <li>
                          <Link to={menu.to} onClick={onClose} className="block px-3 py-2.5 text-sm font-semibold text-link">
                            View all {menu.label.toLowerCase()}
                          </Link>
                        </li>
                      )}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="grid shrink-0 gap-2 border-t border-line p-4">
          <Button to="/book-demo" onClick={onClose} size="lg">
            Book a Demo
          </Button>
          <Button to="/login" onClick={onClose} variant="secondary" size="lg">
            Log in
          </Button>
        </div>
      </div>
    </div>
  )
}
