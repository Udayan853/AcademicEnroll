import { createContext, useState } from 'react'
import { CourseContextType, Course } from '../@types/Course'

const CourseContext = createContext<CourseContextType>({
  courses: [],
  setCourses: () => {},
})

const CourseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [courses, setCourses] = useState<Course[]>([])
  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {children}
    </CourseContext.Provider>
  )
}

export { CourseProvider, CourseContext }
