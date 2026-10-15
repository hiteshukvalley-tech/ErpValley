import { Router } from 'express'
import { isDatabaseConnected } from '../db/connect.js'
import { HttpError } from '../middleware/errors.js'
import { SiteSetting } from '../models/index.js'
import { caseStudiesRouter, industriesRouter, postsRouter, productsRouter, servicesRouter } from './content.js'
import { formsRouter } from './forms.js'
import { searchRouter } from './search.js'

export const apiRouter = Router()

apiRouter.get('/health', (_req, res) => {
  const db = isDatabaseConnected()
  res.status(db ? 200 : 503).json({ status: db ? 'ok' : 'degraded', database: db ? 'connected' : 'disconnected' })
})

apiRouter.get('/settings', async (_req, res) => {
  const settings = await SiteSetting.findOne({ key: 'site' }).select('-_id -__v -key -createdAt -updatedAt').lean()
  if (!settings) throw new HttpError(404, 'Site settings have not been created yet. Run `npm run seed`.')
  res.json({ data: settings })
})

apiRouter.use('/products', productsRouter)
apiRouter.use('/industries', industriesRouter)
apiRouter.use('/services', servicesRouter)
apiRouter.use('/posts', postsRouter)
apiRouter.use('/case-studies', caseStudiesRouter)
apiRouter.use('/search', searchRouter)
apiRouter.use(formsRouter)
