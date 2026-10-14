import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    // The first run downloads a MongoDB binary for the in-memory test database.
    hookTimeout: 120_000,
    testTimeout: 20_000,
  },
})
