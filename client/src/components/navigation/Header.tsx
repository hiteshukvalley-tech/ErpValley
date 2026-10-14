import { ChevronDown, Menu } from 'lucide-react'
import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '@/components/common/Logo'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { mainNav } from '@/config/navigation'
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

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-bg/90 backdrop-blur-md transition-[border-color,box-shadow] supports-[backdrop-filter]:bg-bg/80',
        scrolled || openMenu ? 'border-line shadow-sm' : 'border-transparent',
      )}
    >
      <Container className="flex h-[72px] items-center gap-6">
        <Logo />

        <div ref={navRef} className="hidden flex-1 lg:block" onPointerLeave={hoverClose} onPointerEnter={cancelClose}>
          <nav aria-label="Main">
            <ul className="flex items-center gap-1">
              {mainNav.map((menu, i) => {
                const open = openIndex === i
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
                        'inline-flex h-10 items-center gap-1 rounded-lg px-3 text-sm font-medium transition-colors',
                        open ? 'bg-bg-alt text-fg' : 'text-fg-muted hover:text-fg',
                      )}
                    >
                      {menu.label}
                      <ChevronDown
                        className={cn('size-4 transition-transform', open && 'rotate-180')}
                        aria-hidden
                      />
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {openMenu && openIndex !== null && (
            <div className="absolute inset-x-0 top-full pt-2">
              <Container className={cn(openMenu.feature || openMenu.groups.length > 1 ? 'max-w-6xl' : 'max-w-3xl')}>
                <MegaMenuPanel menu={openMenu} id={`menu-${openIndex}`} onNavigate={() => setOpenIndex(null)} />
              </Container>
            </div>
          )}
        </div>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <ThemeToggle />
          <Link
            to="/login"
            className="hidden h-10 items-center rounded-lg px-3 text-sm font-medium text-fg-muted hover:text-fg xl:inline-flex"
          >
            Log in
          </Link>
          <Button to="/book-demo" size="sm" className="hidden sm:inline-flex">
            Book a Demo
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-fg lg:hidden"
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </Container>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
