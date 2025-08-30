import React, { FC, ReactNode } from 'react'
import UserInformation from './UserInformation'
import Logo from './Logo'
import Menu from './Menu/Menu'

const Header: FC = (): ReactNode => {
  return (
    <header className='fixed w-full left-0 top-0 h-[68px] backdrop-blur-[50px] flex items-center justify-between px-5'>
      <div className='flex items-center gap-2'>
        <Logo />
        <Menu />
      </div>

      <UserInformation />
    </header>
  )
}

export default Header