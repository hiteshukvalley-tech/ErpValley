import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { PublicLayout } from '@/layouts/PublicLayout'
import { HomePage } from '@/pages/HomePage'
import { RegistryPage } from '@/pages/RegistryPage'
import { ServerErrorPage } from '@/pages/ServerErrorPage'

/*
 * The homepage, layout and error pages ship in the main bundle. Every other page is loaded on demand,
 * so the large content files (products, industries, services, posts) are only downloaded when needed.
 */

/** Builds a route `lazy` loader that picks one page component from a module. */
const lazyPage =
  <M,>(load: () => Promise<M>, pick: (m: M) => React.ComponentType) =>
  async () => ({ Component: pick(await load()) })

const products = () => import('@/pages/products/ProductsOverviewPage')
const productCompare = () => import('@/pages/products/ProductComparePage')
const productDetail = () => import('@/pages/products/ProductDetailPage')
const industries = () => import('@/pages/industries/IndustriesPage')
const industryDetail = () => import('@/pages/industries/IndustryDetailPage')
const services = () => import('@/pages/services/ServicesPage')
const serviceDetail = () => import('@/pages/services/ServiceDetailPage')
const company = () => import('@/pages/company/CompanyPages')
const people = () => import('@/pages/company/PeoplePages')
const sales = () => import('@/pages/company/SalesPages')
const caseStudies = () => import('@/pages/company/CaseStudiesPage')
const caseStudyDetail = () => import('@/pages/company/CaseStudyDetailPage')
const blog = () => import('@/pages/resources/BlogPages')
const newsletter = () => import('@/pages/resources/NewsletterPage')
const search = () => import('@/pages/resources/SearchPage')
const legal = () => import('@/pages/legal/LegalPages')

export const routes: RouteObject[] = [
  {
    element: <PublicLayout />,
    errorElement: <ServerErrorPage />,
    hydrateFallbackElement: <div className="min-h-dvh bg-bg" aria-busy="true" />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '500', element: <ServerErrorPage /> },
      { path: 'products', lazy: lazyPage(products, (m) => m.ProductsOverviewPage) },
      { path: 'products/compare', lazy: lazyPage(productCompare, (m) => m.ProductComparePage) },
      { path: 'products/:slug', lazy: lazyPage(productDetail, (m) => m.ProductDetailPage) },
      { path: 'industries', lazy: lazyPage(industries, (m) => m.IndustriesPage) },
      { path: 'industries/:slug', lazy: lazyPage(industryDetail, (m) => m.IndustryDetailPage) },
      { path: 'services', lazy: lazyPage(services, (m) => m.ServicesPage) },
      { path: 'services/:slug', lazy: lazyPage(serviceDetail, (m) => m.ServiceDetailPage) },
      { path: 'about', lazy: lazyPage(company, (m) => m.AboutPage) },
      { path: 'process', lazy: lazyPage(company, (m) => m.ProcessPage) },
      { path: 'technology', lazy: lazyPage(company, (m) => m.TechnologyPage) },
      { path: 'values', lazy: lazyPage(company, (m) => m.ValuesPage) },
      { path: 'partners', lazy: lazyPage(company, (m) => m.PartnersPage) },
      { path: 'careers', lazy: lazyPage(company, (m) => m.CareersPage) },
      { path: 'engagement-models', lazy: lazyPage(company, (m) => m.EngagementModelsPage) },
      { path: 'team', lazy: lazyPage(people, (m) => m.TeamPage) },
      { path: 'leadership', lazy: lazyPage(people, (m) => m.LeadershipPage) },
      { path: 'portfolio', lazy: lazyPage(people, (m) => m.PortfolioPage) },
      { path: 'hire-developers', lazy: lazyPage(sales, (m) => m.HireDevelopersPage) },
      { path: 'developers', lazy: lazyPage(sales, (m) => m.DevelopersPage) },
      { path: 'pricing', lazy: lazyPage(sales, (m) => m.PricingPage) },
      { path: 'faq', lazy: lazyPage(sales, (m) => m.FaqPage) },
      { path: 'case-studies', lazy: lazyPage(caseStudies, (m) => m.CaseStudiesPage) },
      { path: 'case-studies/:slug', lazy: lazyPage(caseStudyDetail, (m) => m.CaseStudyDetailPage) },
      { path: 'blog', lazy: lazyPage(blog, (m) => m.BlogPage) },
      { path: 'blog/:slug', lazy: lazyPage(blog, (m) => m.BlogPostPage) },
      { path: 'guides', lazy: lazyPage(blog, (m) => m.GuidesPage) },
      { path: 'whitepapers', lazy: lazyPage(blog, (m) => m.WhitepapersPage) },
      { path: 'reports', lazy: lazyPage(blog, (m) => m.ReportsPage) },
      { path: 'webinars', lazy: lazyPage(blog, (m) => m.WebinarsPage) },
      { path: 'search', lazy: lazyPage(search, (m) => m.SearchPage) },
      { path: 'newsletter', lazy: lazyPage(newsletter, (m) => m.NewsletterPage) },
      { path: 'privacy', lazy: lazyPage(legal, (m) => m.PrivacyPage) },
      { path: 'terms', lazy: lazyPage(legal, (m) => m.TermsPage) },
      { path: 'cookies', lazy: lazyPage(legal, (m) => m.CookiesPage) },
      ...(import.meta.env.DEV
        ? [{ path: 'design-system', lazy: lazyPage(() => import('@/pages/DesignSystemPage'), (m) => m.DesignSystemPage) }]
        : []),
      // Pages become explicit routes in later steps; until then the registry renders them.
      { path: '*', element: <RegistryPage /> },
    ],
  },
]

export const router = createBrowserRouter(routes)
