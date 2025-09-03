'use client';

import { FC, ReactNode, useEffect, useRef, useState } from 'react'

import Timer from './Timer/Timer'
import Cards from './Cards/Cards';
import { StairsSwiperRef } from '@/shared';
import Items from './Items/Items';

const Rolling: FC = (): ReactNode => {

  const PROGRESS_TOTAL_TIME = 20000
  const ROLLING_TOTAL_TIME = 5000

  const [remainingTime, setRemainingTime] = useState<number>(PROGRESS_TOTAL_TIME)
  const [rollingAutoplay, setRollingAutoplay] = useState<boolean>(false)

  const remainingTimeRef = useRef(PROGRESS_TOTAL_TIME)
  const sliderRef = useRef<StairsSwiperRef>(null)

  // timeouts
  const progressTimeout = useRef<NodeJS.Timeout | null>(null)
  const mainRollingTimeout = useRef<NodeJS.Timeout | null>(null)
  const delayRollingTimeout = useRef<NodeJS.Timeout | null>(null)

  // progress runner
  const runProgressTimer = (): void => {
    progressTimeout.current = setInterval(() => {

      remainingTimeRef.current -= 100

      // stop progress and run rolling
      if (remainingTimeRef.current < 0) {
        progressTimeout.current && clearInterval(progressTimeout.current!)
        sliderRef.current?.swiper?.autoplay?.stop()

        runRollingTimer()
        setRemainingTime(PROGRESS_TOTAL_TIME)
        remainingTimeRef.current = PROGRESS_TOTAL_TIME

        progressTimeout.current && clearInterval(progressTimeout.current)
        return
      }
      setRemainingTime(remainingTimeRef.current)
    }, 100)
  }

  // rolling runner
  const runRollingTimer = (): void => {
    setRollingAutoplay(true)
    sliderRef.current?.swiper?.autoplay.start()

    mainRollingTimeout.current = setTimeout(() => {
      sliderRef.current?.swiper?.autoplay.stop()

      // a delay for stopping rolling and run progress
      delayRollingTimeout.current = setTimeout(() => {
        setRollingAutoplay(false)

        runProgressTimer()

        clearTimeout(mainRollingTimeout.current!)
      }, 500)

      clearTimeout(mainRollingTimeout.current!)
    }, ROLLING_TOTAL_TIME)
  }

  useEffect(() => {
    runRollingTimer()

    return () => {
      progressTimeout.current && clearInterval(progressTimeout.current)
    }
  }, [])

  return (
    <section className="w-full flex flex-col gap-3.5">
      <Timer
        time={remainingTime}
        total={PROGRESS_TOTAL_TIME} />

      <Cards
        slideSpeed={200}
        slideDelay={200}
        autoplay={rollingAutoplay}
        ref={sliderRef} />

      <Items />
    </section>
  );
}

export default Rolling