import type { LucideIcon } from 'lucide-react'
import type { PreviewKind } from './home'

/*
 * Content shapes for product, industry and service pages.
 * Rule for all content: no invented customers, statistics, ratings, certifications or awards.
 */

export type ProductSlug =
  | 'erp-platform'
  | 'finance-accounting'
  | 'crm'
  | 'hr-payroll'
  | 'inventory-management'
  | 'procurement'
  | 'sales-management'
  | 'purchase-management'
  | 'manufacturing'
  | 'project-management'
  | 'reporting-analytics'
  | 'workflow-automation'
  | 'integrations'

export type IndustrySlug =
  | 'manufacturing'
  | 'retail-ecommerce'
  | 'fintech-lending'
  | 'healthcare'
  | 'education'
  | 'logistics-supply-chain'
  | 'real-estate'
  | 'professional-services'
  | 'distribution'
  | 'hospitality'
  | 'construction'

export type ServiceSlug =
  | 'custom-erp-development'
  | 'erp-implementation'
  | 'erp-consulting'
  | 'legacy-modernization'
  | 'cloud-infrastructure'
  | 'api-development'
  | 'third-party-integrations'
  | 'data-migration'
  | 'ui-ux-design'
  | 'ai-automation'
  | 'quality-assurance'
  | 'maintenance-support'

export type ProductCategory = 'Platform' | 'Finance' | 'Sales & Customers' | 'Operations' | 'People & Projects' | 'Insights & Automation'

export interface IconItem {
  title: string
  text: string
  icon: LucideIcon
}

export interface TextItem {
  title: string
  text: string
}

export interface Faq {
  q: string
  a: string
}

/** Sample-data screen rendered as a product preview (fictional data, labelled as such on the page). */
export interface DataScreen {
  title: string
  stats: [label: string, value: string][]
  columns: string[]
  rows: string[][]
  /** Optional status column values, same length as rows (e.g. 'Approved'). */
  statuses?: string[]
}

export interface ProductContent {
  slug: ProductSlug
  name: string
  icon: LucideIcon
  category: ProductCategory
  /** Hero headline (benefit-led, under ~70 characters). */
  headline: string
  /** Hero supporting paragraph (1–2 sentences). */
  summary: string
  /** SEO meta description (140–160 characters). */
  metaDescription: string
  /** One-line purpose used in comparison tables and cards. */
  purpose: string
  /** Who typically uses it, e.g. "Finance teams, accountants". */
  typicalUsers: string
  /** Use a homepage preview if one fits, otherwise a DataScreen. */
  preview: PreviewKind | DataScreen
  benefits: IconItem[] // exactly 4
  features: IconItem[] // exactly 6
  capabilityGroups: { title: string; items: string[] }[] // exactly 3 groups × 4 items
  useCases: TextItem[] // exactly 3
  relatedModules: ProductSlug[] // 3–4, never itself
  integrations: string[] // 4–6 integration categories (no brand names)
  faqs: Faq[] // exactly 4
}

export interface IndustryContent {
  slug: IndustrySlug
  name: string
  icon: LucideIcon
  headline: string
  summary: string
  metaDescription: string
  /** Two short paragraphs describing how businesses in this industry operate. */
  overview: [string, string]
  challenges: IconItem[] // exactly 4
  workflow: { title: string; steps: TextItem[] } // 5 steps
  modules: { slug: ProductSlug; why: string }[] // 4–6
  integrations: string[] // 4–6 categories
  useCases: TextItem[] // exactly 3
  faqs: Faq[] // exactly 4
}

export interface ServiceContent {
  slug: ServiceSlug
  name: string
  icon: LucideIcon
  headline: string
  summary: string
  metaDescription: string
  problems: IconItem[] // exactly 4
  capabilities: IconItem[] // exactly 6
  process: TextItem[] // 4–5 steps
  technologies: string[] // 6–10 generic technologies
  deliverables: string[] // 4–6 concrete deliverables
  relatedServices: ServiceSlug[] // exactly 3, never itself
  relatedProducts: ProductSlug[] // 0–3
  faqs: Faq[] // exactly 4
}

/* ---------- Company, resources, legal ---------- */

export type PostCategory = 'ERP Basics' | 'Implementation' | 'Operations' | 'Finance' | 'Technology'

export type PostBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'callout'; text: string }

export interface PostContent {
  slug: string
  /** blog = article; guide = longer step-by-step ERP guide. */
  kind: 'blog' | 'guide'
  title: string
  excerpt: string
  metaDescription: string
  category: PostCategory
  tags: string[]
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string
  author: string
  body: PostBlock[]
  relatedProducts: ProductSlug[]
}

/** Verified, client-approved case study. Only real projects belong here. */
export interface CaseStudyContent {
  slug: string
  title: string
  client: string
  industry: IndustrySlug
  summary: string
  metaDescription: string
  context: string
  challenge: string[]
  solution: string[]
  approach: TextItem[]
  technologies: string[]
  /** Outcomes confirmed by the client. */
  outcomes: string[]
  products: ProductSlug[]
  services: ServiceSlug[]
}

export interface EngagementModel {
  name: string
  icon: LucideIcon
  bestFor: string
  text: string
  points: string[]
}

export interface DeveloperRole {
  title: string
  icon: LucideIcon
  text: string
  skills: string[]
}

export interface ProcessStageDetail {
  title: string
  icon: LucideIcon
  text: string
  activities: string[]
  deliverables: string[]
}

export interface TechGroup {
  title: string
  icon: LucideIcon
  description: string
  items: { name: string; use: string }[]
}

export interface LegalSection {
  heading: string
  paragraphs: string[]
  items?: string[]
}

export interface LegalDoc {
  title: string
  summary: string
  sections: LegalSection[]
}
