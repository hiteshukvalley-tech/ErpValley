import { model, Schema, type InferSchemaType } from 'mongoose'
import { requiredString, slugField } from './shared.js'

export const POST_CATEGORIES = ['ERP Basics', 'Implementation', 'Operations', 'Finance', 'Technology'] as const
export const POST_KINDS = ['blog', 'guide'] as const

/** One block of article body: a heading, paragraph, bullet list or tip callout. */
const blockSchema = new Schema(
  {
    type: { type: String, required: true, enum: ['h2', 'p', 'ul', 'callout'] },
    text: { type: String, trim: true },
    items: { type: [String], default: undefined },
  },
  { _id: false },
)

blockSchema.pre('validate', function () {
  if (this.type === 'ul' ? !this.items?.length : !this.text) {
    this.invalidate(this.type === 'ul' ? 'items' : 'text', `A "${this.type}" block needs ${this.type === 'ul' ? 'items' : 'text'}`)
  }
})

const postSchema = new Schema(
  {
    slug: slugField,
    kind: { type: String, required: true, enum: POST_KINDS },
    title: requiredString,
    excerpt: requiredString,
    metaDescription: requiredString,
    category: { type: String, required: true, enum: POST_CATEGORIES },
    tags: [String],
    /** ISO date (YYYY-MM-DD), kept as a string so it sorts correctly and matches the client format. */
    publishedAt: { type: String, required: true, match: /^\d{4}-\d{2}-\d{2}$/, index: true },
    author: requiredString,
    body: { type: [blockSchema], validate: [(v: unknown[]) => v.length > 0, 'An article needs a body'] },
    relatedProducts: [String],
  },
  { timestamps: true },
)

postSchema.index(
  { title: 'text', excerpt: 'text', tags: 'text', category: 'text', 'body.text': 'text', 'body.items': 'text' },
  { name: 'post_search', weights: { title: 10, excerpt: 4, tags: 3, category: 2 } },
)

export type PostDoc = InferSchemaType<typeof postSchema>
export const Post = model('Post', postSchema)
