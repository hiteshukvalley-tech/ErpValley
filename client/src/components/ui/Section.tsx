import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { Container } from './Container'

type Tone = 'default' | 'alt' | 'navy'

const tones: Record<Tone, string> = {
  default: 'bg-bg',
  alt: 'bg-bg-alt',
  // Always-dark band (CTA, stats). Text inside should use white / mist.
  navy: 'bg-navy text-white dark:bg-[#0a1836]',
}

interface SectionProps {
  id?: string
  tone?: Tone
  className?: string
  containerClassName?: string
  children: ReactNode
  'aria-labelledby'?: string
}

export function Section({ id, tone = 'default', className, containerClassName, children, ...rest }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-24', tones[tone], className)} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  id?: string
  onDark?: boolean
}

export function SectionHeader({ eyebrow, title, description, align = 'center', id, onDark }: SectionHeaderProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && <p className={cn('eyebrow', onDark && 'text-logo-blue')}>{eyebrow}</p>}
      <h2
        id={id}
        className={cn('mt-3 text-3xl font-bold sm:text-4xl', onDark && 'text-white')}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-lg leading-relaxed', onDark ? 'text-mist' : 'text-fg-muted')}>{description}</p>
      )}
    </div>
  )
}
