/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import { resolveGtmId } from './src/config/gtm.ts'

/**
 * Adds the Google Tag Manager snippet to index.html: the script at the top of <head> and the <noscript>
 * iframe right after <body>. Every page is covered because the site is a single-page app with one HTML shell.
 * Without a valid VITE_GTM_ID (or with VITE_GTM_ENABLED=false) nothing is added.
 */
function googleTagManager(id: string): Plugin {
  return {
    name: 'erpvalley-gtm',
    transformIndexHtml() {
      if (!id) return []
      return [
        {
          tag: 'script',
          injectTo: 'head-prepend',
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`,
        },
        {
          tag: 'noscript',
          injectTo: 'body-prepend',
          children: `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        },
      ]
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  return {
    plugins: [react(), tailwindcss(), googleTagManager(resolveGtmId(env.VITE_GTM_ID, env.VITE_GTM_ENABLED))],
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    // ERPVALLEY uses 5300 so it never collides with other local projects (e.g. GrowthValley on 5180).
    // strictPort: fail loudly instead of silently picking another port.
    server: { port: 5300, strictPort: true },
    preview: { port: 4300, strictPort: true },
    test: {
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
      css: false,
      // The first test in each file renders the whole app from a cold start, which can take a few seconds.
      testTimeout: 15000,
    },
  }
})
