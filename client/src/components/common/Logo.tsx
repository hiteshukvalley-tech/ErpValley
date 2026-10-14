import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

/**
 * TEMPORARY wordmark.
 * Replace with the official ERPVALLEY logo file once provided:
 *   1. Put the file in src/assets/brand/ (SVG preferred).
 *   2. Swap the <span> below for <img src={logo} alt="ERPVALLEY" />.
 * Every header, footer and auth page uses this component, so this is the only change needed.
 */
export function Logo({ className, onDark }: { className?: string; onDark?: boolean }) {
  return (
    <Link to="/" aria-label="ERPVALLEY home" className={cn('inline-flex items-center', className)}>
      <span className="font-display text-xl font-extrabold tracking-tight">
        <span className={onDark ? 'text-white' : 'text-fg'}>ERP</span>
        <span className="text-logo-blue">VALLEY</span>
      </span>
    </Link>
  )
}
