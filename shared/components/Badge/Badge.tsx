import React, { FC, ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
}

const Badge: FC<BadgeProps> = ({
  children
}): ReactNode => {
  return (
    <div className='relative'>

      <div className='absolute w-2.5 h-2.5 bg-blood-500 rounded-full top-[1px] left-[35px]'></div>

      {children}
    </div>
  )
}

export default Badge