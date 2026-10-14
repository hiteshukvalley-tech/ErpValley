import type { ErrorRequestHandler, RequestHandler } from 'express'
import { z } from 'zod'

/** An error whose message is safe to show to API clients. */
export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
  }
}

export const notFound: RequestHandler = (req, _res, next) => {
  next(new HttpError(404, `Not found: ${req.method} ${req.path}`))
}

/** Converts every error into a JSON response. Internal details are logged, never sent to the client. */
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof z.ZodError) {
    res.status(400).json({ error: { message: 'Invalid request', issues: z.flattenError(err).fieldErrors } })
    return
  }
  // Express and body-parser set `status` on client errors such as malformed JSON.
  const status = typeof err?.status === 'number' ? err.status : 500
  if (status >= 500) {
    console.error(err)
    res.status(500).json({ error: { message: 'Internal server error' } })
    return
  }
  res.status(status).json({ error: { message: err instanceof HttpError || err?.expose ? err.message : 'Bad request' } })
}
