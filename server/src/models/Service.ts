import { model, Schema, type InferSchemaType } from 'mongoose'
import { faqSchema, iconItemSchema, orderField, requiredString, slugField, textItemSchema } from './shared.js'

const serviceSchema = new Schema(
  {
    slug: slugField,
    order: orderField,
    name: requiredString,
    icon: requiredString,
    headline: requiredString,
    summary: requiredString,
    metaDescription: requiredString,
    problems: [iconItemSchema],
    capabilities: [iconItemSchema],
    process: [textItemSchema],
    technologies: [String],
    deliverables: [String],
    relatedServices: [String],
    relatedProducts: [String],
    faqs: [faqSchema],
  },
  { timestamps: true },
)

serviceSchema.index(
  { name: 'text', headline: 'text', summary: 'text', 'capabilities.title': 'text', 'capabilities.text': 'text', technologies: 'text' },
  { name: 'service_search', weights: { name: 10, headline: 4, summary: 3, 'capabilities.title': 2 } },
)

export type ServiceDoc = InferSchemaType<typeof serviceSchema>
export const Service = model('Service', serviceSchema)
