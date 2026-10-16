import { AlertTriangle } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { Section } from '@/components/ui/Section'
import { cookiePolicy, privacyPolicy, termsOfService } from '@/content/legal'
import type { LegalDoc } from '@/content/types'
import { usePageMeta } from '@/hooks/usePageMeta'

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function LegalDocument({ doc, metaDescription }: { doc: LegalDoc; metaDescription: string }) {
  usePageMeta(doc.title, metaDescription)
  return (
    <>
      <PageHero eyebrow="Legal" title={doc.title} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[16rem_1fr]">
          <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-wider text-fg-muted">On this page</p>
            <ol className="mt-3 space-y-1.5 text-sm">
              {doc.sections.map((s) => (
                <li key={s.heading}>
                  <a href={`#${slug(s.heading)}`} className="text-fg-muted hover:text-link">{s.heading}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="max-w-3xl">
            <p role="note" className="flex items-start gap-3 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-fg">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden />
              {doc.summary}
            </p>
            {doc.sections.map((s) => (
              <section key={s.heading} id={slug(s.heading)} className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-bold">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 leading-relaxed text-fg-muted">{p}</p>
                ))}
                {s.items && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-fg-muted marker:text-link">
                    {s.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </Section>
    </>
  )
}

export const PrivacyPage = () => (
  <LegalDocument doc={privacyPolicy} metaDescription="How ERPVALLEY collects, uses, stores and protects personal information submitted through this website, and the rights you have over your data." />
)
export const TermsPage = () => (
  <LegalDocument doc={termsOfService} metaDescription="The terms and conditions that govern use of the ERPVALLEY website, its forms, quotes and the services we provide." />
)
export const CookiesPage = () => (
  <LegalDocument doc={cookiePolicy} metaDescription="Which cookies and browser storage the ERPVALLEY website uses, why we use them, and how you can control them." />
)
