import { FunctionComponent } from 'react'

interface DefaultButtonProps {
  text: string
  link?: string
  onClick?: () => void
}

const DefaultButton: FunctionComponent<DefaultButtonProps> = ({ text, link,onClick }) => {
  return (
    <button onClick={onClick} className=" max-h-10 px-4 py-2 text-white bg-black w-fit rounded-xl duration-300 hover:bg-black/50 active:bg-black/80">
      {text}
    </button>
  )
}

export default DefaultButton
