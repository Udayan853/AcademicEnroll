import { createContext, useState } from 'react'
import { UserContextType, User } from '../@types/User'

const UserContext = createContext<UserContextType>({
  userInfo: {},
  setUserInfo: () => {},
})

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<User | {}>({})
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
