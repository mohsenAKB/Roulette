import React, { FC, ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

const Main: FC<MainProps> = ({
  children
}): ReactNode => {
  return (
    <section className='pt-[68px]'>
      {children}
    </section>
  )
}

export default Main