import {
  Boxes,
  Cloud,
  Code2,
  Database,
  FileClock,
  GitBranch,
  Globe2,
  KeyRound,
  Landmark,
  LayoutGrid,
  Link2,
  Lock,
  Mail,
  MonitorSmartphone,
  Repeat2,
  Rocket,
  Search,
  Server,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Shuffle,
  Sparkles,
  Table2,
  Truck,
  Users,
  Wallet,
  Webhook,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export type PreviewKind = 'finance' | 'crm' | 'inventory' | 'analytics'

export const heroKeyPoints: { label: string; icon: LucideIcon }[] = [
  { label: 'All-in-one modules', icon: LayoutGrid },
  { label: 'Any industry', icon: Globe2 },
  { label: 'Role-based security', icon: ShieldCheck },
  { label: 'Open REST API', icon: Webhook },
  { label: 'Expert setup included', icon: Rocket },
  { label: 'Ongoing support', icon: Users },
]

export interface Offer {
  id: 'software' | 'services' | 'custom'
  eyebrow: string
  title: string
  text: string
  points: string[]
  cta: { label: string; to: string }
}

/** The three things ERPVALLEY sells, shown directly under the hero. */
export const offers: Offer[] = [
  {
    id: 'software',
    eyebrow: 'ERP software',
    title: 'Ready-to-use business apps',
    text: 'Finance, CRM, sales, inventory, purchasing, manufacturing, HR, projects and reporting, all on one platform.',
    points: ['Start with one module, add more any time', 'One database, no double entry', 'Works on desktop, tablet and phone'],
    cta: { label: 'Explore products', to: '/products' },
  },
  {
    id: 'services',
    eyebrow: 'Implementation and consulting',
    title: 'Set up by ERP experts',
    text: 'We map your processes, configure the system, move your data and train your team, then stay on to support you.',
    points: ['Discovery and process mapping', 'Data migration and training', 'Go-live support and maintenance'],
    cta: { label: 'See our services', to: '/services' },
  },
  {
    id: 'custom',
    eyebrow: 'Custom development',
    title: 'Built around your business',
    text: 'Custom modules, integrations and APIs for the processes that off-the-shelf software does not cover.',
    points: ['Custom ERP modules and dashboards', 'Integrations with your existing tools', 'Dedicated developers on demand'],
    cta: { label: 'Custom development', to: '/services/custom-erp-development' },
  },
]

export const challenges: { problem: string; detail: string; approach: string; icon: LucideIcon }[] = [
  {
    icon: Shuffle,
    problem: 'Data spread across disconnected tools',
    detail: 'Sales, stock and accounts live in separate spreadsheets and apps that never quite agree.',
    approach: 'One shared database, so an order updates stock, invoices and reports at the same time.',
  },
  {
    icon: Repeat2,
    problem: 'Manual, repetitive data entry',
    detail: 'Teams re-key the same information and chase approvals over email and chat.',
    approach: 'Automated workflows route approvals, create documents and send reminders for you.',
  },
  {
    icon: Search,
    problem: 'No clear view of performance',
    detail: 'Leaders wait for month-end reports and decide using numbers that are already out of date.',
    approach: 'Live dashboards built on the same data your teams work in every day.',
  },
  {
    icon: FileClock,
    problem: 'Systems that cannot grow with you',
    detail: 'Legacy software is hard to change, hard to integrate and expensive to maintain.',
    approach: 'Modular apps and open APIs, so you add capability without starting over.',
  },
]

export const featuredProducts: {
  id: PreviewKind
  label: string
  title: string
  description: string
  points: string[]
  to: string
}[] = [
  {
    id: 'finance',
    label: 'Finance',
    title: 'Finance and accounting that closes faster',
    description:
      'Keep ledgers, invoices, payments and tax in one place, with every entry traceable back to the order or bill that created it.',
    points: ['General ledger and chart of accounts', 'Invoicing, payments and receivables ageing', 'Bank reconciliation and period close'],
    to: '/products/finance-accounting',
  },
  {
    id: 'crm',
    label: 'CRM',
    title: 'A sales pipeline your whole team can see',
    description:
      'Track every lead from first contact to signed order. Quotes, activities and follow-ups stay attached to the customer record.',
    points: ['Visual pipeline with custom stages', 'Activities, reminders and email history', 'Quotes that convert straight into sales orders'],
    to: '/products/crm',
  },
  {
    id: 'inventory',
    label: 'Inventory',
    title: 'Stock levels you can trust',
    description:
      'Know what is on hand, reserved and on order across every warehouse, and get alerted before items run out.',
    points: ['Multi-warehouse stock and transfers', 'Reorder rules and low-stock alerts', 'Batch, serial and expiry tracking'],
    to: '/products/inventory-management',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    title: 'Reporting built on live data',
    description:
      'Dashboards and reports pull from the same records your teams use, so numbers are current and consistent.',
    points: ['Role-based dashboards and KPIs', 'Drill down from totals to transactions', 'Scheduled reports and exports'],
    to: '/products/reporting-analytics',
  },
]

export const platformCapabilities: { title: string; text: string; icon: LucideIcon }[] = [
  { icon: LayoutGrid, title: 'Modular by design', text: 'Turn modules on as you need them. They share one data model, so nothing has to be re-entered.' },
  { icon: Users, title: 'Roles and permissions', text: 'Control who can view, create, approve or export, down to individual modules and actions.' },
  { icon: Workflow, title: 'Workflow engine', text: 'Define approval chains, triggers and automated actions without custom code.' },
  { icon: Table2, title: 'Audit trail', text: 'Every change records who made it and when, for accountability and easier audits.' },
  { icon: Globe2, title: 'Multi-company and currency', text: 'Run several entities, branches and currencies from a single system.' },
  { icon: MonitorSmartphone, title: 'Works on any device', text: 'Responsive interface for desktop, tablet and phone, so teams can work from anywhere.' },
]

export const integrationCategories: { label: string; icon: LucideIcon }[] = [
  { label: 'Payment gateways', icon: Wallet },
  { label: 'Banking and finance', icon: Landmark },
  { label: 'Ecommerce stores', icon: ShoppingCart },
  { label: 'Shipping and logistics', icon: Truck },
  { label: 'Email and messaging', icon: Mail },
  { label: 'Single sign-on', icon: KeyRound },
  { label: 'Webhooks', icon: Webhook },
  { label: 'Custom REST APIs', icon: Link2 },
]

export const processSteps: { title: string; text: string; icon: LucideIcon }[] = [
  { icon: Search, title: 'Discover', text: 'We map how your business works today, including the workarounds, and agree on goals.' },
  { icon: GitBranch, title: 'Plan', text: 'A scoped roadmap with modules, integrations, data sources, milestones and owners.' },
  { icon: Settings2, title: 'Configure', text: 'We set up modules, workflows and roles, and build any custom features you need.' },
  { icon: Database, title: 'Migrate', text: 'Your existing data is cleaned, mapped, imported and checked against the source.' },
  { icon: Sparkles, title: 'Train', text: 'Role-based training and documentation, so every team is confident before go-live.' },
  { icon: Rocket, title: 'Go live and support', text: 'A supported launch, followed by monitoring, improvements and ongoing help.' },
]

export const techGroups: { title: string; icon: LucideIcon; items: string[] }[] = [
  { title: 'Frontend', icon: MonitorSmartphone, items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
  { title: 'Backend', icon: Server, items: ['Node.js', 'Express', 'REST APIs', 'Background jobs'] },
  { title: 'Data', icon: Database, items: ['MongoDB', 'Indexed search', 'Automated backups', 'Data migration tooling'] },
  { title: 'Cloud and DevOps', icon: Cloud, items: ['Cloud hosting', 'CI/CD pipelines', 'Monitoring and logs', 'Environment isolation'] },
]

export const securityPoints: { title: string; icon: LucideIcon }[] = [
  { title: 'Encrypted connections (HTTPS)', icon: Lock },
  { title: 'Hashed passwords and secure sessions', icon: KeyRound },
  { title: 'Role-based access control', icon: ShieldCheck },
  { title: 'Audit logs for admin actions', icon: Table2 },
  { title: 'Documented APIs', icon: Code2 },
  { title: 'Scalable, modular architecture', icon: Boxes },
]

/** Engagement types shown until verified case studies are published from the admin panel. */
export const engagementTypes: { title: string; text: string; scope: string[]; icon: LucideIcon }[] = [
  {
    icon: Rocket,
    title: 'ERP implementation',
    text: 'Rolling out ERPVALLEY modules for a business moving off spreadsheets or a basic accounting tool.',
    scope: ['Process mapping', 'Module configuration', 'Data migration', 'Team training'],
  },
  {
    icon: Repeat2,
    title: 'Legacy modernization',
    text: 'Replacing an ageing in-house or desktop system with a modern, web-based platform.',
    scope: ['System audit', 'Phased migration', 'Integration rebuild', 'Parallel run'],
  },
  {
    icon: Code2,
    title: 'Custom ERP build',
    text: 'Building modules around processes that off-the-shelf software does not cover.',
    scope: ['Requirements workshop', 'UI/UX design', 'Development and QA', 'Ongoing support'],
  },
]

export const homeFaqs: { q: string; a: string }[] = [
  {
    q: 'What is ERPVALLEY?',
    a: 'ERPVALLEY is a modular ERP platform with implementation and custom development services. It brings finance, sales, inventory, HR, procurement, projects and reporting into one connected system.',
  },
  {
    q: 'Do I have to use every module?',
    a: 'No. Most businesses start with the modules that solve their most pressing problems, such as finance and inventory, and add others later. All modules share the same data, so adding one does not mean re-entering information.',
  },
  {
    q: 'Can ERPVALLEY work with the software we already use?',
    a: 'Yes. ERPVALLEY provides a REST API and webhooks, and our team builds integrations with payment gateways, ecommerce stores, banking, shipping and other business tools.',
  },
  {
    q: 'How long does an implementation take?',
    a: 'It depends on the number of modules, integrations and the amount of data to migrate. After a discovery session we provide a scoped plan with milestones, so you know the timeline before work begins.',
  },
  {
    q: 'Can you customize the ERP for our processes?',
    a: 'Yes. We configure workflows, fields, roles and reports, and we build custom modules when your processes need something the standard product does not cover.',
  },
  {
    q: 'How is pricing calculated?',
    a: 'Pricing depends on the modules, number of users, integrations and implementation scope. Request a quote and we will send a proposal based on your requirements.',
  },
  {
    q: 'What support is available after go-live?',
    a: 'We offer ongoing maintenance and support, including bug fixes, updates, monitoring and help for your users. Support plans are tailored to how critical the system is to your operations.',
  },
]

