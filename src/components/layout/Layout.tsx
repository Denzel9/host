import { FunctionComponent, ReactNode, createContext, useContext, useState } from 'react'
import Navbar from './Navbar'
import Modal from '../modal/Modal'
import Sidebar from './sidebar/Sidebar'
import { AuthContext } from '../../providers/AuthProvider'

interface IModalContext {
  isOpenModal: boolean
  setisOpenModal: (isOpenModal: boolean) => void
}

export const ModalContext = createContext({} as IModalContext)

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [isOpenModal, setisOpenModal] = useState(false)
  const { user } = useContext(AuthContext)
  return (
    <ModalContext.Provider value={{ isOpenModal, setisOpenModal }}>
      <Navbar />
      {user ? (
        <div className=" flex">
         <Sidebar />
          <div className=' bg-black pl-24 pt-20 w-full h-full '>{children}</div>
        </div>
      ) : (
        <div>{children}</div>
      )}
      <Modal />
    </ModalContext.Provider>
  )
}

export default Layout
