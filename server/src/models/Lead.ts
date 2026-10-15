import { model, Schema, type InferSchemaType } from 'mongoose'

/**
 * An enquiry from the contact, book-a-demo or request-a-quote form.
 * Holds personal data: never expose it through a public endpoint. Reviewed in the admin panel (Step 7).
 */
export const LEAD_TYPES = ['contact', 'demo', 'quote'] as const
export const LEAD_STATUSES = ['new', 'contacted', 'closed'] as const

const text = { type: String, default: '', trim: true } as const

const leadSchema = new Schema(
  {
    type: { type: String, enum: LEAD_TYPES, required: true, index: true },
    status: { type: String, enum: LEAD_STATUSES, default: 'new', index: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, index: true },
    company: text,
    phone: text,
    topic: text,
    companySize: text,
    modules: { type: [String], default: [] },
    services: { type: [String], default: [] },
    timeline: text,
    message: text,
    page: text,
    consentAt: { type: Date, required: true },
  },
  { timestamps: true },
)

leadSchema.index({ createdAt: -1 })

export type LeadDoc = InferSchemaType<typeof leadSchema>
export const Lead = model('Lead', leadSchema)
