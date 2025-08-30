import { FC, ReactNode } from 'react'

import { MenuItem as MenuItemProps } from "@/shared"
import Image from 'next/image'
import ArrowIcon from './ArrowIcon'

interface Props extends MenuItemProps { }

const MenuItem: FC<Props> = ({
  title,
  icon,
  items
}): ReactNode => {


  const renderArrowIcon = (): ReactNode => {
    if (items) {

    }

    return null
  }

  return <li className='flex gap-2 p-3 hover:cursor-pointer hover:text-title-gray transition-colors duration-200 ease-in-out'>
    <Image
      src={icon}
      alt={title}
      width={20}
      height={20}
    />
    <span className='font-semibold text-sm'>{title}</span>

    {items && <ArrowIcon className="group-hover:fill-title-gray" />}
  </li>
}

export default MenuItem