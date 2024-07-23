import { FunctionComponent, lazy, useContext } from 'react'
import DefaultButton from '../buttons/DefaultButton'
import Logo from './Logo'
import { ModalContext } from './Layout'
import { AuthContext } from '../../providers/AuthProvider'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'

const WeatherWidget = lazy(() => import('WEATHER/Widget'))

const Navbar: FunctionComponent = () => {
  const { setisOpenModal } = useContext(ModalContext)
  const { user } = useContext(AuthContext)
  const location = useLocation()

  const getTitlePage =
    location?.pathname?.split('/')[1][0]?.toUpperCase() +
      location?.pathname?.split('/')[1]?.slice(1) || ''

  return (
    <div
      className={classNames(
        ' flex p-5  top-0 left-0 right-0 justify-between items-center z-10',
        user ? 'border-b-2 border-grey bg-black fixed' : 'absolute'
      )}
    >
      {user ? (
        <div className=" pl-28 flex justify-between items-center w-full">
          <p className=" text-4xl">{getTitlePage}</p>
          <div className=" flex gap-3">
            <WeatherWidget />
            <button className=" relative rounded-full w-10 h-10 bg-dark border border-green-800">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="user" />
              ) : (
                <div className=" w-3 h-3 bg-green-800 rounded-full border-2 border-black absolute right-0 bottom-0" />
              )}
            </button>
          </div>
        </div>
      ) : (
        <>
          <Logo />
          <DefaultButton text="Sign in" onClick={() => setisOpenModal(true)} />
        </>
      )}
    </div>
  )
}

export default Navbar
