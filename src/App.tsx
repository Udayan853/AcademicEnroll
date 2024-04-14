import { AppRouter } from '@/routes/AppRouter'
import { ErrorBoundary } from 'react-error-boundary'
import { Suspense } from 'react'
import { Loading, Fallback } from './components'

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Suspense fallback={<Loading />}>
        <AppRouter />
      </Suspense>
    </ErrorBoundary>
  )
}

export { App }
