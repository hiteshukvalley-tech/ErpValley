import { ArrowRight, BadgeCheck, PlayCircle } from 'lucide-react'
import { DashboardMockup } from '@/components/mockups/DashboardMockup'
import { PhoneMockup } from '@/components/mockups/PhoneMockup'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { heroKeyPoints } from '@/content/home'

export function Hero() {
  return (
    <>
      <section className="bg-hero relative overflow-hidden text-white" aria-labelledby="hero-title">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
          aria-hidden
        />
        <Container className="relative pb-[200px] pt-14 text-center sm:pb-[260px] sm:pt-20 lg:pb-[330px] lg:pt-20">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-mist">
            <span className="size-1.5 rounded-full bg-logo-blue" aria-hidden />
            All-in-one ERP software and services, for every industry
          </p>
          <h1
            id="hero-title"
            className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[64px]"
          >
            Run Your Business Smarter with <span className="text-logo-blue">ERPVALLEY</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist">
            Ready-to-use ERP apps for finance, sales, inventory, HR, purchasing and production, plus the experts who
            set them up, connect your tools and support your team. Connect every department, cut manual work and
            see your whole business in real time.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/book-demo" size="lg">
              Book a Free Demo <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button to="/products" variant="onDark" size="lg">
              <PlayCircle className="size-4" aria-hidden /> Explore Solutions
            </Button>
          </div>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-mist">
            <BadgeCheck className="size-4 text-logo-blue" aria-hidden />
            Personalized walkthrough · Tailored quote · No obligation
          </p>

          <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {heroKeyPoints.map((k) => (
              <li
                key={k.label}
                className="card-hover flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-3 text-xs font-medium text-white hover:bg-white/[0.08]"
              >
                <k.icon className="size-5 text-logo-blue" aria-hidden />
                {k.label}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Product visuals overlap the bottom of the hero and continue into the page. */}
      <div className="relative z-10 -mt-[160px] sm:-mt-[220px] lg:-mt-[280px]">
        <Container>
          <figure className="relative mx-auto max-w-6xl">
            <div aria-hidden>
              <DashboardMockup />
            </div>

            <div className="absolute -right-8 bottom-10 hidden xl:block" aria-hidden>
              <PhoneMockup />
            </div>

            <div
              className="absolute -left-10 top-[58%] hidden w-56 rounded-xl border border-line bg-surface p-3.5 text-left shadow-pop xl:block"
              aria-hidden
            >
              <p className="flex items-center gap-2 text-xs font-semibold text-fg">
                <span className="inline-flex size-7 items-center justify-center rounded-lg bg-emerald-500/12 text-emerald-700 dark:text-emerald-400">
                  <BadgeCheck className="size-4" />
                </span>
                Payment received
              </p>
              <p className="mt-2 text-[11.5px] leading-snug text-fg-muted">
                INV-3107 marked paid. Ledger, cash report and customer balance updated automatically.
              </p>
            </div>

            <figcaption className="mt-3 text-center text-xs text-fg-muted">Product preview with sample data.</figcaption>
          </figure>
        </Container>
      </div>
    </>
  )
}
