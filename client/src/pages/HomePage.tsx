import { CtaBand } from '@/components/common/CtaBand'
import { CaseStudies } from '@/components/home/CaseStudies'
import { Capabilities } from '@/components/home/Capabilities'
import { Challenges } from '@/components/home/Challenges'
import { CoreModules } from '@/components/home/CoreModules'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { Hero } from '@/components/home/Hero'
import { HomeFaq } from '@/components/home/HomeFaq'
import { Industries } from '@/components/home/Industries'
import { Process } from '@/components/home/Process'
// Technology section ("Modern technology, built to last") is hidden for now; uncomment here and below to restore it.
// import { Technology } from '@/components/home/Technology'
import { WhatWeOffer } from '@/components/home/WhatWeOffer'
import { usePageMeta } from '@/hooks/usePageMeta'

export function HomePage() {
  usePageMeta(
    'ERPVALLEY — ERP Software & IT Solutions',
    'ERPVALLEY connects finance, sales, inventory, HR and operations in one ERP platform, with implementation and custom development services.',
  )
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <CoreModules />
      <Challenges />
      <FeaturedProducts />
      <Industries />
      <Capabilities />
      <CaseStudies />
      <Process />
      {/* <Technology /> */}
      <HomeFaq />
      <CtaBand
        title="Ready to run your business smarter?"
        text="Book a free consultation. We will review your current processes and show how ERPVALLEY can connect them."
        primary={{ label: 'Book a Demo', to: '/book-demo' }}
        secondary={{ label: 'Talk to sales', to: '/contact' }}
      />
    </>
  )
}
