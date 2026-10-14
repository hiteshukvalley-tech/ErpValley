import { Schema } from 'mongoose'

/*
 * Building blocks shared by the content models. They mirror client/src/content/types.ts.
 * Icons are stored as Lucide icon names (e.g. "Factory") and resolved to components in the client.
 */

const requiredString = { type: String, required: true, trim: true } as const

export const slugField = {
  type: String,
  required: true,
  unique: true,
  trim: true,
  lowercase: true,
  match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
} as const

/** Position in menus and lists, so the API returns content in the same order as the navigation. */
export const orderField = { type: Number, default: 0, index: true } as const

export const iconItemSchema = new Schema(
  { title: requiredString, text: requiredString, icon: requiredString },
  { _id: false },
)

export const textItemSchema = new Schema({ title: requiredString, text: requiredString }, { _id: false })

export const faqSchema = new Schema({ q: requiredString, a: requiredString }, { _id: false })

export { requiredString }

/** Fields hidden from every public API response. */
export const PUBLIC_EXCLUDE = '-_id -__v -order -createdAt -updatedAt'
