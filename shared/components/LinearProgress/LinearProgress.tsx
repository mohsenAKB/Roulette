import React, { FC, ReactNode } from 'react'

export interface LinearProgressProps {
  percent?: number
}

const LinearProgress: FC<LinearProgressProps> = ({
  percent = 0
}): ReactNode => {
  return (
    <div className='relative w-full h-full'>
      <div className='absolute w-full h-full top-0 left-0 bg-title-gray/[0.06] rounded-[50px]'></div>

      <div
        className='absolute h-full top-0 left-0 flex flex-col rounded-b-l-[50px] rounded-t-[50px]'
        style={{ width: `${percent}%` }}>
        <div className='bg-primary-500 w-full h-full' />
        <div className='bg-primary-500 w-full h-full' />
      </div>
    </div>
  )
}

export default LinearProgress