import { FunctionComponent, useContext } from 'react'
import DefaultButton from '../components/buttons/DefaultButton'
import { ModalContext } from '../components/layout/Layout'

const Home: FunctionComponent = () => {
  const { setisOpenModal } = useContext(ModalContext)
  return (
    <div className=" w-full h-screen bg-bg bg-center bg-cover bg-no-repeat flex justify-center items-center">
      <div className=" p-5 flex flex-col items-center justify-between w-full">
        <div className=" p-10 flex flex-col items-center gap-5 bg-zinc-800 w-2/3 rounded-xl bg-opacity-30">
          <h1 className=" text-5xl text-center font-black">
            Simple ways to work on your own or in a team
          </h1>
          <h2 className=" w-2/3 text-center text-xl">
            You can work together with your team anywhere and anytime. No need to go to the office
            and work gets done faster.
          </h2>
          <div className=" flex gap-5">
            <DefaultButton onClick={() => setisOpenModal(true)} text="Try now" />
            <DefaultButton text="More" />
          </div>
        </div>
        <p className=" text-white/50 absolute bottom-10 text-xs">
          Most people spend some time thinking that the right thing is to work in a team instead of
          working alone; but have you ever thought which is better? Let’s find out together.
        </p>
      </div>
    </div>
  )
}

export default Home
