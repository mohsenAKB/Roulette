'use client';

import { FC, ReactNode, Ref, useEffect, useRef, useState } from 'react'

import Timer from './Timer/Timer'
import Cards from './Cards/Cards';
import { StairsSwiperRef } from '@/shared';

const Rolling: FC = (): ReactNode => {

  const TIME = 15000

  const [remainingTime, setRemainingTime] = useState(TIME)
  const [slideDelay, setSlideDelay] = useState(0)

  const remainingTimeRef = useRef(TIME)
  const sliderRef = useRef<StairsSwiperRef>(null)

  useEffect(() => {
    let timerRef: NodeJS.Timeout | null = null

    // progress timer
    const runTimer = (): void => {
      timerRef = setInterval(() => {

        remainingTimeRef.current -= 100

        if (remainingTimeRef.current < 0) {
          timerRef && clearInterval(timerRef)
          sliderRef.current?.swiper?.autoplay?.stop()
          return
        }

        // slow down delay at last 2s
        if (remainingTimeRef.current < 3000) {
          setSlideDelay(400)
        } else if (remainingTimeRef.current < 6000) {
          // slow down delay at last 2s
          setSlideDelay(250)
        }

        setRemainingTime(remainingTimeRef.current)
      }, 100)
    }

    runTimer()

    return () => {
      timerRef && clearInterval(timerRef)
    }
  }, [])

  return (
    <section className='w-full flex flex-col gap-3.5'>
      <Timer time={remainingTime} total={TIME} />

      <Cards slideSpeed={300} slideDelay={slideDelay} ref={sliderRef} />
    </section>
  )
}

export default Rolling