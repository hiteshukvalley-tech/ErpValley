import { model, Schema, type InferSchemaType } from 'mongoose'

/**
 * Business details shown in the footer and contact page (replaces client/src/config/site.ts).
 * A single document with key "site". Empty values mean "not confirmed yet" and are not rendered.
 * Becomes editable in the admin panel in a later step.
 */
const optionalString = { type: String, default: '', trim: true } as const

const siteSettingSchema = new Schema(
  {
    key: { type: String, required: true, unique: true, default: 'site' },
    name: { type: String, required: true, trim: true },
    tagline: optionalString,
    url: { type: String, required: true, trim: true },
    contact: {
      email: optionalString,
      salesEmail: optionalString,
      phone: optionalString,
      address: optionalString,
    },
    social: {
      linkedin: optionalString,
      x: optionalString,
      youtube: optionalString,
    },
  },
  { timestamps: true },
)

export type SiteSettingDoc = InferSchemaType<typeof siteSettingSchema>
export const SiteSetting = model('SiteSetting', siteSettingSchema)
