import { FunctionComponent, useContext } from 'react'
import Logo from '../Logo'
import SidebarItem from './SidebarItem'
import { menu } from './menu.data'
import { IoExitOutline } from 'react-icons/io5'
import { AuthContext } from '../../../providers/AuthProvider'

const Sidebar: FunctionComponent = () => {
  const { logout } = useContext(AuthContext)
  const handleExit = () => {
    logout()
  }
  return (
    <div className=" z-20 fixed left-0 top-0 bottom-0 w-24 p-5 bg-black flex flex-col items-center border-r border-grey">
      <Logo isShortLogo isDarkMode />
      <div className=" flex flex-col gap-5 mt-20">
        {menu.map((el) => <SidebarItem key={el.link + Math.random()} icon={el.icon} link={el.link} />).slice(0, 3)}
      </div>
      <div className=" border-b-2 border-grey w-10 my-10" />
      <div className=" flex flex-col gap-5">
        {menu.map((el) => <SidebarItem key={el.link + Math.random()} icon={el.icon} link={el.link} />).slice(3)}
      </div>
      <div className=" absolute bottom-10">
        <SidebarItem icon={<IoExitOutline />} onClick={handleExit} />
      </div>
    </div>
  )
}

export default Sidebar
