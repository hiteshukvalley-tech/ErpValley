import { ArrowRight, Search, SearchX } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link, useLoaderData, useSearchParams } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { Section } from '@/components/ui/Section'
import { usePageMeta } from '@/hooks/usePageMeta'
import type { SearchGroup, searchLoader } from '@/services/search'

const groups: SearchGroup[] = ['Products', 'Industries', 'Services', 'Articles', 'Pages']
const suggestions = ['inventory', 'payroll', 'data migration', 'manufacturing', 'approval workflow']

export function SearchPage() {
  const [params, setParams] = useSearchParams()
  const query = params.get('q')?.trim() ?? ''
  const [draft, setDraft] = useState(query)
  const { results } = useLoaderData<typeof searchLoader>()
  usePageMeta(query ? `Search: ${query}` : 'Search', 'Search ERPVALLEY products, industries, services and articles.')

  // Keep the input in sync when the URL query changes (e.g. back/forward navigation).
  const [lastQuery, setLastQuery] = useState(query)
  if (lastQuery !== query) {
    setLastQuery(query)
    setDraft(query)
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const q = draft.trim()
    setParams(q ? { q } : {})
  }

  return (
    <>
      <section className="bg-hero text-white">
        <Container className="py-14 sm:py-16">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Search ERPVALLEY</h1>
          <form onSubmit={submit} role="search" className="mt-6 flex max-w-2xl gap-2">
            <label htmlFor="site-search" className="sr-only">Search the site</label>
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-mist" aria-hidden />
              <input
                id="site-search"
                type="search"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Search products, services, articles…"
                className="h-12 w-full rounded-lg border border-white/20 bg-white/10 pl-11 pr-3 text-white placeholder:text-mist/70 focus:border-logo-blue focus:outline-none"
              />
            </div>
            <Button type="submit" size="lg">Search</Button>
          </form>
          {!query && (
            <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-mist">
              Try:
              {suggestions.map((s) => (
                <Link key={s} to={`/search?q=${encodeURIComponent(s)}`} className="rounded-full border border-white/20 px-3 py-1 hover:bg-white/10">
                  {s}
                </Link>
              ))}
            </p>
          )}
        </Container>
      </section>

      <Section className="!pt-10">
        {query && (
          <p className="text-sm text-fg-muted" role="status">
            {results.length} {results.length === 1 ? 'result' : 'results'} for <span className="font-semibold text-fg">“{query}”</span>
          </p>
        )}
        {query && results.length === 0 && (
          <EmptyState
            className="mt-8"
            icon={SearchX}
            title="No results found"
            text="Try a different or more general term, or browse our products and services."
            actions={
              <>
                <Button to="/products">Browse products</Button>
                <Button to="/services" variant="secondary">Browse services</Button>
              </>
            }
          />
        )}
        {groups.map((g) => {
          const items = results.filter((r) => r.group === g)
          if (!items.length) return null
          return (
            <div key={g} className="mt-10">
              <h2 className="text-lg font-bold">{g}</h2>
              <ul className="mt-4 divide-y divide-line rounded-card border border-line bg-surface">
                {items.map((r) => (
                  <li key={r.to}>
                    <Link to={r.to} className="group flex items-start justify-between gap-4 p-5 hover:bg-bg-alt">
                      <span>
                        <span className="block font-semibold text-fg group-hover:text-link">{r.title}</span>
                        <span className="mt-1 block text-sm text-fg-muted">{r.summary}</span>
                      </span>
                      <ArrowRight className="mt-1 size-4 shrink-0 text-fg-muted group-hover:text-link" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </Section>
    </>
  )
}
