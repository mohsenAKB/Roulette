import { FC, ReactNode } from 'react'
import Balance from './Balance'
import Deposit from './Deposit'
import User from './User/User'

const Actions: FC = (): ReactNode => {
  return (
    <div className='flex items-center gap-2'>
      <Balance />
      <Deposit />
      <User />
    </div>
  )
}

export default Actions