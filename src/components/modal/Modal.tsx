import { FunctionComponent, useContext, useEffect, useState } from 'react'
import Logo from '../layout/Logo'
import DefaultButton from '../buttons/DefaultButton'
import { IoIosClose } from 'react-icons/io'
import { ModalContext } from '../layout/Layout'
import classNames from 'classnames'
import Input from '../input/Input'
import { AuthContext } from '../../providers/AuthProvider'

const Modal: FunctionComponent = () => {
  const { isOpenModal, setisOpenModal } = useContext(ModalContext)
  const { login, register } = useContext(AuthContext)
  const [isLogin, setisLogin] = useState(true)

  const [data, setData] = useState({
    name: '',
    login: '',
    password: '',
  })

  const handleCloseModal = () => {
    setisOpenModal(false)
    setData({ login: '', password: '', name: '' })
    setisLogin(true)
  }

  useEffect(() => {
    if (!isOpenModal) {
      setData({ login: '', password: '', name: '' })
      setisLogin(true)
    }
  }, [isOpenModal])

  return (
    <div
      onClick={handleCloseModal}
      className={classNames(
        ' w-full h-screen fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center duration-300 ease-in-out',
        isOpenModal
          ? ' bg-opacity-40 bg-black pointer-events-auto'
          : ' bg-opacity-100 pointer-events-none'
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          ' w-2/3 h-3/5 rounded-xl flex overflow-hidden  duration-500 ease-in-out',
          isOpenModal ? 'opacity-100 ' : 'opacity-0 '
        )}
      >
        <div className=" bg-grey w-1/3 p-5 flex items-center justify-center">
          <Logo isDarkMode />
        </div>
        <div
          className={classNames(
            ' backdrop-blur-2xl p-5 bg-grey w-2/3 flex flex-col justify-between bg-opacity-20'
          )}
        >
          <div className=" flex justify-between items-start">
            <div>
              <h2 className=" text-3xl">Welcome to Mars</h2>
              <h3 className=" text-sm">Please enter your details</h3>
            </div>
            <div
              onClick={handleCloseModal}
              className=" cursor-pointer duration-300 p-1 hover:bg-black/20 active:bg-black/80 rounded-full ease-in-out"
            >
              <IoIosClose size={25} width={10} height={10} />
            </div>
          </div>
          <div className=" mb-3">
            {!isLogin && (
              <Input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e })}
                label="Name"
                placeholder="Arina"
                disable={!isOpenModal}
              />
            )}
            <Input
              value={data.login}
              onChange={(e) => setData({ ...data, login: e })}
              label="Email"
              placeholder="name@mail.ru"
              disable={!isOpenModal}
            />
            <Input
              value={data.password}
              onChange={(e) => setData({ ...data, password: e })}
              label="Password"
              type="password"
              placeholder="123456"
              disable={!isOpenModal}
            />
            <DefaultButton
              text={isLogin ? 'Sign in' : 'Sign up'}
              onClick={() =>
                isLogin
                  ? login(data.login, data.password)
                  : register(data.login, data.password, data.name)
              }
            />
          </div>
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <button onClick={() => setisLogin(false)} className=" text-red-300">
                Sign up!
              </button>
            </p>
          ) : (
            <p>
              Already registered?{' '}
              <button onClick={() => setisLogin(true)} className=" text-red-300">
                Sign in!
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
