import type { DataScreen } from '@/content/types'
import { cn } from '@/utils/cn'

const statusTone = (s: string) => {
  const v = s.toLowerCase()
  if (/(approved|paid|done|complete|active|running|received|shipped|posted|resolved|on track)/.test(v))
    return 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400'
  if (/(overdue|rejected|failed|blocked|late|short|at risk)/.test(v)) return 'bg-rose-500/12 text-rose-600 dark:text-rose-400'
  if (/(pending|review|waiting|draft|scheduled|partial|hold)/.test(v)) return 'bg-amber-500/14 text-amber-700 dark:text-amber-400'
  return 'bg-primary-soft text-link'
}

/** Generic module screen with sample data. Decorative: hidden from assistive tech. */
export function DataScreenPreview({ screen }: { screen: DataScreen }) {
  const hasStatus = !!screen.statuses?.length
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface text-fg shadow-pop" aria-hidden>
      <div className="flex items-center justify-between border-b border-line bg-bg-alt px-4 py-2.5">
        <p className="text-xs font-semibold">{screen.title}</p>
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-3 gap-2">
          {screen.stats.map(([label, value], i) => (
            <div key={label} className={cn('rounded-xl p-3', i === 0 ? 'bg-primary-soft' : 'bg-bg-alt')}>
              <p className="truncate text-[10.5px] text-fg-muted">{label}</p>
              <p className="mt-0.5 truncate font-display text-base font-bold sm:text-lg">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 overflow-hidden rounded-xl border border-line">
          <table className="w-full text-[11.5px]">
            <thead className="bg-bg-alt text-left text-fg-muted">
              <tr>
                {screen.columns.map((c, i) => (
                  <th
                    key={c}
                    className={cn('px-2.5 py-2 font-medium', i > 1 && 'hidden sm:table-cell')}
                  >
                    {c}
                  </th>
                ))}
                {hasStatus && <th className="px-2.5 py-2 text-right font-medium">Status</th>}
              </tr>
            </thead>
            <tbody>
              {screen.rows.map((row, r) => (
                <tr key={r} className="border-t border-line">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={cn('px-2.5 py-2', i === 0 ? 'font-semibold' : 'text-fg-muted', i > 1 && 'hidden sm:table-cell')}
                    >
                      {cell}
                    </td>
                  ))}
                  {hasStatus && (
                    <td className="px-2.5 py-2 text-right">
                      <span className={cn('whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold', statusTone(screen.statuses![r]))}>
                        {screen.statuses![r]}
                      </span>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
