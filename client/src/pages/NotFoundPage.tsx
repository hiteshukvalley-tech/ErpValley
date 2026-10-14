import { Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { usePageMeta } from '@/hooks/usePageMeta'

const suggestions = [
  { label: 'Products', to: '/products' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Contact', to: '/contact' },
]

export function NotFoundPage() {
  usePageMeta('Page not found', 'The page you were looking for could not be found.')
  return (
    <Container className="flex flex-col items-center py-24 text-center sm:py-32">
      <p className="font-display text-7xl font-extrabold text-link">404</p>
      <h1 className="mt-4 text-3xl font-bold sm:text-4xl">This page doesn’t exist</h1>
      <p className="mt-4 max-w-md text-fg-muted">
        The link may be outdated or the address mistyped. Try one of these instead:
      </p>
      <ul className="mt-8 flex flex-wrap justify-center gap-3">
        {suggestions.map((s) => (
          <li key={s.to}>
            <Button to={s.to} variant="secondary" size="sm">{s.label}</Button>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/">Go to homepage</Button>
        <Button to="/search" variant="ghost">
          <Search className="size-4" aria-hidden /> Search the site
        </Button>
      </div>
    </Container>
  )
}
