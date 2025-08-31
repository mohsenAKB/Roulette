import cn from '@/shared/utility/cn'
import React, { FC, ReactNode } from 'react'

export interface LinearProgressProps {
  percent?: number,
  isGlowing?: boolean
}

const LinearProgress: FC<LinearProgressProps> = ({
  percent = 0,
  isGlowing = true
}): ReactNode => {
  return (
    <div className='relative w-full h-full rounded-[50px]'>
      <div className='absolute w-full h-full top-0 left-0 bg-title-gray/[0.06] rounded-[50px]'></div>

      <div
        className='absolute h-full top-0 left-0 flex flex-col'
        style={{ width: `${percent}%` }}>
        <div className={cn(
          'bg-[linear-gradient(90deg,var(--color-primary-500)_28.12%,var(--color-primary-400)_100%)] w-full h-full  rounded-bl-[50px] rounded-tl-[50px] border-r-2',
          { 'border-primary-100': isGlowing }
        )} />

        {isGlowing && <div className='bg-fill-gray-950 w-full h-1/2 absolute bottom-0 left-0 opacity-20 border-t-[0.5px] border-t-[var(--Border-Color-BorderPrimary100)]' />}
      </div>
    </div>
  )
}

export default LinearProgress