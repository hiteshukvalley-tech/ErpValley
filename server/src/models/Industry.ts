import { model, Schema, type InferSchemaType } from 'mongoose'
import { faqSchema, iconItemSchema, orderField, requiredString, slugField, textItemSchema } from './shared.js'

const industrySchema = new Schema(
  {
    slug: slugField,
    order: orderField,
    name: requiredString,
    icon: requiredString,
    headline: requiredString,
    summary: requiredString,
    metaDescription: requiredString,
    overview: [String],
    challenges: [iconItemSchema],
    workflow: {
      title: requiredString,
      steps: [textItemSchema],
    },
    modules: [new Schema({ slug: requiredString, why: requiredString }, { _id: false })],
    integrations: [String],
    useCases: [textItemSchema],
    faqs: [faqSchema],
  },
  { timestamps: true },
)

industrySchema.index(
  { name: 'text', headline: 'text', summary: 'text', overview: 'text', 'challenges.title': 'text', 'challenges.text': 'text' },
  { name: 'industry_search', weights: { name: 10, headline: 4, summary: 3, 'challenges.title': 2 } },
)

export type IndustryDoc = InferSchemaType<typeof industrySchema>
export const Industry = model('Industry', industrySchema)
