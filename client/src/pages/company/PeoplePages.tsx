import { ArrowRight, Briefcase, ClipboardCheck, Code2, Compass, Headphones, Palette, UserRound, Users } from 'lucide-react'
import { CtaBand } from '@/components/common/CtaBand'
import { IconGrid } from '@/components/common/IconGrid'
import { LinkCards } from '@/components/common/LinkCards'
import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { Section, SectionHeader } from '@/components/ui/Section'
import type { IconItem } from '@/content/types'
import { usePageMeta } from '@/hooks/usePageMeta'
import { useContent } from '@/services/content'

/* Team, Leadership and Portfolio. Profiles and projects are shown only once real details are provided. */

const projectRoles: IconItem[] = [
  { icon: Briefcase, title: 'Project manager', text: 'Your single point of contact. Owns the plan, milestones, risks and weekly status updates.' },
  { icon: Compass, title: 'ERP functional consultant', text: 'Maps your business processes to ERPVALLEY modules and configures workflows, roles and reports.' },
  { icon: Code2, title: 'Developers', text: 'Build integrations, custom modules and data migration scripts, following code review and testing standards.' },
  { icon: Palette, title: 'UI/UX designer', text: 'Designs custom screens and dashboards so they are clear and quick to use for every role.' },
  { icon: ClipboardCheck, title: 'QA engineer', text: 'Tests each release against agreed acceptance criteria, including automated regression tests.' },
  { icon: Headphones, title: 'Support team', text: 'Handles questions, fixes and updates after go-live, through a ticketing process with clear priorities.' },
]

export function TeamPage() {
  usePageMeta('Our Team', 'Meet the ERPVALLEY team and the roles that deliver every ERP project, from project managers and consultants to developers, QA and support.')
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="The people behind every project"
        description="Each ERPVALLEY project is staffed by a small, dedicated team with clear roles and one accountable project manager."
        actions={<Button to="/careers" variant="onDark" size="lg">Join the team</Button>}
      />
      <Section aria-labelledby="roles-title">
        <SectionHeader id="roles-title" eyebrow="How projects are staffed" title="Who you work with" />
        <div className="mt-12">
          <IconGrid items={projectRoles} columns={3} />
        </div>
      </Section>
      <Section tone="alt" aria-label="Team profiles">
        <EmptyState
          icon={Users}
          title="Team profiles coming soon"
          text="We are preparing profiles of the people you will work with. Ask us on a call and we will introduce the team for your project."
          actions={<Button to="/contact">Talk to our team</Button>}
        />
      </Section>
      <CtaBand />
    </>
  )
}

export function LeadershipPage() {
  usePageMeta('Leadership', 'ERPVALLEY leadership: the people responsible for our direction, delivery standards and long-term relationships with clients.')
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Leadership"
        description="Our leadership team is responsible for delivery standards, product direction and long-term client relationships."
        actions={<Button to="/values" variant="onDark" size="lg">Our values</Button>}
      />
      <Section aria-label="Leadership profiles">
        <EmptyState
          icon={UserRound}
          title="Leadership profiles coming soon"
          text="Profiles of our leadership team will be published here. If you would like to speak with a member of our leadership about a project or partnership, contact us."
          actions={
            <>
              <Button to="/contact">Contact us</Button>
              <Button to="/about" variant="secondary">About ERPVALLEY</Button>
            </>
          }
        />
      </Section>
      <CtaBand />
    </>
  )
}

export function PortfolioPage() {
  const { services } = useContent<'services'>()
  usePageMeta('Portfolio', 'The ERPVALLEY portfolio: ERP implementations, custom development, integrations and modernization work across industries.')
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our work"
        description="ERP implementations, custom modules, integrations and modernization projects. Detailed write-ups are published as case studies once clients approve them."
        actions={
          <Button to="/case-studies" size="lg">
            View case studies <ArrowRight className="size-4" aria-hidden />
          </Button>
        }
      />
      <Section aria-labelledby="areas-title">
        <SectionHeader id="areas-title" eyebrow="Areas of work" title="What our projects cover" />
        <div className="mt-12">
          <LinkCards items={services.map((s) => ({ to: `/services/${s.slug}`, title: s.name, text: s.summary, icon: s.icon }))} columns={3} />
        </div>
      </Section>
      <CtaBand title="Want to see relevant work?" text="Tell us about your project and we will walk you through comparable experience on a call." />
    </>
  )
}
