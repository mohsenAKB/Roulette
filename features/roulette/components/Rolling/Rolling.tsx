'use client';

import { FC, ReactNode } from 'react'

import Timer from './Timer/Timer'
import Cards from './Cards/Cards';

const Rolling: FC = (): ReactNode => {


  return (
    <section className='w-full flex flex-col gap-3.5'>
      <Timer />

      <Cards />
    </section>
  )
}

export default Rolling