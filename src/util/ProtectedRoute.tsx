import { useAuth } from '@/hooks/useAuth'

const ProtectedRoute: React.FC<{ Component: React.FC }> = ({ Component }) => {
  const { userInfo } = useAuth()
  return Object.keys(userInfo).length > 0 ? (
    <Component />
  ) : (
    <div> Access Forbidden </div>
  )
}

export { ProtectedRoute }
