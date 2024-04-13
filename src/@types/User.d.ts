import { Course } from './Course'

interface User {
  _id: string
  regno: string
  username: string
  email: string
  courses: Course[]
}

interface UserContextType {
  userInfo: User | {}
  setUserInfo: React.Dispatch<React.SetStateAction<User>>
}

export { User, UserContextType }
