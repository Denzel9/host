import classnames from 'classnames'
import { FunctionComponent } from 'react'
import { GiAbstract069 } from 'react-icons/gi'

const Logo: FunctionComponent<{ isDarkMode?: boolean; isShortLogo?: boolean, classNames?: string }> = ({
  isDarkMode,
  isShortLogo,
  classNames
}) => {
  return (
    <div className={classnames(' flex items-center gap-3 text-black',classNames, isDarkMode && 'text-white')}>
      <GiAbstract069 size={50} />
      {!isShortLogo && <span>MARS</span>}
    </div>
  )
}

export default Logo
