import { ArrowRight, ChevronDown, Menu } from 'lucide-react'
import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '@/components/common/Logo'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { activeMenuIndex, mainNav } from '@/config/navigation'
import { cn } from '@/utils/cn'
import { MegaMenuPanel } from './MegaMenu'
import { MobileNav } from './MobileNav'

export function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])
  const closeTimer = useRef<number | undefined>(undefined)
  // Tracks whether the open menu came from hover, so the follow-up click doesn't close it.
  const openedByHover = useRef(false)
  const location = useLocation()

  // Close menus whenever the route changes (state adjusted during render, no effect needed).
  const [lastPath, setLastPath] = useState(location.pathname)
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname)
    setOpenIndex(null)
    setMobileOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape and outside clicks close the open dropdown.
  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        triggerRefs.current[openIndex]?.focus()
        setOpenIndex(null)
      }
    }
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenIndex(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [openIndex])

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  // Hover opens menus for mouse users only; touch and keyboard use click/Enter.
  const hoverOpen = (i: number) => (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    window.clearTimeout(closeTimer.current)
    if (openIndex !== i) openedByHover.current = true
    setOpenIndex(i)
  }
  const onTriggerClick = (i: number) => {
    if (openIndex === i && openedByHover.current) {
      openedByHover.current = false
      return
    }
    openedByHover.current = false
    setOpenIndex(openIndex === i ? null : i)
  }
  const hoverClose = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), 150)
  }
  const cancelClose = () => window.clearTimeout(closeTimer.current)

  const openMenu = openIndex !== null ? mainNav[openIndex] : null
  // The menu for the section the visitor is in gets a permanent underline ("you are here").
  const currentIndex = activeMenuIndex(location.pathname)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-bg/90 backdrop-blur-md transition-[border-color,box-shadow] duration-300 supports-[backdrop-filter]:bg-bg/80',
        scrolled || openMenu ? 'border-line shadow-[0_6px_24px_-12px_rgb(7_19_47/0.25)]' : 'border-transparent',
      )}
    >
      {/* Thin brand line along the top edge. */}
      <div className="h-0.5 bg-gradient-to-r from-electric via-logo-blue to-electric" aria-hidden />
      {/* The bar slims down once the page is scrolled. */}
      <Container className={cn('flex items-center gap-6 transition-[height] duration-300', scrolled ? 'h-16' : 'h-[72px]')}>
        <Logo />

        <div ref={navRef} className="hidden flex-1 lg:block" onPointerLeave={hoverClose} onPointerEnter={cancelClose}>
          <nav aria-label="Main">
            <ul className="flex items-center gap-0.5">
              {mainNav.map((menu, i) => {
                const open = openIndex === i
                const current = currentIndex === i
                return (
                  <li key={menu.label} onPointerEnter={hoverOpen(i)}>
                    <button
                      ref={(el) => {
                        triggerRefs.current[i] = el
                      }}
                      type="button"
                      aria-expanded={open}
                      aria-controls={`menu-${i}`}
                      onClick={() => onTriggerClick(i)}
                      className={cn(
                        'group relative inline-flex h-10 items-center gap-1 rounded-lg px-3 text-sm font-medium transition-colors duration-200',
                        open
                          ? 'bg-primary-soft text-link'
                          : current
                            ? 'text-fg hover:bg-bg-alt'
                            : 'text-fg-muted hover:bg-bg-alt hover:text-fg',
                      )}
                    >
                      {menu.label}
                      <ChevronDown
                        className={cn(
                          'size-4 transition-transform duration-200',
                          open ? 'rotate-180 text-link' : 'text-fg-muted group-hover:translate-y-0.5 group-hover:text-fg',
                        )}
                        aria-hidden
                      />
                      {/* Underline: grows from the centre on hover, stays for the open menu and the current section. */}
                      <span
                        className={cn(
                          'absolute inset-x-3 bottom-1 h-0.5 origin-center rounded-full bg-primary transition-transform duration-200 ease-out',
                          open || current ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                        )}
                        aria-hidden
                      />
                    </button>
                    {/* The panel follows its own trigger in the DOM, so Tab moves from the trigger straight into it.
                        It is positioned against the sticky header, so it still spans the page width. */}
                    {open && (
                      <div className="absolute inset-x-0 top-full pt-2">
                        <Container className={cn(menu.feature || menu.groups.length > 1 ? 'max-w-6xl' : 'max-w-3xl')}>
                          <MegaMenuPanel menu={menu} id={`menu-${i}`} onNavigate={() => setOpenIndex(null)} />
                        </Container>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

        </div>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <ThemeToggle />
          <Link
            to="/contact"
            aria-current={location.pathname === '/contact' ? 'page' : undefined}
            className={cn(
              'group relative hidden h-10 items-center rounded-lg px-3 text-sm font-medium transition-colors duration-200 hover:bg-bg-alt hover:text-fg xl:inline-flex',
              location.pathname === '/contact' ? 'text-fg' : 'text-fg-muted',
            )}
          >
            Contact
            <span
              className={cn(
                'absolute inset-x-3 bottom-1 h-0.5 origin-center rounded-full bg-primary transition-transform duration-200 ease-out',
                location.pathname === '/contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
              )}
              aria-hidden
            />
          </Link>
          {/* Wrapped because Button's own inline-flex would override `hidden` (phones use the menu's CTA instead). */}
          <span className="hidden sm:inline-flex">
            <Button to="/book-demo" size="sm">
              Book a Demo <ArrowRight className="size-4" aria-hidden />
            </Button>
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-fg transition-colors hover:border-link hover:bg-bg-alt active:scale-95 lg:hidden"
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </Container>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
