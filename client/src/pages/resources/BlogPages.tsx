import { ArrowLeft, ArrowRight, BookOpen, Clock, FileText, Lightbulb, Video } from 'lucide-react'
import { useMemo } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'
import { CtaBand } from '@/components/common/CtaBand'
import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { EmptyState } from '@/components/ui/EmptyState'
import { Section, SectionHeader } from '@/components/ui/Section'
import { readingMinutes } from '@/content/readingTime'
import type { PostCategory, PostContent } from '@/content/types'
import { usePageMeta } from '@/hooks/usePageMeta'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { bySlug, useContent } from '@/services/content'
import { cn } from '@/utils/cn'

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

const categories: PostCategory[] = ['ERP Basics', 'Implementation', 'Operations', 'Finance', 'Technology']

function PostCard({ post, featured }: { post: PostContent; featured?: boolean }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={cn(
        'group flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-link/50 hover:shadow-pop',
        featured && 'sm:p-8',
      )}
    >
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-primary-soft px-2.5 py-1 font-semibold text-link">{post.category}</span>
        {post.kind === 'guide' && <span className="rounded-full bg-bg-alt px-2.5 py-1 font-semibold text-fg">Guide</span>}
      </div>
      <h3 className={cn('mt-4 font-bold group-hover:text-link', featured ? 'text-2xl' : 'text-lg')}>{post.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{post.excerpt}</p>
      <p className="mt-5 flex items-center gap-3 text-xs text-fg-muted">
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        <span aria-hidden>·</span>
        <span className="flex items-center gap-1">
          <Clock className="size-3.5" aria-hidden /> {readingMinutes(post)} min read
        </span>
      </p>
    </Link>
  )
}

export function BlogPage() {
  usePageMeta('Blog', 'ERP insights from ERPVALLEY: practical articles on choosing, implementing and running ERP across finance, operations and technology.')
  const { posts } = useContent<'posts'>()
  const [params, setParams] = useSearchParams()
  const active = params.get('category') as PostCategory | null
  const list = useMemo(() => (active ? posts.filter((p) => p.category === active) : posts), [active, posts])
  const [featured, ...rest] = list

  return (
    <>
      <PageHero eyebrow="Blog" title="ERP insights" description="Practical articles on choosing, implementing and getting the most from ERP." />
      <Section>
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {[null, ...categories].map((c) => (
            <button
              key={c ?? 'all'}
              type="button"
              aria-pressed={active === c}
              onClick={() => setParams(c ? { category: c } : {})}
              className={cn(
                'h-9 rounded-full border px-4 text-sm font-medium transition-colors',
                active === c ? 'border-primary bg-primary text-white' : 'border-line text-fg-muted hover:text-fg',
              )}
            >
              {c ?? 'All'}
            </button>
          ))}
        </div>
        {list.length === 0 ? (
          <EmptyState className="mt-10" icon={FileText} title="No articles in this category yet" text="Try another category, or subscribe to hear about new articles." actions={<Button to="/newsletter">Subscribe</Button>} />
        ) : (
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <li className="md:col-span-2 lg:col-span-3">
              <PostCard post={featured} featured />
            </li>
            {rest.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
        )}
      </Section>
      <CtaBand title="Get new articles by email" text="Practical ERP guides and checklists, about once a month." primary={{ label: 'Subscribe', to: '/newsletter' }} secondary={{ label: 'Book a Demo', to: '/book-demo' }} />
    </>
  )
}

export function GuidesPage() {
  usePageMeta('ERP Guides', 'Step-by-step ERP guides from ERPVALLEY: choosing an ERP system, planning an implementation and migrating your data safely.')
  const { posts } = useContent<'posts'>()
  const guides = posts.filter((p) => p.kind === 'guide')
  return (
    <>
      <PageHero eyebrow="ERP guides" title="Step-by-step ERP guides" description="In-depth guides for planning, buying and rolling out an ERP system." />
      <Section>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <li key={g.slug}>
              <PostCard post={g} />
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  )
}

/** Whitepapers, reports and webinars: honest empty states that point to existing guides. */
function ResourceHub({ eyebrow, title, description, icon, emptyTitle, emptyText }: {
  eyebrow: string
  title: string
  description: string
  icon: typeof FileText
  emptyTitle: string
  emptyText: string
}) {
  usePageMeta(title, description)
  const { posts } = useContent<'posts'>()
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <Section>
        <EmptyState
          icon={icon}
          title={emptyTitle}
          text={emptyText}
          actions={
            <>
              <Button to="/newsletter">Get notified</Button>
              <Button to="/guides" variant="secondary">Read our ERP guides</Button>
            </>
          }
        />
      </Section>
      <Section tone="alt" aria-labelledby="latest-title">
        <SectionHeader id="latest-title" eyebrow="Available now" title="Latest guides and articles" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}

export const WhitepapersPage = () => (
  <ResourceHub
    eyebrow="Whitepapers"
    title="ERP Whitepapers"
    description="In-depth technical papers on ERP architecture, integration and data strategy from the ERPVALLEY team."
    icon={FileText}
    emptyTitle="Whitepapers are in preparation"
    emptyText="Our first whitepapers are being written. Subscribe to be notified when they are published."
  />
)
export const ReportsPage = () => (
  <ResourceHub
    eyebrow="Industry reports"
    title="Industry Reports"
    description="Analysis of operational trends and ERP needs across the industries ERPVALLEY serves."
    icon={Lightbulb}
    emptyTitle="Industry reports are in preparation"
    emptyText="We publish reports only when they are based on sound research. Subscribe to hear when the first one is released."
  />
)
export const WebinarsPage = () => (
  <ResourceHub
    eyebrow="Webinars"
    title="Webinars"
    description="Live and recorded ERPVALLEY sessions on ERP planning, implementation and product features."
    icon={Video}
    emptyTitle="No webinars scheduled yet"
    emptyText="Upcoming sessions will be listed here with dates and registration links. Subscribe to be invited."
  />
)

export function BlogPostPage() {
  const { slug = '' } = useParams()
  const post = bySlug(useContent<'posts'>().posts).get(slug)
  return post ? <PostView key={post.slug} post={post} /> : <NotFoundPage />
}

function PostView({ post }: { post: PostContent }) {
  usePageMeta(post.title, post.metaDescription)
  const content = useContent<'posts' | 'products'>()
  const { posts } = content
  const productBySlug = bySlug(content.products)
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).concat(posts.filter((p) => p.slug !== post.slug && p.category !== post.category)).slice(0, 3)
  const products = post.relatedProducts.flatMap((s) => productBySlug.get(s) ?? [])

  return (
    <>
      <section className="bg-hero text-white">
        <Container className="max-w-4xl py-12 sm:py-16">
          <Breadcrumbs items={[{ label: post.kind === 'guide' ? 'ERP Guides' : 'Blog', to: post.kind === 'guide' ? '/guides' : '/blog' }, { label: post.title }]} />
          <p className="mt-8 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-logo-blue/15 px-2.5 py-1 font-semibold text-logo-blue">{post.category}</span>
            {post.kind === 'guide' && <span className="rounded-full bg-white/10 px-2.5 py-1 font-semibold">Guide</span>}
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg text-mist">{post.excerpt}</p>
          <p className="mt-6 flex flex-wrap items-center gap-3 text-sm text-mist">
            <span className="font-semibold text-white">{post.author}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden>·</span>
            <span>{readingMinutes(post)} min read</span>
          </p>
        </Container>
      </section>

      <Container className="max-w-4xl py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_15rem]">
          <article className="min-w-0">
            {post.body.map((b, i) => {
              switch (b.type) {
                case 'h2':
                  return <h2 key={i} className="mt-10 text-2xl font-bold first:mt-0">{b.text}</h2>
                case 'p':
                  return <p key={i} className="mt-4 text-[17px] leading-relaxed text-fg-muted">{b.text}</p>
                case 'ul':
                  return (
                    <ul key={i} className="mt-4 list-disc space-y-2 pl-5 text-[17px] leading-relaxed text-fg-muted marker:text-link">
                      {b.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )
                case 'callout':
                  return (
                    <aside key={i} className="mt-6 flex gap-3 rounded-xl border border-link/30 bg-primary-soft p-5 text-fg">
                      <Lightbulb className="mt-0.5 size-5 shrink-0 text-link" aria-hidden />
                      <p className="leading-relaxed"><span className="font-semibold">Tip: </span>{b.text}</p>
                    </aside>
                  )
              }
            })}
            <ul className="mt-10 flex flex-wrap gap-2" aria-label="Tags">
              {post.tags.map((t) => (
                <li key={t} className="rounded-md bg-bg-alt px-2.5 py-1 text-xs font-medium text-fg-muted">#{t}</li>
              ))}
            </ul>
            <Link to={post.kind === 'guide' ? '/guides' : '/blog'} className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-link hover:underline">
              <ArrowLeft className="size-4" aria-hidden /> Back to {post.kind === 'guide' ? 'guides' : 'blog'}
            </Link>
          </article>

          {products.length > 0 && (
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-wider text-fg-muted">Related products</p>
              <ul className="mt-3 space-y-2">
                {products.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/products/${p.slug}`} className="flex items-center gap-3 rounded-xl border border-line bg-surface p-3 text-sm font-semibold text-fg hover:border-link/50 hover:text-link">
                      <p.icon className="size-4 shrink-0 text-link" aria-hidden />
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button to="/book-demo" size="sm" className="mt-4 w-full">
                Book a Demo <ArrowRight className="size-4" aria-hidden />
              </Button>
            </aside>
          )}
        </div>
      </Container>

      <Section tone="alt" aria-labelledby="related-posts">
        <SectionHeader id="related-posts" eyebrow="Keep reading" title="Related articles" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {related.map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Button to="/blog" variant="secondary">
            <BookOpen className="size-4" aria-hidden /> All articles
          </Button>
        </div>
      </Section>
    </>
  )
}
