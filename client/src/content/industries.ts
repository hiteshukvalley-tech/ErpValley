import {
  Store,
  Banknote,
  Boxes,
  Briefcase,
  Building2,
  CalendarClock,
  CalendarDays,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Coins,
  Construction,
  Factory,
  FileCheck2,
  FileSearch,
  Fuel,
  Gauge,
  GraduationCap,
  HardHat,
  HeartPulse,
  Hotel,
  KeyRound,
  Landmark,
  Layers,
  MapPin,
  PackageCheck,
  PackageX,
  PieChart,
  Receipt,
  Route,
  Scale,
  ShoppingBasket,
  Tags,
  Timer,
  Truck,
  Undo2,
  UserCheck,
  Users,
  UtensilsCrossed,
  Wallet,
  Wrench,
} from 'lucide-react'
import type { IndustryContent } from './types'

/*
 * Industry page content. Rule: no invented customers, statistics, ratings, certifications,
 * regulatory compliance claims or named third-party brands.
 */

export const industries: IndustryContent[] = [
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    headline: 'Plan production, control materials and know your true costs',
    summary:
      'ERPVALLEY connects bills of materials, work orders, inventory and finance, so production plans reflect real stock and every finished unit carries an accurate cost.',
    metaDescription:
      'Manufacturing ERP from ERPVALLEY: BOMs, work orders, material planning, shop-floor tracking and product costing connected to inventory, purchasing and finance.',
    overview: [
      'Manufacturers turn raw materials into finished goods through a chain of planning, purchasing, production and quality checks. Each step depends on accurate stock levels, reliable supplier lead times and a clear picture of what the shop floor can handle this week.',
      'When these steps run in separate spreadsheets, shortages surface late and costs are estimated rather than measured. ERPVALLEY keeps demand, materials, work orders and accounting in one system, so planners, buyers and finance work from the same numbers.',
    ],
    challenges: [
      {
        icon: PackageX,
        title: 'Material shortages mid-run',
        text: 'Production stalls when a component runs out because stock and open purchase orders were not checked against the plan.',
      },
      {
        icon: Coins,
        title: 'Unclear product costs',
        text: 'Without actual material, labour and overhead captured per work order, margins are based on guesses.',
      },
      {
        icon: CalendarClock,
        title: 'Shifting production schedules',
        text: 'Rush orders and machine downtime force constant replanning that is hard to communicate across the floor.',
      },
      {
        icon: ClipboardCheck,
        title: 'Weak batch traceability',
        text: 'When a quality issue appears, tracing which material lots went into which finished goods takes days of searching.',
      },
    ],
    workflow: {
      title: 'Plan-to-produce for manufacturers',
      steps: [
        { title: 'Capture demand', text: 'Sales orders and forecasts feed a single view of what needs to be produced and when.' },
        { title: 'Plan materials', text: 'BOMs are exploded against stock and open purchase orders to flag shortages and suggest purchases.' },
        { title: 'Release work orders', text: 'Work orders are scheduled with routings, and materials are reserved and issued to the floor.' },
        { title: 'Record production', text: 'Operators log output, scrap and time, with batch numbers recorded for finished goods.' },
        { title: 'Cost and ship', text: 'Actual costs post to finance automatically and finished goods move to stock for dispatch.' },
      ],
    },
    modules: [
      { slug: 'manufacturing', why: 'Manages BOMs, routings, work orders and production output in one place.' },
      { slug: 'inventory-management', why: 'Tracks raw materials, work in progress and finished goods with batch and serial numbers.' },
      { slug: 'purchase-management', why: 'Turns material shortages into purchase orders and tracks supplier deliveries.' },
      { slug: 'finance-accounting', why: 'Posts actual production costs and inventory valuation without manual journals.' },
      { slug: 'reporting-analytics', why: 'Shows output, scrap, schedule adherence and cost variances by product or line.' },
    ],
    integrations: ['Barcode and label printers', 'Machine and IoT data feeds', 'Ecommerce platforms', 'Shipping carriers', 'Bank feeds'],
    useCases: [
      {
        title: 'Make-to-order fabrication',
        text: 'A metal fabrication shop links each customer order to its own BOM and work order, so material use and labour are costed per job.',
      },
      {
        title: 'Batch food production',
        text: 'A food producer records ingredient lots on every batch, making it quick to trace which products used a particular delivery.',
      },
      {
        title: 'Multi-plant planning',
        text: 'A manufacturer with two plants balances production between sites based on capacity and the stock available at each location.',
      },
    ],
    faqs: [
      {
        q: 'Does ERPVALLEY support multi-level bills of materials?',
        a: 'Yes. You can build BOMs with sub-assemblies, and material planning explodes every level to calculate component requirements. Changes to a BOM can be versioned so past work orders keep their original structure.',
      },
      {
        q: 'Can we track batches and serial numbers?',
        a: 'Yes. Raw materials and finished goods can carry batch or serial numbers, and the system records which inputs went into each output. This makes it possible to trace a product forward or backward through production.',
      },
      {
        q: 'How are production costs calculated?',
        a: 'Costs are built from the materials issued, labour time recorded and overhead rates you configure. Actual costs are compared with standard costs so you can see variances per work order.',
      },
      {
        q: 'Is it suitable for job shops as well as repetitive production?',
        a: 'Yes. Work orders can be created per customer order or in batches from a production plan. During discovery we configure the approach that matches how your floor actually runs.',
      },
    ],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & Ecommerce',
    icon: Store,
    headline: 'One stock pool for every store, warehouse and online channel',
    summary:
      'ERPVALLEY keeps inventory, orders, returns and promotions in sync across physical stores and online channels, so customers see accurate availability everywhere.',
    metaDescription:
      'Retail and ecommerce ERP from ERPVALLEY: omnichannel stock sync, store transfers, returns, promotions and POS reconciliation in one connected platform.',
    overview: [
      'Retailers sell through stores, websites and marketplaces at the same time, often from shared stock. Every sale, return and transfer changes what is available, and customers expect that availability to be right the moment they look.',
      'Disconnected tools lead to overselling online, overstock in one store and shortages in another. ERPVALLEY brings channel orders, store stock, purchasing and accounting together, so merchandising and finance teams can act on current figures.',
    ],
    challenges: [
      {
        icon: Layers,
        title: 'Stock out of sync across channels',
        text: 'Online listings show items that have already sold in store, leading to cancelled orders and unhappy customers.',
      },
      {
        icon: Undo2,
        title: 'Returns that disappear from view',
        text: 'Returned items sit unprocessed or get restocked without inspection, so stock and refunds drift out of line.',
      },
      {
        icon: Receipt,
        title: 'Slow POS reconciliation',
        text: 'Matching daily store takings, card settlements and cash against sales records eats hours of finance time.',
      },
      {
        icon: Tags,
        title: 'Promotions hard to measure',
        text: 'Discounts run across channels without a clear view of how they affected margin and sell-through.',
      },
    ],
    workflow: {
      title: 'Order-to-fulfilment for retailers',
      steps: [
        { title: 'Receive orders', text: 'Store sales and online orders flow into one order queue with the channel recorded on each.' },
        { title: 'Allocate stock', text: 'Each order is allocated from the best location based on availability and fulfilment rules.' },
        { title: 'Pick and ship', text: 'Warehouse or store staff pick, pack and dispatch, and stock updates across every channel.' },
        { title: 'Handle returns', text: 'Returns are logged, inspected and either restocked or written off, with refunds linked to the original order.' },
        { title: 'Reconcile takings', text: 'POS and payment settlements are matched to sales and posted to the ledger.' },
      ],
    },
    modules: [
      { slug: 'inventory-management', why: 'Keeps a single stock record across stores and warehouses, including transfers between locations.' },
      { slug: 'sales-management', why: 'Manages orders from every channel, along with pricing, promotions and returns.' },
      { slug: 'purchase-management', why: 'Replenishes stores and warehouses based on sales velocity and reorder points.' },
      { slug: 'finance-accounting', why: 'Reconciles POS takings and payment settlements and keeps channel revenue separate.' },
      { slug: 'integrations', why: 'Connects with POS systems, ecommerce platforms and marketplaces to keep orders and stock flowing.' },
      { slug: 'reporting-analytics', why: 'Shows sell-through, margin and promotion performance by store, channel and product.' },
    ],
    integrations: ['POS systems', 'Ecommerce platforms', 'Online marketplaces', 'Payment gateways', 'Shipping carriers', 'Barcode scanners'],
    useCases: [
      {
        title: 'Store-to-store transfers',
        text: 'A fashion retailer moves slow-selling sizes from one store to another where they are in demand, with stock in transit tracked throughout.',
      },
      {
        title: 'Click and collect',
        text: 'An electronics seller reserves store stock for online orders picked up in person, so the item cannot be sold twice.',
      },
      {
        title: 'Seasonal promotion review',
        text: 'A homeware brand compares margin and units sold before, during and after a promotion across its website and stores.',
      },
    ],
    faqs: [
      {
        q: 'Can ERPVALLEY sync stock with our online store?',
        a: 'Yes. ERPVALLEY connects with ecommerce platforms through APIs so stock levels and orders move between systems automatically. The exact setup depends on your platform, which we review during discovery.',
      },
      {
        q: 'Does it replace our POS?',
        a: 'Not necessarily. Many retailers keep their existing POS and connect it to ERPVALLEY, which then handles stock, purchasing and accounting behind it. We can advise on the best approach for your stores.',
      },
      {
        q: 'How are returns handled?',
        a: 'Returns are recorded against the original order, inspected and then restocked, sent back to the supplier or written off. Refunds and stock adjustments stay linked, so finance and inventory remain consistent.',
      },
      {
        q: 'Can we run different prices per channel or store?',
        a: 'Yes. Price lists and promotions can be set per channel, store or customer group, with start and end dates. Reports then show how each price or promotion performed.',
      },
    ],
  },
  {
    slug: 'fintech-lending',
    name: 'FinTech & Lending',
    icon: Landmark,
    headline: 'Run loan operations from application to final repayment',
    summary:
      'ERPVALLEY organises origination, document checks, disbursements, repayment schedules and collections in one workflow, with a full audit trail behind every decision.',
    metaDescription:
      'Lending operations ERP from ERPVALLEY: loan origination workflows, KYC document tracking, disbursements, repayment schedules, collections and full audit trails.',
    overview: [
      'Lenders move every application through intake, verification, credit review, approval and disbursement, then manage repayments for months or years. Each step involves documents, approvals and money movements that must be recorded accurately.',
      'When these steps live in inboxes and spreadsheets, applications stall and the history behind decisions is hard to reconstruct. ERPVALLEY gives operations, credit and finance teams one system of record, and supports your compliance processes with audit trails and approvals.',
    ],
    challenges: [
      {
        icon: FileSearch,
        title: 'Scattered KYC documents',
        text: 'Identity and income documents arrive by email and upload links, making it hard to see which applications are complete.',
      },
      {
        icon: Timer,
        title: 'Slow approval hand-offs',
        text: 'Applications wait in queues between verification, credit review and sign-off with no clear owner or deadline.',
      },
      {
        icon: CalendarDays,
        title: 'Complex repayment schedules',
        text: 'Tracking instalments, part-payments, penalties and restructured loans by hand leads to errors in balances.',
      },
      {
        icon: Scale,
        title: 'Thin audit history',
        text: 'Reconstructing who approved a loan, on what basis and when, takes time when records are spread across tools.',
      },
    ],
    workflow: {
      title: 'Application-to-repayment for lenders',
      steps: [
        { title: 'Capture application', text: 'Applicant details and loan requirements are recorded and assigned to an operations owner.' },
        { title: 'Verify documents', text: 'KYC and supporting documents are checked off against a checklist, with missing items flagged.' },
        { title: 'Review and approve', text: 'Credit reviewers assess the application and approvals route according to amount and product rules.' },
        { title: 'Disburse funds', text: 'Approved loans are disbursed, and the repayment schedule and ledger entries are created automatically.' },
        { title: 'Collect and close', text: 'Repayments are matched to schedules, overdue accounts move to collections and settled loans are closed.' },
      ],
    },
    modules: [
      { slug: 'workflow-automation', why: 'Routes applications through verification and approval stages with rules based on amount and product.' },
      { slug: 'finance-accounting', why: 'Records disbursements, repayments, interest and fees in the general ledger.' },
      { slug: 'crm', why: 'Keeps borrower records, communication history and follow-ups in one place.' },
      { slug: 'reporting-analytics', why: 'Tracks portfolio balances, overdue ageing and collections performance.' },
      { slug: 'integrations', why: 'Connects with credit bureau APIs, payment gateways and bank feeds.' },
    ],
    integrations: ['Credit bureau APIs', 'Payment gateways', 'Bank feeds', 'eSignature tools', 'SMS and email messaging', 'Identity verification services'],
    useCases: [
      {
        title: 'Small business lending',
        text: 'A lender offering working capital loans routes larger applications to a second approver automatically and records the reason for each decision.',
      },
      {
        title: 'Collections follow-up',
        text: 'A consumer finance team sees overdue instalments by age, assigns follow-up tasks and logs every contact against the borrower record.',
      },
      {
        title: 'Loan restructuring',
        text: 'An operations team reschedules a borrower’s remaining instalments, with the original and revised schedules both kept on record.',
      },
    ],
    faqs: [
      {
        q: 'Does ERPVALLEY make us compliant with lending regulations?',
        a: 'No software can make a business compliant on its own. ERPVALLEY supports your compliance processes with document checklists, approval workflows and audit trails, while your policies and teams remain responsible for meeting regulatory requirements.',
      },
      {
        q: 'Can it handle different loan products?',
        a: 'Yes. Loan products can be configured with their own interest methods, fees, tenures and approval rules. Each application follows the workflow defined for its product.',
      },
      {
        q: 'Can it connect to credit bureaus or verification services?',
        a: 'ERPVALLEY can connect with credit bureau and identity verification APIs, subject to your agreements with those providers. Our integration team scopes and builds these connections during implementation.',
      },
      {
        q: 'Is ERPVALLEY a core banking system?',
        a: 'No. ERPVALLEY manages lending operations, back-office finance and workflows. If you already use a loan management or core system, we can integrate with it rather than replace it.',
      },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: HeartPulse,
    headline: 'Keep supplies stocked, staff rostered and back-office billing clear',
    summary:
      'ERPVALLEY runs the back office for clinics and healthcare providers, from medical supply procurement and expiry tracking to staff rosters, payroll and billing.',
    metaDescription:
      'Healthcare back-office ERP from ERPVALLEY: medical supply and expiry tracking, procurement, staff rostering, payroll and billing for clinics and care providers.',
    overview: [
      'Clinics, diagnostic centres and care providers depend on a steady flow of medical supplies, well-planned shifts and accurate billing. Behind the clinical work sits a back office that buys, stores, schedules and invoices every day.',
      'ERPVALLEY handles that back office. It does not replace clinical or patient record systems; instead it gives administrators one place to manage supplies, procurement, staff and finance across one or many sites.',
    ],
    challenges: [
      {
        icon: CalendarClock,
        title: 'Expired or short-dated stock',
        text: 'Consumables and medicines expire on shelves because batches and expiry dates are not tracked per location.',
      },
      {
        icon: Users,
        title: 'Rostering gaps',
        text: 'Building shift rosters by hand makes it easy to miss cover requirements or overlook leave and overtime.',
      },
      {
        icon: ClipboardList,
        title: 'Untracked procurement',
        text: 'Departments order supplies independently, so spending is hard to control and supplier terms go unused.',
      },
      {
        icon: Receipt,
        title: 'Billing delays',
        text: 'Invoices for services and third-party payers are prepared late because charges are collected from several sources.',
      },
    ],
    workflow: {
      title: 'Procure-to-use for medical supplies',
      steps: [
        { title: 'Raise requisition', text: 'Departments request supplies against par levels, and requests route to the right approver.' },
        { title: 'Order from suppliers', text: 'Approved requests become purchase orders using agreed supplier prices and terms.' },
        { title: 'Receive with batches', text: 'Deliveries are received with batch numbers and expiry dates recorded per item.' },
        { title: 'Issue to departments', text: 'Stock is issued first-expiry-first-out to wards or rooms and consumption is recorded.' },
        { title: 'Review and reorder', text: 'Expiry alerts and usage reports guide reordering and reduce waste.' },
      ],
    },
    modules: [
      { slug: 'inventory-management', why: 'Tracks medical supplies by batch and expiry date across stores, wards and sites.' },
      { slug: 'procurement', why: 'Controls requisitions and approvals so departments buy within budget and from approved suppliers.' },
      { slug: 'hr-payroll', why: 'Manages staff records, shift rosters, leave and payroll including overtime and allowances.' },
      { slug: 'finance-accounting', why: 'Handles billing, receivables from payers and supplier payments in one ledger.' },
      { slug: 'reporting-analytics', why: 'Shows supply usage, wastage, staffing costs and receivables by department or site.' },
    ],
    integrations: ['Practice management systems', 'Payment gateways', 'Bank feeds', 'Biometric attendance devices', 'Barcode scanners'],
    useCases: [
      {
        title: 'Multi-clinic supply control',
        text: 'A group of outpatient clinics shares a central store and transfers short-dated stock to sites that will use it first.',
      },
      {
        title: 'Nursing shift planning',
        text: 'A care home plans weekly rosters against required cover per shift, with approved leave and overtime flowing into payroll.',
      },
      {
        title: 'Diagnostic centre billing',
        text: 'A diagnostic centre consolidates test charges into invoices for individual patients and corporate payers, then tracks what is outstanding.',
      },
    ],
    faqs: [
      {
        q: 'Does ERPVALLEY store patient medical records?',
        a: 'No. ERPVALLEY is a back-office ERP for supplies, staff, procurement and finance. Clinical and patient records should stay in a dedicated clinical system, which ERPVALLEY can connect with where billing data needs to flow.',
      },
      {
        q: 'Can we track expiry dates for consumables?',
        a: 'Yes. Items can be tracked by batch and expiry date, issued first-expiry-first-out and flagged before they expire. Reports show short-dated stock by location so it can be used or transferred in time.',
      },
      {
        q: 'Does it support shift-based rostering?',
        a: 'Yes. You can define shifts, cover requirements and staff availability, and approved hours feed into payroll. Leave requests and overtime approvals follow the workflows you configure.',
      },
      {
        q: 'Does ERPVALLEY meet healthcare data regulations?',
        a: 'ERPVALLEY provides role-based access, encrypted connections and audit logs, but it is not certified for any specific healthcare regulation. Your organisation remains responsible for how it handles regulated data, and we can discuss your requirements during discovery.',
      },
    ],
  },
  {
    slug: 'education',
    name: 'Education',
    icon: GraduationCap,
    headline: 'Admissions, fees, staff and resources in one school system',
    summary:
      'ERPVALLEY helps schools, colleges and training institutes manage admissions, fee collection, payroll, procurement and shared resources without juggling spreadsheets.',
    metaDescription:
      'Education ERP from ERPVALLEY: admissions pipelines, fee collection, staff payroll, procurement and resource planning for schools, colleges and institutes.',
    overview: [
      'Educational institutions run on an annual cycle of enquiries, admissions, fee terms, staffing and purchasing. Administrators juggle all of this alongside the daily work of keeping rooms, equipment and supplies ready for classes.',
      'ERPVALLEY brings the administrative side into one system. Admissions teams, accounts offices and facilities staff share the same student, fee and resource records, so less time goes into chasing information between departments.',
    ],
    challenges: [
      {
        icon: UserCheck,
        title: 'Admissions tracked in spreadsheets',
        text: 'Enquiries, applications and offers are spread across forms and files, so follow-ups slip and seat availability is unclear.',
      },
      {
        icon: Wallet,
        title: 'Fee collection gaps',
        text: 'Instalments, discounts and late fees are difficult to track, and outstanding balances surface only at term end.',
      },
      {
        icon: Banknote,
        title: 'Complex staff payroll',
        text: 'Teaching and support staff on different pay structures, allowances and contracts make payroll slow and error-prone.',
      },
      {
        icon: Building2,
        title: 'Resource clashes',
        text: 'Labs, halls and equipment are double-booked or under-used because there is no shared view of availability.',
      },
    ],
    workflow: {
      title: 'Enquiry-to-enrolment for institutions',
      steps: [
        { title: 'Capture enquiry', text: 'Enquiries from forms, calls and visits are logged with the programme or grade of interest.' },
        { title: 'Process application', text: 'Applications, documents and assessments are tracked through each admissions stage.' },
        { title: 'Issue offer', text: 'Offers are sent and seat availability updates as places are accepted.' },
        { title: 'Set up fees', text: 'Fee plans, instalments and any discounts are applied to the enrolled student’s account.' },
        { title: 'Collect and follow up', text: 'Payments are recorded against invoices and automated reminders go out for overdue fees.' },
      ],
    },
    modules: [
      { slug: 'crm', why: 'Tracks enquiries and applications through each admissions stage with follow-up reminders.' },
      { slug: 'finance-accounting', why: 'Manages fee plans, instalments, receipts and outstanding balances per student.' },
      { slug: 'hr-payroll', why: 'Handles staff records, attendance, leave and payroll across different pay structures.' },
      { slug: 'procurement', why: 'Controls purchasing of books, lab supplies and equipment against departmental budgets.' },
      { slug: 'inventory-management', why: 'Tracks shared equipment, lab consumables and stores across campuses.' },
      { slug: 'reporting-analytics', why: 'Shows admissions conversion, fee collections and spending by department or campus.' },
    ],
    integrations: ['Learning management systems', 'Payment gateways', 'SMS and email messaging', 'Biometric attendance devices', 'Bank feeds'],
    useCases: [
      {
        title: 'Admissions season',
        text: 'A private school tracks every enquiry through visits, assessments and offers, with seats per grade updating as families accept.',
      },
      {
        title: 'Instalment fee plans',
        text: 'A college offers termly instalments and sends automatic reminders before each due date, with receipts issued on payment.',
      },
      {
        title: 'Multi-campus purchasing',
        text: 'A training institute consolidates purchase requests from several campuses so supplies are ordered centrally within budget.',
      },
    ],
    faqs: [
      {
        q: 'Does ERPVALLEY replace our learning management system?',
        a: 'No. ERPVALLEY manages administration such as admissions, fees, staff and purchasing. It can connect with your learning management system so student records do not need to be entered twice.',
      },
      {
        q: 'Can parents or students pay fees online?',
        a: 'Yes. ERPVALLEY connects with payment gateways so fees can be paid online, and payments are matched to the student account automatically. Offline payments can also be recorded by the accounts office.',
      },
      {
        q: 'Can it handle scholarships and discounts?',
        a: 'Yes. Scholarships, sibling discounts and concessions can be configured as rules or applied individually, with approvals where needed. Reports show their total value by programme or term.',
      },
      {
        q: 'Does it manage class timetables?',
        a: 'ERPVALLEY focuses on resource planning such as room and equipment availability rather than full academic timetabling. If you use a separate timetabling tool, we can integrate with it.',
      },
    ],
  },
  {
    slug: 'logistics-supply-chain',
    name: 'Logistics & Supply Chain',
    icon: Truck,
    headline: 'Track every shipment, vehicle and warehouse from one system',
    summary:
      'ERPVALLEY connects shipment tracking, fleet costs, warehouse operations and proof of delivery, so operations and finance see the same picture in real time.',
    metaDescription:
      'Logistics ERP from ERPVALLEY: shipment tracking, fleet cost control, warehouse operations, proof of delivery and freight billing for logistics providers.',
    overview: [
      'Logistics businesses move goods through pick-up, storage, line haul and final delivery, often for many customers at once. Margins depend on keeping vehicles full, warehouses efficient and every job billed correctly.',
      'When dispatch, warehouse and accounts run on separate tools, costs leak and invoices go out late. ERPVALLEY ties each shipment to its vehicle, warehouse movements and charges, so profitability is visible per job and per customer.',
    ],
    challenges: [
      {
        icon: MapPin,
        title: 'Limited shipment visibility',
        text: 'Customers call for updates because status is held by drivers and dispatchers rather than in a shared system.',
      },
      {
        icon: Fuel,
        title: 'Hidden fleet costs',
        text: 'Fuel, tolls, repairs and driver expenses are recorded late, so the real cost of each route is unclear.',
      },
      {
        icon: Boxes,
        title: 'Inefficient warehouse handling',
        text: 'Manual put-away and picking slow throughput and make stock locations hard to trust.',
      },
      {
        icon: FileCheck2,
        title: 'Missing proof of delivery',
        text: 'Paper delivery notes get lost, delaying invoices and making disputes difficult to resolve.',
      },
    ],
    workflow: {
      title: 'Booking-to-billing for logistics',
      steps: [
        { title: 'Book shipment', text: 'Customer bookings are created with pick-up, delivery and service details.' },
        { title: 'Plan and dispatch', text: 'Shipments are assigned to vehicles and drivers, and trip costs start accruing.' },
        { title: 'Track movement', text: 'Status updates and warehouse scans record each stage of the journey.' },
        { title: 'Confirm delivery', text: 'Drivers capture proof of delivery with signature or photo from a mobile device.' },
        { title: 'Invoice and cost', text: 'Freight charges are invoiced and trip costs post against the job for margin reporting.' },
      ],
    },
    modules: [
      { slug: 'inventory-management', why: 'Manages warehouse locations, put-away, picking and stock held for each customer.' },
      { slug: 'sales-management', why: 'Handles customer bookings, rate cards and freight charges per shipment.' },
      { slug: 'finance-accounting', why: 'Invoices customers and captures fuel, toll and maintenance costs against trips.' },
      { slug: 'workflow-automation', why: 'Sends status notifications and triggers invoicing once proof of delivery is captured.' },
      { slug: 'reporting-analytics', why: 'Shows on-time delivery, cost per trip and profitability by customer or route.' },
      { slug: 'integrations', why: 'Connects with telematics and GPS devices, carrier systems and customer portals.' },
    ],
    integrations: ['Telematics and GPS', 'Shipping carriers', 'Fuel card providers', 'Barcode and RFID scanners', 'Customer portals and EDI', 'Payment gateways'],
    useCases: [
      {
        title: 'Third-party warehousing',
        text: 'A 3PL stores goods for several brands, tracking stock per client and billing for storage and handling automatically each month.',
      },
      {
        title: 'Regional delivery fleet',
        text: 'A distributor’s delivery arm records fuel and repairs per vehicle and compares cost per drop across routes.',
      },
      {
        title: 'Freight forwarding jobs',
        text: 'A forwarder manages each consignment as a job, collecting supplier costs and customer charges to see margin before closing it.',
      },
    ],
    faqs: [
      {
        q: 'Can drivers capture proof of delivery on their phones?',
        a: 'Yes. The responsive interface works on mobile devices, so drivers can record delivery status, signatures and photos. The proof of delivery is attached to the shipment and visible to your office immediately.',
      },
      {
        q: 'Does ERPVALLEY include route optimisation?',
        a: 'ERPVALLEY handles dispatch, trip records and costing. For advanced route optimisation, we can integrate with a dedicated routing or telematics tool and bring the results back into the system.',
      },
      {
        q: 'Can we bill customers for storage and handling?',
        a: 'Yes. Rate cards can include storage, handling and value-added services, and charges are calculated from recorded activity. Invoices can be generated per shipment or on a periodic cycle.',
      },
      {
        q: 'Can it connect with our GPS devices?',
        a: 'ERPVALLEY can connect with telematics and GPS systems through their APIs to bring in location and mileage data. The scope depends on the devices you use, which we review during discovery.',
      },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    icon: Building2,
    headline: 'Properties, leases, rent and maintenance in one place',
    summary:
      'ERPVALLEY gives property owners and managers one system for units, tenants, lease terms, rent collection and maintenance requests across their portfolio.',
    metaDescription:
      'Real estate ERP from ERPVALLEY: property and unit records, lease management, rent collection, maintenance requests and owner reporting for property managers.',
    overview: [
      'Property businesses manage buildings, units and tenants alongside a steady cycle of lease renewals, rent invoices and repair requests. Each property generates income and costs that owners want to see clearly.',
      'ERPVALLEY keeps every unit, lease and transaction connected. Leasing teams, maintenance staff and accountants share the same records, so rent rolls, arrears and repair costs are always up to date.',
    ],
    challenges: [
      {
        icon: KeyRound,
        title: 'Lease dates slipping by',
        text: 'Renewals, rent reviews and expiries are missed when lease terms sit in documents rather than a tracked system.',
      },
      {
        icon: Wallet,
        title: 'Rent arrears building up',
        text: 'Late payments are noticed weeks later because rent invoices and receipts are reconciled by hand.',
      },
      {
        icon: Wrench,
        title: 'Untracked maintenance requests',
        text: 'Repair requests arrive by phone and message, so jobs are forgotten and contractor costs are not tied to units.',
      },
      {
        icon: PieChart,
        title: 'Slow owner reporting',
        text: 'Preparing income and expense statements per property or owner takes days of spreadsheet work.',
      },
    ],
    workflow: {
      title: 'Lease-to-collection for property managers',
      steps: [
        { title: 'Set up units', text: 'Properties and units are recorded with size, type, status and owner details.' },
        { title: 'Create lease', text: 'Lease terms, rent, deposits and escalation dates are captured against the unit and tenant.' },
        { title: 'Invoice rent', text: 'Rent and service charges are invoiced automatically on each billing cycle.' },
        { title: 'Collect and chase', text: 'Receipts are matched to invoices and reminders go out for overdue balances.' },
        { title: 'Maintain and report', text: 'Maintenance jobs are logged and costed per unit, feeding owner and portfolio reports.' },
      ],
    },
    modules: [
      { slug: 'finance-accounting', why: 'Handles rent invoicing, deposits, receipts, arrears and owner statements.' },
      { slug: 'crm', why: 'Tracks prospective tenants, viewings and lease negotiations through to signing.' },
      { slug: 'workflow-automation', why: 'Sends renewal alerts, rent reminders and routes maintenance requests to the right team.' },
      { slug: 'procurement', why: 'Manages contractor quotes and purchase orders for repairs and building services.' },
      { slug: 'reporting-analytics', why: 'Shows occupancy, rent roll, arrears and maintenance spend by property.' },
    ],
    integrations: ['Payment gateways', 'Bank feeds', 'Property listing portals', 'eSignature tools', 'SMS and email messaging'],
    useCases: [
      {
        title: 'Commercial lease renewals',
        text: 'A commercial landlord receives alerts months before each lease expiry and rent review, giving time to renegotiate terms.',
      },
      {
        title: 'Residential rent collection',
        text: 'A residential manager invoices monthly rent across several buildings and sees arrears per tenant as soon as a due date passes.',
      },
      {
        title: 'Maintenance tracking',
        text: 'A facilities team logs tenant repair requests, assigns contractors and charges costs to the right unit or service charge budget.',
      },
    ],
    faqs: [
      {
        q: 'Can ERPVALLEY handle both residential and commercial properties?',
        a: 'Yes. Units can be configured with different lease types, billing cycles and charge structures. Mixed-use portfolios can be managed in the same system with separate reporting.',
      },
      {
        q: 'Does it manage security deposits?',
        a: 'Yes. Deposits are recorded against each lease and held separately in the ledger. Deductions and refunds at lease end are documented and posted correctly.',
      },
      {
        q: 'Can tenants submit maintenance requests?',
        a: 'Requests can be captured by staff or through a form connected to ERPVALLEY, then routed to the right team with status tracking. A tenant-facing portal can be built as part of a custom implementation.',
      },
      {
        q: 'Can we report separately for each owner?',
        a: 'Yes. Properties can be linked to owners or entities, and statements show income, expenses and balances for each. Multi-company support helps when properties sit in different legal entities.',
      },
    ],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    icon: Briefcase,
    headline: 'Deliver projects on budget and bill every hour you earn',
    summary:
      'ERPVALLEY links projects, timesheets, resource utilisation and billing milestones, so firms see profitability per client and invoice without chasing data.',
    metaDescription:
      'Professional services ERP from ERPVALLEY: projects, timesheets, resource utilisation, billing milestones and profitability for consultancies and agencies.',
    overview: [
      'Consultancies, agencies and advisory firms sell time and expertise. Profit depends on scoping work accurately, keeping people productively assigned and turning recorded effort into invoices quickly.',
      'When projects, timesheets and invoicing are disconnected, unbilled hours pile up and overruns surface too late. ERPVALLEY ties every hour and expense to a project and contract, so delivery leads and finance share one view of progress and margin.',
    ],
    challenges: [
      {
        icon: Clock,
        title: 'Unbilled time',
        text: 'Hours are logged late or not at all, so billable work never reaches an invoice.',
      },
      {
        icon: Gauge,
        title: 'Uneven utilisation',
        text: 'Some people are overbooked while others sit idle because there is no shared view of capacity.',
      },
      {
        icon: Coins,
        title: 'Budget overruns found late',
        text: 'Project costs are compared to budget only at month end, after the overrun has already happened.',
      },
      {
        icon: Receipt,
        title: 'Complex billing terms',
        text: 'Fixed fees, milestones, retainers and time-and-materials contracts each need different invoicing rules.',
      },
    ],
    workflow: {
      title: 'Project-to-invoice for service firms',
      steps: [
        { title: 'Win and scope', text: 'A won opportunity becomes a project with budget, milestones and billing terms.' },
        { title: 'Assign people', text: 'Team members are allocated based on skills and availability.' },
        { title: 'Log time', text: 'Staff record time and expenses against project tasks, with approvals by the project lead.' },
        { title: 'Track progress', text: 'Actual effort and cost are compared to budget as the work progresses.' },
        { title: 'Bill client', text: 'Invoices are generated from approved time or completed milestones and sent to the client.' },
      ],
    },
    modules: [
      { slug: 'project-management', why: 'Manages projects, tasks, budgets, milestones and timesheets in one place.' },
      { slug: 'crm', why: 'Tracks opportunities and proposals so won work becomes a project without re-entry.' },
      { slug: 'finance-accounting', why: 'Invoices by milestone, retainer or time-and-materials and tracks receivables.' },
      { slug: 'hr-payroll', why: 'Holds staff records, cost rates, leave and payroll that feed project costing.' },
      { slug: 'reporting-analytics', why: 'Shows utilisation, project margin and unbilled work by person, team or client.' },
    ],
    integrations: ['Calendar and email tools', 'Payment gateways', 'Bank feeds', 'eSignature tools', 'Document storage'],
    useCases: [
      {
        title: 'Milestone billing',
        text: 'An engineering consultancy invoices automatically when a project milestone is marked complete and approved by the project lead.',
      },
      {
        title: 'Agency retainers',
        text: 'A marketing agency tracks hours used against monthly retainers and flags clients who are nearing their limit.',
      },
      {
        title: 'Capacity planning',
        text: 'An IT services firm reviews upcoming allocations to decide when to hire or bring in contractors.',
      },
    ],
    faqs: [
      {
        q: 'Can we use different billing models on different projects?',
        a: 'Yes. Each project can use fixed fee, milestone, retainer or time-and-materials billing. Invoices are generated according to the rules defined for that project.',
      },
      {
        q: 'How does ERPVALLEY calculate utilisation?',
        a: 'Utilisation is calculated from recorded hours against each person’s available capacity, split into billable and non-billable time. You define what counts as billable for your firm.',
      },
      {
        q: 'Can clients approve timesheets?',
        a: 'Timesheets are approved internally by default. Where clients need to sign off hours, we can configure an approval step or share reports for review as part of implementation.',
      },
      {
        q: 'Does it track project expenses as well as time?',
        a: 'Yes. Staff can log expenses against projects, and rebillable costs can be added to client invoices. Project reports show both time and expenses against budget.',
      },
    ],
  },
  {
    slug: 'distribution',
    name: 'Distribution',
    icon: Boxes,
    headline: 'Price, pick and deliver wholesale orders without the chaos',
    summary:
      'ERPVALLEY handles tiered wholesale pricing, bulk orders, route sales and warehouse picking, so distributors serve more customers with fewer errors.',
    metaDescription:
      'Distribution ERP from ERPVALLEY: wholesale pricing tiers, bulk and route sales orders, warehouse picking, delivery and receivables for distributors.',
    overview: [
      'Distributors buy in bulk from manufacturers and sell to retailers, trade customers and resellers. They manage thousands of SKUs, customer-specific prices and tight delivery windows, often with thin margins.',
      'ERPVALLEY connects purchasing, pricing, order taking, warehouse picking and collections. Sales reps, warehouse staff and accounts all work from live stock and customer data, so orders are priced correctly and shipped complete.',
    ],
    challenges: [
      {
        icon: Tags,
        title: 'Complex price structures',
        text: 'Customer tiers, volume breaks and special deals are hard to apply consistently, leading to pricing errors.',
      },
      {
        icon: Route,
        title: 'Disconnected route sales',
        text: 'Field reps take orders on paper or messaging apps, so orders are re-keyed and stock is not checked.',
      },
      {
        icon: PackageCheck,
        title: 'Picking errors',
        text: 'Wrong items and short shipments lead to returns, credit notes and frustrated customers.',
      },
      {
        icon: Wallet,
        title: 'Credit and collections risk',
        text: 'Orders are released to customers who are over their credit limit or have overdue balances.',
      },
    ],
    workflow: {
      title: 'Order-to-cash for distributors',
      steps: [
        { title: 'Take order', text: 'Orders come in from reps, phone or online with the customer’s price tier applied automatically.' },
        { title: 'Check credit', text: 'The customer’s credit limit and overdue balance are checked before the order is released.' },
        { title: 'Pick and pack', text: 'Pick lists are grouped by route and location, and scanned to confirm the right items.' },
        { title: 'Deliver', text: 'Orders are loaded by route and delivered, with proof of delivery recorded.' },
        { title: 'Invoice and collect', text: 'Invoices are issued on dispatch and payments are matched against customer accounts.' },
      ],
    },
    modules: [
      { slug: 'sales-management', why: 'Applies price tiers, volume breaks and promotions to every order automatically.' },
      { slug: 'inventory-management', why: 'Manages bin locations, picking, batch tracking and stock across warehouses.' },
      { slug: 'purchase-management', why: 'Reorders from suppliers based on sales velocity, lead times and minimum order quantities.' },
      { slug: 'finance-accounting', why: 'Enforces credit limits and tracks receivables, credit notes and supplier payables.' },
      { slug: 'crm', why: 'Gives field reps customer history, visit plans and order patterns on the road.' },
      { slug: 'reporting-analytics', why: 'Shows margin by customer, product and route, plus slow-moving stock.' },
    ],
    integrations: ['Barcode scanners', 'Ecommerce and B2B portals', 'Shipping carriers', 'Payment gateways', 'Bank feeds', 'Telematics and GPS'],
    useCases: [
      {
        title: 'Van sales routes',
        text: 'A beverage distributor’s reps take orders on mobile during store visits, with stock and price tiers checked in real time.',
      },
      {
        title: 'Bulk trade orders',
        text: 'A building supplies wholesaler processes large contractor orders with volume pricing and split deliveries from two warehouses.',
      },
      {
        title: 'Credit-controlled release',
        text: 'A food wholesaler holds orders for customers past their credit limit until an account manager approves the release.',
      },
    ],
    faqs: [
      {
        q: 'Can we set different prices for different customers?',
        a: 'Yes. You can create price lists by customer group, individual customer, volume break or contract. The correct price is applied automatically when an order is entered.',
      },
      {
        q: 'Can sales reps take orders on mobile?',
        a: 'Yes. The responsive interface works on phones and tablets, so reps can check stock, see customer history and place orders during visits. Orders go straight to the warehouse for picking.',
      },
      {
        q: 'Does ERPVALLEY support barcode picking?',
        a: 'Yes. Pick lists can be scanned with barcode devices to confirm items and quantities. This helps reduce picking errors and keeps stock levels accurate.',
      },
      {
        q: 'How are credit limits enforced?',
        a: 'Each customer can have a credit limit and payment terms. Orders that would exceed the limit, or that belong to customers with overdue balances, can be held for approval automatically.',
      },
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    icon: Hotel,
    headline: 'Control costs across every property, kitchen and shift',
    summary:
      'ERPVALLEY brings multi-property procurement, food and beverage stock, staff scheduling and cost control together for hotels, restaurants and venues.',
    metaDescription:
      'Hospitality ERP from ERPVALLEY: multi-property procurement, food and beverage inventory, staff scheduling, payroll and cost control for hotels and restaurants.',
    overview: [
      'Hotels, restaurant groups and venues buy perishable supplies daily, staff shifts around changing occupancy and covers, and run on tight cost margins. Each property often has its own habits for ordering and stock counts.',
      'ERPVALLEY standardises the back office across properties. Central teams can agree supplier terms once, while each site orders, counts stock and plans shifts in the same system, giving management a consistent view of costs.',
    ],
    challenges: [
      {
        icon: ShoppingBasket,
        title: 'Fragmented purchasing',
        text: 'Each property orders from its own suppliers at different prices, so group buying power goes unused.',
      },
      {
        icon: UtensilsCrossed,
        title: 'F&B waste and variance',
        text: 'Without regular stock counts and recipe costing, food and beverage losses are hard to spot.',
      },
      {
        icon: CalendarDays,
        title: 'Shift scheduling pressure',
        text: 'Staffing levels do not match occupancy or bookings, leading to overtime costs or poor service.',
      },
      {
        icon: PieChart,
        title: 'Inconsistent cost reporting',
        text: 'Properties report costs in different formats, making group comparisons slow and unreliable.',
      },
    ],
    workflow: {
      title: 'Purchase-to-plate for hospitality groups',
      steps: [
        { title: 'Set par levels', text: 'Each kitchen and bar defines par levels for its key food, beverage and supply items.' },
        { title: 'Order centrally', text: 'Requisitions are consolidated into purchase orders with group-negotiated suppliers.' },
        { title: 'Receive and store', text: 'Deliveries are checked against orders and stock is received into each outlet.' },
        { title: 'Count and cost', text: 'Regular stock counts and recipe costs reveal usage, waste and variance.' },
        { title: 'Review margins', text: 'Food, beverage and labour costs are compared to revenue by property and outlet.' },
      ],
    },
    modules: [
      { slug: 'procurement', why: 'Consolidates purchasing across properties and enforces approved suppliers and prices.' },
      { slug: 'inventory-management', why: 'Tracks food, beverage and housekeeping stock per outlet with counts and transfers.' },
      { slug: 'hr-payroll', why: 'Plans staff shifts, records attendance and runs payroll including service charges and overtime.' },
      { slug: 'finance-accounting', why: 'Consolidates property accounts and tracks supplier payments in one ledger.' },
      { slug: 'reporting-analytics', why: 'Compares food cost, labour cost and margins across properties and outlets.' },
    ],
    integrations: ['Property management systems', 'POS systems', 'Payment gateways', 'Bank feeds', 'Biometric attendance devices'],
    useCases: [
      {
        title: 'Restaurant group buying',
        text: 'A group of restaurants consolidates weekly produce orders through approved suppliers, while each site still places its own requisition.',
      },
      {
        title: 'Hotel stock control',
        text: 'A boutique hotel tracks minibar, housekeeping and kitchen stock separately and transfers items between outlets as needed.',
      },
      {
        title: 'Event staffing',
        text: 'A banqueting venue schedules extra shifts around confirmed events and sees the labour cost of each function.',
      },
    ],
    faqs: [
      {
        q: 'Does ERPVALLEY replace our property management or POS system?',
        a: 'No. ERPVALLEY handles procurement, inventory, staff and finance behind the guest-facing systems. It can connect with your property management and POS systems so revenue and usage data flow into reporting.',
      },
      {
        q: 'Can we cost recipes and menu items?',
        a: 'Yes. Recipes can be built from stock items with quantities, giving a theoretical cost per dish. Comparing theoretical usage with actual stock counts highlights waste and variance.',
      },
      {
        q: 'Can each property have its own suppliers?',
        a: 'Yes. You can combine group-wide supplier agreements with local suppliers for specific properties. Approval rules control who can buy outside the agreed list.',
      },
      {
        q: 'How does staff scheduling work?',
        a: 'Managers build shift schedules by department, and recorded attendance flows into payroll. Reports show labour cost against revenue so staffing can be adjusted.',
      },
    ],
  },
  {
    slug: 'construction',
    name: 'Construction',
    icon: HardHat,
    headline: 'Cost every job, supply every site and bill on progress',
    summary:
      'ERPVALLEY connects job costing, site material requests, subcontractors, equipment and progress billing, so contractors keep projects profitable from tender to handover.',
    metaDescription:
      'Construction ERP from ERPVALLEY: job costing, site material requests, subcontractor management, equipment tracking and progress billing for contractors.',
    overview: [
      'Contractors run several jobs at once, each with its own budget, sites, crews, subcontractors and equipment. Costs build up daily, while payment arrives in stages tied to work completed.',
      'When estimates, site requests and accounts live apart, overruns are found too late and claims are delayed. ERPVALLEY ties every purchase, hour and subcontract to a job and cost code, so project managers and finance can see margin while work is still underway.',
    ],
    challenges: [
      {
        icon: Coins,
        title: 'Job costs tracked too late',
        text: 'Material, labour and subcontract costs reach the job report weeks after they are incurred.',
      },
      {
        icon: Truck,
        title: 'Site material delays',
        text: 'Site requests go by phone or message, so materials arrive late or are ordered twice.',
      },
      {
        icon: Users,
        title: 'Subcontractor control',
        text: 'Tracking subcontract values, variations, retentions and payments by hand is slow and risky.',
      },
      {
        icon: Construction,
        title: 'Equipment under-used or lost',
        text: 'Plant and tools move between sites without records, leading to idle hire costs and missing items.',
      },
    ],
    workflow: {
      title: 'Estimate-to-claim for contractors',
      steps: [
        { title: 'Set job budget', text: 'The awarded estimate becomes a job budget broken down by cost code and phase.' },
        { title: 'Request materials', text: 'Site teams raise material requests that route for approval and become purchase orders.' },
        { title: 'Manage subcontracts', text: 'Subcontract values, variations and retentions are recorded against the job.' },
        { title: 'Record site costs', text: 'Labour hours, deliveries and equipment use are posted to the job as they happen.' },
        { title: 'Bill progress', text: 'Progress claims are prepared from work completed, with retentions and variations applied.' },
      ],
    },
    modules: [
      { slug: 'project-management', why: 'Holds job budgets, phases, cost codes and progress for every project.' },
      { slug: 'procurement', why: 'Turns site material requests into approved purchase orders delivered to the right site.' },
      { slug: 'finance-accounting', why: 'Handles progress billing, retentions, subcontractor payments and job profitability.' },
      { slug: 'inventory-management', why: 'Tracks materials and equipment held at yards and sites, including transfers.' },
      { slug: 'hr-payroll', why: 'Records crew hours by job and site, feeding payroll and job costs.' },
      { slug: 'reporting-analytics', why: 'Shows budget versus actual, committed costs and margin per job.' },
    ],
    integrations: ['Estimating and takeoff tools', 'Telematics and GPS', 'Bank feeds', 'Payment gateways', 'Document storage'],
    useCases: [
      {
        title: 'Commercial fit-out',
        text: 'A fit-out contractor tracks committed and actual costs per floor, spotting overruns before the next progress claim is due.',
      },
      {
        title: 'Civil works equipment',
        text: 'A civil contractor records which machines are on each site and charges equipment use to the right job.',
      },
      {
        title: 'Housing development',
        text: 'A residential builder manages subcontractors across many plots, applying retentions and releasing them at practical completion.',
      },
    ],
    faqs: [
      {
        q: 'Can we track costs by cost code and phase?',
        a: 'Yes. Each job can be broken into phases and cost codes, and every purchase, timesheet and subcontract payment is posted against them. Reports show budget, committed and actual costs side by side.',
      },
      {
        q: 'Does ERPVALLEY support retentions and variations?',
        a: 'Yes. Retentions can be applied to both client claims and subcontractor payments, and variations are recorded against the original contract value. Balances are tracked until retentions are released.',
      },
      {
        q: 'Can site teams use it from the field?',
        a: 'Yes. The responsive interface works on phones and tablets, so site managers can raise material requests, approve deliveries and record hours on site. Connectivity requirements are reviewed during implementation.',
      },
      {
        q: 'Does it replace our estimating software?',
        a: 'ERPVALLEY focuses on running the job once it is awarded. Estimates from your existing estimating tool can be imported to create job budgets, so there is no need to re-key them.',
      },
    ],
  },
]

export const industryBySlug = new Map(industries.map((i) => [i.slug, i]))
