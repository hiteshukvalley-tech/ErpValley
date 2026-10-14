import { model, Schema, type InferSchemaType } from 'mongoose'
import { orderField, requiredString, slugField, textItemSchema } from './shared.js'

/**
 * Client-verified case study. Only real projects belong here, and only those with
 * `published: true` (outcomes approved by the client) are returned by the public API.
 */
const caseStudySchema = new Schema(
  {
    slug: slugField,
    order: orderField,
    published: { type: Boolean, default: false, index: true },
    title: requiredString,
    client: requiredString,
    industry: requiredString,
    summary: requiredString,
    metaDescription: requiredString,
    context: requiredString,
    challenge: [String],
    solution: [String],
    approach: [textItemSchema],
    technologies: [String],
    outcomes: [String],
    products: [String],
    services: [String],
  },
  { timestamps: true },
)

export type CaseStudyDoc = InferSchemaType<typeof caseStudySchema>
export const CaseStudy = model('CaseStudy', caseStudySchema)
