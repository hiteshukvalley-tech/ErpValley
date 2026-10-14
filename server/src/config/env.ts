import { z } from 'zod'

/*
 * Environment variables, validated once at startup so a missing or malformed value fails fast
 * with a clear message instead of surfacing later as a confusing runtime error.
 */
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(5301),
  /** MongoDB Atlas connection string. Never commit it; it lives in server/.env only. */
  MONGODB_URI: z
    .string({ error: 'MONGODB_URI is required. Copy server/.env.example to server/.env and add your Atlas connection string.' })
    .regex(/^mongodb(\+srv)?:\/\//, 'MONGODB_URI must start with mongodb:// or mongodb+srv://'),
  /** Comma-separated list of browser origins allowed to call the API. */
  CORS_ORIGIN: z.string().default('http://localhost:5300'),
  /** Number of proxies in front of the server (set to 1 behind a load balancer) so rate limits see real IPs. */
  TRUST_PROXY: z.coerce.number().int().min(0).default(0),
})

export type Env = z.infer<typeof envSchema>

export function loadEnv(source: NodeJS.ProcessEnv = process.env): Env {
  const result = envSchema.safeParse(source)
  if (!result.success) {
    throw new Error(`Invalid environment configuration:\n${z.prettifyError(result.error)}`)
  }
  return result.data
}

export const corsOrigins = (env: Pick<Env, 'CORS_ORIGIN'>) =>
  env.CORS_ORIGIN.split(',')
    .map((o) => o.trim().replace(/\/+$/, ''))
    .filter(Boolean)
