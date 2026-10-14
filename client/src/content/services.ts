import {
  Accessibility,
  Activity,
  ArrowRightLeft,
  BadgeCheck,
  BookOpen,
  Bot,
  Boxes,
  Braces,
  Brain,
  Bug,
  Calculator,
  CircleHelp,
  ClipboardList,
  Clock,
  Cloud,
  CloudCog,
  Code2,
  Compass,
  Component,
  Container,
  Copy,
  Database,
  DatabaseBackup,
  Eraser,
  EyeOff,
  FileCode,
  FileQuestion,
  FileSearch,
  FileSpreadsheet,
  FileText,
  FileWarning,
  FlaskConical,
  Frame,
  Gauge,
  GitBranch,
  GitCompare,
  GitMerge,
  GraduationCap,
  Headphones,
  Hourglass,
  KeyRound,
  Keyboard,
  Landmark,
  LayoutDashboard,
  Layers,
  LifeBuoy,
  ListChecks,
  Lock,
  Mail,
  MessageSquare,
  Monitor,
  MonitorSmartphone,
  MousePointerClick,
  Network,
  Package,
  Palette,
  PenTool,
  PhoneOff,
  PlugZap,
  Puzzle,
  RefreshCw,
  Repeat,
  Rocket,
  RotateCcw,
  Route,
  ScanSearch,
  ScanText,
  Search,
  Server,
  ServerCrash,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  ShieldOff,
  ShoppingCart,
  Shuffle,
  Signpost,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Split,
  Tags,
  TrendingUp,
  TriangleAlert,
  Truck,
  Undo2,
  Unplug,
  UserCheck,
  UserMinus,
  UserX,
  Users,
  Wallet,
  Webhook,
  Workflow,
  Wrench,
} from 'lucide-react'
import type { ServiceContent } from './types'

/*
 * Service page content. Order matches `serviceItems` in config/navigation.ts.
 * No invented customers, statistics, guarantees, certifications or partner badges.
 */

export const services: ServiceContent[] = [
  // 1. Custom ERP Development
  {
    slug: 'custom-erp-development',
    name: 'Custom ERP Development',
    icon: Code2,
    headline: 'ERP software built around the way your business works',
    summary:
      'We design and build ERP modules for the processes off-the-shelf software does not cover, on a modern stack you own and can extend.',
    metaDescription:
      'Custom ERP development by ERPVALLEY: modules, workflows, dashboards and integrations built around your processes on a modern, maintainable web stack.',
    problems: [
      {
        icon: Puzzle,
        title: 'Packaged software does not fit',
        text: 'Standard ERP products force your teams to bend proven processes to match generic defaults.',
      },
      {
        icon: FileSpreadsheet,
        title: 'Critical work lives in spreadsheets',
        text: 'Pricing rules, job costing or approvals sit in files that only a few people understand and nobody can audit.',
      },
      {
        icon: Unplug,
        title: 'Tools that do not share data',
        text: 'Separate apps for each department mean re-keyed data, mismatched numbers and slow month-end reporting.',
      },
      {
        icon: Lock,
        title: 'Locked into a system you cannot change',
        text: 'Every small change needs a vendor ticket, a licence upgrade or a workaround that adds more complexity.',
      },
    ],
    capabilities: [
      {
        icon: Boxes,
        title: 'Custom modules',
        text: 'New modules for your specific operations, built on the same data model as the rest of your ERP.',
      },
      {
        icon: Workflow,
        title: 'Workflows and approvals',
        text: 'Multi-step approval chains, status rules and automated actions that reflect how decisions are really made.',
      },
      {
        icon: Users,
        title: 'Roles and permissions',
        text: 'Fine-grained access control so each team sees and edits only what it is responsible for.',
      },
      {
        icon: LayoutDashboard,
        title: 'Dashboards and reports',
        text: 'Reports and KPI views designed around the questions your managers ask every week.',
      },
      {
        icon: PlugZap,
        title: 'Integrations and APIs',
        text: 'Connections to payment, ecommerce, banking and shipping tools, plus a documented API for future needs.',
      },
      {
        icon: Smartphone,
        title: 'Responsive interfaces',
        text: 'Screens that work on desktop, tablet and phone, so warehouse and field staff can use the system too.',
      },
    ],
    process: [
      { title: 'Discovery workshops', text: 'We walk through your current processes, pain points and goals with the people who do the work.' },
      { title: 'Solution design', text: 'We agree on scope, data model, screens and integrations before any code is written.' },
      { title: 'Iterative build', text: 'Features are delivered in short cycles with regular demos, so you can steer as the system takes shape.' },
      { title: 'Testing and UAT', text: 'Automated and manual testing is followed by user acceptance testing with your own team.' },
      { title: 'Launch and handover', text: 'We deploy to production, train your administrators and hand over code and documentation.' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'REST', 'Docker', 'CI/CD'],
    deliverables: [
      'Requirements and scope document',
      'Clickable prototype of key screens',
      'Production-ready ERP modules',
      'Source code and deployment scripts',
      'Technical and user documentation',
      'Administrator training sessions',
    ],
    relatedServices: ['ui-ux-design', 'quality-assurance', 'maintenance-support'],
    relatedProducts: ['erp-platform', 'workflow-automation', 'reporting-analytics'],
    faqs: [
      {
        q: 'Why build a custom ERP instead of buying one?',
        a: 'Custom development makes sense when your processes are a competitive advantage or standard products need too many workarounds. In many cases we combine ERPVALLEY modules with custom ones, so you only build what is genuinely unique.',
      },
      {
        q: 'How much does custom ERP development cost?',
        a: 'Cost depends on the number of modules, integrations and the complexity of your workflows. After a discovery phase we provide a scoped estimate with milestones, so you know the budget before development starts.',
      },
      {
        q: 'Who owns the code?',
        a: 'Ownership terms are agreed in the contract before work begins. For custom builds we typically hand over the source code, deployment scripts and documentation so your team or another provider can maintain it.',
      },
      {
        q: 'Can we start small and expand later?',
        a: 'Yes. We often start with the module that solves the most pressing problem and add others in later phases. The data model is designed up front so new modules connect without rework.',
      },
    ],
  },

  // 2. ERP Implementation
  {
    slug: 'erp-implementation',
    name: 'ERP Implementation',
    icon: Route,
    headline: 'A structured ERP rollout, from first workshop to go-live',
    summary:
      'We configure ERPVALLEY around your processes, bring your data across and prepare every team, so the system is used properly from the first day.',
    metaDescription:
      'ERP implementation by ERPVALLEY: process mapping, module configuration, data import, role-based training and a supported go-live for your teams.',
    problems: [
      {
        icon: Hourglass,
        title: 'Rollouts that drag on',
        text: 'Without a clear plan and owners, implementations stall in endless configuration and shifting requirements.',
      },
      {
        icon: SlidersHorizontal,
        title: 'Systems set up the wrong way',
        text: 'Default settings that do not match your processes lead to workarounds as soon as the system goes live.',
      },
      {
        icon: UserX,
        title: 'Teams that do not adopt it',
        text: 'If people are not trained for their own role, they drift back to spreadsheets and the old way of working.',
      },
      {
        icon: FileWarning,
        title: 'Messy opening data',
        text: 'Importing duplicates and outdated records means the new system starts with the same problems as the old one.',
      },
    ],
    capabilities: [
      {
        icon: ClipboardList,
        title: 'Process mapping',
        text: 'We document how orders, purchases, stock and finance flow today and how they should flow in the ERP.',
      },
      {
        icon: Settings2,
        title: 'Module configuration',
        text: 'Chart of accounts, tax rules, warehouses, numbering, workflows and templates set up for your business.',
      },
      {
        icon: ShieldCheck,
        title: 'Roles and access',
        text: 'A clear permission matrix so each user has the access their job needs and nothing more.',
      },
      {
        icon: Database,
        title: 'Master data import',
        text: 'Customers, suppliers, items, balances and open documents cleaned, imported and checked.',
      },
      {
        icon: GraduationCap,
        title: 'Role-based training',
        text: 'Hands-on sessions and guides for finance, sales, warehouse and management users.',
      },
      {
        icon: Rocket,
        title: 'Go-live support',
        text: 'Close support during the first weeks of live use, with quick fixes and answers for your teams.',
      },
    ],
    process: [
      { title: 'Kick-off and mapping', text: 'We agree on goals, owners and timeline, then map your key business processes.' },
      { title: 'Configure', text: 'Modules, workflows, roles and document templates are set up and reviewed with your team.' },
      { title: 'Migrate data', text: 'Master data and opening balances are cleaned, imported and verified against your source records.' },
      { title: 'Train users', text: 'Each team is trained on the tasks it will perform, using your own data and scenarios.' },
      { title: 'Go live', text: 'We switch over on an agreed date and stay close to resolve issues as they come up.' },
    ],
    technologies: ['REST', 'Webhooks', 'MongoDB', 'CSV and Excel import', 'Single sign-on', 'Role-based access control', 'Cloud object storage'],
    deliverables: [
      'Implementation plan with milestones',
      'Configured modules and workflows',
      'Role and permission matrix',
      'Imported and verified master data',
      'Training materials and user guides',
      'Go-live checklist',
    ],
    relatedServices: ['data-migration', 'erp-consulting', 'maintenance-support'],
    relatedProducts: ['erp-platform', 'finance-accounting', 'inventory-management'],
    faqs: [
      {
        q: 'How long does an ERP implementation take?',
        a: 'It depends on the number of modules, users, integrations and the volume of data to migrate. After discovery we share a plan with milestones, so the timeline is agreed before work begins.',
      },
      {
        q: 'What do you need from our team?',
        a: 'We need a project owner who can make decisions and key users from each department for workshops, testing and training. We keep their time commitment clear in the plan so daily work can continue.',
      },
      {
        q: 'Can we go live with a few modules first?',
        a: 'Yes, and it is often the safer approach. Many businesses start with finance and inventory, then add sales, procurement or HR in later phases.',
      },
      {
        q: 'What happens after go-live?',
        a: 'We provide hands-on support during the first weeks of live use. After that you can move to an ongoing maintenance and support plan sized to your needs.',
      },
    ],
  },

  // 3. ERP Consulting
  {
    slug: 'erp-consulting',
    name: 'ERP Consulting',
    icon: Compass,
    headline: 'Clear ERP decisions, backed by a review of how you work',
    summary:
      'We review your processes and systems, identify what an ERP needs to do for you and give you a practical roadmap with realistic effort estimates.',
    metaDescription:
      'ERP consulting from ERPVALLEY: process reviews, fit-gap analysis, requirements and a prioritised roadmap so you can plan your ERP investment with confidence.',
    problems: [
      {
        icon: CircleHelp,
        title: 'Unsure where to start',
        text: 'You know the current tools are holding you back, but not which processes to fix first or what to buy.',
      },
      {
        icon: Split,
        title: 'Every team works differently',
        text: 'Branches and departments follow their own versions of the same process, which makes any system hard to configure.',
      },
      {
        icon: Wallet,
        title: 'Budgets without a clear basis',
        text: 'Without defined requirements it is hard to compare options or know whether a quote is realistic.',
      },
      {
        icon: TriangleAlert,
        title: 'A previous project fell short',
        text: 'An earlier ERP attempt stalled or was abandoned, and you want to understand why before trying again.',
      },
    ],
    capabilities: [
      {
        icon: Search,
        title: 'Process review',
        text: 'Interviews and walkthroughs that reveal how work really gets done, including the workarounds.',
      },
      {
        icon: GitCompare,
        title: 'Fit-gap analysis',
        text: 'A clear view of what standard modules cover, what needs configuration and what needs custom work.',
      },
      {
        icon: FileText,
        title: 'Requirements definition',
        text: 'Written, prioritised requirements that any implementation team can estimate and build against.',
      },
      {
        icon: Signpost,
        title: 'ERP roadmap',
        text: 'A phased plan that sequences modules, integrations and data work around your business priorities.',
      },
      {
        icon: Calculator,
        title: 'Effort and budget estimates',
        text: 'Realistic ranges for time and cost per phase, so you can plan and secure budget with confidence.',
      },
      {
        icon: Users,
        title: 'Change planning',
        text: 'Guidance on ownership, communication and training so people are ready for new ways of working.',
      },
    ],
    process: [
      { title: 'Stakeholder interviews', text: 'We speak with leadership and key users to understand goals, constraints and frustrations.' },
      { title: 'Process mapping', text: 'Current processes are documented end to end, with pain points and dependencies highlighted.' },
      { title: 'Fit-gap analysis', text: 'We compare your needs with standard ERP capability and flag where configuration or custom work is required.' },
      { title: 'Roadmap and estimate', text: 'You receive a phased roadmap with priorities, risks and effort ranges for each phase.' },
      { title: 'Review session', text: 'We walk your team through the findings and agree on the next decisions together.' },
    ],
    technologies: ['BPMN process models', 'Figma', 'REST', 'Webhooks', 'MongoDB', 'PostgreSQL', 'Spreadsheet analysis'],
    deliverables: [
      'Current-state process maps',
      'Fit-gap analysis report',
      'Prioritised requirements specification',
      'Phased ERP roadmap',
      'Effort and budget estimate',
    ],
    relatedServices: ['erp-implementation', 'custom-erp-development', 'legacy-modernization'],
    relatedProducts: ['erp-platform', 'reporting-analytics'],
    faqs: [
      {
        q: 'Do we have to use ERPVALLEY after a consulting engagement?',
        a: 'No. The requirements and roadmap are yours to use with any provider. We will tell you honestly where our platform fits well and where it does not.',
      },
      {
        q: 'How long does a consulting engagement take?',
        a: 'It depends on the number of departments, locations and processes in scope. We agree on the scope and duration up front after an initial conversation.',
      },
      {
        q: 'Who should be involved from our side?',
        a: 'A sponsor from leadership and the people who run each key process day to day. Their input is what makes the roadmap realistic.',
      },
      {
        q: 'Can you help if a previous ERP project failed?',
        a: 'Yes. We review what was built, why adoption or delivery stalled and what can be reused. The result is a recovery plan rather than starting from zero by default.',
      },
    ],
  },

  // 4. Legacy Modernization
  {
    slug: 'legacy-modernization',
    name: 'Legacy Modernization',
    icon: RefreshCw,
    headline: 'Move off outdated systems without disrupting the business',
    summary:
      'We replace ageing desktop and in-house systems with modern web-based software in planned phases, keeping your data and operations safe throughout.',
    metaDescription:
      'Legacy modernization by ERPVALLEY: audit, phased rebuild, data migration and parallel running to replace outdated business systems with modern software.',
    problems: [
      {
        icon: ServerCrash,
        title: 'Unsupported, fragile software',
        text: 'Old platforms run on outdated servers and libraries that are hard to patch and risky to touch.',
      },
      {
        icon: UserMinus,
        title: 'Knowledge held by a few people',
        text: 'Only one or two people understand how the system works, which makes every absence a business risk.',
      },
      {
        icon: Unplug,
        title: 'Cannot connect to modern tools',
        text: 'Without APIs, linking to payment, ecommerce or reporting tools means manual exports and re-keying.',
      },
      {
        icon: Monitor,
        title: 'Tied to the office desktop',
        text: 'Desktop-only software blocks remote work, branch access and mobile use in the warehouse or field.',
      },
    ],
    capabilities: [
      {
        icon: FileSearch,
        title: 'Legacy system audit',
        text: 'We document features, data structures, integrations and hidden business rules in the existing system.',
      },
      {
        icon: Layers,
        title: 'Phased replacement',
        text: 'Functions move across in manageable stages rather than one risky big-bang switch.',
      },
      {
        icon: Database,
        title: 'Data extraction and migration',
        text: 'Historic records are extracted from old databases and file formats, cleaned and moved to the new system.',
      },
      {
        icon: Network,
        title: 'Integration rebuild',
        text: 'Old file drops and manual exports are replaced with documented APIs and webhooks.',
      },
      {
        icon: GitCompare,
        title: 'Parallel running',
        text: 'Old and new systems run side by side for a period so results can be compared before switching.',
      },
      {
        icon: Cloud,
        title: 'Web-based re-platforming',
        text: 'Modern browser-based software that teams can reach securely from any location and device.',
      },
    ],
    process: [
      { title: 'System audit', text: 'We analyse the current system, its data and the business rules hidden in its code.' },
      { title: 'Target design', text: 'We design the replacement architecture and decide which functions move in which phase.' },
      { title: 'Phased rebuild', text: 'Each phase is built, tested and migrated while the rest of the old system keeps running.' },
      { title: 'Parallel run', text: 'Both systems operate together so outputs can be compared and differences resolved.' },
      { title: 'Decommission', text: 'Once results match, the old system is retired and its data is archived securely.' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'REST', 'Docker', 'Message queues', 'CI/CD'],
    deliverables: [
      'Legacy system assessment',
      'Modernization roadmap',
      'Rebuilt application modules',
      'Migrated data with reconciliation report',
      'Rebuilt integrations',
      'Decommissioning and archive plan',
    ],
    relatedServices: ['data-migration', 'cloud-infrastructure', 'custom-erp-development'],
    relatedProducts: ['erp-platform', 'integrations'],
    faqs: [
      {
        q: 'Do we have to replace everything at once?',
        a: 'No. We usually recommend a phased approach where one area moves at a time. This reduces risk and lets your team adjust gradually.',
      },
      {
        q: 'What if nobody fully understands the old system?',
        a: 'That is common. We analyse the database, screens and reports, and interview users to rebuild a clear picture of the business rules before anything is replaced.',
      },
      {
        q: 'Will we keep our historical data?',
        a: 'Yes. We agree which history to migrate into the new system and which to archive in a searchable form. Every migrated set is reconciled against the source.',
      },
      {
        q: 'How long does modernization take?',
        a: 'It depends on the size of the system, the number of integrations and the volume of data. After the audit we provide a phased plan with an estimate for each stage.',
      },
    ],
  },

  // 5. Cloud Infrastructure
  {
    slug: 'cloud-infrastructure',
    name: 'Cloud Infrastructure',
    icon: Cloud,
    headline: 'Secure, scalable hosting for your business systems',
    summary:
      'We design, build and run cloud environments on major cloud providers, with automated deployments, backups and monitoring built in from the start.',
    metaDescription:
      'Cloud infrastructure services by ERPVALLEY: architecture, containers, CI/CD, backups, monitoring and security hardening on major cloud providers.',
    problems: [
      {
        icon: Server,
        title: 'Ageing on-premise servers',
        text: 'Office servers need hardware refreshes, physical security and someone on hand when they fail.',
      },
      {
        icon: Gauge,
        title: 'Slow under real workloads',
        text: 'Systems slow down at month-end, during sales peaks or as more users and branches come online.',
      },
      {
        icon: ShieldAlert,
        title: 'Gaps in security',
        text: 'Open ports, shared admin passwords and unpatched software leave business data exposed.',
      },
      {
        icon: DatabaseBackup,
        title: 'Backups nobody has tested',
        text: 'Backups may exist, but no one is sure they can actually be restored when something goes wrong.',
      },
    ],
    capabilities: [
      {
        icon: CloudCog,
        title: 'Cloud architecture',
        text: 'Environments designed for your workloads, budget and data residency needs on major cloud providers.',
      },
      {
        icon: Container,
        title: 'Containerised deployments',
        text: 'Applications packaged in containers so they run the same way in development, testing and production.',
      },
      {
        icon: GitBranch,
        title: 'CI/CD pipelines',
        text: 'Automated build, test and deploy pipelines that make releases repeatable and easy to roll back.',
      },
      {
        icon: Activity,
        title: 'Monitoring and alerting',
        text: 'Dashboards and alerts for availability, errors and resource use, so issues are spotted early.',
      },
      {
        icon: Lock,
        title: 'Security hardening',
        text: 'Network rules, encryption, secrets management and least-privilege access applied across environments.',
      },
      {
        icon: TrendingUp,
        title: 'Scaling and cost control',
        text: 'Resources that scale with demand, with regular reviews to remove waste from your cloud spend.',
      },
    ],
    process: [
      { title: 'Assess workloads', text: 'We review your applications, data, traffic patterns and security requirements.' },
      { title: 'Architecture design', text: 'We design the target environment, including networking, storage, backups and access control.' },
      { title: 'Build environments', text: 'Infrastructure is created as code, with separate development, staging and production environments.' },
      { title: 'Migrate and test', text: 'Applications and data are moved across, then tested for performance, failover and restore.' },
      { title: 'Monitor and optimise', text: 'We watch the live environment and tune performance, security and cost over time.' },
    ],
    technologies: ['Docker', 'Infrastructure as code', 'CI/CD', 'Linux', 'Load balancers', 'Managed databases', 'Cloud object storage', 'Monitoring and alerting', 'Message queues'],
    deliverables: [
      'Cloud architecture diagram',
      'Infrastructure-as-code templates',
      'CI/CD pipelines',
      'Backup and restore runbook',
      'Monitoring dashboards and alerts',
      'Security configuration review',
    ],
    relatedServices: ['maintenance-support', 'legacy-modernization', 'api-development'],
    relatedProducts: ['erp-platform'],
    faqs: [
      {
        q: 'Which cloud providers do you work with?',
        a: 'We work with the major cloud providers and recommend one based on your requirements, existing contracts and data residency needs. We do not claim official partnerships, so our advice is based on fit.',
      },
      {
        q: 'Can you move our existing system to the cloud?',
        a: 'Yes. We assess the application first, since some systems can move as they are while others benefit from changes to run reliably in the cloud. You get a migration plan before anything moves.',
      },
      {
        q: 'How much will hosting cost?',
        a: 'Hosting costs depend on your workloads, storage, traffic and resilience requirements. We provide an estimate during design and review spend regularly once you are live.',
      },
      {
        q: 'Who manages the infrastructure after setup?',
        a: 'You can choose. We can hand over documentation and runbooks to your team, or manage the environment for you as part of a maintenance and support plan.',
      },
    ],
  },

  // 6. API Development
  {
    slug: 'api-development',
    name: 'API Development',
    icon: Network,
    headline: 'Reliable, documented APIs that connect your systems',
    summary:
      'We design and build secure REST and GraphQL APIs with clear documentation, so your applications, partners and integrations can exchange data with confidence.',
    metaDescription:
      'API development by ERPVALLEY: REST and GraphQL APIs with OpenAPI documentation, secure authentication, webhooks, versioning and automated testing.',
    problems: [
      {
        icon: Unplug,
        title: 'Systems that cannot talk',
        text: 'Your ERP, website and partner tools hold related data but have no reliable way to share it.',
      },
      {
        icon: FileQuestion,
        title: 'Undocumented endpoints',
        text: 'Existing APIs have little or no documentation, so every new integration starts with guesswork.',
      },
      {
        icon: Bug,
        title: 'Fragile integrations',
        text: 'Small changes on one side break connections on the other, often without anyone noticing for days.',
      },
      {
        icon: ShieldOff,
        title: 'Weak access control',
        text: 'Shared keys and broad permissions make it hard to know who can read or change your data.',
      },
    ],
    capabilities: [
      {
        icon: Braces,
        title: 'REST and GraphQL design',
        text: 'Consistent, resource-based APIs designed around how your data is actually used.',
      },
      {
        icon: FileCode,
        title: 'OpenAPI documentation',
        text: 'Machine-readable specifications and readable guides that make integration faster for any developer.',
      },
      {
        icon: KeyRound,
        title: 'Authentication and access',
        text: 'Token-based authentication, scoped permissions and key management for each consumer.',
      },
      {
        icon: Webhook,
        title: 'Webhooks and events',
        text: 'Event notifications that let other systems react to new orders, payments or status changes.',
      },
      {
        icon: Gauge,
        title: 'Performance and rate limits',
        text: 'Pagination, caching and rate limiting that keep APIs responsive and protect your systems.',
      },
      {
        icon: GitMerge,
        title: 'Versioning',
        text: 'A clear versioning approach so you can improve the API without breaking existing integrations.',
      },
    ],
    process: [
      { title: 'Define contracts', text: 'We identify consumers, use cases and the data each one needs to read or write.' },
      { title: 'Design and document', text: 'Endpoints, payloads and errors are specified in OpenAPI and reviewed before development.' },
      { title: 'Build and secure', text: 'We implement the API with authentication, validation, logging and rate limiting.' },
      { title: 'Test', text: 'Automated tests cover functionality, error handling, security and performance.' },
      { title: 'Publish and monitor', text: 'The API is deployed with documentation and monitored for errors and usage.' },
    ],
    technologies: ['Node.js', 'Express', 'REST', 'GraphQL', 'Webhooks', 'OpenAPI', 'MongoDB', 'PostgreSQL', 'Docker'],
    deliverables: [
      'OpenAPI specification',
      'API source code',
      'Authentication and access configuration',
      'Automated API test suite',
      'Developer documentation with examples',
    ],
    relatedServices: ['third-party-integrations', 'quality-assurance', 'cloud-infrastructure'],
    relatedProducts: ['integrations', 'erp-platform'],
    faqs: [
      {
        q: 'Should we use REST or GraphQL?',
        a: 'REST suits most business integrations and is widely supported by other tools. GraphQL can help when front-end applications need flexible queries; we recommend one based on your consumers.',
      },
      {
        q: 'Can you add an API to an existing system?',
        a: 'Often, yes. We can build an API layer over an existing database or application, provided we can access it safely. We assess feasibility during discovery.',
      },
      {
        q: 'How do you keep APIs secure?',
        a: 'We use token-based authentication, scoped permissions, input validation, encrypted connections and logging. Security checks are part of the test suite, not an afterthought.',
      },
      {
        q: 'How long does it take to build an API?',
        a: 'It depends on the number of resources, the business rules involved and the systems it connects to. We provide an estimate once the API contract is defined.',
      },
    ],
  },

  // 7. Third-Party Integrations
  {
    slug: 'third-party-integrations',
    name: 'Third-Party Integrations',
    icon: PlugZap,
    headline: 'Connect your ERP to the tools your business relies on',
    summary:
      'We link your ERP with payment, ecommerce, shipping, banking and messaging tools, so data flows automatically and errors are caught early.',
    metaDescription:
      'Third-party integrations by ERPVALLEY: connect your ERP with payment gateways, ecommerce stores, shipping, banking and messaging tools with reliable syncs.',
    problems: [
      {
        icon: Keyboard,
        title: 'The same data typed twice',
        text: 'Orders, payments and shipments are copied by hand between systems, which takes time and invites mistakes.',
      },
      {
        icon: Clock,
        title: 'Information that is always behind',
        text: 'Stock levels and order statuses only update in batches, so customers and staff see outdated numbers.',
      },
      {
        icon: TriangleAlert,
        title: 'Syncs that fail silently',
        text: 'When a connection breaks, nobody finds out until a customer complains or the books do not balance.',
      },
      {
        icon: Puzzle,
        title: 'Every tool speaks differently',
        text: 'Each service has its own formats, limits and rules, which makes in-house integration slow to get right.',
      },
    ],
    capabilities: [
      {
        icon: Wallet,
        title: 'Payment gateways',
        text: 'Payments recorded against invoices automatically, with fees and refunds reconciled in finance.',
      },
      {
        icon: ShoppingCart,
        title: 'Ecommerce stores',
        text: 'Online orders flow into the ERP, while stock levels and prices sync back to your storefront.',
      },
      {
        icon: Truck,
        title: 'Shipping and logistics',
        text: 'Labels, tracking numbers and delivery statuses linked to sales orders and dispatch.',
      },
      {
        icon: Landmark,
        title: 'Banking and accounting',
        text: 'Bank statement imports and accounting exports that keep your financial records aligned.',
      },
      {
        icon: Mail,
        title: 'Email and messaging',
        text: 'Order confirmations, reminders and alerts sent through your preferred email and messaging channels.',
      },
      {
        icon: Activity,
        title: 'Sync monitoring',
        text: 'Retries, error logs and alerts so failed transfers are visible and can be fixed quickly.',
      },
    ],
    process: [
      { title: 'List systems', text: 'We catalogue the tools you use, the data each holds and which system is the source of truth.' },
      { title: 'Map data flows', text: 'Fields, triggers and directions are mapped for every connection, including edge cases.' },
      { title: 'Build connectors', text: 'We build integrations with validation, retries and clear error handling.' },
      { title: 'Test end to end', text: 'Real-world scenarios are tested across both systems, including failures and duplicates.' },
      { title: 'Monitor', text: 'Live syncs are monitored with alerts so issues are resolved before they affect operations.' },
    ],
    technologies: ['REST', 'Webhooks', 'Message queues', 'Node.js', 'OAuth 2.0', 'CSV and SFTP file exchange', 'Background jobs', 'MongoDB'],
    deliverables: [
      'Integration map of systems and data flows',
      'Field mapping document',
      'Connector source code',
      'Error handling and retry logic',
      'Sync monitoring and alerts',
      'Operations runbook',
    ],
    relatedServices: ['api-development', 'data-migration', 'maintenance-support'],
    relatedProducts: ['integrations', 'sales-management', 'finance-accounting'],
    faqs: [
      {
        q: 'Which tools can you integrate with?',
        a: 'Most tools that offer an API, webhooks or structured file exports can be integrated. We confirm what is possible for each tool during discovery.',
      },
      {
        q: 'What happens when an integration fails?',
        a: 'Failed transfers are retried automatically and logged, and persistent failures raise an alert. Your team or ours can then see exactly which records were affected.',
      },
      {
        q: 'Can data sync in real time?',
        a: 'Where the other tool supports webhooks or events, yes. Otherwise we schedule frequent syncs and agree on the timing that suits your operations.',
      },
      {
        q: 'How much does an integration cost?',
        a: 'Cost depends on the number of systems, the volume and direction of data and the business rules involved. We provide an estimate after mapping the data flows.',
      },
    ],
  },

  // 8. Data Migration
  {
    slug: 'data-migration',
    name: 'Data Migration',
    icon: Database,
    headline: 'Move your data to a new system cleanly and verifiably',
    summary:
      'We audit, clean, map and transfer your business data, then reconcile it against the source, so your new system starts with records you can trust.',
    metaDescription:
      'Data migration by ERPVALLEY: source audits, field mapping, data cleansing, trial migrations and reconciliation for a clean, verified move to your new ERP.',
    problems: [
      {
        icon: Copy,
        title: 'Duplicates and outdated records',
        text: 'Years of duplicate customers, inactive items and old suppliers make any new system harder to use.',
      },
      {
        icon: FileWarning,
        title: 'Inconsistent formats',
        text: 'Dates, codes, units and addresses are stored differently across files and systems.',
      },
      {
        icon: EyeOff,
        title: 'No way to prove it is correct',
        text: 'Without reconciliation, nobody can confirm balances and open documents arrived intact.',
      },
      {
        icon: Hourglass,
        title: 'Fear of long downtime',
        text: 'A poorly planned switch can stop orders and invoicing while data is still being moved.',
      },
    ],
    capabilities: [
      {
        icon: ScanSearch,
        title: 'Source audit and profiling',
        text: 'We analyse each source for volume, quality, gaps and duplicates before deciding what to move.',
      },
      {
        icon: ArrowRightLeft,
        title: 'Field mapping and transformation',
        text: 'Every source field is mapped to its target, with conversion rules for codes, units and formats.',
      },
      {
        icon: Eraser,
        title: 'Data cleansing',
        text: 'Duplicates merged, invalid values fixed and obsolete records archived, with your team approving the rules.',
      },
      {
        icon: FlaskConical,
        title: 'Trial migrations',
        text: 'Full rehearsal runs into a test environment, so problems surface well before the real cutover.',
      },
      {
        icon: ListChecks,
        title: 'Reconciliation',
        text: 'Record counts, balances and sample checks compared between source and target and signed off.',
      },
      {
        icon: Undo2,
        title: 'Rollback planning',
        text: 'A tested fallback plan so the business can continue if the cutover needs to be paused.',
      },
    ],
    process: [
      { title: 'Audit sources', text: 'We inventory every data source and profile its quality, volume and structure.' },
      { title: 'Map and cleanse', text: 'Fields are mapped to the new system and cleansing rules are agreed and applied.' },
      { title: 'Trial migration', text: 'We run one or more rehearsals into a test environment and fix any issues found.' },
      { title: 'Reconcile', text: 'Counts, balances and samples are compared with the source and signed off by your team.' },
      { title: 'Cutover', text: 'The final migration runs in an agreed window, followed by checks before users return.' },
    ],
    technologies: ['Python', 'SQL', 'PostgreSQL', 'MongoDB', 'ETL scripts', 'CSV and Excel', 'Cloud object storage', 'REST'],
    deliverables: [
      'Data audit report',
      'Field mapping document',
      'Cleansing rules and exception log',
      'Trial migration results',
      'Reconciliation report',
      'Cutover and rollback plan',
    ],
    relatedServices: ['legacy-modernization', 'erp-implementation', 'quality-assurance'],
    relatedProducts: ['erp-platform', 'finance-accounting', 'inventory-management'],
    faqs: [
      {
        q: 'What data can you migrate?',
        a: 'Typically customers, suppliers, items, price lists, opening balances, open orders and invoices, plus history where needed. We agree the scope together during the audit.',
      },
      {
        q: 'Do we need to clean our data first?',
        a: 'No, cleansing is part of the service. We identify issues and propose rules, and your team decides how each type of problem should be handled.',
      },
      {
        q: 'How much downtime should we expect?',
        a: 'It depends on data volume and how many systems are involved. Trial migrations let us measure the real duration, so the cutover window is planned on evidence rather than guesswork.',
      },
      {
        q: 'How do we know the migration was successful?',
        a: 'Every migration ends with a reconciliation report comparing counts, balances and samples between source and target. Your team reviews and signs it off before go-live.',
      },
    ],
  },

  // 9. UI/UX Design
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    icon: Palette,
    headline: 'Business software your teams find easy to use',
    summary:
      'We research how your people work and design clear, consistent interfaces that reduce clicks, errors and training time across your systems.',
    metaDescription:
      'UI/UX design for business software by ERPVALLEY: user research, workflows, wireframes, prototypes and design systems for ERP and internal tools.',
    problems: [
      {
        icon: MousePointerClick,
        title: 'Too many clicks for simple tasks',
        text: 'Everyday actions like raising an order or approving a request take far more steps than they should.',
      },
      {
        icon: BookOpen,
        title: 'Heavy training needed',
        text: 'New staff need long onboarding because screens are confusing and labels do not match how they talk.',
      },
      {
        icon: Smartphone,
        title: 'Unusable on mobile',
        text: 'Warehouse, field and sales staff struggle with screens that were only designed for large monitors.',
      },
      {
        icon: Shuffle,
        title: 'Inconsistent screens',
        text: 'Each module looks and behaves differently, so users have to relearn the basics in every area.',
      },
    ],
    capabilities: [
      {
        icon: Users,
        title: 'User research',
        text: 'Interviews and observation sessions that show how people actually use the software day to day.',
      },
      {
        icon: GitBranch,
        title: 'User flows',
        text: 'Task flows that remove unnecessary steps from common jobs such as ordering, receiving and approving.',
      },
      {
        icon: PenTool,
        title: 'Wireframes and visual design',
        text: 'Layouts that bring the most important information forward, finished in a clean, consistent style.',
      },
      {
        icon: Frame,
        title: 'Interactive prototypes',
        text: 'Clickable prototypes that let your team try new screens before any development begins.',
      },
      {
        icon: Component,
        title: 'Design systems',
        text: 'Reusable components and guidelines that keep every module consistent as the product grows.',
      },
      {
        icon: Accessibility,
        title: 'Accessibility',
        text: 'Readable contrast, keyboard support and clear labels so the software works for every user.',
      },
    ],
    process: [
      { title: 'Research', text: 'We interview and observe users to understand their tasks, frustrations and context.' },
      { title: 'Flows and wireframes', text: 'Key journeys are mapped and sketched as low-fidelity layouts for quick feedback.' },
      { title: 'Visual design', text: 'Approved wireframes become polished screens built on a consistent design system.' },
      { title: 'Prototype and test', text: 'Users try a clickable prototype and we refine the design based on what we observe.' },
      { title: 'Developer handoff', text: 'Developers receive annotated designs, components and specifications ready to build.' },
    ],
    technologies: ['Figma', 'Design systems', 'React', 'Tailwind CSS', 'Responsive design', 'Accessibility guidelines (WCAG)', 'Usability testing'],
    deliverables: [
      'User research findings',
      'User flows and wireframes',
      'High-fidelity screen designs',
      'Clickable prototype',
      'Design system and component library',
      'Developer handoff specifications',
    ],
    relatedServices: ['custom-erp-development', 'quality-assurance', 'erp-consulting'],
    relatedProducts: ['erp-platform', 'reporting-analytics'],
    faqs: [
      {
        q: 'Can you redesign an existing system without rebuilding it?',
        a: 'Often, yes. Depending on the technology, we can redesign the interface in stages while the underlying logic stays the same. We assess what is practical during discovery.',
      },
      {
        q: 'Do you involve our users?',
        a: 'Yes. Research and prototype testing with real users are central to our process. Their feedback shapes the design far more than personal preference.',
      },
      {
        q: 'Do you also build the designs?',
        a: 'Yes. Our development team can implement the designs, or we can hand over specifications and components to your own developers.',
      },
      {
        q: 'How long does a design project take?',
        a: 'It depends on the number of screens and workflows in scope and how much research is needed. We provide an estimate after an initial discovery session.',
      },
    ],
  },

  // 10. AI & Automation
  {
    slug: 'ai-automation',
    name: 'AI & Automation',
    icon: Brain,
    headline: 'Practical automation for repetitive business work',
    summary:
      'We apply automation and AI where they help: reading documents, categorising records, supporting forecasts and answering questions over your own data, with people kept in control.',
    metaDescription:
      'AI and automation by ERPVALLEY: document data extraction, smart categorisation, forecasting support, workflow automation and assistants over business data.',
    problems: [
      {
        icon: FileText,
        title: 'Documents keyed in by hand',
        text: 'Supplier invoices, purchase orders and receipts are read and typed into the ERP one field at a time.',
      },
      {
        icon: Tags,
        title: 'Inconsistent categorisation',
        text: 'Expenses, tickets and products are coded differently depending on who enters them.',
      },
      {
        icon: Repeat,
        title: 'Repetitive routine tasks',
        text: 'Staff spend hours on reminders, status updates and copying data between steps of a process.',
      },
      {
        icon: Search,
        title: 'Answers buried in reports',
        text: 'Simple questions about orders, stock or customers need someone to build or dig through a report.',
      },
    ],
    capabilities: [
      {
        icon: ScanText,
        title: 'Document data extraction',
        text: 'Key fields read from invoices and other documents and proposed for review before posting.',
      },
      {
        icon: Sparkles,
        title: 'Smart categorisation',
        text: 'Suggested categories for transactions, tickets or items based on past patterns, which users can accept or correct.',
      },
      {
        icon: TrendingUp,
        title: 'Demand forecasting assistance',
        text: 'Forecasts based on sales history that support planners when setting reorder levels, not replace their judgement.',
      },
      {
        icon: Workflow,
        title: 'Workflow automation',
        text: 'Rules and triggers that create tasks, send reminders and move records forward automatically.',
      },
      {
        icon: MessageSquare,
        title: 'Assistants over business data',
        text: 'Ask questions in plain language and get answers drawn from your ERP data, respecting user permissions.',
      },
      {
        icon: UserCheck,
        title: 'Human review',
        text: 'Review queues and confidence thresholds so uncertain results always go to a person before they take effect.',
      },
    ],
    process: [
      { title: 'Find opportunities', text: 'We identify repetitive tasks where automation is likely to save effort and reduce errors.' },
      { title: 'Assess data', text: 'We check whether the data and documents available are good enough to support each use case.' },
      { title: 'Pilot', text: 'A focused pilot runs on real work with human review, so results can be judged honestly.' },
      { title: 'Review and refine', text: 'We measure accuracy with your team and adjust rules, models and thresholds.' },
      { title: 'Roll out', text: 'Proven automations move into daily use with monitoring and clear fallback steps.' },
    ],
    technologies: ['Python', 'Node.js', 'OCR', 'Large language models', 'MongoDB', 'PostgreSQL', 'Message queues', 'REST', 'Webhooks'],
    deliverables: [
      'Automation opportunity assessment',
      'Pilot with results review',
      'Production automation workflows',
      'Human review and exception queues',
      'Accuracy and usage monitoring',
      'Process and technical documentation',
    ],
    relatedServices: ['third-party-integrations', 'custom-erp-development', 'maintenance-support'],
    relatedProducts: ['workflow-automation', 'reporting-analytics', 'inventory-management'],
    faqs: [
      {
        q: 'Will AI replace our staff?',
        a: 'That is not the aim. We automate repetitive steps so people can focus on exceptions, customers and decisions, and we keep humans reviewing anything uncertain.',
      },
      {
        q: 'How accurate is document extraction?',
        a: 'Accuracy depends on document quality, layout variety and the fields involved, so we do not promise a fixed figure. The pilot measures it on your real documents before any rollout decision.',
      },
      {
        q: 'Is our data used to train public models?',
        a: 'We design solutions so your business data stays under agreed controls, and we choose services and settings that respect your data policies. We explain exactly where data goes before anything is built.',
      },
      {
        q: 'Where should we start?',
        a: 'Start with a high-volume, rule-heavy task such as invoice entry or ticket categorisation. A small pilot shows the real benefit quickly and at limited cost.',
      },
    ],
  },

  // 11. Quality Assurance
  {
    slug: 'quality-assurance',
    name: 'Quality Assurance',
    icon: BadgeCheck,
    headline: 'Release business software with confidence',
    summary:
      'We combine manual and automated testing to catch defects before your users do, so every release protects the processes your business depends on.',
    metaDescription:
      'Quality assurance by ERPVALLEY: test strategy, manual and automated testing, regression, performance and security checks for ERP and business software.',
    problems: [
      {
        icon: Bug,
        title: 'Users find the bugs',
        text: 'Defects are discovered in production, often in invoicing or stock, where mistakes are costly.',
      },
      {
        icon: Hourglass,
        title: 'Slow manual regression',
        text: 'Retesting everything by hand before each release delays updates and still misses things.',
      },
      {
        icon: RotateCcw,
        title: 'Fixes that break other features',
        text: 'A change in one module quietly breaks a report or workflow somewhere else in the system.',
      },
      {
        icon: Gauge,
        title: 'Unknown performance limits',
        text: 'Nobody knows how the system behaves at month-end volumes until it slows down for real.',
      },
    ],
    capabilities: [
      {
        icon: ClipboardList,
        title: 'Test strategy and planning',
        text: 'A risk-based plan that focuses testing effort on the processes that matter most to your business.',
      },
      {
        icon: ListChecks,
        title: 'Functional testing',
        text: 'Structured manual testing of business scenarios, from order entry to period close.',
      },
      {
        icon: Bot,
        title: 'Test automation',
        text: 'Automated UI and API tests that run on every change and catch regressions early.',
      },
      {
        icon: Activity,
        title: 'Performance testing',
        text: 'Load and stress tests that show how the system responds to peak users and data volumes.',
      },
      {
        icon: ShieldCheck,
        title: 'Security checks',
        text: 'Checks for common vulnerabilities, access control gaps and insecure configuration.',
      },
      {
        icon: MonitorSmartphone,
        title: 'Cross-browser and device testing',
        text: 'Verification that screens work correctly across the browsers and devices your teams use.',
      },
    ],
    process: [
      { title: 'Test strategy', text: 'We assess risk, agree on scope and decide what to test manually and what to automate.' },
      { title: 'Test cases', text: 'Business scenarios are written as clear, repeatable test cases with expected results.' },
      { title: 'Automation', text: 'Stable, high-value scenarios are automated and added to the CI/CD pipeline.' },
      { title: 'Regression and performance', text: 'Full regression and load tests run before release to confirm nothing has slipped.' },
      { title: 'Release sign-off', text: 'Results and open defects are reviewed so the release decision is based on evidence.' },
    ],
    technologies: ['Playwright', 'Unit testing frameworks', 'API testing', 'Load testing tools', 'CI/CD', 'Docker', 'Test management', 'TypeScript'],
    deliverables: [
      'Test strategy and plan',
      'Test case library',
      'Automated test suite',
      'Defect reports',
      'Performance test report',
      'Release sign-off checklist',
    ],
    relatedServices: ['custom-erp-development', 'api-development', 'maintenance-support'],
    relatedProducts: [],
    faqs: [
      {
        q: 'Can you test software built by another team?',
        a: 'Yes. We can test any web application or API, whether it was built by us, your in-house team or another provider. We start by understanding the system and its key business processes.',
      },
      {
        q: 'Should we automate all our tests?',
        a: 'No. Automation works best for stable, repeated scenarios such as regression checks. Exploratory and usability testing still benefit from skilled manual testers.',
      },
      {
        q: 'Do you fix the bugs you find?',
        a: 'We report defects with clear steps to reproduce them. If we built or maintain the system, our developers can fix them as well.',
      },
      {
        q: 'What does QA cost?',
        a: 'It depends on the size of the system, release frequency and how much automation is needed. We provide an estimate after reviewing the application and your release process.',
      },
    ],
  },

  // 12. Maintenance & Support
  {
    slug: 'maintenance-support',
    name: 'Maintenance & Support',
    icon: LifeBuoy,
    headline: 'Keep your business systems healthy, secure and improving',
    summary:
      'We look after your ERP and business applications after launch, with updates, monitoring, fixes and a help desk your teams can rely on.',
    metaDescription:
      'Maintenance and support by ERPVALLEY: help desk, bug fixes, security updates, monitoring, backups and small enhancements for your ERP and business apps.',
    problems: [
      {
        icon: PhoneOff,
        title: 'Nobody to call',
        text: 'When something breaks, there is no clear owner and staff are left waiting while work stops.',
      },
      {
        icon: Package,
        title: 'Outdated components',
        text: 'Libraries and servers fall behind on updates, building up security risk and technical debt.',
      },
      {
        icon: Gauge,
        title: 'Gradual slowdown',
        text: 'Growing data and users make the system slower over time, and nobody is watching the trend.',
      },
      {
        icon: Bug,
        title: 'Recurring issues',
        text: 'The same problems come back because quick fixes never address the root cause.',
      },
    ],
    capabilities: [
      {
        icon: Headphones,
        title: 'Help desk',
        text: 'A single channel for your users to report issues and ask questions, with agreed response times.',
      },
      {
        icon: Wrench,
        title: 'Bug fixing',
        text: 'Defects are investigated, fixed at the root cause and tested before release.',
      },
      {
        icon: RefreshCw,
        title: 'Updates and patches',
        text: 'Regular updates to frameworks, libraries and servers to keep the system secure and supported.',
      },
      {
        icon: Activity,
        title: 'Monitoring',
        text: 'Proactive monitoring of availability, errors and performance, so problems are spotted early.',
      },
      {
        icon: DatabaseBackup,
        title: 'Backups and restore checks',
        text: 'Backups are scheduled and restores are tested, so recovery works when it is needed.',
      },
      {
        icon: Sparkles,
        title: 'Small enhancements',
        text: 'Ongoing improvements such as new fields, reports and workflow tweaks as your business changes.',
      },
    ],
    process: [
      { title: 'Onboarding audit', text: 'We review the code, infrastructure, documentation and known issues before taking over.' },
      { title: 'Agree scope', text: 'Support hours, response targets, channels and priorities are agreed and documented.' },
      { title: 'Monitor', text: 'Monitoring and alerts are set up so we can act on issues before users report them.' },
      { title: 'Resolve and update', text: 'Tickets, fixes and scheduled updates are handled and released through a tested pipeline.' },
      { title: 'Review and improve', text: 'Regular reviews cover incidents, trends and recommended improvements.' },
    ],
    technologies: ['Monitoring and alerting', 'Log management', 'CI/CD', 'Docker', 'Automated backups', 'Ticketing system', 'Node.js', 'MongoDB'],
    deliverables: [
      'Onboarding audit report',
      'Support scope and response targets',
      'Help desk access for your users',
      'Monthly maintenance report',
      'Update and patch log',
      'Backup and restore test records',
    ],
    relatedServices: ['quality-assurance', 'cloud-infrastructure', 'custom-erp-development'],
    relatedProducts: ['erp-platform'],
    faqs: [
      {
        q: 'Can you support a system you did not build?',
        a: 'Yes. We start with an onboarding audit to understand the code, infrastructure and known issues. This tells us what support is realistic and whether any urgent fixes are needed first.',
      },
      {
        q: 'What response times do you offer?',
        a: 'Response targets are agreed in your support plan based on how critical the system is to your operations. We document them clearly so everyone knows what to expect.',
      },
      {
        q: 'Are enhancements included?',
        a: 'Small enhancements can be included within an agreed number of hours each month. Larger changes are scoped and estimated separately.',
      },
      {
        q: 'How is support priced?',
        a: 'Pricing depends on the size of the system, the support hours needed and response targets. We provide a proposal after the onboarding audit.',
      },
    ],
  },
]

export const serviceBySlug = new Map(services.map((s) => [s.slug, s]))
