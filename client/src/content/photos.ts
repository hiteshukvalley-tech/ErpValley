import type { IndustrySlug, ProductSlug, ServiceSlug } from './types'

/*
 * Photography used across the site. Every photo is from Unsplash (free to use under the Unsplash License),
 * saved in public/images/photos as <key>-800.webp and <key>-1600.webp (3:2).
 * Photos illustrate situations and workplaces; they never show or imply ERPVALLEY customers or staff.
 * To add one: download both sizes with the same key, then add an entry here with descriptive alt text.
 */

export interface PhotoAsset {
  /** File key in public/images/photos (without size suffix). */
  key: string
  /** Describes what is in the photo for screen readers. */
  alt: string
}

const p = (key: string, alt: string): PhotoAsset => ({ key, alt })

export const photos = {
  paperworkDesk: p('paperwork-desk', 'Paper tax forms, receipts and a calculator spread across a desk'),
  signingPaperwork: p('signing-paperwork', 'A person filling in a paper form by hand'),
  printedReports: p('printed-reports', 'Printed charts and reports spread out on a desk next to a tablet'),
  serverCables: p('server-cables', 'Dense, tangled cabling in an old server rack'),
  dashboardLaptop: p('dashboard-laptop', 'A laptop showing a business dashboard with charts and key figures'),
  analyticsScreen: p('analytics-screen', 'A monitor showing live analytics charts'),
  planningWorkshop: p('planning-workshop', 'A team in a planning workshop with sticky notes on the wall'),
  teamTraining: p('team-training', 'A team in a meeting room following a presentation on laptops'),
  officeFloor: p('office-floor', 'A bright open-plan office with people working at desks'),
  handshake: p('handshake', 'Two business people shaking hands'),
  teamSuccess: p('team-success', 'Two colleagues giving each other a high five at a desk'),
  financePaperwork: p('finance-paperwork', 'Two people reviewing financial paperwork next to laptops'),
  salesTeamScreen: p('sales-team-screen', 'Two colleagues reviewing information on a screen while one takes a phone call'),
  teamLaptops: p('team-laptops', 'A team working together on laptops around a table'),
  warehouseFloor: p('warehouse-floor', 'A busy warehouse floor with boxes and storage crates'),
  warehouseAisle: p('warehouse-aisle', 'A long warehouse aisle with tall shelves of stock'),
  warehouseRacks: p('warehouse-racks', 'Pallet racks stacked with cartons in a warehouse'),
  deskPayments: p('desk-payments', 'A desk with a laptop, a card payment terminal and a tablet'),
  pointOfSale: p('point-of-sale', 'A customer paying at a shop counter'),
  engineerMachine: p('engineer-machine', 'An engineer working on a laptop beside production equipment'),
  whiteboardPlan: p('whiteboard-plan', 'People sketching a process plan on a whiteboard'),
  appOnLaptop: p('app-on-laptop', 'Hands typing on a laptop showing a business application'),
  teamDiscussion: p('team-discussion', 'Colleagues discussing work in front of a laptop'),
  codeEditor: p('code-editor', 'Source code open in an editor on a laptop'),
  engineerDatacenter: p('engineer-datacenter', 'An engineer with a laptop in a data centre aisle'),
  apiCode: p('api-code', 'Close-up of code on a laptop screen'),
  typingLaptop: p('typing-laptop', 'Hands typing on a laptop keyboard'),
  laptopCharts: p('laptop-charts', 'A laptop showing charts and a map on a desk'),
  designReview: p('design-review', 'A designer presenting screens on a large display'),
  developerDesk: p('developer-desk', 'A developer workstation with code on a laptop and monitor'),
  technicalDrawings: p('technical-drawings', 'A person checking technical drawings at a workbench'),
} satisfies Record<string, PhotoAsset>

export const industryPhotos: Record<IndustrySlug, PhotoAsset> = {
  manufacturing: p('industry-manufacturing', 'Robotic arms assembling car bodies on a factory line'),
  'retail-ecommerce': p('industry-retail', 'A clothing store with stocked shelves and rails'),
  'fintech-lending': p('industry-fintech', 'A person using a banking app on a phone next to a laptop'),
  healthcare: p('industry-healthcare', 'A stethoscope beside a laptop being used for clinical admin'),
  education: p('industry-education', 'An empty classroom with desks and a blackboard'),
  'logistics-supply-chain': p('industry-logistics', 'A container port with cranes and stacked shipping containers'),
  'real-estate': p('industry-real-estate', 'A model house and a set of keys on a table'),
  'professional-services': p('industry-professional', 'Two professionals in a client meeting with a laptop'),
  distribution: p('industry-distribution', 'Delivery trucks parked at a distribution depot, seen from above'),
  hospitality: p('industry-hospitality', 'A hotel pool and lodge at sunset'),
  construction: p('industry-construction', 'A construction crew in high-visibility vests on a building site'),
}

/** The business problem each module removes, shown on its product page beside a photo of that situation. */
export interface ProblemStory {
  photo: PhotoAsset
  problem: string
  solution: string
}

export const productStories: Record<ProductSlug, ProblemStory> = {
  'erp-platform': {
    photo: photos.paperworkDesk,
    problem: 'Each team keeps its own spreadsheets and apps, so figures never match and every report starts with copying data around.',
    solution: 'One platform with one database: an entry made once is visible to every team that needs it, with the same numbers everywhere.',
  },
  'finance-accounting': {
    photo: photos.financePaperwork,
    problem: 'Month-end close means chasing paper invoices, re-typing bank statements and reconciling by hand until the books finally balance.',
    solution: 'Invoices, payments and bank lines post to the ledger automatically, so reconciliation is a review rather than a rebuild.',
  },
  crm: {
    photo: photos.salesTeamScreen,
    problem: 'Leads live in inboxes and personal notes. Follow-ups are missed and nobody knows which deals are really close to signing.',
    solution: 'A shared pipeline keeps every contact, call and quote on the customer record, with reminders so nothing slips.',
  },
  'hr-payroll': {
    photo: photos.teamLaptops,
    problem: 'Attendance sheets, leave requests and salary changes arrive from different places, and payroll day becomes a scramble to collect them.',
    solution: 'Employee records, attendance and leave feed payroll directly, so each run is calculated from data that is already approved.',
  },
  'inventory-management': {
    photo: photos.warehouseAisle,
    problem: 'Shelves say one thing and the spreadsheet says another. Items run out without warning while other stock sits unused.',
    solution: 'Stock updates with every sale, receipt and transfer, and reorder rules warn you before an item runs out.',
  },
  procurement: {
    photo: photos.signingPaperwork,
    problem: 'Purchase requests travel by email and paper forms, approvals stall, and spending is only visible after the money has gone.',
    solution: 'Requisitions follow a set approval route with budgets checked up front, and every request is tracked to the order it creates.',
  },
  'sales-management': {
    photo: photos.pointOfSale,
    problem: 'Orders are taken in one place, stock is checked in another and invoices are typed up later, which leads to delays and mistakes.',
    solution: 'Quotes become orders, orders reserve stock and deliveries create invoices, all without anyone re-entering the details.',
  },
  'purchase-management': {
    photo: photos.warehouseRacks,
    problem: 'Goods arrive without a matching order, quantities differ from the invoice, and suppliers are paid before anyone checks.',
    solution: 'Purchase orders, goods receipts and supplier bills are matched automatically, so you pay only for what arrived.',
  },
  manufacturing: {
    photo: photos.engineerMachine,
    problem: 'Production plans live on whiteboards, materials run short mid-run and the true cost of each job is only guessed.',
    solution: 'Bills of materials and work orders reserve components up front, and actual time and material costs are recorded per job.',
  },
  'project-management': {
    photo: photos.whiteboardPlan,
    problem: 'Tasks, timesheets and budgets sit in separate tools, so overruns are discovered when the invoice is already late.',
    solution: 'Tasks, logged time and costs roll up to each project budget, so you see an overrun while there is still time to act.',
  },
  'reporting-analytics': {
    photo: photos.printedReports,
    problem: 'Reports are assembled by hand at month-end, and by the time leaders read them the numbers are already out of date.',
    solution: 'Dashboards read from the same live records your teams work in, with drill-down from any total to the transactions behind it.',
  },
  'workflow-automation': {
    photo: photos.appOnLaptop,
    problem: 'Routine approvals and reminders depend on someone remembering to send an email, so work waits in inboxes.',
    solution: 'Rules route approvals, create documents and send reminders automatically, with a clear record of who approved what.',
  },
  integrations: {
    photo: photos.teamDiscussion,
    problem: 'Your store, payment provider and shipping tools do not talk to each other, so staff copy data between them every day.',
    solution: 'A REST API, webhooks and ready connectors move orders, payments and shipments between systems automatically.',
  },
}

export const servicePhotos: Record<ServiceSlug, PhotoAsset> = {
  'custom-erp-development': photos.codeEditor,
  'erp-implementation': photos.planningWorkshop,
  'erp-consulting': photos.teamTraining,
  'legacy-modernization': photos.serverCables,
  'cloud-infrastructure': photos.engineerDatacenter,
  'api-development': photos.apiCode,
  'third-party-integrations': photos.typingLaptop,
  'data-migration': photos.laptopCharts,
  'ui-ux-design': photos.designReview,
  'ai-automation': photos.developerDesk,
  'quality-assurance': photos.technicalDrawings,
  'maintenance-support': photos.teamSuccess,
}

/** Homepage "problems we solve": one photo per challenge, in the order of `challenges` in home.ts. */
export const challengePhotos: PhotoAsset[] = [photos.paperworkDesk, photos.signingPaperwork, photos.printedReports, photos.serverCables]
