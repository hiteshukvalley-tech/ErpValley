import {
  BarChart3,
  Bell,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Factory,
  LayoutDashboard,
  Search,
  ShoppingCart,
  Target,
  TrendingDown,
  TrendingUp,
  UsersRound,
  Warehouse,
} from 'lucide-react'
import { cn } from '@/utils/cn'

/*
 * Illustrative ERPVALLEY dashboard built in HTML/SVG.
 * All figures are sample data for the product preview — not customer or company results.
 */

const nav = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Finance', icon: Calculator },
  { label: 'Sales', icon: ShoppingCart },
  { label: 'CRM', icon: Target },
  { label: 'Inventory', icon: Warehouse },
  { label: 'Purchasing', icon: ClipboardList },
  { label: 'Manufacturing', icon: Factory },
  { label: 'HR & Payroll', icon: UsersRound },
  { label: 'Reports', icon: BarChart3 },
]

const kpis = [
  { label: 'Revenue (MTD)', value: '$248.6k', delta: '+12.4%', up: true, spark: [8, 10, 9, 12, 11, 14, 13, 16] },
  { label: 'Open orders', value: '186', delta: '+8', up: true, spark: [12, 11, 13, 12, 14, 13, 15, 16] },
  { label: 'Stock value', value: '$1.24M', delta: '-2.1%', up: false, spark: [15, 14, 15, 13, 14, 12, 13, 12] },
  { label: 'Receivables', value: '$92.3k', delta: '-6.8%', up: true, spark: [16, 15, 14, 14, 12, 12, 11, 10] },
]

const revenue = [42, 48, 45, 56, 52, 61, 58, 67, 63, 72, 70, 81]
const expenses = [30, 33, 34, 36, 35, 40, 38, 42, 41, 45, 44, 48]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const stock = [
  { item: 'Steel brackets', level: 82 },
  { item: 'Packaging units', level: 54 },
  { item: 'Control boards', level: 18, low: true },
  { item: 'Fasteners kit', level: 67 },
]

const orders = [
  { id: 'SO-2041', customer: 'Northwind Supply', amount: '$12,480', status: 'Shipped' },
  { id: 'SO-2040', customer: 'Blue Harbor Retail', amount: '$4,920', status: 'Invoiced' },
  { id: 'SO-2039', customer: 'Atlas Components', amount: '$18,300', status: 'Picking' },
]

const statusTone: Record<string, string> = {
  Shipped: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400',
  Invoiced: 'bg-primary-soft text-link',
  Picking: 'bg-amber-500/14 text-amber-700 dark:text-amber-400',
}

function toPath(values: number[], w: number, h: number, max: number) {
  const step = w / (values.length - 1)
  return values.map((v, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(1)},${(h - (v / max) * h).toFixed(1)}`).join(' ')
}

function Sparkline({ values, up }: { values: number[]; up: boolean }) {
  const max = Math.max(...values) * 1.1
  return (
    <svg viewBox="0 0 60 20" className="h-5 w-14" aria-hidden>
      <path
        d={toPath(values, 60, 20, max)}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={up ? 'stroke-emerald-500' : 'stroke-rose-500'}
      />
    </svg>
  )
}

function RevenueChart() {
  const w = 400
  const h = 120
  const max = 90
  const rev = toPath(revenue, w, h, max)
  const exp = toPath(expenses, w, h, max)
  return (
    <svg viewBox={`0 0 ${w} ${h + 18}`} className="h-auto w-full" role="img" aria-label="Sample revenue and expenses chart">
      <defs>
        <linearGradient id="ev-rev-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--ev-logo-blue)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--ev-logo-blue)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75, 1].map((t) => (
        <line key={t} x1="0" x2={w} y1={h * t} y2={h * t} stroke="var(--line)" strokeDasharray="3 4" />
      ))}
      <path d={`${rev} L${w},${h} L0,${h} Z`} fill="url(#ev-rev-fill)" />
      <path d={exp} fill="none" stroke="var(--fg-muted)" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d={rev} fill="none" stroke="var(--ev-electric)" strokeWidth="2.25" strokeLinejoin="round" />
      <circle cx={w} cy={h - (revenue[11] / max) * h} r="3.5" fill="var(--ev-electric)" stroke="var(--surface)" strokeWidth="2" />
      {months.map((m, i) =>
        i % 2 === 0 ? (
          <text key={m} x={(i * w) / 11} y={h + 14} fontSize="9" fill="var(--fg-muted)" textAnchor={i === 0 ? 'start' : 'middle'}>
            {m}
          </text>
        ) : null,
      )}
    </svg>
  )
}

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-white/15 bg-surface text-left text-fg shadow-[0_30px_80px_-20px_rgb(0_0_0/0.55)] ring-1 ring-black/5 dark:border-line',
        className,
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-bg-alt px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-rose-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 hidden rounded-md bg-surface px-3 py-1 text-[11px] text-fg-muted sm:block">
          app.erpvalley.in/dashboard
        </span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-44 shrink-0 border-r border-line bg-bg-alt/60 p-3 md:block">
          <p className="px-2 pb-2 font-display text-sm font-extrabold">
            ERP<span className="text-logo-blue">VALLEY</span>
          </p>
          <ul className="space-y-0.5">
            {nav.map((n) => (
              <li
                key={n.label}
                className={cn(
                  'flex items-center gap-2 rounded-md px-2 py-1.5 text-[11.5px]',
                  n.active ? 'bg-primary text-white' : 'text-fg-muted',
                )}
              >
                <n.icon className="size-3.5" aria-hidden />
                {n.label}
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0 flex-1 p-3 sm:p-4">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] text-fg-muted">Good morning, Operations</p>
              <p className="font-display text-sm font-bold sm:text-base">Business overview</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden items-center gap-1.5 rounded-md border border-line px-2 py-1 text-[11px] text-fg-muted sm:flex">
                <Search className="size-3" aria-hidden /> Search records
              </span>
              <span className="relative inline-flex size-7 items-center justify-center rounded-md border border-line text-fg-muted">
                <Bell className="size-3.5" aria-hidden />
                <span className="absolute right-1 top-1 size-1.5 rounded-full bg-rose-500" />
              </span>
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                OP
              </span>
            </div>
          </div>

          {/* KPIs */}
          <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-lg border border-line bg-surface p-2.5">
                <p className="truncate text-[10.5px] text-fg-muted">{k.label}</p>
                <div className="mt-1 flex items-end justify-between gap-1">
                  <p className="font-display text-base font-bold leading-none sm:text-lg">{k.value}</p>
                  <Sparkline values={k.spark} up={k.up} />
                </div>
                <p
                  className={cn(
                    'mt-1 inline-flex items-center gap-0.5 text-[10px] font-semibold',
                    k.up ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400',
                  )}
                >
                  {k.up ? <TrendingUp className="size-3" aria-hidden /> : <TrendingDown className="size-3" aria-hidden />}
                  {k.delta}
                </p>
              </div>
            ))}
          </div>

          {/* Chart + side panel */}
          <div className="mt-2 grid gap-2 lg:grid-cols-[1.7fr_1fr]">
            <div className="rounded-lg border border-line p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold">Revenue vs expenses</p>
                <div className="flex items-center gap-3 text-[10px] text-fg-muted">
                  <span className="flex items-center gap-1">
                    <span className="h-0.5 w-3 rounded bg-electric" /> Revenue
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-0.5 w-3 rounded bg-fg-muted/50" /> Expenses
                  </span>
                </div>
              </div>
              <RevenueChart />
            </div>

            <div className="hidden rounded-lg border border-line p-3 sm:block">
              <p className="text-xs font-semibold">Stock levels</p>
              <ul className="mt-2.5 space-y-2.5">
                {stock.map((s) => (
                  <li key={s.item}>
                    <div className="flex justify-between text-[10.5px]">
                      <span className="text-fg-muted">{s.item}</span>
                      <span className={cn('font-semibold', s.low && 'text-rose-600 dark:text-rose-400')}>
                        {s.low ? 'Reorder' : `${s.level}%`}
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-bg-alt">
                      <div
                        className={cn('h-full rounded-full', s.low ? 'bg-rose-500' : 'bg-logo-blue')}
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center gap-1.5 rounded-md bg-primary-soft px-2 py-1.5 text-[10.5px] text-link">
                <CheckCircle2 className="size-3.5" aria-hidden /> PO-1187 auto-created
              </div>
            </div>
          </div>

          {/* Orders */}
          <div className="mt-2 hidden rounded-lg border border-line md:block">
            <div className="flex items-center justify-between px-3 pt-2.5">
              <p className="text-xs font-semibold">Recent sales orders</p>
              <span className="text-[10.5px] font-semibold text-link">View all</span>
            </div>
            <table className="mt-1 w-full text-[11px]">
              <thead>
                <tr className="text-left text-fg-muted">
                  <th className="px-3 py-1.5 font-medium">Order</th>
                  <th className="px-3 py-1.5 font-medium">Customer</th>
                  <th className="px-3 py-1.5 text-right font-medium">Amount</th>
                  <th className="px-3 py-1.5 text-right font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-t border-line">
                    <td className="px-3 py-1.5 font-medium">{o.id}</td>
                    <td className="px-3 py-1.5 text-fg-muted">{o.customer}</td>
                    <td className="px-3 py-1.5 text-right">{o.amount}</td>
                    <td className="px-3 py-1.5 text-right">
                      <span className={cn('rounded-full px-2 py-0.5 text-[10px] font-semibold', statusTone[o.status])}>
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
