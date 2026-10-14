/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  // ERPVALLEY uses 5300 so it never collides with other local projects (e.g. GrowthValley on 5180).
  // strictPort: fail loudly instead of silently picking another port.
  // /api requests go to the Express server (server/, port 5301) during development.
  server: { port: 5300, strictPort: true, proxy: { '/api': 'http://localhost:5301' } },
  preview: { port: 4300, strictPort: true },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
})
