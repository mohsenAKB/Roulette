import React, { FC, ReactNode } from 'react'

import { LayoutProps } from '@/shared/types/layout'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main'

const Layout: FC<LayoutProps> = ({
  children
}): ReactNode => {
  return (
    <main className='w-full h-full bg-surface text-emphasis-300'>
      <Header />

      <Main>
        {children}
      </Main>

      <Footer />
    </main>
  )
}

export default Layout