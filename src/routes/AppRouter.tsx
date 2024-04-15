import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Layout = lazy(() => import('@/components/layout/Layout'))
const Landing = lazy(() => import('@/pages/Landing'))
const StudentLogin = lazy(() => import('@/pages/StudentLogin'))
const AdminLogin = lazy(() => import('@/pages/AdminLogin'))
const Features = lazy(() => import('@/pages/Features'))
const About = lazy(() => import('@/pages/About'))

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="" Component={Layout}>
        <Route path="/" Component={Landing} />
        <Route path="/studentlogin" Component={StudentLogin} />
        <Route path="/adminlogin" Component={AdminLogin} />
        <Route path="/about" Component={About} />
        <Route path="/features" Component={Features} />
      </Route>
    </Routes>
  )
}

export { AppRouter }
