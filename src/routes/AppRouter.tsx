import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Landing = lazy(() => import('@/pages/Landing'))
const StudentLogin = lazy(() => import('@/pages/StudentLogin'))
const AdminLogin = lazy(() => import('@/pages/AdminLogin'))

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" Component={Landing} />
      <Route path="/studentlogin" Component={StudentLogin} />
      <Route path="/adminlogin" Component={AdminLogin} />
    </Routes>
  )
}

export { AppRouter }
