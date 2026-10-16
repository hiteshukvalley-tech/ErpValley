import {
  AlertTriangle,
  ArrowLeftRight,
  Banknote,
  BarChart3,
  Bell,
  Boxes,
  Building2,
  Calculator,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Code2,
  Coins,
  Database,
  Download,
  Eye,
  Factory,
  FileSpreadsheet,
  FileText,
  Filter,
  Fingerprint,
  FolderKanban,
  Gauge,
  GitBranch,
  GitCompare,
  Globe2,
  Handshake,
  History,
  Inbox,
  KeyRound,
  Landmark,
  Layers,
  LayoutDashboard,
  LineChart,
  Link2,
  ListChecks,
  Lock,
  Mail,
  MessageSquare,
  Milestone,
  MonitorSmartphone,
  Network,
  Package,
  PackageCheck,
  Percent,
  PieChart,
  PlugZap,
  Receipt,
  Recycle,
  RefreshCw,
  Repeat2,
  Route,
  Scale,
  ScanLine,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Split,
  Table2,
  Tags,
  Target,
  Timer,
  TrendingUp,
  Truck,
  UserPlus,
  Users,
  UsersRound,
  Wallet,
  Warehouse,
  Webhook,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react'
import type { ProductContent } from './types'

/*
 * Product (module) page content. Order matches productItems in config/navigation.ts.
 * Sample data in previews is fictional and labelled as such on the page.
 */

export const products: ProductContent[] = [
  // ─────────────────────────────── ERP Platform
  {
    slug: 'erp-platform',
    name: 'ERP Platform',
    icon: LayoutDashboard,
    category: 'Platform',
    headline: 'One connected system for every department',
    summary:
      'ERPVALLEY brings finance, sales, stock, people and projects onto one shared database. Start with the modules you need and add more as you grow.',
    metaDescription:
      'ERPVALLEY ERP Platform connects finance, sales, inventory, HR and projects on one database, with roles, workflows, audit trails and an open REST API.',
    purpose: 'Shared foundation that connects every module',
    typicalUsers: 'Business owners, operations leaders, IT teams',
    preview: {
      title: 'Company overview',
      stats: [
        ['Active modules', '7'],
        ['Users online', '42'],
        ['Open approvals', '15'],
      ],
      columns: ['Module', 'Owner', 'Last activity'],
      rows: [
        ['Finance', 'R. Iyer', 'Invoice posted'],
        ['Sales', 'L. Fernandes', 'Order confirmed'],
        ['Inventory', 'K. Shah', 'Transfer received'],
        ['HR & Payroll', 'M. Rao', 'Leave approved'],
      ],
      statuses: ['Running', 'Running', 'Running', 'Running'],
    },
    benefits: [
      {
        icon: Database,
        title: 'One source of truth',
        text: 'Every module reads and writes the same records, so a sales order updates stock, invoices and reports without anyone re-keying it.',
      },
      {
        icon: Layers,
        title: 'Grow module by module',
        text: 'Begin with the areas that hurt most today. Switch on new modules later without migrating data or retraining from scratch.',
      },
      {
        icon: ShieldCheck,
        title: 'Control who sees what',
        text: 'Role-based permissions decide who can view, create, approve or export, down to individual modules and actions.',
      },
      {
        icon: Eye,
        title: 'Clear view across teams',
        text: 'Leaders see sales, cash, stock and workload in one place instead of stitching together reports from separate tools.',
      },
    ],
    features: [
      {
        icon: Users,
        title: 'Users, roles and teams',
        text: 'Create roles that match your organisation chart and assign permissions per module, record type and action.',
      },
      {
        icon: Workflow,
        title: 'Built-in workflow engine',
        text: 'Set approval chains, triggers and automatic actions that work across every module without custom code.',
      },
      {
        icon: History,
        title: 'Audit trail on every record',
        text: 'See who created or changed a record, what changed and when. Useful for internal reviews and external audits.',
      },
      {
        icon: Globe2,
        title: 'Multi-company and currency',
        text: 'Run several legal entities, branches and currencies from one system, with consolidated views when you need them.',
      },
      {
        icon: Settings2,
        title: 'Custom fields and forms',
        text: 'Add the fields, document numbering and form layouts your business needs, without changing the underlying code.',
      },
      {
        icon: MonitorSmartphone,
        title: 'Works on any device',
        text: 'A responsive web interface for desktop, tablet and phone, so approvals and lookups happen wherever your team is.',
      },
    ],
    capabilityGroups: [
      { title: 'Administration', items: ['Role-based access control', 'User and team management', 'Company and branch setup', 'Document numbering rules'] },
      { title: 'Data and control', items: ['Shared data model', 'Record-level audit trail', 'Bulk import and export', 'Configurable custom fields'] },
      { title: 'Extensibility', items: ['Open REST API', 'Outbound webhooks', 'Workflow automation', 'Custom module development'] },
    ],
    useCases: [
      {
        title: 'Replacing a patchwork of spreadsheets',
        text: 'A growing distributor tracks orders, stock and payments in separate sheets. Moving to one platform removes double entry and month-end reconciliation between files.',
      },
      {
        title: 'Running several entities together',
        text: 'A group with two trading companies and a service arm keeps separate books and permissions, while leadership sees combined performance in one dashboard.',
      },
      {
        title: 'Outgrowing a basic accounting tool',
        text: 'A business that started with simple bookkeeping software adds sales, inventory and purchasing on the same platform as finance, step by step.',
      },
    ],
    relatedModules: ['finance-accounting', 'workflow-automation', 'reporting-analytics', 'integrations'],
    integrations: ['Single sign-on providers', 'Email and calendar', 'Bank feeds', 'Ecommerce platforms', 'Custom REST APIs', 'Webhooks'],
    faqs: [
      {
        q: 'Do we have to buy every module at once?',
        a: 'No. The platform is modular, so you can start with one or two modules and add others later. New modules use the same data, so nothing has to be migrated again.',
      },
      {
        q: 'Is ERPVALLEY cloud-based?',
        a: 'ERPVALLEY is a web application that runs in the browser. We can discuss hosting options during scoping, based on your requirements for access, data location and support.',
      },
      {
        q: 'Can the platform be customised for our processes?',
        a: 'Yes. Fields, forms, roles, workflows and reports are configurable. Where you need something the standard product does not cover, our team can build custom modules.',
      },
      {
        q: 'How is the platform priced?',
        a: 'Pricing depends on the modules you choose, the number of users and the implementation scope. Request a quote and we will prepare a proposal for your requirements.',
      },
    ],
  },

  // ─────────────────────────────── Finance & Accounting
  {
    slug: 'finance-accounting',
    name: 'Finance & Accounting',
    icon: Calculator,
    category: 'Finance',
    headline: 'Close your books faster, with every entry traceable',
    summary:
      'Manage ledgers, invoices, payments, tax and period close in one place. Every journal links back to the order, bill or payment that created it.',
    metaDescription:
      'Finance and accounting software with general ledger, invoicing, payables, receivables, bank reconciliation, configurable tax rules and faster period close.',
    purpose: 'Ledgers, invoicing, payments and period close',
    typicalUsers: 'Finance teams, accountants, CFOs',
    preview: 'finance',
    benefits: [
      {
        icon: Timer,
        title: 'Shorter month-end close',
        text: 'Sales, purchases and payroll post to the ledger automatically, so closing the month is about reviewing, not re-entering.',
      },
      {
        icon: Link2,
        title: 'Drill back to the source',
        text: 'Click from any balance down to the journal, then to the invoice, bill or receipt behind it. Questions get answered in seconds.',
      },
      {
        icon: Wallet,
        title: 'Better cash visibility',
        text: 'See what customers owe, what you owe suppliers and what is due this week, so you can plan payments with confidence.',
      },
      {
        icon: Lock,
        title: 'Tighter financial control',
        text: 'Lock closed periods, require approvals for manual journals and keep a full history of who posted what.',
      },
    ],
    features: [
      {
        icon: Table2,
        title: 'General ledger',
        text: 'A flexible chart of accounts with cost centres and dimensions, so you can report by branch, department or project.',
      },
      {
        icon: Receipt,
        title: 'Invoicing and receivables',
        text: 'Raise invoices from sales orders or manually, record receipts, and track overdue balances with ageing reports.',
      },
      {
        icon: FileText,
        title: 'Bills and payables',
        text: 'Capture supplier bills, match them to purchase orders and schedule payments by due date or priority.',
      },
      {
        icon: Landmark,
        title: 'Bank reconciliation',
        text: 'Import statements and match lines to recorded payments and receipts, with suggested matches to speed up the work.',
      },
      {
        icon: Percent,
        title: 'Configurable tax rules',
        text: 'Set up tax rates, groups and accounts for your region, and apply them automatically on sales and purchase documents.',
      },
      {
        icon: Scale,
        title: 'Financial statements',
        text: 'Produce trial balance, profit and loss and balance sheet reports for any period, entity or cost centre.',
      },
    ],
    capabilityGroups: [
      { title: 'Core accounting', items: ['Chart of accounts', 'Journal entries', 'Cost centres and dimensions', 'Multi-currency accounting'] },
      { title: 'Receivables and payables', items: ['Customer invoicing', 'Supplier bill capture', 'Payment scheduling', 'Ageing reports'] },
      { title: 'Close and reporting', items: ['Bank reconciliation', 'Period locking', 'Trial balance', 'Profit and loss statement'] },
    ],
    useCases: [
      {
        title: 'Cutting month-end from days to a routine',
        text: 'A finance team that used to compile journals from three systems now reviews entries already posted by sales, purchasing and payroll, then locks the period.',
      },
      {
        title: 'Chasing overdue invoices',
        text: 'An accounts receivable clerk runs the ageing report each Monday, sends reminders for invoices past due and records part-payments against the right invoice.',
      },
      {
        title: 'Reporting by branch',
        text: 'A business with four branches tags every transaction with a cost centre, so the CFO can compare branch profitability without a separate spreadsheet.',
      },
    ],
    relatedModules: ['sales-management', 'purchase-management', 'hr-payroll', 'reporting-analytics'],
    integrations: ['Bank feeds', 'Payment gateways', 'Tax calculation services', 'Expense capture tools', 'Spreadsheet export'],
    faqs: [
      {
        q: 'Does ERPVALLEY handle tax for our country?',
        a: 'Tax rates, groups and posting accounts are configurable, so you can set them up to match your local rules. During implementation we review your requirements and configure them with your finance team.',
      },
      {
        q: 'Can we move our existing chart of accounts and balances?',
        a: 'Yes. We import your chart of accounts, opening balances and open invoices and bills as part of data migration. Balances are checked against your previous system before go-live.',
      },
      {
        q: 'Can we run more than one company?',
        a: 'Yes. You can keep separate books for several entities and currencies in one system, and view them individually or together.',
      },
      {
        q: 'How much does the finance module cost?',
        a: 'It depends on the modules, users and implementation scope you need. Request a quote and we will send a proposal based on your requirements.',
      },
    ],
  },

  // ─────────────────────────────── CRM
  {
    slug: 'crm',
    name: 'CRM',
    icon: Target,
    category: 'Sales & Customers',
    headline: 'A sales pipeline your whole team can see',
    summary:
      'Track every lead from first contact to signed deal. Activities, emails and quotes stay on the customer record, so nothing slips between people.',
    metaDescription:
      'CRM software to manage leads, contacts, deals and follow-ups in a visual pipeline, with activity history and quotes that convert into sales orders.',
    purpose: 'Leads, pipeline, contacts and follow-ups',
    typicalUsers: 'Sales teams, account managers, sales leaders',
    preview: 'crm',
    benefits: [
      {
        icon: Eye,
        title: 'Know where every deal stands',
        text: 'A visual pipeline shows each opportunity by stage and owner, so managers spot stuck deals before the quarter ends.',
      },
      {
        icon: Bell,
        title: 'Never miss a follow-up',
        text: 'Reminders and scheduled activities keep reps on track, and overdue tasks are flagged on their dashboard every morning.',
      },
      {
        icon: History,
        title: 'Full customer history',
        text: 'Calls, emails, meetings, quotes and orders sit on one record, so anyone picking up an account knows what happened before.',
      },
      {
        icon: Repeat2,
        title: 'Smooth hand-off to sales orders',
        text: 'Won quotes convert into sales orders in one step, carrying prices and terms through to fulfilment and invoicing.',
      },
    ],
    features: [
      {
        icon: UserPlus,
        title: 'Lead capture and qualification',
        text: 'Add leads manually, by import or from web forms, then qualify them with your own criteria before creating a deal.',
      },
      {
        icon: FolderKanban,
        title: 'Custom pipeline stages',
        text: 'Define stages that match how you sell, drag deals between them and set probability and expected close dates.',
      },
      {
        icon: CalendarCheck,
        title: 'Activities and reminders',
        text: 'Log calls and meetings, schedule next steps and get reminded before a task is due.',
      },
      {
        icon: Mail,
        title: 'Email history on the record',
        text: 'Keep relevant email conversations linked to contacts and deals, so context is not stuck in one person’s inbox.',
      },
      {
        icon: FileText,
        title: 'Quotes from the deal',
        text: 'Build quotes from your product list with discounts and terms, send them for approval and share them as PDF.',
      },
      {
        icon: TrendingUp,
        title: 'Pipeline forecasting',
        text: 'Weighted pipeline and expected revenue by month, owner or stage, based on the deals your team is working.',
      },
    ],
    capabilityGroups: [
      { title: 'Leads and contacts', items: ['Lead capture forms', 'Company and contact records', 'Lead scoring rules', 'Duplicate detection'] },
      { title: 'Pipeline', items: ['Drag-and-drop stages', 'Deal probability', 'Win and loss reasons', 'Territory assignment'] },
      { title: 'Engagement', items: ['Activity scheduling', 'Email logging', 'Quote generation', 'Follow-up reminders'] },
    ],
    useCases: [
      {
        title: 'Taking over an account mid-deal',
        text: 'When a rep goes on leave, a colleague opens the deal and sees every call, email and quote revision, then follows up the same afternoon.',
      },
      {
        title: 'Weekly pipeline review',
        text: 'A sales manager filters the pipeline by close date and stage, discusses stuck deals with each rep and updates forecasts in the meeting.',
      },
      {
        title: 'From quote to order without re-typing',
        text: 'A customer accepts a quote by email. The rep marks the deal as won and converts the quote into a sales order for the operations team.',
      },
    ],
    relatedModules: ['sales-management', 'workflow-automation', 'reporting-analytics', 'integrations'],
    integrations: ['Email and calendar', 'Web forms', 'Telephony systems', 'Marketing email tools', 'Messaging apps'],
    faqs: [
      {
        q: 'Can we import our existing contacts and deals?',
        a: 'Yes. Contacts, companies and open deals can be imported from spreadsheets or exported from your current CRM. We help map fields during implementation.',
      },
      {
        q: 'Can we customise the pipeline stages?',
        a: 'Yes. You can create several pipelines with their own stages, required fields and probabilities, for example one for new business and one for renewals.',
      },
      {
        q: 'Does the CRM connect to finance and inventory?',
        a: 'Yes. Because CRM runs on the same platform, won deals become sales orders that check stock and flow into invoicing without manual re-entry.',
      },
      {
        q: 'How is CRM priced?',
        a: 'Pricing depends on the modules and number of users you need. Request a quote and we will send a proposal tailored to your sales team.',
      },
    ],
  },

  // ─────────────────────────────── HR & Payroll
  {
    slug: 'hr-payroll',
    name: 'HR & Payroll',
    icon: UsersRound,
    category: 'People & Projects',
    headline: 'People records, attendance and payroll in one place',
    summary:
      'Keep employee records, attendance and leave up to date, then run payroll from the same data. Payslips and journals are produced in a few clicks.',
    metaDescription:
      'HR and payroll software for employee records, attendance, leave, payroll runs and payslips, with configurable statutory deductions for your region.',
    purpose: 'Employee records, attendance, leave and payroll',
    typicalUsers: 'HR teams, payroll officers, line managers',
    preview: {
      title: 'Payroll run · March',
      stats: [
        ['Employees', '128'],
        ['Gross pay', '$412,600'],
        ['Pending leave', '9'],
      ],
      columns: ['Employee', 'Department', 'Net pay'],
      rows: [
        ['A. Mehta', 'Finance', '$3,420'],
        ['J. Thomas', 'Warehouse', '$2,180'],
        ['S. Kapoor', 'Sales', '$3,960'],
        ['D. Nair', 'Production', '$2,540'],
      ],
      statuses: ['Approved', 'Approved', 'Pending', 'Draft'],
    },
    benefits: [
      {
        icon: CheckCircle2,
        title: 'Accurate payroll, first time',
        text: 'Attendance, leave and overtime feed payroll directly, so pay is calculated from real data rather than retyped timesheets.',
      },
      {
        icon: Clock,
        title: 'Less admin for HR',
        text: 'Employees request leave and download payslips themselves, freeing HR to focus on hiring and people issues.',
      },
      {
        icon: Lock,
        title: 'Sensitive data kept private',
        text: 'Salary and personal details are visible only to the roles you choose, with every change recorded.',
      },
      {
        icon: Landmark,
        title: 'Payroll posted to the books',
        text: 'Each approved payroll run creates the accounting journal automatically, ready for finance to review.',
      },
    ],
    features: [
      {
        icon: Users,
        title: 'Employee records',
        text: 'Store personal details, contracts, job history, documents and bank information on one secure employee profile.',
      },
      {
        icon: Fingerprint,
        title: 'Attendance tracking',
        text: 'Record attendance from biometric devices, web check-in or imports, with shifts, late marks and overtime rules.',
      },
      {
        icon: CalendarDays,
        title: 'Leave management',
        text: 'Define leave types, accrual rules and holiday calendars. Managers approve requests and balances update automatically.',
      },
      {
        icon: Calculator,
        title: 'Payroll runs',
        text: 'Run payroll for a period, review earnings and deductions per employee, then approve and lock the run.',
      },
      {
        icon: Settings2,
        title: 'Configurable deductions',
        text: 'Configure statutory deductions, contributions and allowances for your region as salary components with their own formulas.',
      },
      {
        icon: FileText,
        title: 'Payslips and reports',
        text: 'Generate payslips for each employee, plus payroll summaries and bank transfer files for your finance team.',
      },
    ],
    capabilityGroups: [
      { title: 'Core HR', items: ['Employee profiles', 'Contract and document storage', 'Departments and positions', 'Onboarding checklists'] },
      { title: 'Time and attendance', items: ['Shift scheduling', 'Biometric device import', 'Overtime rules', 'Leave accrual policies'] },
      { title: 'Payroll', items: ['Salary structures', 'Statutory deduction setup', 'Payslip generation', 'Bank transfer files'] },
    ],
    useCases: [
      {
        title: 'Monthly payroll without spreadsheets',
        text: 'A payroll officer pulls approved attendance and leave into the run, reviews exceptions, and sends payslips and the bank file the same day.',
      },
      {
        title: 'Self-service leave requests',
        text: 'A warehouse supervisor approves leave from a phone. The employee sees the updated balance and the shift roster adjusts.',
      },
      {
        title: 'Onboarding a new hire',
        text: 'HR creates the employee profile, attaches the signed contract, assigns a salary structure and triggers an onboarding checklist for IT and the manager.',
      },
    ],
    relatedModules: ['finance-accounting', 'project-management', 'workflow-automation', 'reporting-analytics'],
    integrations: ['Biometric attendance devices', 'Bank payment files', 'Email and calendar', 'Single sign-on providers', 'Document e-signature tools'],
    faqs: [
      {
        q: 'Does the payroll module handle our local statutory deductions?',
        a: 'Deductions, contributions and allowances are configurable salary components, so you can set them up for your region. We review your rules with you during implementation and test them before your first live run.',
      },
      {
        q: 'Can we connect our attendance devices?',
        a: 'In most cases, yes. Attendance can be imported from biometric devices that export data, or captured through web check-in. We confirm device compatibility during scoping.',
      },
      {
        q: 'Who can see salary information?',
        a: 'Only roles you authorise. Permissions control access to salary, bank and personal fields, and changes are recorded in the audit trail.',
      },
      {
        q: 'How is HR & Payroll priced?',
        a: 'Pricing depends on the number of employees, users and modules you need. Request a quote and we will prepare a proposal for your organisation.',
      },
    ],
  },

  // ─────────────────────────────── Inventory Management
  {
    slug: 'inventory-management',
    name: 'Inventory Management',
    icon: Warehouse,
    category: 'Operations',
    headline: 'Stock levels you can trust, across every warehouse',
    summary:
      'Know what is on hand, reserved and on order in each location. Reorder rules and alerts help you avoid both stock-outs and over-ordering.',
    metaDescription:
      'Inventory management software for multi-warehouse stock, transfers, reorder rules, low-stock alerts, and batch, serial and expiry tracking in one system.',
    purpose: 'Stock levels, warehouses, transfers and valuation',
    typicalUsers: 'Warehouse teams, inventory planners, operations managers',
    preview: 'inventory',
    benefits: [
      {
        icon: Eye,
        title: 'Real-time stock visibility',
        text: 'Every receipt, sale and transfer updates stock instantly, so sales and purchasing work from the same numbers.',
      },
      {
        icon: AlertTriangle,
        title: 'Fewer stock-outs',
        text: 'Reorder points and low-stock alerts warn you before popular items run out, giving purchasing time to act.',
      },
      {
        icon: Coins,
        title: 'Less cash tied up in stock',
        text: 'Spot slow-moving and excess items early, so you can adjust reorder levels and free up working capital.',
      },
      {
        icon: Search,
        title: 'Full traceability',
        text: 'Follow any batch or serial number from receipt to customer, which makes recalls and warranty checks straightforward.',
      },
    ],
    features: [
      {
        icon: Warehouse,
        title: 'Multi-warehouse stock',
        text: 'Track quantities by warehouse, zone and bin, with separate views for on hand, reserved and available stock.',
      },
      {
        icon: ArrowLeftRight,
        title: 'Stock transfers',
        text: 'Move stock between locations with transfer documents that record what was sent, what arrived and any difference.',
      },
      {
        icon: RefreshCw,
        title: 'Reorder rules',
        text: 'Set minimum and maximum levels per item and location, and generate purchase suggestions when stock falls low.',
      },
      {
        icon: Tags,
        title: 'Batch, serial and expiry',
        text: 'Record batch and serial numbers on receipt, and pick by expiry date to reduce waste on perishable goods.',
      },
      {
        icon: ScanLine,
        title: 'Barcode scanning',
        text: 'Use barcode scanners for receiving, picking and counting to speed up warehouse work and reduce errors.',
      },
      {
        icon: ClipboardCheck,
        title: 'Stock counts and adjustments',
        text: 'Run full or cycle counts, review variances and post approved adjustments with a reason code.',
      },
    ],
    capabilityGroups: [
      { title: 'Stock control', items: ['Multi-location tracking', 'Bin and zone management', 'Units of measure', 'Stock reservations'] },
      { title: 'Movements', items: ['Goods receipts', 'Inter-warehouse transfers', 'Pick, pack and dispatch', 'Returns handling'] },
      { title: 'Planning and valuation', items: ['Reorder point rules', 'Cycle counting', 'Stock valuation methods', 'Slow-moving stock reports'] },
    ],
    useCases: [
      {
        title: 'Balancing stock between branches',
        text: 'A retailer sees one store running low on a fast seller while another has excess. A transfer is raised and tracked until it is received.',
      },
      {
        title: 'Managing perishable goods',
        text: 'A food distributor records expiry dates on receipt, and pickers are directed to the earliest-expiring batch first to cut write-offs.',
      },
      {
        title: 'Quarterly cycle counts',
        text: 'A warehouse team counts high-value bins each week instead of closing for a full annual stocktake, and posts approved variances.',
      },
    ],
    relatedModules: ['purchase-management', 'sales-management', 'manufacturing', 'procurement'],
    integrations: ['Barcode scanners', 'Ecommerce platforms', 'Shipping carriers', 'Warehouse label printers', 'Marketplace channels'],
    faqs: [
      {
        q: 'Can we track stock in several warehouses?',
        a: 'Yes. You can set up as many warehouses, zones and bins as you need, and see stock for each location or across the business.',
      },
      {
        q: 'Which stock valuation methods are supported?',
        a: 'Common methods such as FIFO and weighted average can be configured per item group. We confirm the right setup with your finance team during implementation.',
      },
      {
        q: 'Does it work with barcode scanners?',
        a: 'Yes. Standard barcode scanners work for receiving, picking and counting. We can also print barcode labels for items and locations.',
      },
      {
        q: 'How is the inventory module priced?',
        a: 'It depends on the modules, users and number of locations you need. Request a quote and we will send a proposal based on your setup.',
      },
    ],
  },

  // ─────────────────────────────── Procurement
  {
    slug: 'procurement',
    name: 'Procurement',
    icon: ClipboardList,
    category: 'Operations',
    headline: 'Control spend from requisition to approved supplier',
    summary:
      'Turn internal requests into approved purchases with clear rules. Compare supplier quotes side by side and keep every decision on record.',
    metaDescription:
      'Procurement software for purchase requisitions, RFQs, approval limits, supplier quote comparison and vendor management, with a clean hand-off to purchasing.',
    purpose: 'Requisitions, RFQs, approvals and vendor selection',
    typicalUsers: 'Procurement teams, department heads, finance approvers',
    preview: {
      title: 'Requisitions',
      stats: [
        ['Open requests', '23'],
        ['Awaiting approval', '8'],
        ['RFQs out', '5'],
      ],
      columns: ['Request', 'Department', 'Requested by', 'Estimate'],
      rows: [
        ['PR-1042 Laptops', 'IT', 'A. Mehta', '$9,600'],
        ['PR-1043 Packaging', 'Warehouse', 'P. Das', '$2,150'],
        ['PR-1044 Safety gear', 'Production', 'R. Singh', '$1,380'],
        ['PR-1045 Office chairs', 'Admin', 'N. Pillai', '$3,200'],
      ],
      statuses: ['Approved', 'Pending', 'In progress', 'Draft'],
    },
    benefits: [
      {
        icon: ShieldCheck,
        title: 'Spend within policy',
        text: 'Approval limits by amount, department and category make sure purchases are signed off by the right person every time.',
      },
      {
        icon: Scale,
        title: 'Better supplier choices',
        text: 'Compare quotes on price, lead time and terms in one view, and record why a supplier was chosen.',
      },
      {
        icon: Eye,
        title: 'Visibility before money is committed',
        text: 'Finance sees requested and approved spend before purchase orders go out, not after the bills arrive.',
      },
      {
        icon: Zap,
        title: 'Faster request handling',
        text: 'Requesters submit online and track status themselves, so procurement spends less time answering emails.',
      },
    ],
    features: [
      {
        icon: ClipboardList,
        title: 'Purchase requisitions',
        text: 'Employees raise requests with item, quantity, budget code and justification, using a simple online form.',
      },
      {
        icon: GitBranch,
        title: 'Approval limits and routing',
        text: 'Route requests through approvers based on value, department or category, with delegation when someone is away.',
      },
      {
        icon: Send,
        title: 'Requests for quotation',
        text: 'Send RFQs to several suppliers from one request, and record their responses against each line item.',
      },
      {
        icon: GitCompare,
        title: 'Vendor quote comparison',
        text: 'See supplier prices, lead times and payment terms side by side, then award the whole request or split it by line.',
      },
      {
        icon: Building2,
        title: 'Supplier records',
        text: 'Keep supplier contacts, documents, approved categories and performance notes in one place.',
      },
      {
        icon: Handshake,
        title: 'Hand-off to purchasing',
        text: 'Approved requests convert into purchase orders, ready for receiving and three-way matching in Purchase Management.',
      },
    ],
    capabilityGroups: [
      { title: 'Requisitioning', items: ['Online request forms', 'Budget code checks', 'Item catalogues', 'Request status tracking'] },
      { title: 'Sourcing', items: ['Multi-supplier RFQs', 'Quote comparison matrix', 'Split awards by line', 'Award justification notes'] },
      { title: 'Governance', items: ['Value-based approval limits', 'Approval delegation', 'Preferred supplier lists', 'Full approval history'] },
    ],
    useCases: [
      {
        title: 'Equipment request across departments',
        text: 'The IT lead requests ten laptops. The request routes to the department head, then finance because it exceeds the limit, before an RFQ goes out.',
      },
      {
        title: 'Choosing between three suppliers',
        text: 'Procurement receives three quotes for packaging material, compares unit price and lead time in one view, and awards the order with a recorded reason.',
      },
      {
        title: 'Keeping purchases on approved vendors',
        text: 'A manufacturer limits certain categories to pre-approved suppliers, so off-list purchases are flagged before they reach a purchase order.',
      },
    ],
    relatedModules: ['purchase-management', 'inventory-management', 'finance-accounting', 'workflow-automation'],
    integrations: ['Supplier portals', 'Email and calendar', 'Document e-signature tools', 'Budgeting tools', 'Spreadsheet import'],
    faqs: [
      {
        q: 'What is the difference between Procurement and Purchase Management?',
        a: 'Procurement covers everything before an order is placed: requests, approvals, RFQs and supplier selection. Purchase Management takes over from the purchase order through receiving and bill matching.',
      },
      {
        q: 'Can approval limits differ by department?',
        a: 'Yes. You can set limits by amount, department, category or cost centre, and add extra approvers for high-value requests.',
      },
      {
        q: 'Can suppliers respond to RFQs online?',
        a: 'RFQs are sent by email and responses can be recorded in the system. A supplier-facing portal can be added as part of implementation if you need one.',
      },
      {
        q: 'How is Procurement priced?',
        a: 'Pricing depends on the modules and users you need, and on any custom approval rules. Request a quote and we will send a tailored proposal.',
      },
    ],
  },

  // ─────────────────────────────── Sales Management
  {
    slug: 'sales-management',
    name: 'Sales Management',
    icon: ShoppingCart,
    category: 'Sales & Customers',
    headline: 'From quote to delivery and invoice, without re-keying',
    summary:
      'Create quotes and sales orders, check stock, plan deliveries and invoice customers from one flow. Everyone sees the same order status.',
    metaDescription:
      'Sales management software for quotes, sales orders, price lists, stock checks, deliveries and invoicing, so orders move from confirmation to cash smoothly.',
    purpose: 'Quotes, sales orders, deliveries and invoicing',
    typicalUsers: 'Sales operations, order desk teams, customer service',
    preview: {
      title: 'Sales orders',
      stats: [
        ['Open orders', '64'],
        ['To deliver today', '12'],
        ['Order value', '$186,400'],
      ],
      columns: ['Order', 'Customer', 'Delivery', 'Total'],
      rows: [
        ['SO-2318', 'Harbor Foods', '14 Mar', '$12,480'],
        ['SO-2319', 'Northwind Retail', '15 Mar', '$4,920'],
        ['SO-2320', 'Bluepeak Clinics', '15 Mar', '$7,310'],
        ['SO-2321', 'Crescent Traders', '18 Mar', '$2,760'],
      ],
      statuses: ['In progress', 'Approved', 'Pending', 'Draft'],
    },
    benefits: [
      {
        icon: Zap,
        title: 'Faster order processing',
        text: 'Orders pull customer terms, prices and stock automatically, so the order desk confirms orders in minutes, not hours.',
      },
      {
        icon: CheckCircle2,
        title: 'Promises you can keep',
        text: 'Check available stock and expected deliveries before confirming dates, reducing late orders and awkward calls.',
      },
      {
        icon: Banknote,
        title: 'Quicker invoicing',
        text: 'Invoices are created from delivered quantities, so billing happens on time and matches what the customer received.',
      },
      {
        icon: Percent,
        title: 'Consistent pricing',
        text: 'Price lists, customer-specific prices and discount rules apply automatically, with approvals for exceptions.',
      },
    ],
    features: [
      {
        icon: FileText,
        title: 'Quotations',
        text: 'Build quotes with products, discounts and terms, track versions and convert accepted quotes into orders.',
      },
      {
        icon: ShoppingCart,
        title: 'Sales orders',
        text: 'Capture orders with delivery addresses, dates and payment terms, and see their status from confirmation to invoice.',
      },
      {
        icon: Tags,
        title: 'Price lists and discounts',
        text: 'Maintain price lists by customer group, currency or season, with volume breaks and promotional discounts.',
      },
      {
        icon: Package,
        title: 'Stock reservation',
        text: 'Reserve stock against confirmed orders so it is not promised twice, and see backorders at a glance.',
      },
      {
        icon: Truck,
        title: 'Delivery and dispatch',
        text: 'Create delivery notes, support partial shipments and record tracking details for each consignment.',
      },
      {
        icon: Receipt,
        title: 'Invoicing and returns',
        text: 'Invoice from deliveries, handle credit notes and returns, and pass everything to finance automatically.',
      },
    ],
    capabilityGroups: [
      { title: 'Order capture', items: ['Quote versioning', 'Order templates', 'Customer credit checks', 'Payment terms by customer'] },
      { title: 'Pricing', items: ['Customer price lists', 'Volume discount breaks', 'Multi-currency pricing', 'Discount approval rules'] },
      { title: 'Fulfilment and billing', items: ['Stock reservation', 'Partial deliveries', 'Invoice from delivery', 'Credit notes and returns'] },
    ],
    useCases: [
      {
        title: 'Handling partial deliveries',
        text: 'A customer orders 500 units but only 300 are in stock. The team ships 300, invoices that quantity and keeps the balance as a backorder.',
      },
      {
        title: 'Customer-specific pricing',
        text: 'A wholesaler agrees special prices with key accounts. Their orders pick up the agreed prices automatically, and other discounts need approval.',
      },
      {
        title: 'Blocking orders over credit limit',
        text: 'An order pushes a customer past their credit limit. It is held for finance approval before it can be released to the warehouse.',
      },
    ],
    relatedModules: ['crm', 'inventory-management', 'finance-accounting', 'reporting-analytics'],
    integrations: ['Ecommerce platforms', 'Shipping carriers', 'Payment gateways', 'Marketplace channels', 'Email and messaging'],
    faqs: [
      {
        q: 'How is Sales Management different from CRM?',
        a: 'CRM manages leads, deals and customer relationships before the sale. Sales Management takes over once an order is confirmed, covering pricing, stock, delivery and invoicing.',
      },
      {
        q: 'Can we take orders from our online store?',
        a: 'Yes. Orders from ecommerce platforms can be brought in through an integration, so they follow the same stock and invoicing flow as orders entered manually.',
      },
      {
        q: 'Do you support partial shipments and backorders?',
        a: 'Yes. You can deliver part of an order, invoice what was shipped and keep the remaining quantity open until stock is available.',
      },
      {
        q: 'How is Sales Management priced?',
        a: 'Pricing depends on the modules, users and integrations you need. Request a quote and we will send a proposal for your order process.',
      },
    ],
  },

  // ─────────────────────────────── Purchase Management
  {
    slug: 'purchase-management',
    name: 'Purchase Management',
    icon: ShoppingBag,
    category: 'Operations',
    headline: 'Purchase orders, receiving and bill matching in one flow',
    summary:
      'Issue purchase orders, receive goods against them and match supplier bills before payment. Pay only for what you ordered and received.',
    metaDescription:
      'Purchase management software for purchase orders, goods receiving, three-way matching and supplier bills, so you pay only for goods ordered and received.',
    purpose: 'Purchase orders, receiving and three-way matching',
    typicalUsers: 'Purchasing officers, stores teams, accounts payable',
    preview: {
      title: 'Purchase orders',
      stats: [
        ['Open POs', '37'],
        ['Due this week', '9'],
        ['Bills to match', '6'],
      ],
      columns: ['PO', 'Supplier', 'Expected', 'Amount'],
      rows: [
        ['PO-5531', 'Summit Metals', '12 Mar', '$18,200'],
        ['PO-5532', 'Greenleaf Packaging', '13 Mar', '$3,640'],
        ['PO-5533', 'Orbit Electronics', '10 Mar', '$7,950'],
        ['PO-5534', 'Riverside Supplies', '20 Mar', '$1,120'],
      ],
      statuses: ['Approved', 'In progress', 'Overdue', 'Draft'],
    },
    benefits: [
      {
        icon: ShieldCheck,
        title: 'Pay only for what arrived',
        text: 'Bills are matched against the purchase order and goods receipt, so overcharges and short deliveries are caught before payment.',
      },
      {
        icon: Clock,
        title: 'Fewer late deliveries',
        text: 'Expected dates and overdue alerts help buyers chase suppliers before a shortage stops sales or production.',
      },
      {
        icon: Boxes,
        title: 'Accurate stock on arrival',
        text: 'Receiving updates inventory immediately, including batch and serial details, so stock is available to sell straight away.',
      },
      {
        icon: LineChart,
        title: 'Clear supplier performance',
        text: 'Track on-time delivery, price changes and rejected quantities per supplier from real purchase history.',
      },
    ],
    features: [
      {
        icon: FileText,
        title: 'Purchase orders',
        text: 'Create POs manually, from approved requisitions or from reorder suggestions, and send them to suppliers as PDF.',
      },
      {
        icon: PackageCheck,
        title: 'Goods receiving',
        text: 'Receive full or partial quantities, record batches and serials, and note damaged or rejected items.',
      },
      {
        icon: ListChecks,
        title: 'Three-way matching',
        text: 'Match each supplier bill to its PO and receipt, with tolerance rules that flag price or quantity differences.',
      },
      {
        icon: Receipt,
        title: 'Supplier bills',
        text: 'Record bills against receipts and pass them to finance for payment, with the full document trail attached.',
      },
      {
        icon: Truck,
        title: 'Delivery tracking',
        text: 'See expected, overdue and partially received orders in one list, and log supplier updates on each PO.',
      },
      {
        icon: Repeat2,
        title: 'Returns to supplier',
        text: 'Raise return documents for faulty or excess goods, adjust stock and request a credit note from the supplier.',
      },
    ],
    capabilityGroups: [
      { title: 'Ordering', items: ['PO from requisition', 'Reorder-based suggestions', 'Blanket and scheduled orders', 'Multi-currency purchasing'] },
      { title: 'Receiving', items: ['Partial receipts', 'Batch and serial capture', 'Quality hold on receipt', 'Landed cost allocation'] },
      { title: 'Matching and payment', items: ['Three-way matching', 'Tolerance rules', 'Debit notes', 'Supplier performance reports'] },
    ],
    useCases: [
      {
        title: 'Catching an overcharged bill',
        text: 'A supplier bills at a higher unit price than the PO. Matching flags the difference, and accounts payable holds the bill until a corrected one arrives.',
      },
      {
        title: 'Receiving a split delivery',
        text: 'Half of an order arrives early. Stores receive that quantity, stock updates immediately and the rest stays open on the PO.',
      },
      {
        title: 'Restocking from low-stock alerts',
        text: 'Reorder rules suggest purchase quantities for twenty items. A buyer reviews, groups them by supplier and issues POs in one session.',
      },
    ],
    relatedModules: ['procurement', 'inventory-management', 'finance-accounting', 'manufacturing'],
    integrations: ['Supplier portals', 'Email and calendar', 'Shipping carriers', 'Barcode scanners', 'Bank payment files'],
    faqs: [
      {
        q: 'What is three-way matching?',
        a: 'It compares the purchase order, the goods receipt and the supplier bill before a bill is approved for payment. Differences in price or quantity outside your tolerance are flagged for review.',
      },
      {
        q: 'Can we receive part of an order?',
        a: 'Yes. You can receive partial quantities as they arrive. The PO stays open for the balance until it is fully received or closed.',
      },
      {
        q: 'Do we need the Procurement module as well?',
        a: 'Not necessarily. Purchase Management works on its own. Procurement adds requisitions, RFQs and approval routing before the purchase order, which helps larger teams control spend.',
      },
      {
        q: 'How is Purchase Management priced?',
        a: 'It depends on the modules, users and integrations you need. Request a quote and we will send a proposal based on your purchasing process.',
      },
    ],
  },

  // ─────────────────────────────── Manufacturing
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    category: 'Operations',
    headline: 'Plan, build and track production with fewer surprises',
    summary:
      'Define bills of materials and routings, plan with MRP and run work orders on the shop floor. Material use, scrap and quality checks are recorded as you go.',
    metaDescription:
      'Manufacturing software for bills of materials, routings, work orders, MRP planning, scrap tracking and quality checks, connected to inventory and costing.',
    purpose: 'BOMs, MRP, work orders and shop-floor control',
    typicalUsers: 'Production planners, plant managers, shop-floor supervisors',
    preview: {
      title: 'Work orders',
      stats: [
        ['Active orders', '18'],
        ['Output today', '1,240 units'],
        ['Scrap rate', '2.1%'],
      ],
      columns: ['Work order', 'Product', 'Work centre', 'Qty'],
      rows: [
        ['WO-881', 'Steel bracket A2', 'Press line 1', '500'],
        ['WO-882', 'Control panel C4', 'Assembly', '120'],
        ['WO-883', 'Pump housing P1', 'CNC cell', '80'],
        ['WO-884', 'Gear set G7', 'Machining', '300'],
      ],
      statuses: ['Running', 'Running', 'Pending', 'Draft'],
    },
    benefits: [
      {
        icon: CalendarCheck,
        title: 'Realistic production plans',
        text: 'MRP considers demand, stock and open orders, so planners know what to make and what to buy, and when.',
      },
      {
        icon: Package,
        title: 'Materials ready on time',
        text: 'Shortages show up before a work order starts, giving purchasing time to source components.',
      },
      {
        icon: Calculator,
        title: 'True production cost',
        text: 'Actual material, labour and overhead are captured per work order, so you can compare real cost to standard.',
      },
      {
        icon: ShieldCheck,
        title: 'Consistent quality',
        text: 'Quality checks at key operations stop defects moving down the line and create a record for every batch.',
      },
    ],
    features: [
      {
        icon: Layers,
        title: 'Bills of materials',
        text: 'Multi-level BOMs with components, sub-assemblies, quantities and versions, so engineering changes are controlled.',
      },
      {
        icon: Route,
        title: 'Routings and work centres',
        text: 'Define the operations, sequence, work centres and standard times needed to make each product.',
      },
      {
        icon: ClipboardList,
        title: 'Work orders',
        text: 'Release work orders, issue materials, record output by operation and close them with actual quantities.',
      },
      {
        icon: Gauge,
        title: 'MRP planning',
        text: 'Run material requirements planning from sales orders and forecasts to suggest work orders and purchase orders.',
      },
      {
        icon: Recycle,
        title: 'Scrap and by-products',
        text: 'Record scrap with reason codes and capture by-products, so yield and material losses are visible.',
      },
      {
        icon: ClipboardCheck,
        title: 'Quality checks',
        text: 'Attach inspection checklists to operations or receipts, record results and hold failed batches for review.',
      },
    ],
    capabilityGroups: [
      { title: 'Engineering', items: ['Multi-level BOMs', 'BOM versioning', 'Routings and operations', 'Work centre capacity'] },
      { title: 'Planning', items: ['MRP runs', 'Make-to-order and make-to-stock', 'Capacity view by work centre', 'Shortage reports'] },
      { title: 'Execution', items: ['Material issue and backflush', 'Operation time logging', 'Scrap with reason codes', 'In-process quality checks'] },
    ],
    useCases: [
      {
        title: 'Planning next week’s production',
        text: 'A planner runs MRP against confirmed orders. The system suggests work orders for finished goods and purchase orders for short components.',
      },
      {
        title: 'Tracking scrap on a press line',
        text: 'Operators record rejected parts with a reason at each shift end. The supervisor reviews scrap trends and adjusts tooling maintenance.',
      },
      {
        title: 'Holding a batch that failed inspection',
        text: 'A final quality check fails on one batch. It is placed on hold, kept out of available stock and released only after rework passes inspection.',
      },
    ],
    relatedModules: ['inventory-management', 'purchase-management', 'sales-management', 'reporting-analytics'],
    integrations: ['Shop-floor terminals', 'Barcode scanners', 'Machine data collection', 'CAD and PLM exports', 'Label printers'],
    faqs: [
      {
        q: 'Does the module support multi-level BOMs?',
        a: 'Yes. BOMs can include sub-assemblies to any depth, with version control so you can plan changes and keep history.',
      },
      {
        q: 'Can we run MRP from sales orders and forecasts?',
        a: 'Yes. MRP considers confirmed sales orders, forecasts, stock on hand and open purchase and work orders, then suggests what to make and buy.',
      },
      {
        q: 'Is it suitable for job shops as well as repetitive production?',
        a: 'The module supports make-to-order and make-to-stock. During discovery we check how your production runs and configure work orders and routings to fit.',
      },
      {
        q: 'How is Manufacturing priced?',
        a: 'Pricing depends on the modules, users and any shop-floor integrations you need. Request a quote and we will send a proposal for your plant.',
      },
    ],
  },

  // ─────────────────────────────── Project Management
  {
    slug: 'project-management',
    name: 'Project Management',
    icon: FolderKanban,
    category: 'People & Projects',
    headline: 'Deliver projects on time and within budget',
    summary:
      'Plan tasks and milestones, log time and expenses, and compare actual cost with budget as work happens. Bill clients from approved hours.',
    metaDescription:
      'Project management software for tasks, milestones, timesheets, budgets and expenses, with project billing and profitability tracked in your ERP finances.',
    purpose: 'Tasks, timesheets, budgets and project billing',
    typicalUsers: 'Project managers, consultants, delivery teams',
    preview: {
      title: 'Active projects',
      stats: [
        ['Projects', '14'],
        ['Hours this week', '612'],
        ['Budget used', '58%'],
      ],
      columns: ['Project', 'Manager', 'Due', 'Spent'],
      rows: [
        ['Warehouse fit-out', 'A. Mehta', '30 Apr', '$48,200'],
        ['Website rebuild', 'T. George', '15 May', '$12,600'],
        ['Office relocation', 'H. Bose', '02 Jun', '$21,900'],
        ['ERP rollout phase 2', 'V. Menon', '28 Jun', '$34,400'],
      ],
      statuses: ['In progress', 'In progress', 'Overdue', 'Pending'],
    },
    benefits: [
      {
        icon: Coins,
        title: 'Budgets under control',
        text: 'Hours, expenses and purchases post against the project as they happen, so overruns show up early, not at the end.',
      },
      {
        icon: Eye,
        title: 'Clear view of progress',
        text: 'Milestones, task status and open issues sit in one place, so managers and clients see where things stand.',
      },
      {
        icon: Receipt,
        title: 'Bill every billable hour',
        text: 'Approved timesheets and expenses flow into invoices, so work done is billed and nothing is forgotten.',
      },
      {
        icon: Users,
        title: 'Better use of your team',
        text: 'See who is assigned where and how many hours are booked, so you can balance workload across projects.',
      },
    ],
    features: [
      {
        icon: ListChecks,
        title: 'Tasks and subtasks',
        text: 'Break work into tasks with owners, due dates, dependencies and status, viewed as a list or board.',
      },
      {
        icon: Milestone,
        title: 'Milestones',
        text: 'Set milestones for key deliverables and link them to billing, so invoices go out when work is accepted.',
      },
      {
        icon: Clock,
        title: 'Timesheets',
        text: 'Team members log hours against tasks daily or weekly, and managers approve them before billing or payroll.',
      },
      {
        icon: Wallet,
        title: 'Budgets and cost tracking',
        text: 'Set budgets for labour, materials and expenses, and compare them with actual costs posted from other modules.',
      },
      {
        icon: Banknote,
        title: 'Project billing',
        text: 'Invoice by time and materials, fixed fee or milestone, using approved timesheets and expenses.',
      },
      {
        icon: PieChart,
        title: 'Profitability reports',
        text: 'See revenue, cost and margin per project or client, using live data from finance and timesheets.',
      },
    ],
    capabilityGroups: [
      { title: 'Planning', items: ['Task dependencies', 'Kanban and list views', 'Milestone tracking', 'Resource assignment'] },
      { title: 'Time and cost', items: ['Daily and weekly timesheets', 'Timesheet approvals', 'Expense claims per project', 'Budget versus actual'] },
      { title: 'Billing', items: ['Time and materials billing', 'Fixed-fee milestones', 'Retainer tracking', 'Project margin reports'] },
    ],
    useCases: [
      {
        title: 'Spotting a budget overrun early',
        text: 'Halfway through a fit-out project, labour cost starts running ahead of budget. The project manager sees it on the dashboard and agrees a change order with the client.',
      },
      {
        title: 'Monthly billing for consultants',
        text: 'A consulting firm approves timesheets at month end and generates invoices per client from billable hours and expenses in one run.',
      },
      {
        title: 'Balancing team workload',
        text: 'A delivery lead reviews booked hours across projects, notices one engineer is overloaded and reassigns two tasks to a colleague.',
      },
    ],
    relatedModules: ['finance-accounting', 'hr-payroll', 'procurement', 'reporting-analytics'],
    integrations: ['Email and calendar', 'File storage services', 'Messaging apps', 'Time tracking apps', 'Document e-signature tools'],
    faqs: [
      {
        q: 'Can clients see project progress?',
        a: 'Project data can be shared through reports or exports today. A client-facing view can be configured as part of implementation if your projects need one.',
      },
      {
        q: 'Do timesheets feed into payroll?',
        a: 'Yes, if you also use HR & Payroll. Approved hours can feed overtime or hourly pay calculations, as well as client billing.',
      },
      {
        q: 'Which billing methods are supported?',
        a: 'You can bill by time and materials, fixed fee, milestone or retainer. Different projects can use different methods.',
      },
      {
        q: 'How is Project Management priced?',
        a: 'Pricing depends on the modules and number of users you need. Request a quote and we will prepare a proposal for your team.',
      },
    ],
  },

  // ─────────────────────────────── Reporting & Analytics
  {
    slug: 'reporting-analytics',
    name: 'Reporting & Analytics',
    icon: BarChart3,
    category: 'Insights & Automation',
    headline: 'Live dashboards built on the data your teams use',
    summary:
      'See sales, cash, stock and operations in real time. Drill from any total down to the transactions behind it, and schedule reports to your inbox.',
    metaDescription:
      'Reporting and analytics for your ERP: role-based dashboards, live KPIs, drill-down from totals to transactions, custom reports and scheduled exports.',
    purpose: 'Dashboards, KPIs and reports across all modules',
    typicalUsers: 'Leadership teams, analysts, department heads',
    preview: 'analytics',
    benefits: [
      {
        icon: Zap,
        title: 'Decisions on current numbers',
        text: 'Dashboards read from live records, so you are not waiting for month-end packs to know how the business is doing.',
      },
      {
        icon: CheckCircle2,
        title: 'One version of the truth',
        text: 'Every report uses the same data model, so sales, finance and operations stop arguing about whose numbers are right.',
      },
      {
        icon: Search,
        title: 'Answers in a few clicks',
        text: 'Drill from a KPI to the underlying orders, invoices or movements without asking IT for a new report.',
      },
      {
        icon: Clock,
        title: 'Less time building reports',
        text: 'Scheduled reports arrive automatically, replacing hours spent each week copying data into spreadsheets.',
      },
    ],
    features: [
      {
        icon: LayoutDashboard,
        title: 'Role-based dashboards',
        text: 'Give each role a dashboard with the KPIs that matter to them, from cash position to open work orders.',
      },
      {
        icon: TrendingUp,
        title: 'KPI tracking',
        text: 'Define KPIs with targets and periods, and see trends over time with comparisons to previous periods.',
      },
      {
        icon: Filter,
        title: 'Drill-down and filters',
        text: 'Filter by date, branch, product or customer, and click through from summary charts to individual records.',
      },
      {
        icon: FileSpreadsheet,
        title: 'Custom report builder',
        text: 'Pick fields, groupings and calculations to build your own reports, then save and share them with your team.',
      },
      {
        icon: Mail,
        title: 'Scheduled reports',
        text: 'Send reports by email daily, weekly or monthly to the people who need them, in PDF or spreadsheet format.',
      },
      {
        icon: Download,
        title: 'Exports and data access',
        text: 'Export to spreadsheets or connect external BI tools through the API when you need deeper analysis.',
      },
    ],
    capabilityGroups: [
      { title: 'Dashboards', items: ['Role-based layouts', 'Chart and KPI widgets', 'Target versus actual', 'Period comparisons'] },
      { title: 'Reports', items: ['Custom report builder', 'Saved filters', 'Grouping and subtotals', 'Cross-module reports'] },
      { title: 'Distribution', items: ['Scheduled email reports', 'PDF and spreadsheet export', 'Shared report library', 'API access for BI tools'] },
    ],
    useCases: [
      {
        title: 'Monday leadership review',
        text: 'The leadership team opens one dashboard showing last week’s sales, cash position, overdue receivables and stock alerts, and agrees actions in the meeting.',
      },
      {
        title: 'Investigating a margin drop',
        text: 'A finance analyst sees gross margin fall for one product line, drills into invoices and finds a supplier price increase not yet passed on.',
      },
      {
        title: 'Branch reports by email',
        text: 'Each branch manager receives a weekly report of their sales, returns and stock levels, without logging in or asking head office.',
      },
    ],
    relatedModules: ['erp-platform', 'finance-accounting', 'sales-management', 'integrations'],
    integrations: ['BI and visualisation tools', 'Spreadsheet export', 'Email delivery', 'Data warehouses', 'Custom REST APIs'],
    faqs: [
      {
        q: 'Can we build our own reports?',
        a: 'Yes. The report builder lets authorised users choose fields, filters and groupings, then save and share reports. Our team can also build more complex reports for you.',
      },
      {
        q: 'Can we connect an external BI tool?',
        a: 'Yes. Data can be exported or accessed through the REST API, so you can use your preferred BI tool alongside the built-in dashboards.',
      },
      {
        q: 'Do users only see data they are allowed to?',
        a: 'Yes. Reports and dashboards respect the same role-based permissions as the rest of the platform, so users only see the records they have access to.',
      },
      {
        q: 'How is Reporting & Analytics priced?',
        a: 'It depends on the modules and users you need, and whether you want custom reports built. Request a quote and we will send a proposal.',
      },
    ],
  },

  // ─────────────────────────────── Workflow Automation
  {
    slug: 'workflow-automation',
    name: 'Workflow Automation',
    icon: Workflow,
    category: 'Insights & Automation',
    headline: 'Automate approvals and routine work across your business',
    summary:
      'Build rules that route approvals, create documents and send reminders automatically. Teams spend less time chasing and more time doing.',
    metaDescription:
      'Workflow automation for your ERP: approval chains, rule-based triggers, scheduled jobs, notifications and escalations across every module, without code.',
    purpose: 'Approval chains, triggers and automated actions',
    typicalUsers: 'Operations managers, process owners, administrators',
    preview: {
      title: 'Automation rules',
      stats: [
        ['Active rules', '26'],
        ['Runs today', '318'],
        ['Waiting approval', '11'],
      ],
      columns: ['Rule', 'Module', 'Trigger'],
      rows: [
        ['PO over $5,000', 'Purchasing', 'On submit'],
        ['Overdue invoice reminder', 'Finance', 'Daily 9:00'],
        ['Low stock alert', 'Inventory', 'Stock change'],
        ['New hire checklist', 'HR', 'Employee created'],
      ],
      statuses: ['Running', 'Running', 'Running', 'Draft'],
    },
    benefits: [
      {
        icon: Timer,
        title: 'Faster approvals',
        text: 'Requests go straight to the right approver with a reminder if they wait too long, instead of sitting in an inbox.',
      },
      {
        icon: CheckCircle2,
        title: 'Fewer manual mistakes',
        text: 'Routine steps like creating follow-up documents or updating statuses happen automatically and consistently.',
      },
      {
        icon: ShieldCheck,
        title: 'Policies built into the process',
        text: 'Approval limits and required checks are enforced by the system, not by memory, and every step is recorded.',
      },
      {
        icon: Wrench,
        title: 'Change without developers',
        text: 'Process owners adjust rules and approval chains in a visual editor as the business changes.',
      },
    ],
    features: [
      {
        icon: GitBranch,
        title: 'Multi-step approval chains',
        text: 'Define sequential or parallel approvers, conditions by value or department, and delegation for absences.',
      },
      {
        icon: Zap,
        title: 'Event triggers',
        text: 'Start a workflow when a record is created, changed or reaches a status, such as an order being confirmed.',
      },
      {
        icon: CalendarDays,
        title: 'Scheduled jobs',
        text: 'Run actions on a schedule, like daily overdue reminders or a weekly stock review report.',
      },
      {
        icon: Bell,
        title: 'Notifications and escalations',
        text: 'Notify people in-app or by email, and escalate to a manager when a step is not completed in time.',
      },
      {
        icon: Split,
        title: 'Conditions and branching',
        text: 'Use if-then conditions on any field to send records down different paths depending on value, type or region.',
      },
      {
        icon: Webhook,
        title: 'External actions',
        text: 'Call webhooks or APIs as a workflow step, so other systems are updated as part of the same process.',
      },
    ],
    capabilityGroups: [
      { title: 'Approvals', items: ['Sequential and parallel steps', 'Value-based routing', 'Approval delegation', 'Approve from email or mobile'] },
      { title: 'Automation', items: ['Record event triggers', 'Scheduled actions', 'Auto-create documents', 'Field updates on status change'] },
      { title: 'Monitoring', items: ['Workflow run history', 'Escalation rules', 'Pending approvals view', 'Error alerts for failed steps'] },
    ],
    useCases: [
      {
        title: 'Purchase approvals by value',
        text: 'Purchase orders under a set amount go to the department head. Larger ones also need finance approval, and urgent ones escalate after 24 hours.',
      },
      {
        title: 'Automatic payment reminders',
        text: 'Every morning a scheduled rule emails customers with invoices past due, and flags accounts over 60 days for the collections team.',
      },
      {
        title: 'Onboarding tasks for new employees',
        text: 'When HR creates an employee, tasks are assigned to IT for equipment, to facilities for access and to the manager for a first-week plan.',
      },
    ],
    relatedModules: ['erp-platform', 'procurement', 'integrations', 'hr-payroll'],
    integrations: ['Email and calendar', 'Messaging apps', 'Webhooks', 'Document e-signature tools', 'Custom REST APIs'],
    faqs: [
      {
        q: 'Do we need developers to create workflows?',
        a: 'No. Most workflows are built with a visual editor using triggers, conditions and actions. Our team can help with complex rules or external integrations.',
      },
      {
        q: 'Can workflows span several modules?',
        a: 'Yes. Because all modules share one platform, a workflow can start in one module and act in another, such as creating a purchase request from a low-stock alert.',
      },
      {
        q: 'Can approvers act from their phone?',
        a: 'Yes. Approvals can be handled from the responsive web app on any device, and notifications include a link to the record.',
      },
      {
        q: 'How is Workflow Automation priced?',
        a: 'Pricing depends on the modules, users and complexity of the workflows you need. Request a quote and we will send a tailored proposal.',
      },
    ],
  },

  // ─────────────────────────────── Integrations
  {
    slug: 'integrations',
    name: 'Integrations',
    icon: PlugZap,
    category: 'Insights & Automation',
    headline: 'Connect ERPVALLEY to the tools you already use',
    summary:
      'Use the open REST API, webhooks and ready connectors to link payments, banking, ecommerce, shipping and more. Data flows both ways without re-typing.',
    metaDescription:
      'Connect ERPVALLEY to payment gateways, bank feeds, ecommerce, shipping and other tools with an open REST API, webhooks and integrations built by our team.',
    purpose: 'REST API, webhooks and third-party connectors',
    typicalUsers: 'IT teams, developers, operations managers',
    preview: {
      title: 'Connections',
      stats: [
        ['Active connections', '8'],
        ['Syncs today', '2,460'],
        ['Errors to review', '2'],
      ],
      columns: ['Connection', 'Direction', 'Last sync'],
      rows: [
        ['Online store orders', 'Inbound', '2 min ago'],
        ['Bank statement feed', 'Inbound', '1 hr ago'],
        ['Shipping labels', 'Outbound', '5 min ago'],
        ['Payment gateway', 'Two-way', '12 min ago'],
      ],
      statuses: ['Running', 'Running', 'Running', 'Pending'],
    },
    benefits: [
      {
        icon: Repeat2,
        title: 'No more double entry',
        text: 'Orders, payments and shipments flow between systems automatically, so staff stop copying data from one screen to another.',
      },
      {
        icon: Handshake,
        title: 'Keep the tools that work',
        text: 'Connect specialised software your teams rely on instead of replacing it, and let ERPVALLEY be the central record.',
      },
      {
        icon: Clock,
        title: 'Faster, current data',
        text: 'Webhooks and scheduled syncs keep information up to date across systems, without waiting for manual imports.',
      },
      {
        icon: Eye,
        title: 'Visible and monitored',
        text: 'Every sync is logged, and failed transfers raise an alert so problems are fixed before they affect customers.',
      },
    ],
    features: [
      {
        icon: Code2,
        title: 'Open REST API',
        text: 'Read and write records in every module through a documented REST API, with authentication and permission checks.',
      },
      {
        icon: Webhook,
        title: 'Outbound webhooks',
        text: 'Notify other systems instantly when records change, such as an order being shipped or an invoice being paid.',
      },
      {
        icon: KeyRound,
        title: 'Secure API keys',
        text: 'Issue scoped keys per integration, limit what each one can access and revoke them at any time.',
      },
      {
        icon: Network,
        title: 'Prebuilt connectors',
        text: 'Connect common categories such as payment gateways, ecommerce platforms and shipping carriers with configurable connectors.',
      },
      {
        icon: Inbox,
        title: 'Import and export tools',
        text: 'Bulk import and export data using spreadsheet templates with validation, for one-off loads or regular transfers.',
      },
      {
        icon: MessageSquare,
        title: 'Sync logs and alerts',
        text: 'Review every request and sync, see what failed and why, and retry once the issue is resolved.',
      },
    ],
    capabilityGroups: [
      { title: 'Developer tools', items: ['Documented REST API', 'Scoped API keys', 'Outbound webhooks', 'Sandbox environment'] },
      { title: 'Connectors', items: ['Payment gateway sync', 'Ecommerce order import', 'Shipping label creation', 'Bank statement import'] },
      { title: 'Operations', items: ['Sync history logs', 'Failure alerts', 'Retry controls', 'Field mapping settings'] },
    ],
    useCases: [
      {
        title: 'Online store orders into the ERP',
        text: 'Orders from an ecommerce store arrive in Sales Management automatically, reserve stock and create invoices, with tracking sent back to the store.',
      },
      {
        title: 'Bank statements for reconciliation',
        text: 'Daily bank statement files are imported into Finance, where receipts and payments are matched to open invoices and bills.',
      },
      {
        title: 'Connecting an in-house system',
        text: 'A company keeps its custom field-service app and uses the API and webhooks to sync customers, jobs and invoices with ERPVALLEY.',
      },
    ],
    relatedModules: ['erp-platform', 'workflow-automation', 'sales-management', 'finance-accounting'],
    integrations: ['Payment gateways', 'Bank feeds', 'Ecommerce platforms', 'Shipping carriers', 'Email and calendar', 'Single sign-on providers'],
    faqs: [
      {
        q: 'Which systems can ERPVALLEY connect to?',
        a: 'Any system that offers an API or file export can usually be connected. We have connectors for common categories such as payments, banking, ecommerce and shipping, and build others during implementation.',
      },
      {
        q: 'Is the API documented?',
        a: 'Yes. The REST API is documented, with authentication, endpoints and examples, so your developers or ours can build integrations.',
      },
      {
        q: 'Can your team build a custom integration for us?',
        a: 'Yes. Our integration services cover scoping, building, testing and monitoring custom connections to your existing tools.',
      },
      {
        q: 'How are integrations priced?',
        a: 'It depends on the number and complexity of integrations. Request a quote and we will scope each connection and send a proposal.',
      },
    ],
  },
]

export const productBySlug = new Map(products.map((p) => [p.slug, p]))
