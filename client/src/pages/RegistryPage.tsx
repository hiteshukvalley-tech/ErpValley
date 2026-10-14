import { useLocation } from 'react-router-dom'
import { pageRegistry } from '@/config/navigation'
import { NotFoundPage } from './NotFoundPage'
import { UpcomingPage } from './UpcomingPage'

/** Catch-all: known routes render their interim page, unknown routes render 404. */
export function RegistryPage() {
  const { pathname } = useLocation()
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const page = pageRegistry.get(path)
  return page ? <UpcomingPage page={page} path={path} /> : <NotFoundPage />
}
