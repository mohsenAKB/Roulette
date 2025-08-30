import React, { FC, ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

const Main: FC<MainProps> = ({
  children
}): ReactNode => {
  return (
    <section>
      {children}
    </section>
  )
}

export default Main