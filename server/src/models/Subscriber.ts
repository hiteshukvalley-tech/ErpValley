import { model, Schema, type InferSchemaType } from 'mongoose'

/** A newsletter subscriber. One document per email address. */
const subscriberSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    status: { type: String, enum: ['subscribed', 'unsubscribed'], default: 'subscribed' },
    page: { type: String, default: '' },
    consentAt: { type: Date, required: true },
  },
  { timestamps: true },
)

export type SubscriberDoc = InferSchemaType<typeof subscriberSchema>
export const Subscriber = model('Subscriber', subscriberSchema)
