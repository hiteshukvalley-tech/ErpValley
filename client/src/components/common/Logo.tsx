import { Link } from 'react-router-dom'
import logo from '@/assets/brand/erpvalley-logo.png'
import logoOnDark from '@/assets/brand/erpvalley-logo-on-dark.png'
import { cn } from '@/utils/cn'

/*
 * Official ERPVALLEY logo. Every header, footer and menu uses this component.
 * Files in src/assets/brand/:
 *   erpvalley-logo-original.png  the logo as supplied (master copy, not shipped)
 *   erpvalley-logo.png           cropped, transparent background, for light backgrounds
 *   erpvalley-logo-on-dark.png   same, with "ALLEY" in white, for dark backgrounds and dark mode
 */

const size = { width: 690, height: 96 }

export function Logo({ className, onDark }: { className?: string; onDark?: boolean }) {
  return (
    <Link to="/" aria-label="ERPVALLEY home" className={cn('inline-flex shrink-0 items-center', className)}>
      {onDark ? (
        <img src={logoOnDark} alt="" {...size} className="h-7 w-auto" />
      ) : (
        <>
          <img src={logo} alt="" {...size} className="h-7 w-auto dark:hidden" />
          <img src={logoOnDark} alt="" {...size} className="hidden h-7 w-auto dark:block" />
        </>
      )}
    </Link>
  )
}
