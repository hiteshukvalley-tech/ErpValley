import { model, Schema, type InferSchemaType } from 'mongoose'
import { faqSchema, iconItemSchema, orderField, requiredString, slugField, textItemSchema } from './shared.js'

export const PRODUCT_CATEGORIES = [
  'Platform',
  'Finance',
  'Sales & Customers',
  'Operations',
  'People & Projects',
  'Insights & Automation',
] as const

const productSchema = new Schema(
  {
    slug: slugField,
    order: orderField,
    name: requiredString,
    icon: requiredString,
    category: { type: String, required: true, enum: PRODUCT_CATEGORIES },
    headline: requiredString,
    summary: requiredString,
    metaDescription: requiredString,
    purpose: requiredString,
    typicalUsers: requiredString,
    /** A homepage preview kind ("finance", "crm"…) or a sample-data screen object. */
    preview: { type: Schema.Types.Mixed, required: true },
    benefits: [iconItemSchema],
    features: [iconItemSchema],
    capabilityGroups: [new Schema({ title: requiredString, items: [String] }, { _id: false })],
    useCases: [textItemSchema],
    relatedModules: [String],
    integrations: [String],
    faqs: [faqSchema],
  },
  { timestamps: true },
)

productSchema.index(
  { name: 'text', headline: 'text', summary: 'text', purpose: 'text', 'features.title': 'text', 'features.text': 'text', 'capabilityGroups.items': 'text' },
  { name: 'product_search', weights: { name: 10, headline: 4, summary: 3, purpose: 3, 'features.title': 2 } },
)

export type ProductDoc = InferSchemaType<typeof productSchema>
export const Product = model('Product', productSchema)
