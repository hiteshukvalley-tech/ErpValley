import { Router, type RequestHandler } from 'express'
import type { z } from 'zod'
import { isDatabaseConnected } from '../db/connect.js'
import { HttpError } from '../middleware/errors.js'
import { Lead, Subscriber } from '../models/index.js'
import { notifyNewLead } from '../services/notify.js'
import { contactSchema, demoSchema, newsletterSchema, quoteSchema } from '../validation/forms.js'

/*
 * Public form endpoints. Bots that fill in the hidden "website" field get the normal success response,
 * but nothing is stored, so they cannot tell they were caught.
 */

const requireDatabase: RequestHandler = (_req, _res, next) => {
  next(isDatabaseConnected() ? undefined : new HttpError(503, 'Forms are temporarily unavailable. Please try again later.'))
}

type LeadSchema = typeof contactSchema | typeof demoSchema | typeof quoteSchema

function leadHandler(type: 'contact' | 'demo' | 'quote', schema: LeadSchema): RequestHandler {
  return async (req, res) => {
    const { website, consent: _consent, ...fields } = schema.parse(req.body) as z.infer<LeadSchema>
    if (!website) {
      const lead = await Lead.create({ ...fields, type, consentAt: new Date() })
      notifyNewLead(type, lead.id)
    }
    res.status(201).json({ data: { received: true } })
  }
}

export const formsRouter = Router()
  .post('/leads/contact', requireDatabase, leadHandler('contact', contactSchema))
  .post('/leads/demo', requireDatabase, leadHandler('demo', demoSchema))
  .post('/leads/quote', requireDatabase, leadHandler('quote', quoteSchema))
  .post('/newsletter', requireDatabase, async (req, res) => {
    const { email, page, website } = newsletterSchema.parse(req.body)
    if (!website) {
      // Same response whether or not the address was already subscribed, so the form cannot be used to check emails.
      await Subscriber.updateOne(
        { email },
        { $set: { status: 'subscribed', consentAt: new Date() }, $setOnInsert: { email, page } },
        { upsert: true },
      ).catch((err: { code?: number }) => {
        if (err.code !== 11000) throw err // two identical requests at once: the other one created it
      })
    }
    res.status(201).json({ data: { subscribed: true } })
  })
