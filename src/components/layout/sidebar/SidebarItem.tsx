import classNames from 'classnames'
import { FunctionComponent, ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

interface SidebarItemProps {
  icon: ReactNode
  link?: string
  onClick?: () => void
}

const SidebarItem: FunctionComponent<SidebarItemProps> = ({ icon, link, onClick }) => {
  const pathname = useLocation().pathname

  return (
    <NavLink to={link}
      onClick={onClick}
      className={classNames(
        ' text-3xl text-lightGrey cursor-pointer duration-300 p-2 rounded-xl hover:bg-blues active:bg-reds',
        pathname === link && 'bg-blues/80 hover:bg-blues '
      )}
    >
      {icon}
    </NavLink>
  )
}

export default SidebarItem
