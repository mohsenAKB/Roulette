import React, { FC, ReactNode } from 'react'
import Actions from './Actions/Actions'
import Logo from './Logo'
import Menu from './Menu/Menu'

const Header: FC = (): ReactNode => {
  return (
    <header className='fixed w-full left-0 top-0 h-[68px] backdrop-blur-[50px] flex items-center justify-between px-5 z-[100] bg-[linear-gradient(180deg,rgba(var(--color-surface-100-rgb),0.2)_0%,rgba(var(--color-surface-100-rgb),0)_100%)]'>
      <div className='flex items-center gap-2'>
        <Logo />
        <Menu />
      </div>

      <Actions />
    </header>
  )
}

export default Header