import { FC, ReactNode } from 'react'

import { MenuItem as MenuItemProps } from "@/shared"
import Image from 'next/image'

interface Props extends MenuItemProps { }

const MenuItem: FC<Props> = ({
  title,
  icon,
  items
}): ReactNode => {


  const renderArrowIcon = (): ReactNode => {
    if (items) {
      return <Image
        src="\icons\chevron-down.svg"
        alt='arrow'
        width={20}
        height={20}
      />
    }

    return null
  }

  return <li className='flex gap-2 p-3'>
    <Image
      src={icon}
      alt={title}
      width={20}
      height={20}
    />
    <span>{title}</span>

    {renderArrowIcon()}
  </li>
}

export default MenuItem