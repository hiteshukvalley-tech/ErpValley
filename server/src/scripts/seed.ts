import 'dotenv/config'
import { loadEnv } from '../config/env.js'
import { connectDatabase, disconnectDatabase } from '../db/connect.js'
import { seedDatabase } from '../seed/seedDatabase.js'
import { loadClientContent } from './clientContent.js'

/** Usage: npm run seed — copies the website content into the database named in MONGODB_URI. */
const env = loadEnv()
const content = await loadClientContent()

const connection = await connectDatabase(env.MONGODB_URI, { autoIndex: false })
console.log(`Seeding database "${connection.name}"…`)

try {
  const report = await seedDatabase(content)
  console.table(report)
  console.log('Seed complete.')
} finally {
  await disconnectDatabase()
}
