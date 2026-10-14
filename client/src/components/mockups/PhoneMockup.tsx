import { Bell, Check, ChevronRight, Clock, X } from 'lucide-react'
import { cn } from '@/utils/cn'

/* Mobile approvals screen with sample data. Decorative: hidden from assistive tech by the caller. */

const approvals = [
  { title: 'Purchase order PO-1192', meta: 'Steel sheets · $4,860', who: 'R. Singh' },
  { title: 'Leave request', meta: '3 days · from 21 Oct', who: 'A. Mehta' },
  { title: 'Expense claim EX-208', meta: 'Client visit · $312', who: 'N. Pillai' },
]

export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-[230px] rounded-[2.2rem] border-[6px] border-[#0b1730] bg-[#0b1730] shadow-[0_30px_60px_-15px_rgb(0_0_0/0.6)]',
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.75rem] bg-surface text-left text-fg">
        <div className="flex items-center justify-between px-4 pb-2 pt-3 text-[10px] font-semibold">
          <span>9:41</span>
          <span className="h-4 w-16 rounded-full bg-[#0b1730]" />
          <Bell className="size-3" />
        </div>
        <div className="bg-hero px-4 pb-4 pt-2 text-white">
          <p className="text-[10px] text-mist">ERPVALLEY mobile</p>
          <p className="font-display text-sm font-bold">My approvals</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-white/10 p-2">
              <p className="text-[9px] text-mist">Waiting</p>
              <p className="font-display text-base font-bold">3</p>
            </div>
            <div className="rounded-lg bg-white/10 p-2">
              <p className="text-[9px] text-mist">Approved today</p>
              <p className="font-display text-base font-bold">7</p>
            </div>
          </div>
        </div>
        <ul className="space-y-2 p-3">
          {approvals.map((a, i) => (
            <li key={a.title} className="rounded-xl border border-line p-2.5">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-semibold">{a.title}</p>
                  <p className="truncate text-[9.5px] text-fg-muted">{a.meta}</p>
                </div>
                <ChevronRight className="size-3 shrink-0 text-fg-muted" />
              </div>
              {i === 0 ? (
                <div className="mt-2 grid grid-cols-2 gap-1.5">
                  <span className="flex items-center justify-center gap-1 rounded-md bg-primary py-1 text-[9.5px] font-semibold text-white">
                    <Check className="size-3" /> Approve
                  </span>
                  <span className="flex items-center justify-center gap-1 rounded-md border border-line py-1 text-[9.5px] font-semibold text-fg-muted">
                    <X className="size-3" /> Reject
                  </span>
                </div>
              ) : (
                <p className="mt-1.5 flex items-center gap-1 text-[9.5px] text-fg-muted">
                  <Clock className="size-3" /> Requested by {a.who}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
