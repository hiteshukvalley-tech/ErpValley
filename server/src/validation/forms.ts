import { z } from 'zod'

/*
 * Validation for the public forms. Everything is checked again here, whatever the website already checked.
 * The choice lists must match client/src/config/forms.ts (checked by a test).
 */

export const CONTACT_TOPICS = ['Sales', 'Support', 'Partnerships', 'Careers', 'Something else'] as const
export const COMPANY_SIZES = ['1-10', '11-50', '51-200', '201-500', '500+'] as const
export const TIMELINES = ['As soon as possible', 'Within 3 months', '3 to 6 months', 'More than 6 months', 'Just researching'] as const

const email = z.string('Enter a valid email address').trim().toLowerCase().max(254).pipe(z.email('Enter a valid email address'))
const optionalText = (max: number) => z.string().trim().max(max).default('')
/** Required text with one friendly message whether it is missing, too short or not text. */
const requiredText = (min: number, max: number, message: string) => z.string(message).trim().min(min, message).max(max)
const slugs = z.array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(60)).max(20).default([])

const common = {
  email,
  consent: z.literal(true, { error: 'Please agree to the privacy policy' }),
  /** Honeypot: hidden from people, so only bots fill it in. */
  website: z.string().max(200).default(''),
  /** Path of the page the form was sent from. */
  page: z.string().max(200).regex(/^\/[\w\-/]*$/).default(''),
}

const person = {
  ...common,
  name: requiredText(2, 100, 'Enter your name'),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(/^$|^\+?[0-9()\s-]{7,20}$/, 'Enter a valid phone number')
    .default(''),
}

const company = requiredText(2, 120, 'Enter your company name')

export const contactSchema = z.object({
  ...person,
  company: optionalText(120),
  topic: z.enum(CONTACT_TOPICS, 'Choose a topic'),
  message: requiredText(10, 4000, 'Tell us a little more (at least 10 characters)'),
})

export const demoSchema = z.object({
  ...person,
  company,
  companySize: z.enum(COMPANY_SIZES, 'Choose your company size'),
  modules: slugs,
  message: optionalText(4000),
})

export const quoteSchema = z.object({
  ...person,
  company,
  companySize: z.enum(COMPANY_SIZES, 'Choose your company size'),
  modules: slugs,
  services: slugs,
  timeline: z.enum(TIMELINES, 'Choose a timeline'),
  message: requiredText(20, 4000, 'Describe what you need (at least 20 characters)'),
})

export const newsletterSchema = z.object(common)
