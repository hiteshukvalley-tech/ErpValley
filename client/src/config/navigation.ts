import {
  Award,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Boxes,
  Brain,
  Briefcase,
  Building2,
  Calculator,
  ClipboardList,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  Factory,
  FileSearch,
  FileText,
  FolderKanban,
  GitCompare,
  GraduationCap,
  Handshake,
  HardHat,
  HeartPulse,
  Hotel,
  Landmark,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Mail,
  Megaphone,
  Network,
  Newspaper,
  Palette,
  PlugZap,
  Presentation,
  RefreshCw,
  Route,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Target,
  Truck,
  UserCog,
  Users,
  UsersRound,
  Video,
  Wallet,
  Warehouse,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

export interface NavItem {
  label: string
  to: string
  description: string
  icon: LucideIcon
}

export interface NavGroup {
  title: string
  items: NavItem[]
}

export interface NavMenu {
  label: string
  /** Landing page for the whole menu (shown as "View all"). */
  to?: string
  groups: NavGroup[]
  feature?: { title: string; text: string; cta: string; to: string }
}

export const productItems: NavItem[] = [
  { label: 'ERP Platform', to: '/products/erp-platform', description: 'One connected system for every department', icon: LayoutDashboard },
  { label: 'Finance & Accounting', to: '/products/finance-accounting', description: 'Ledgers, invoicing, tax and close', icon: Calculator },
  { label: 'CRM', to: '/products/crm', description: 'Pipeline, contacts and follow-ups', icon: Target },
  { label: 'HR & Payroll', to: '/products/hr-payroll', description: 'People, attendance and payroll runs', icon: UsersRound },
  { label: 'Inventory Management', to: '/products/inventory-management', description: 'Stock levels, warehouses and transfers', icon: Warehouse },
  { label: 'Procurement', to: '/products/procurement', description: 'Requisitions, approvals and vendors', icon: ClipboardList },
  { label: 'Sales Management', to: '/products/sales-management', description: 'Quotes, orders and fulfilment', icon: ShoppingCart },
  { label: 'Purchase Management', to: '/products/purchase-management', description: 'Purchase orders and receiving', icon: ShoppingBag },
  { label: 'Manufacturing', to: '/products/manufacturing', description: 'BOMs, work orders and production', icon: Factory },
  { label: 'Project Management', to: '/products/project-management', description: 'Tasks, timesheets and budgets', icon: FolderKanban },
  { label: 'Reporting & Analytics', to: '/products/reporting-analytics', description: 'Dashboards and real-time KPIs', icon: BarChart3 },
  { label: 'Workflow Automation', to: '/products/workflow-automation', description: 'Rules, approvals and triggers', icon: Workflow },
  { label: 'Integrations', to: '/products/integrations', description: 'Connect the tools you already use', icon: PlugZap },
]

export const industryItems: NavItem[] = [
  { label: 'Manufacturing', to: '/industries/manufacturing', description: 'Production planning and shop-floor control', icon: Factory },
  { label: 'Retail & Ecommerce', to: '/industries/retail-ecommerce', description: 'Omnichannel stock and orders', icon: Store },
  { label: 'FinTech & Lending', to: '/industries/fintech-lending', description: 'Loan operations and compliance', icon: Landmark },
  { label: 'Healthcare', to: '/industries/healthcare', description: 'Supplies, staff and billing', icon: HeartPulse },
  { label: 'Education', to: '/industries/education', description: 'Admissions, fees and staff', icon: GraduationCap },
  { label: 'Logistics & Supply Chain', to: '/industries/logistics-supply-chain', description: 'Fleet, shipments and warehouses', icon: Truck },
  { label: 'Real Estate', to: '/industries/real-estate', description: 'Properties, leases and collections', icon: Building2 },
  { label: 'Professional Services', to: '/industries/professional-services', description: 'Projects, time and billing', icon: Briefcase },
  { label: 'Distribution', to: '/industries/distribution', description: 'Wholesale orders and routes', icon: Boxes },
  { label: 'Hospitality', to: '/industries/hospitality', description: 'Properties, procurement and staff', icon: Hotel },
  { label: 'Construction', to: '/industries/construction', description: 'Job costing and site materials', icon: HardHat },
]

export const serviceItems: NavItem[] = [
  { label: 'Custom ERP Development', to: '/services/custom-erp-development', description: 'ERP built around your processes', icon: Code2 },
  { label: 'ERP Implementation', to: '/services/erp-implementation', description: 'Setup, configuration and go-live', icon: Route },
  { label: 'ERP Consulting', to: '/services/erp-consulting', description: 'Process review and roadmap', icon: Compass },
  { label: 'Legacy Modernization', to: '/services/legacy-modernization', description: 'Move off outdated systems safely', icon: RefreshCw },
  { label: 'Cloud Infrastructure', to: '/services/cloud-infrastructure', description: 'Secure, scalable hosting', icon: Cloud },
  { label: 'API Development', to: '/services/api-development', description: 'Reliable, documented APIs', icon: Network },
  { label: 'Third-Party Integrations', to: '/services/third-party-integrations', description: 'Payments, shipping, accounting and more', icon: PlugZap },
  { label: 'Data Migration', to: '/services/data-migration', description: 'Clean, validated data transfer', icon: Database },
  { label: 'UI/UX Design', to: '/services/ui-ux-design', description: 'Interfaces teams enjoy using', icon: Palette },
  { label: 'AI & Automation', to: '/services/ai-automation', description: 'Automate repetitive work', icon: Brain },
  { label: 'Quality Assurance', to: '/services/quality-assurance', description: 'Manual and automated testing', icon: BadgeCheck },
  { label: 'Maintenance & Support', to: '/services/maintenance-support', description: 'Updates, monitoring and help desk', icon: LifeBuoy },
]

/** Solutions = the same platform framed by business goal, linking to existing pages. */
export const solutionItems: NavItem[] = [
  { label: 'Connect finance & operations', to: '/products/erp-platform', description: 'Replace disconnected spreadsheets', icon: Layers },
  { label: 'Grow and manage sales', to: '/products/crm', description: 'From first lead to repeat order', icon: Target },
  { label: 'Control stock & supply', to: '/products/inventory-management', description: 'Fewer stock-outs and over-orders', icon: Warehouse },
  { label: 'Automate approvals', to: '/products/workflow-automation', description: 'Cut manual hand-offs', icon: Workflow },
  { label: 'See the whole business', to: '/products/reporting-analytics', description: 'Live dashboards for leadership', icon: BarChart3 },
  { label: 'Integrate existing tools', to: '/products/integrations', description: 'Keep what already works', icon: PlugZap },
]

export const solutionExtras: NavItem[] = [
  { label: 'Compare products', to: '/products/compare', description: 'Find the right module mix', icon: GitCompare },
  { label: 'Pricing', to: '/pricing', description: 'Packages and quotes', icon: Wallet },
  { label: 'Engagement models', to: '/engagement-models', description: 'Fixed scope, dedicated team or hourly', icon: Handshake },
]

export const resourceItems: NavItem[] = [
  { label: 'Blog', to: '/blog', description: 'ERP insights and product news', icon: Newspaper },
  { label: 'ERP Guides', to: '/guides', description: 'Step-by-step buying and rollout guides', icon: BookOpen },
  { label: 'Whitepapers', to: '/whitepapers', description: 'In-depth technical papers', icon: FileText },
  { label: 'Industry Reports', to: '/reports', description: 'Sector trends and analysis', icon: FileSearch },
  { label: 'Webinars', to: '/webinars', description: 'Live and recorded sessions', icon: Video },
  { label: 'Case Studies', to: '/case-studies', description: 'How projects were delivered', icon: Presentation },
  { label: 'FAQ', to: '/faq', description: 'Answers to common questions', icon: LifeBuoy },
  { label: 'Newsletter', to: '/newsletter', description: 'Monthly ERP updates by email', icon: Mail },
]

export const companyItems: NavItem[] = [
  { label: 'About ERPVALLEY', to: '/about', description: 'Who we are and how we work', icon: Sparkles },
  { label: 'Our Process', to: '/process', description: 'From discovery to support', icon: Route },
  { label: 'Technology Stack', to: '/technology', description: 'Tools and platforms we use', icon: Cpu },
  { label: 'Portfolio', to: '/portfolio', description: 'Selected work', icon: FolderKanban },
  { label: 'Team', to: '/team', description: 'The people behind ERPVALLEY', icon: Users },
  { label: 'Leadership', to: '/leadership', description: 'Our leadership team', icon: UserCog },
  { label: 'Company Values', to: '/values', description: 'What we stand for', icon: Award },
  { label: 'Partners', to: '/partners', description: 'Technology and channel partners', icon: Handshake },
  { label: 'Careers', to: '/careers', description: 'Join the team', icon: Megaphone },
  { label: 'Hire Developers', to: '/hire-developers', description: 'Dedicated ERP and MERN engineers', icon: Code2 },
  { label: 'Contact', to: '/contact', description: 'Talk to our team', icon: Mail },
  { label: 'Privacy & Security', to: '/privacy', description: 'How we protect your data', icon: ShieldCheck },
]

export const mainNav: NavMenu[] = [
  {
    label: 'Products',
    to: '/products',
    groups: [{ title: 'ERP modules', items: productItems }],
    feature: {
      title: 'Not sure which modules you need?',
      text: 'Compare modules side by side or get a recommendation from our team.',
      cta: 'Compare products',
      to: '/products/compare',
    },
  },
  {
    label: 'Solutions',
    to: '/products',
    groups: [
      { title: 'By business goal', items: solutionItems },
      { title: 'Plan & buy', items: solutionExtras },
    ],
  },
  {
    label: 'Industries',
    to: '/industries',
    groups: [{ title: 'Industries we serve', items: industryItems }],
    feature: {
      title: 'Industry consultation',
      text: 'Map your industry workflows to the right ERP setup.',
      cta: 'Book a consultation',
      to: '/book-demo',
    },
  },
  {
    label: 'Services',
    to: '/services',
    groups: [{ title: 'What we deliver', items: serviceItems }],
    feature: {
      title: 'Have a project in mind?',
      text: 'Share your requirements and get a scoped estimate.',
      cta: 'Request a quote',
      to: '/request-quote',
    },
  },
  {
    label: 'Resources',
    groups: [{ title: 'Learn', items: resourceItems }],
  },
  {
    label: 'Company',
    groups: [{ title: 'ERPVALLEY', items: companyItems }],
  },
]

/** Pages that exist but are not in the mega menus (core, legal, auth). */
export const otherPages: NavItem[] = [
  { label: 'All Products', to: '/products', description: 'Every ERPVALLEY module and how they connect.', icon: Layers },
  { label: 'All Industries', to: '/industries', description: 'ERP solutions configured for your industry.', icon: Building2 },
  { label: 'All Services', to: '/services', description: 'ERP and IT services from consultation to support.', icon: Wrench },
  { label: 'Book a Demo', to: '/book-demo', description: 'See ERPVALLEY working with your own processes.', icon: Presentation },
  { label: 'Request a Quote', to: '/request-quote', description: 'Tell us what you need and receive a scoped quote.', icon: FileText },
  { label: 'Privacy Policy', to: '/privacy', description: 'How ERPVALLEY collects, uses and protects personal data.', icon: ShieldCheck },
  { label: 'Terms of Service', to: '/terms', description: 'Terms that govern use of the ERPVALLEY website and services.', icon: FileText },
  { label: 'Cookie Policy', to: '/cookies', description: 'Which cookies we use and how to control them.', icon: FileText },
  { label: 'Log in', to: '/login', description: 'Access your ERPVALLEY customer account.', icon: UserCog },
  { label: 'Create account', to: '/register', description: 'Register for an ERPVALLEY customer account.', icon: UserCog },
  { label: 'Search', to: '/search', description: 'Search products, services and articles.', icon: FileSearch },
  { label: 'Developer Profiles', to: '/developers', description: 'Profiles of developers available for hire.', icon: Wrench },
]

/** Flat lookup of every known public page, keyed by path. */
export const pageRegistry: Map<string, NavItem> = (() => {
  const map = new Map<string, NavItem>()
  const all = [
    ...mainNav.flatMap((m) => m.groups.flatMap((g) => g.items)),
    ...otherPages,
  ]
  for (const item of all) if (!map.has(item.to)) map.set(item.to, item)
  return map
})()

export const footerColumns: { title: string; links: { label: string; to: string }[] }[] = [
  { title: 'Products', links: [{ label: 'All products', to: '/products' }, ...productItems.slice(0, 6), { label: 'Compare', to: '/products/compare' }] },
  { title: 'Industries', links: industryItems.slice(0, 7) },
  { title: 'Services', links: serviceItems.slice(0, 7) },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Our Process', to: '/process' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Careers', to: '/careers' },
      { label: 'Partners', to: '/partners' },
      { label: 'Hire Developers', to: '/hire-developers' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', to: '/blog' },
      { label: 'ERP Guides', to: '/guides' },
      { label: 'Webinars', to: '/webinars' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
]

export const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Cookie Policy', to: '/cookies' },
]
