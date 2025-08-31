import { LinearProgress } from '@/shared'
import { FC, ReactNode } from 'react'

const Timer: FC = (): ReactNode => {
  return (
    <div className='flex flex-col items-center gap-2.5 leading-[29px]'>
      <div className='flex gap-1'>
        <span className='text-body-gray-900 text-[22px] font-semibold'>Rolling</span>
        <span className='text-title-gray text-[22px] font-semibold'>3.2s</span>
      </div>

      <div className='w-[664px] h-2'>
        <LinearProgress
          percent={30}
          isGlowing={false}
          className='bg-gray-800'
          progressClassName="bg-none bg-primary-600" />
      </div>
    </div>
  )
}

export default Timer