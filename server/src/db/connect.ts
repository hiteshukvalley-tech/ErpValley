import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

/** Connects to MongoDB. Indexes are built automatically outside production; in production run `npm run seed`. */
export async function connectDatabase(uri: string, { autoIndex = true } = {}) {
  await mongoose.connect(uri, { autoIndex, serverSelectionTimeoutMS: 10_000 })
  return mongoose.connection
}

export async function disconnectDatabase() {
  await mongoose.disconnect()
}

export const isDatabaseConnected = () => mongoose.connection.readyState === mongoose.ConnectionStates.connected
