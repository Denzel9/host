import { FunctionComponent, ReactNode, createContext, useEffect, useMemo, useState } from 'react'
import { User, onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, onSnapshot, query } from 'firebase/firestore'
import { auth, db, login, logout, register } from '../config/firebase'

interface IContext {
  user: User | null
  isLoading: boolean
  register: (email: string, password: string, name: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export const AuthContext = createContext<IContext>({} as IContext)

const AuthProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<null | User>(null)
  const [isLoadingInitial, setIsloadinInitial] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const registerHandler = async (email: string, password: string, name: string) => {
    setIsLoading(true)
    try {
      const { user } = await register(email, password)

      await addDoc(collection(db, 'users'), {
        id: user.uid,
        name: name || '...',
        lastname: '...',
        email: user?.email,
        userImg: user?.photoURL,
        templates: [],
        weather: {
          city: '',
          favorites: [],
        },
        tags: [],
      }).then(() => localStorage.setItem('id', user.uid))
    } catch (error: any) {
      console.log('Error reg:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const loginHandler = async (email: string, password: string) => {
    const { user } = await login(email, password)

    setIsLoading(true)
    try {
      await login(email, password).then(() => localStorage.setItem('id', user.uid))
    } catch (error: any) {
      console.log('Error log:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const logoutHandler = async () => {
    setIsLoading(true)
    try {
      await logout().then(() => localStorage.removeItem('id'))
    } catch (error: any) {
      console.log('Error logout:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setUser(user || null)
        setIsloadinInitial(false)
      }),
    []
  )

  const value = useMemo(
    () => ({
      user,
      isLoading,
      login: loginHandler,
      logout: logoutHandler,
      register: registerHandler,
    }),
    [user, isLoading]
  )
  return <AuthContext.Provider value={value}>{!isLoadingInitial && children}</AuthContext.Provider>
}

export default AuthProvider
