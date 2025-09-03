import React, { FC, ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

const Main: FC<MainProps> = ({
  children
}): ReactNode => {
  return (
    <section className='pt-[68px] mx-auto w-full max-w-[1140px]'>
      {children}
    </section>
  )
}

export default Main