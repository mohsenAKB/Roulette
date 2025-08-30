import { FC, ReactNode } from 'react'
import Balance from './Balance'
import Deposit from './Deposit'

const Actions: FC = (): ReactNode => {
  return (
    <div className='flex items-center gap-2'>
      <Balance />
      <Deposit />
    </div>
  )
}

export default Actions