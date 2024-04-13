import { useContext } from 'react'
import { UserContextType } from '@/@types/User'
import { UserContext } from '@/context/userContext'

function useAuth(): UserContextType {
  return useContext(UserContext)
}

export { useAuth }
