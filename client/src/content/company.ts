import {
  BadgeCheck,
  Blocks,
  Boxes,
  Brain,
  Bug,
  Cloud,
  Code2,
  Compass,
  Database,
  Eye,
  FileCheck2,
  GitBranch,
  Handshake,
  HeartHandshake,
  Layers,
  LayoutGrid,
  LifeBuoy,
  Link2,
  MessageSquare,
  MonitorSmartphone,
  Palette,
  Plug,
  Rocket,
  Search,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  Timer,
  Users,
  UsersRound,
  Wrench,
} from 'lucide-react'
import type {
  DeveloperRole,
  EngagementModel,
  Faq,
  IconItem,
  ProcessStageDetail,
  TechGroup,
  TextItem,
} from './types'

/* ---------- About ---------- */

export const about: { mission: string; story: string[]; whatWeDo: IconItem[]; approach: IconItem[] } = {
  mission:
    'ERPVALLEY helps growing businesses run on one connected system instead of a patchwork of spreadsheets and disconnected tools. We combine a modular ERP platform with the people and services needed to make it work for each business.',
  story: [
    'Most businesses do not set out to build a tangle of spreadsheets, inboxes and single-purpose apps. It happens gradually, as each team picks a tool to solve its own problem. Over time, the same data gets entered in several places, reports disagree, and nobody has a clear view of the whole operation.',
    'ERPVALLEY exists to fix that. Our platform brings finance, sales, inventory, HR, procurement, projects and reporting onto one shared data model, so an action in one area is reflected everywhere it matters. Businesses start with the modules they need most and add others as they grow, without re-entering information or starting over.',
    'Software alone rarely solves the problem, so we pair the platform with hands-on services. We map how your business works, configure and extend the system around your processes, migrate your data carefully, train your teams and stay involved after go-live. When the standard product is not enough, we build custom modules and integrations or provide dedicated developers to work alongside your team.',
  ],
  whatWeDo: [
    {
      icon: LayoutGrid,
      title: 'Modular ERP platform',
      text: 'A web-based ERP with connected modules for finance, sales, inventory, HR, procurement, projects and reporting, all on one data model.',
    },
    {
      icon: Rocket,
      title: 'Implementation',
      text: 'Discovery, configuration, data migration and training, delivered as a planned rollout with clear milestones and owners.',
    },
    {
      icon: Code2,
      title: 'Custom development',
      text: 'Custom modules, integrations and APIs for processes that off-the-shelf software does not cover, built by our own engineering team.',
    },
    {
      icon: LifeBuoy,
      title: 'Support and maintenance',
      text: 'Ongoing help after go-live, including bug fixes, updates, monitoring and improvements as your business changes.',
    },
  ],
  approach: [
    {
      icon: Compass,
      title: 'Process first, software second',
      text: 'We start by understanding how your teams actually work, including the workarounds, before deciding what to configure or build.',
    },
    {
      icon: Layers,
      title: 'Start focused, grow in phases',
      text: 'We roll out the modules that solve your most pressing problems first, then extend the system in planned phases.',
    },
    {
      icon: HeartHandshake,
      title: 'Partners after go-live',
      text: 'Launch is a milestone, not the finish line. We monitor, support and improve the system as your needs evolve.',
    },
    {
      icon: MessageSquare,
      title: 'Clear, regular communication',
      text: 'One accountable project manager, weekly progress updates and decisions agreed in writing, so you always know where things stand.',
    },
  ],
}

export const values: IconItem[] = [
  {
    icon: Eye,
    title: 'Transparency',
    text: 'Scope, timelines and costs are written down and shared before work begins. If something changes, we explain why and agree on the impact with you.',
  },
  {
    icon: Target,
    title: 'Outcomes over features',
    text: 'Every configuration or custom build should solve a real business problem. We ask what result a feature supports before we add it.',
  },
  {
    icon: MessageSquare,
    title: 'Clear communication',
    text: 'You get regular progress updates, named contacts and plain-language explanations instead of jargon. Questions get answered, not deflected.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality by default',
    text: 'Code is reviewed and tested, data migrations are reconciled against the source, and changes are verified before they reach your users.',
  },
  {
    icon: ShieldCheck,
    title: 'Security and care with data',
    text: 'We treat your business data as yours. Access is limited by role, credentials are handled carefully and changes are logged.',
  },
  {
    icon: Handshake,
    title: 'Long-term ownership',
    text: 'We build systems we are willing to support for years. That means documentation, maintainable code and handovers your team can rely on.',
  },
]

/* ---------- Implementation process ---------- */

export const processStages: ProcessStageDetail[] = [
  {
    icon: Search,
    title: 'Discover',
    text: 'We learn how your business runs today, from core workflows to the spreadsheets and workarounds that fill the gaps. Together we agree on goals, priorities and what success looks like.',
    activities: [
      'Stakeholder interviews and workshops',
      'Current process and system mapping',
      'Review of existing data sources',
      'Goal and priority setting',
    ],
    deliverables: ['Discovery summary', 'Current-state process map', 'Prioritized requirements list'],
  },
  {
    icon: GitBranch,
    title: 'Plan',
    text: 'We turn discovery findings into a scoped roadmap covering modules, integrations, data and custom work. Each milestone has a clear owner, so everyone knows what happens next.',
    activities: [
      'Module and configuration scoping',
      'Integration and data migration planning',
      'Milestone and resource planning',
      'Risk and dependency review',
    ],
    deliverables: ['Implementation roadmap', 'Scope and milestone plan', 'Proposal or statement of work'],
  },
  {
    icon: Settings2,
    title: 'Configure',
    text: 'We set up modules, workflows, roles and reports to match your processes. Where the standard product falls short, we build and test custom features.',
    activities: [
      'Module and master data setup',
      'Workflow and approval configuration',
      'Roles and permissions setup',
      'Custom feature and integration development',
    ],
    deliverables: ['Configured environment', 'Role and permission matrix', 'Tested custom features and integrations'],
  },
  {
    icon: Database,
    title: 'Migrate',
    text: 'Your existing data is cleaned, mapped and imported into the new system. We reconcile the results against the source so you can trust the numbers from day one.',
    activities: [
      'Data extraction and cleanup',
      'Field mapping and transformation',
      'Trial imports and validation',
      'Final migration and reconciliation',
    ],
    deliverables: ['Data mapping document', 'Validated trial import', 'Reconciliation report'],
  },
  {
    icon: Sparkles,
    title: 'Train',
    text: 'Each team learns the system through role-based sessions built around their daily tasks. Documentation and practice environments help people build confidence before launch.',
    activities: [
      'Role-based training sessions',
      'User acceptance testing',
      'Admin and power-user training',
      'Documentation and quick-reference guides',
    ],
    deliverables: ['Training materials', 'User guides', 'Signed-off acceptance testing'],
  },
  {
    icon: Rocket,
    title: 'Go live and support',
    text: 'We launch with a clear cutover plan and stay close during the first weeks of live use. After that, ongoing support, monitoring and improvements keep the system working as you grow.',
    activities: [
      'Cutover planning and launch',
      'Post-launch monitoring',
      'Issue triage and fixes',
      'Improvement planning',
    ],
    deliverables: ['Go-live checklist', 'Support plan and contacts', 'Post-launch review'],
  },
]

/* ---------- Technology ---------- */

export const techGroups: TechGroup[] = [
  {
    icon: MonitorSmartphone,
    title: 'Frontend',
    description: 'Fast, responsive interfaces that work on desktop, tablet and phone.',
    items: [
      { name: 'React', use: 'Component-based user interfaces for ERP screens and dashboards.' },
      { name: 'TypeScript', use: 'Typed code that catches errors early and keeps large codebases maintainable.' },
      { name: 'Tailwind CSS', use: 'Consistent, responsive styling built on a shared design system.' },
      { name: 'Vite', use: 'Fast local development and optimized production builds.' },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    description: 'APIs and services that handle business logic, workflows and integrations.',
    items: [
      { name: 'Node.js', use: 'Server runtime for APIs, background jobs and integrations.' },
      { name: 'Express', use: 'Lightweight framework for building structured REST APIs.' },
      { name: 'REST APIs', use: 'Documented endpoints for connecting the ERP with other systems.' },
      { name: 'Webhooks', use: 'Event notifications that keep connected tools in sync.' },
      { name: 'Background jobs', use: 'Scheduled and queued tasks such as reports, imports and reminders.' },
    ],
  },
  {
    icon: Database,
    title: 'Data',
    description: 'Reliable storage, fast queries and safe handling of business records.',
    items: [
      { name: 'MongoDB', use: 'Flexible document database for modular business data.' },
      { name: 'PostgreSQL', use: 'Relational database for projects that need strict schemas and complex queries.' },
      { name: 'Redis', use: 'Caching and queues for faster responses and background processing.' },
      { name: 'Automated backups', use: 'Regular backups so data can be restored if something goes wrong.' },
      { name: 'Data migration tooling', use: 'Scripts and checks for importing and reconciling legacy data.' },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud and DevOps',
    description: 'Repeatable deployments and environments you can rely on.',
    items: [
      { name: 'Docker', use: 'Containerized services that run the same way in every environment.' },
      { name: 'CI/CD pipelines', use: 'Automated builds, tests and deployments on every change.' },
      { name: 'Cloud hosting', use: 'Scalable infrastructure sized to your workload.' },
      { name: 'Monitoring and logs', use: 'Visibility into performance and errors so issues are caught early.' },
      { name: 'Environment isolation', use: 'Separate development, staging and production environments.' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Quality and security',
    description: 'Testing and safeguards built into everyday development.',
    items: [
      { name: 'Vitest', use: 'Fast unit and integration tests for business logic.' },
      { name: 'Playwright', use: 'End-to-end tests that check key workflows in a real browser.' },
      { name: 'OpenAPI', use: 'API specifications that keep documentation and integrations accurate.' },
      { name: 'Code review', use: 'Peer review of every change before it is merged.' },
      { name: 'Role-based access control', use: 'Permissions that limit each user to what their role requires.' },
    ],
  },
  {
    icon: Palette,
    title: 'Design and delivery',
    description: 'How screens are designed and how work is planned, tracked and handed over.',
    items: [
      { name: 'Figma', use: 'Screen designs and clickable prototypes reviewed with your users before development.' },
      { name: 'Git', use: 'Full version history of every change, with branches for each feature or fix.' },
      { name: 'Issue tracking', use: 'A shared backlog so you can see what is planned, in progress and done.' },
      { name: 'Documentation', use: 'Admin and user guides delivered with each release.' },
    ],
  },
]

/* ---------- Engagement models and hiring developers ---------- */

export const engagementModels: EngagementModel[] = [
  {
    icon: FileCheck2,
    name: 'Fixed scope',
    bestFor: 'Well-defined projects with clear requirements',
    text: 'We agree on scope, deliverables and timeline up front, then deliver against that plan. Changes go through a simple, documented change process.',
    points: [
      'Agreed scope and milestones before work starts',
      'Predictable budget for the defined scope',
      'Regular demos at each milestone',
      'Documented change requests',
    ],
  },
  {
    icon: UsersRound,
    name: 'Dedicated team',
    bestFor: 'Ongoing product work and long-term roadmaps',
    text: 'A team of developers, designers or QA engineers works on your project full time, guided by your priorities. You get continuity and deep product knowledge.',
    points: [
      'Team members focused on your project',
      'Flexible priorities managed in your backlog',
      'Scale the team up or down as needs change',
      'Regular planning and progress reviews',
    ],
  },
  {
    icon: Timer,
    name: 'Time and materials',
    bestFor: 'Evolving requirements and exploratory work',
    text: 'You pay for the time and effort actually spent, which keeps the work flexible as requirements change. It suits discovery, prototypes and incremental improvements.',
    points: [
      'Start quickly without a fixed specification',
      'Adjust scope as you learn',
      'Transparent time reporting',
      'Easy to move to fixed scope once requirements settle',
    ],
  },
]

export const developerRoles: DeveloperRole[] = [
  {
    icon: MonitorSmartphone,
    title: 'Frontend developer (React)',
    text: 'Builds responsive, accessible interfaces for ERP screens, dashboards and customer portals.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'State management', 'REST API integration', 'Accessibility'],
  },
  {
    icon: Server,
    title: 'Backend developer (Node.js)',
    text: 'Designs APIs, business logic and integrations that keep data consistent across modules.',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API design', 'Background jobs'],
  },
  {
    icon: Boxes,
    title: 'Full-stack MERN developer',
    text: 'Delivers complete features end to end, from database models to user interface.',
    skills: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript'],
  },
  {
    icon: Brain,
    title: 'ERP functional consultant',
    text: 'Translates business processes into ERP configuration, workflows and reports.',
    skills: ['Process mapping', 'Requirements gathering', 'Module configuration', 'User training', 'Acceptance testing'],
  },
  {
    icon: Bug,
    title: 'QA engineer',
    text: 'Tests features, integrations and data migrations so releases are stable and predictable.',
    skills: ['Test planning', 'Manual testing', 'Playwright', 'API testing', 'Regression testing'],
  },
  {
    icon: Palette,
    title: 'UI/UX designer',
    text: 'Designs clear, efficient workflows for people who use business software every day.',
    skills: ['User research', 'Wireframing', 'Prototyping', 'Design systems', 'Usability testing'],
  },
]

export const hireProcess: TextItem[] = [
  {
    title: 'Share your requirements',
    text: 'Tell us about your project, the roles you need, the skills that matter and how long you need support.',
  },
  {
    title: 'Discuss scope and fit',
    text: 'We clarify goals, working hours, tools and team structure in a short call so we understand your context.',
  },
  {
    title: 'Review matched profiles',
    text: 'We share profiles of developers whose skills and experience match your requirements.',
  },
  {
    title: 'Interview and select',
    text: 'You interview the candidates you like and choose the people who fit your team best.',
  },
  {
    title: 'Agree terms and start',
    text: 'Once the agreement is signed, we complete onboarding and your developers begin work.',
  },
]

export const hireOnboarding: TextItem[] = [
  {
    title: 'Access and tools',
    text: 'We set up access to your repositories, project tools and communication channels on day one.',
  },
  {
    title: 'Project walkthrough',
    text: 'Your team introduces the codebase, architecture and current priorities so developers have the right context.',
  },
  {
    title: 'Working agreements',
    text: 'We agree on working hours overlap, meeting rhythm, reporting and how code is reviewed and released.',
  },
  {
    title: 'First tasks and check-in',
    text: 'Developers start with well-defined tasks, followed by an early check-in to confirm everything is on track.',
  },
]

export const hireFaqs: Faq[] = [
  {
    q: 'Can I interview developers before they join my project?',
    a: 'Yes. We share profiles that match your requirements, and you interview and select the developers you want to work with.',
  },
  {
    q: 'Will developers work in my tools and processes?',
    a: "Yes. Dedicated developers work in your repositories, project management tools and communication channels, following your team's workflow and review process.",
  },
  {
    q: 'Can I scale the team up or down?',
    a: 'Yes. You can add or reduce team members as your needs change. Notice periods and terms are set out in the agreement.',
  },
  {
    q: 'Who owns the code developers write?',
    a: 'Ownership of work produced for you is set out in the signed agreement. In typical engagements, the client owns the code created for their project.',
  },
  {
    q: 'What if a developer is not the right fit?',
    a: "Let us know early. We will discuss the concerns with you and, where needed, propose a replacement so the project keeps moving.",
  },
]

/* ---------- Pricing ---------- */

export const pricingFactors: IconItem[] = [
  {
    icon: Blocks,
    title: 'Modules',
    text: 'The number and type of modules you need, such as finance, inventory, CRM or HR, shape the core of the proposal.',
  },
  {
    icon: Users,
    title: 'Users',
    text: 'How many people will use the system and which roles they need access to.',
  },
  {
    icon: Plug,
    title: 'Integrations',
    text: 'Connections to payment gateways, ecommerce stores, banking, shipping or in-house systems add scope depending on complexity.',
  },
  {
    icon: Database,
    title: 'Data migration',
    text: 'The volume, quality and number of sources of the data you want to bring across from existing systems.',
  },
  {
    icon: Wrench,
    title: 'Customization',
    text: 'Custom modules, workflows, fields and reports built for processes that the standard modules do not cover.',
  },
  {
    icon: LifeBuoy,
    title: 'Support level',
    text: 'The response times, hours of cover and ongoing improvements your operations need after go-live.',
  },
]

export const pricingIncluded: string[] = [
  'Discovery session',
  'Module configuration',
  'Roles and permissions setup',
  'Data migration plan',
  'User training',
  'Go-live support',
]

export const pricingAddons: { name: string; text: string }[] = [
  {
    name: 'Custom module development',
    text: 'New modules built around processes the standard product does not cover.',
  },
  {
    name: 'Additional integrations',
    text: 'Connections to more third-party tools, in-house systems or custom APIs.',
  },
  {
    name: 'Data migration',
    text: 'Extraction, cleanup and import of data from additional or complex legacy sources.',
  },
  {
    name: 'Extended support',
    text: 'Broader support coverage, faster response targets or a dedicated support contact.',
  },
  {
    name: 'Dedicated developer hours',
    text: 'A block of developer time for ongoing enhancements, fixes and new features.',
  },
  {
    name: 'Advanced reporting',
    text: 'Custom dashboards, KPIs and scheduled reports tailored to your management needs.',
  },
]

export const implementationConsiderations: TextItem[] = [
  {
    title: 'Scope and phasing',
    text: 'Rolling out a few core modules first usually shortens time to value and lowers risk compared with launching everything at once.',
  },
  {
    title: 'Data readiness',
    text: 'Clean, well-structured data migrates faster. Duplicates, gaps and inconsistent formats add time for cleanup and validation.',
  },
  {
    title: 'Team availability',
    text: 'Implementation needs input from your people for workshops, testing and training, so plan time for key users alongside their daily work.',
  },
  {
    title: 'Integrations and custom work',
    text: 'Each integration or custom feature adds design, build and testing effort, and should be prioritized against business value.',
  },
]

export const pricingFaqs: Faq[] = [
  {
    q: 'Why is there no fixed price list?',
    a: 'Every business needs a different mix of modules, users, integrations and support. We quote per scope so you pay for what you actually need rather than a one-size-fits-all package.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Request a quote with a short description of your requirements. We will follow up to clarify scope, then send a proposal that breaks down what is included.',
  },
  {
    q: 'Can I start small and add modules later?',
    a: 'Yes. Many businesses begin with one or two modules and add more as they grow. New modules share the same data, so expanding does not mean starting over.',
  },
  {
    q: 'Are implementation and support priced separately?',
    a: 'Proposals usually show platform, implementation and support as separate items, so you can see what each part covers.',
  },
  {
    q: 'Is a quote binding?',
    a: 'No. A quote or proposal is an estimate based on the information available at the time. Commitments are set out in a signed agreement.',
  },
]

export const implementationFaqs: Faq[] = [
  {
    q: 'How long does an implementation take?',
    a: 'It depends on the number of modules, integrations and the amount of data to migrate. After discovery we share a scoped plan with milestones, so you know the timeline before work begins.',
  },
  {
    q: "How much of our team's time is needed?",
    a: 'Key users join workshops, review configuration, test the system and attend training. We plan these sessions in advance to fit around daily work.',
  },
  {
    q: 'Can we keep using our old system during the rollout?',
    a: 'Yes. Your existing system stays in use until go-live, and for some projects we plan a short parallel run to compare results before switching over.',
  },
  {
    q: 'What happens after go-live?',
    a: 'We stay close during the first weeks of live use to resolve issues quickly, then move to an agreed support plan covering fixes, updates and improvements.',
  },
]

export const securityFaqs: Faq[] = [
  {
    q: 'How is data protected in transit?',
    a: 'Connections to the platform use HTTPS, so data sent between browsers, the API and the server is encrypted in transit.',
  },
  {
    q: 'How are passwords stored?',
    a: 'Passwords are never stored in plain text. They are hashed with a one-way algorithm before they are saved.',
  },
  {
    q: 'How is access controlled?',
    a: 'Role-based access control lets administrators decide who can view, create, approve or export data in each module, and audit logs record administrative actions.',
  },
  {
    q: 'Is data backed up?',
    a: 'Yes. Data is backed up regularly so it can be restored if something goes wrong. Backup frequency and retention can be discussed as part of your support plan.',
  },
]

/* ---------- Careers and partners ---------- */

export const careersLookFor: IconItem[] = [
  {
    icon: Wrench,
    title: 'Strong fundamentals',
    text: 'Solid skills in your discipline, whether that is engineering, design, QA or ERP consulting, and the habit of keeping them sharp.',
  },
  {
    icon: Target,
    title: 'Business curiosity',
    text: 'Interest in how businesses actually operate, because good ERP work starts with understanding the process behind the screen.',
  },
  {
    icon: MessageSquare,
    title: 'Clear communication',
    text: 'The ability to explain technical decisions in plain language to clients and teammates.',
  },
  {
    icon: BadgeCheck,
    title: 'Ownership',
    text: 'Taking responsibility for work from start to finish, including testing, documentation and follow-up.',
  },
]

export const careersProcess: TextItem[] = [
  {
    title: 'Apply',
    text: 'Send your details, a short note about your experience and links to relevant work.',
  },
  {
    title: 'Introductory call',
    text: 'A conversation about your background, what you are looking for and how we work.',
  },
  {
    title: 'Skills assessment',
    text: 'A practical exercise or technical discussion relevant to the role you applied for.',
  },
  {
    title: 'Final conversation and offer',
    text: 'A final discussion with the team, followed by an offer if we are both a good fit.',
  },
]

export const partnerTypes: IconItem[] = [
  {
    icon: Link2,
    title: 'Technology partners',
    text: 'We welcome software and service providers who want to build integrations with ERPVALLEY and offer connected solutions to shared customers.',
  },
  {
    icon: Handshake,
    title: 'Implementation and referral partners',
    text: 'We work with consultants and agencies who advise businesses on operations and want to refer or co-deliver ERP projects.',
  },
  {
    icon: Store,
    title: 'Reseller partners',
    text: 'We welcome conversations with firms that want to offer the ERPVALLEY platform and services to businesses in their market.',
  },
]
