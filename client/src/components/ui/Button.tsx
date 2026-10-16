import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark'
type Size = 'sm' | 'md' | 'lg'

// Hover changes colour (and a soft glow on primary); pressing scales down slightly. Arrows slide via styles/index.css.
const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-[color,background-color,border-color,box-shadow,scale] duration-150 ease-out active:scale-[0.98] motion-reduce:active:scale-100 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-white shadow-sm hover:bg-primary-hover hover:shadow-[0_8px_22px_-8px_rgb(11_92_255/0.75)]',
  secondary: 'border border-line bg-surface text-fg hover:border-link hover:bg-primary-soft hover:text-link',
  ghost: 'text-fg-muted hover:bg-bg-alt hover:text-fg',
  // Outline button for navy/gradient backgrounds in both themes.
  onDark: 'border border-white/25 text-white hover:border-white/70 hover:bg-white/10',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined }
type LinkProps = CommonProps & { to: string; onClick?: () => void }

function buttonClasses(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(base, variants[variant], sizes[size], className)
}

/** Renders a router <Link> when `to` is given, otherwise a <button>. */
export function Button(props: ButtonProps | LinkProps) {
  const { variant = 'primary', size = 'md', className, children } = props
  const classes = buttonClasses(variant, size, className)
  if (props.to !== undefined) {
    return (
      <Link to={props.to} onClick={props.onClick} className={classes}>
        {children}
      </Link>
    )
  }
  const { variant: _v, size: _s, className: _c, children: _ch, type = 'button', ...rest } = props
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
