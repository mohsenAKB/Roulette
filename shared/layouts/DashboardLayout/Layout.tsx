import React, { FC, ReactNode } from 'react'

import { LayoutProps } from '@/shared/types/layout'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

const Layout: FC<LayoutProps> = ({
  children
}): ReactNode => {
  return (
    <main>
      <Header />

      <Main>
        {children}
      </Main>

      <Footer />
    </main>
  )
}

export default Layout