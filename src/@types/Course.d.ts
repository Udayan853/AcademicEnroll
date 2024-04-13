interface Course {
  _id: string
  name: string
  courseId: string
}

interface CourseContextType {
  courses: Course[]
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>
}

export { Course, CourseContextType }
