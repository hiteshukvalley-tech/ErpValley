import 'dotenv/config'
import { createApp } from './app.js'
import { corsOrigins, loadEnv } from './config/env.js'
import { connectDatabase, disconnectDatabase } from './db/connect.js'

const env = loadEnv()

await connectDatabase(env.MONGODB_URI, { autoIndex: env.NODE_ENV !== 'production' })
console.log('Connected to MongoDB')

const app = createApp({ corsOrigins: corsOrigins(env), trustProxy: env.TRUST_PROXY })
const server = app.listen(env.PORT, () => {
  console.log(`ERPVALLEY API listening on http://localhost:${env.PORT}/api`)
})

/** Stop accepting requests, finish in-flight ones, then close the database connection. */
function shutdown(signal: string) {
  console.log(`${signal} received, shutting down`)
  server.close(async () => {
    await disconnectDatabase()
    process.exit(0)
  })
  setTimeout(() => process.exit(1), 10_000).unref()
}

process.on('SIGINT', () => shutdown('SIGINT'))
process.on('SIGTERM', () => shutdown('SIGTERM'))
