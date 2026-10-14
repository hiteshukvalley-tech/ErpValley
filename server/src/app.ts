import cors from 'cors'
import express from 'express'
import { rateLimit } from 'express-rate-limit'
import helmet from 'helmet'
import { errorHandler, notFound } from './middleware/errors.js'
import { apiRouter } from './routes/index.js'

export interface AppOptions {
  /** Browser origins allowed to call the API. */
  corsOrigins: string[]
  /** Number of trusted proxies in front of the server (0 when exposed directly). */
  trustProxy?: number
  /** Requests allowed per client IP in each 15-minute window. */
  rateLimitPerWindow?: number
}

/** Builds the Express app without connecting to the database, so tests can create it freely. */
export function createApp({ corsOrigins, trustProxy = 0, rateLimitPerWindow = 300 }: AppOptions) {
  const app = express()
  app.set('trust proxy', trustProxy)
  app.disable('x-powered-by')

  app.use(helmet())
  app.use(cors({ origin: corsOrigins }))
  app.use(express.json({ limit: '100kb' }))
  app.use(
    '/api',
    rateLimit({ windowMs: 15 * 60 * 1000, limit: rateLimitPerWindow, standardHeaders: 'draft-8', legacyHeaders: false }),
  )

  app.use('/api', apiRouter)
  app.use(notFound)
  app.use(errorHandler)
  return app
}
