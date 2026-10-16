import { ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import type { NavMenu } from '@/config/navigation'
import { cn } from '@/utils/cn'

const spanClass: Record<number, string> = { 1: 'lg:col-span-1', 2: 'lg:col-span-2', 3: 'lg:col-span-3' }
const colsClass: Record<number, string> = { 1: '', 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3' }

interface MegaMenuPanelProps {
  menu: NavMenu
  id: string
  onNavigate: () => void
}

/** Dropdown panel content for one top-level menu. Positioning is handled by the header. */
export function MegaMenuPanel({ menu, id, onNavigate }: MegaMenuPanelProps) {
  const { pathname } = useLocation()
  const multiGroup = menu.groups.length > 1
  // Every menu sits on the same 3-column grid. With several groups, each gets columns in proportion to its items,
  // e.g. Solutions: 6 business goals in 2 columns + 3 "plan and buy" links in 1 column.
  const rows = 3
  const groupCols = (count: number) => (multiGroup ? Math.min(3, Math.max(1, Math.ceil(count / rows))) : 3)

  return (
    <div
      id={id}
      className="animate-[ev-menu_180ms_ease-out] rounded-2xl border border-line bg-surface p-3 shadow-pop motion-reduce:animate-none"
    >
      <div className={cn('flex gap-3', menu.feature ? 'flex-row' : 'flex-col')}>
        <div className={cn('min-w-0 flex-1', multiGroup && 'grid gap-4 lg:grid-cols-3')}>
          {menu.groups.map((group, gi) => (
            <div
              key={group.title}
              className={cn('min-w-0', multiGroup && spanClass[groupCols(group.items.length)], gi > 0 && 'lg:border-l lg:border-line lg:pl-4')}
            >
              <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-fg-muted">
                {group.title}
              </p>
              <ul className={cn('grid gap-0.5', colsClass[groupCols(group.items.length)])}>
                {group.items.map((item) => {
                  const current = pathname === item.to
                  return (
                    <li key={item.to + item.label}>
                      <Link
                        to={item.to}
                        onClick={onNavigate}
                        aria-current={current ? 'page' : undefined}
                        className={cn(
                          'group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-colors duration-200 hover:border-line hover:bg-bg-alt focus-visible:bg-bg-alt',
                          current && 'border-line bg-bg-alt',
                        )}
                      >
                        <span
                          className={cn(
                            'mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-200',
                            current ? 'bg-primary text-white' : 'bg-primary-soft text-link group-hover:bg-primary group-hover:text-white',
                          )}
                        >
                          <item.icon className="size-[18px]" aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-1.5 text-sm font-semibold text-fg transition-colors group-hover:text-link">
                            {item.label}
                            <ArrowRight
                              className="size-3.5 -translate-x-1 opacity-0 transition-[opacity,translate] duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                              aria-hidden
                            />
                          </span>
                          <span className="mt-0.5 block text-[13px] leading-snug text-fg-muted">{item.description}</span>
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
          {menu.to && (
            <div className="px-3 pb-1 pt-2">
              <Link
                to={menu.to}
                onClick={onNavigate}
                className="inline-flex items-center gap-1.5 rounded-lg text-sm font-semibold text-link hover:underline"
              >
                View all {menu.label.toLowerCase()} <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          )}
        </div>

        {menu.feature && (
          <div className="bg-hero group/feature relative hidden w-64 shrink-0 flex-col justify-between overflow-hidden rounded-xl p-5 text-white lg:flex">
            <div
              className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-logo-blue/25 blur-2xl transition-transform duration-500 group-hover/feature:scale-125"
              aria-hidden
            />
            <div className="relative">
              <p className="font-display text-base font-bold">{menu.feature.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{menu.feature.text}</p>
            </div>
            <Link
              to={menu.feature.to}
              onClick={onNavigate}
              className="relative mt-6 inline-flex w-fit items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              {menu.feature.cta} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
