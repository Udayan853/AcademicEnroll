import { useContext } from 'react'
import { CourseContext } from '@/context/courseContext'
import { CourseContextType } from '@/@types/Course'

function useAuth(): CourseContextType {
  return useContext(CourseContext)
}

export { useAuth }
