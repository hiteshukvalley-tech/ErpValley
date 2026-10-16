import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import { router } from '@/routes/router'
import { captureAttribution } from '@/services/analytics'
import '@/styles/index.css'

// Store UTM parameters, click IDs and the referrer (first touch, 30 days) before the first page_view.
captureAttribution()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
