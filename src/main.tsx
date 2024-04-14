import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { UserProvider } from './context/userContext.tsx'
import './index.css'
import { CourseProvider } from './context/courseContext.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <CourseProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CourseProvider>
    </UserProvider>
  </React.StrictMode>
)
