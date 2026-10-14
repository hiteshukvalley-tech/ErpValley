import { AlertTriangle, ArrowUpRight, Building2, CircleDollarSign, PackageCheck } from 'lucide-react'
import type { PreviewKind } from '@/content/home'
import { cn } from '@/utils/cn'

/* Product previews with sample data, one per featured module. Decorative: hidden from assistive tech. */

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-pop" aria-hidden>
      <div className="flex items-center justify-between border-b border-line bg-bg-alt px-4 py-2.5">
        <p className="text-xs font-semibold text-fg">{title}</p>
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
        </div>
      </div>
      <div className="p-4 text-fg sm:p-5">{children}</div>
    </div>
  )
}

function FinancePreview() {
  const ageing = [
    { label: 'Current', value: 58, amount: '$53.4k' },
    { label: '1–30 days', value: 24, amount: '$22.1k' },
    { label: '31–60 days', value: 12, amount: '$11.0k' },
    { label: '60+ days', value: 6, amount: '$5.8k' },
  ]
  const invoices = [
    { no: 'INV-3108', party: 'Harbor Foods', due: 'Due in 5 days', amount: '$8,240', paid: false },
    { no: 'INV-3107', party: 'Crest Logistics', due: 'Paid today', amount: '$3,615', paid: true },
    { no: 'INV-3106', party: 'Vertex Builders', due: 'Overdue 12 days', amount: '$11,900', paid: false, late: true },
  ]
  return (
    <Frame title="Finance · Receivables">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-primary-soft p-4">
          <p className="flex items-center gap-1.5 text-xs text-fg-muted">
            <CircleDollarSign className="size-3.5" /> Total receivables
          </p>
          <p className="mt-1 font-display text-2xl font-bold">$92,300</p>
          <p className="mt-1 text-xs text-fg-muted">Across 64 open invoices</p>
        </div>
        <div className="rounded-xl border border-line p-4">
          <p className="text-xs font-semibold">Ageing</p>
          <div className="mt-3 flex h-3 overflow-hidden rounded-full">
            {ageing.map((a, i) => (
              <span
                key={a.label}
                style={{ width: `${a.value}%` }}
                className={['bg-electric', 'bg-logo-blue', 'bg-amber-400', 'bg-rose-500'][i]}
              />
            ))}
          </div>
          <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-[11px]">
            {ageing.map((a) => (
              <li key={a.label} className="flex justify-between">
                <span className="text-fg-muted">{a.label}</span>
                <span className="font-semibold">{a.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="mt-3 divide-y divide-line rounded-xl border border-line">
        {invoices.map((inv) => (
          <li key={inv.no} className="flex items-center justify-between gap-3 px-3 py-2.5 text-xs">
            <div className="min-w-0">
              <p className="font-semibold">{inv.no} · {inv.party}</p>
              <p className={cn('text-[11px]', inv.late ? 'text-rose-600 dark:text-rose-400' : 'text-fg-muted')}>{inv.due}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{inv.amount}</span>
              <span
                className={cn(
                  'rounded-full px-2 py-0.5 text-[10px] font-semibold',
                  inv.paid ? 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400' : 'bg-bg-alt text-fg-muted',
                )}
              >
                {inv.paid ? 'Paid' : 'Open'}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

function CrmPreview() {
  const stages = [
    { name: 'New', total: '$42k', deals: [{ co: 'Lumen Retail', v: '$12k' }, { co: 'Oakline Clinics', v: '$18k' }] },
    { name: 'Qualified', total: '$64k', deals: [{ co: 'Pioneer Metals', v: '$34k' }, { co: 'Brightpath School', v: '$9k' }] },
    { name: 'Demo', total: '$51k', deals: [{ co: 'Coastline Freight', v: '$27k' }] },
    { name: 'Proposal', total: '$38k', deals: [{ co: 'Summit Realty', v: '$38k', hot: true }] },
  ]
  return (
    <Frame title="CRM · Sales pipeline">
      <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {stages.map((s) => (
          <div key={s.name} className="rounded-xl bg-bg-alt p-2.5">
            <div className="flex items-center justify-between px-0.5 text-[11px]">
              <span className="font-semibold">{s.name}</span>
              <span className="text-fg-muted">{s.total}</span>
            </div>
            <ul className="mt-2 space-y-2">
              {s.deals.map((d) => (
                <li key={d.co} className="rounded-lg border border-line bg-surface p-2.5">
                  <p className="flex items-center gap-1.5 truncate text-[11.5px] font-semibold">
                    <Building2 className="size-3 shrink-0 text-link" /> {d.co}
                  </p>
                  <div className="mt-1.5 flex items-center justify-between text-[10.5px]">
                    <span className="text-fg-muted">{d.v}</span>
                    {'hot' in d && d.hot ? (
                      <span className="rounded bg-amber-500/14 px-1.5 font-semibold text-amber-700 dark:text-amber-400">Closing</span>
                    ) : (
                      <span className="size-4 rounded-full bg-primary text-center text-[8px] leading-4 text-white">AK</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl border border-line px-3 py-2.5 text-xs">
        <span className="text-fg-muted">Next follow-up: call Pioneer Metals, 2:30 pm</span>
        <ArrowUpRight className="size-4 text-link" />
      </div>
    </Frame>
  )
}

function InventoryPreview() {
  const rows = [
    { sku: 'BRK-220', name: 'Steel bracket 220mm', wh: 'Main', onHand: 1240, reserved: 310, status: 'ok' },
    { sku: 'CTL-008', name: 'Control board v8', wh: 'Main', onHand: 36, reserved: 30, status: 'low' },
    { sku: 'PKG-L12', name: 'Packaging, large', wh: 'East', onHand: 820, reserved: 120, status: 'ok' },
    { sku: 'FST-KIT', name: 'Fastener kit', wh: 'East', onHand: 410, reserved: 95, status: 'incoming' },
  ]
  return (
    <Frame title="Inventory · Stock on hand">
      <div className="flex flex-wrap gap-2">
        {['All warehouses', 'Main', 'East'].map((w, i) => (
          <span
            key={w}
            className={cn('rounded-full px-3 py-1 text-[11px] font-semibold', i === 0 ? 'bg-primary text-white' : 'bg-bg-alt text-fg-muted')}
          >
            {w}
          </span>
        ))}
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border border-line">
        <table className="w-full text-[11.5px]">
          <thead className="bg-bg-alt text-left text-fg-muted">
            <tr>
              <th className="px-3 py-2 font-medium">Item</th>
              <th className="hidden px-3 py-2 font-medium sm:table-cell">Warehouse</th>
              <th className="px-3 py-2 text-right font-medium">On hand</th>
              <th className="px-3 py-2 text-right font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.sku} className="border-t border-line">
                <td className="px-3 py-2">
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-[10.5px] text-fg-muted">{r.sku} · {r.reserved} reserved</p>
                </td>
                <td className="hidden px-3 py-2 text-fg-muted sm:table-cell">{r.wh}</td>
                <td className="px-3 py-2 text-right font-semibold">{r.onHand.toLocaleString('en-US')}</td>
                <td className="px-3 py-2 text-right">
                  {r.status === 'low' && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/12 px-2 py-0.5 text-[10px] font-semibold text-rose-600 dark:text-rose-400">
                      <AlertTriangle className="size-3" /> Low
                    </span>
                  )}
                  {r.status === 'incoming' && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-semibold text-link">
                      <PackageCheck className="size-3" /> Incoming
                    </span>
                  )}
                  {r.status === 'ok' && (
                    <span className="rounded-full bg-emerald-500/12 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                      In stock
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 rounded-lg bg-primary-soft px-3 py-2 text-[11px] text-link">
        Reorder rule triggered: purchase request created for 200 × CTL-008
      </p>
    </Frame>
  )
}

function AnalyticsPreview() {
  const bars = [34, 52, 46, 61, 58, 72, 66, 80]
  const segments = [
    { label: 'Products', pct: 46, color: 'var(--ev-electric)' },
    { label: 'Services', pct: 32, color: 'var(--ev-logo-blue)' },
    { label: 'Support', pct: 22, color: '#93c5fd' },
  ]
  // Donut segments via stroke-dasharray on a circle of circumference 100, starting at 12 o'clock.
  const offsets = segments.map((_, i) => 25 - segments.slice(0, i).reduce((sum, s) => sum + s.pct, 0))
  return (
    <Frame title="Analytics · Leadership dashboard">
      <div className="grid gap-3 sm:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-line p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold">Gross margin by month</span>
            <span className="text-fg-muted">Last 8 months</span>
          </div>
          <div className="mt-3 flex h-32 items-end gap-2">
            {bars.map((b, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className={cn('w-full rounded-t-md', i === bars.length - 1 ? 'bg-electric' : 'bg-logo-blue/45')}
                  style={{ height: `${b}%` }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-line p-3">
          <p className="text-xs font-semibold">Revenue mix</p>
          <div className="mt-2 flex items-center gap-3">
            <svg viewBox="0 0 42 42" className="size-24 shrink-0">
              <circle cx="21" cy="21" r="15.915" fill="none" stroke="var(--bg-alt)" strokeWidth="6" />
              {segments.map((s, i) => (
                  <circle
                    key={s.label}
                    cx="21"
                    cy="21"
                    r="15.915"
                    fill="none"
                    stroke={s.color}
                    strokeWidth="6"
                    strokeDasharray={`${s.pct} ${100 - s.pct}`}
                    strokeDashoffset={offsets[i]}
                  />
              ))}
            </svg>
            <ul className="space-y-1.5 text-[11px]">
              {segments.map((s) => (
                <li key={s.label} className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full" style={{ background: s.color }} />
                  <span className="text-fg-muted">{s.label}</span>
                  <span className="font-semibold">{s.pct}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          ['Orders today', '42'],
          ['Avg. order', '$1,320'],
          ['On-time ship', '96%'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-bg-alt p-3">
            <p className="text-[10.5px] text-fg-muted">{k}</p>
            <p className="font-display text-lg font-bold">{v}</p>
          </div>
        ))}
      </div>
    </Frame>
  )
}

export function ModulePreview({ kind }: { kind: PreviewKind }) {
  switch (kind) {
    case 'finance':
      return <FinancePreview />
    case 'crm':
      return <CrmPreview />
    case 'inventory':
      return <InventoryPreview />
    case 'analytics':
      return <AnalyticsPreview />
  }
}
