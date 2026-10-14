import { ArrowRight, LayoutDashboard } from 'lucide-react'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { IconBadge } from '@/components/ui/IconBadge'
import { Section, SectionHeader } from '@/components/ui/Section'
import { usePageMeta } from '@/hooks/usePageMeta'

const brand = [
  ['Midnight navy', '#07132F'],
  ['Deep navy', '#0B1B3B'],
  ['Electric blue', '#0B5CFF'],
  ['Logo blue', '#2788FF'],
  ['Light background', '#F4F7FC'],
  ['Ice blue', '#EAF2FF'],
  ['Graphite', '#111827'],
  ['Secondary text', '#4B5563'],
  ['Dark body text', '#CBD5E1'],
  ['Light border', '#E2E8F0'],
  ['Dark border', '#263957'],
]

const semantic = ['bg', 'bg-alt', 'surface', 'surface-2', 'fg', 'fg-muted', 'line', 'primary', 'link']

/** Development-only reference of tokens and components. Not routed in production builds. */
export function DesignSystemPage() {
  usePageMeta('Design system')
  return (
    <>
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            align="left"
            eyebrow="Internal"
            title="ERPVALLEY design system"
            description="Tokens and components in the current theme. Toggle to compare."
          />
          <ThemeToggle />
        </div>

        <h3 className="mt-12 text-lg font-bold">Brand colors</h3>
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {brand.map(([name, hex]) => (
            <li key={hex} className="overflow-hidden rounded-xl border border-line">
              <div className="h-16" style={{ background: hex }} />
              <div className="p-2 text-xs">
                <p className="font-semibold">{name}</p>
                <p className="text-fg-muted">{hex}</p>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 text-lg font-bold">Semantic tokens (switch with theme)</h3>
        <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
          {semantic.map((t) => (
            <li key={t} className="overflow-hidden rounded-xl border border-line text-xs">
              <div className="h-12" style={{ background: `var(--${t})` }} />
              <p className="p-2 font-mono">--{t}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 text-lg font-bold">Typography</h3>
        <div className="mt-4 space-y-3">
          <p className="font-display text-5xl font-extrabold">Display 48 / Plus Jakarta Sans</p>
          <p className="font-display text-3xl font-bold">Heading 30</p>
          <p className="font-display text-xl font-bold">Heading 20</p>
          <p className="text-lg text-fg-muted">Body large 18 / Inter for supporting copy.</p>
          <p className="text-fg-muted">Body 16 / Inter for default paragraph text.</p>
          <p className="eyebrow">Eyebrow label</p>
        </div>

        <h3 className="mt-12 text-lg font-bold">Buttons</h3>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button>
            Primary <ArrowRight className="size-4" aria-hidden />
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>

        <h3 className="mt-12 text-lg font-bold">Cards and badges</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {['Static card', 'Interactive card', 'With badge'].map((t, i) => (
            <Card key={t} interactive={i === 1}>
              <IconBadge icon={LayoutDashboard} />
              <h4 className="mt-4 font-bold">{t}</h4>
              <p className="mt-2 text-sm text-fg-muted">Cards use the surface token with a subtle border and shadow.</p>
              {i === 2 && <Badge className="mt-4">New module</Badge>}
            </Card>
          ))}
        </div>
      </Section>
      <Section tone="alt">
        <SectionHeader eyebrow="Section tone" title="Alternate section" description="Used to separate content blocks." />
      </Section>
      <Section tone="navy">
        <SectionHeader onDark eyebrow="Section tone" title="Navy band" description="Used for CTAs in both themes." />
        <div className="mt-8 flex justify-center gap-3">
          <Button>Primary</Button>
          <Button variant="onDark">On dark</Button>
        </div>
      </Section>
    </>
  )
}
