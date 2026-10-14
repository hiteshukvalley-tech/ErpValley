import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { NavMenu } from '@/config/navigation'
import { cn } from '@/utils/cn'

interface MegaMenuPanelProps {
  menu: NavMenu
  id: string
  onNavigate: () => void
}

/** Dropdown panel content for one top-level menu. Positioning is handled by the header. */
export function MegaMenuPanel({ menu, id, onNavigate }: MegaMenuPanelProps) {
  const itemCount = menu.groups.reduce((n, g) => n + g.items.length, 0)
  const multiGroup = menu.groups.length > 1
  // Wide menus get three columns; short menus stay compact.
  const cols = multiGroup ? 'sm:grid-cols-1' : itemCount > 8 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'

  return (
    <div id={id} className="rounded-2xl border border-line bg-surface p-3 shadow-pop">
      <div className={cn('flex gap-3', menu.feature ? 'flex-row' : 'flex-col')}>
        <div className={cn('min-w-0 flex-1', multiGroup && 'grid gap-4 sm:grid-cols-[1.4fr_1fr]')}>
          {menu.groups.map((group) => (
            <div key={group.title} className="min-w-0">
              <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-fg-muted">
                {group.title}
              </p>
              <ul className={cn('grid gap-0.5', cols)}>
                {group.items.map((item) => (
                  <li key={item.to + item.label}>
                    <Link
                      to={item.to}
                      onClick={onNavigate}
                      className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-bg-alt focus-visible:bg-bg-alt"
                    >
                      <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-link transition-colors group-hover:bg-primary group-hover:text-white">
                        <item.icon className="size-[18px]" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-fg">{item.label}</span>
                        <span className="mt-0.5 block text-[13px] leading-snug text-fg-muted">{item.description}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {menu.to && (
            <div className="px-3 pb-1 pt-2">
              <Link
                to={menu.to}
                onClick={onNavigate}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-link hover:underline"
              >
                View all {menu.label.toLowerCase()} <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          )}
        </div>

        {menu.feature && (
          <aside className="bg-hero hidden w-64 shrink-0 flex-col justify-between rounded-xl p-5 text-white lg:flex">
            <div>
              <p className="font-display text-base font-bold">{menu.feature.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{menu.feature.text}</p>
            </div>
            <Link
              to={menu.feature.to}
              onClick={onNavigate}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:underline"
            >
              {menu.feature.cta} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </aside>
        )}
      </div>
    </div>
  )
}
