import { FunctionComponent } from 'react'

interface InputProps {
  label?: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'password'
  disable?: boolean
}

const Input: FunctionComponent<InputProps> = ({
  label,
  type = 'text',
  onChange,
  value,
  placeholder,disable
}) => {
  return (
    <div>
      {label && <p>{label}</p>}
      <input
        className=" w-2/3 mb-3 text-black rounded-xl py-1 mt-1 px-2 outline-none border-none focus:outline-red-300 "
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        security={type && '*'}
        placeholder={placeholder}
        disabled={disable}
      />
    </div>
  )
}

export default Input
