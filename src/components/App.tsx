import { FunctionComponent, Suspense, lazy, useContext, useEffect } from 'react'
import Home from '../pages/Home'
import { AuthContext } from '../providers/AuthProvider'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ModalContext } from './layout/Layout'
const Weather = lazy(() => import('WEATHER/App'))
const Calendar = lazy(() => import('CALENDAR/Router'))

export const App: FunctionComponent = () => {
  const { user } = useContext(AuthContext)
  const { setisOpenModal } = useContext(ModalContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (user?.uid) {
      setisOpenModal(false)
      navigate('/home')
    } else {
      setisOpenModal(false)
      navigate('/')
    }
  }, [user?.uid])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<></>} />
      <Route
        path="/calendar/*"
        element={
          <Suspense fallback={<span>Loading...</span>}>
            <Calendar />
          </Suspense>
        }
      />
      <Route
        path="/weather/*"
        element={
          <Suspense fallback={<span>Loading...</span>}>
            <Weather />
          </Suspense>
        }
      />
    </Routes>
  )
}
