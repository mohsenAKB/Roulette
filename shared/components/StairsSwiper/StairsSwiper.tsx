"use client";

import React, {
  Children,
  ReactElement,
  ReactNode,
  forwardRef,
  isValidElement,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";
import type SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Swiper < v9 → SwiperCore.use([Autoplay])
// Swiper >= v9 → use modules={[Autoplay]}
// We support both here
import SwiperCoreNS from "swiper";
(SwiperCoreNS as any).use?.([Autoplay]);

type AnyProps = Record<string, any>;
const isSlideEl = (el: ReactElement) => {
  const t: any = el.type;
  return t === SwiperSlide || t?.displayName === "SwiperSlide" || t?.name === "SwiperSlide";
};

export type StairsSwiperRef = {
  swiper: SwiperCore | null;
  armStopAt(i: number): void;
};

export type StairsSwiperProps = Omit<SwiperProps, "children"> & {
  gap?: number;
  stepPx?: number;
  bandMult?: number;
  stairsEffect?: boolean;
  wrapSlides?: boolean;
  stopWhenCenteredIndex?: number | null;
  children?: ReactNode;
};

const StairsSwiper = forwardRef<StairsSwiperRef, StairsSwiperProps>(function StairsSwiper(
  {
    gap = 16,
    stepPx = 14,
    bandMult = 1.0,
    stairsEffect = true,
    wrapSlides = true,
    stopWhenCenteredIndex = null,

    loop = true,
    centeredSlides = true,
    slidesPerView = "auto",
    watchSlidesProgress = true,
    allowTouchMove = false,
    autoplay = { delay: 900, disableOnInteraction: false },
    speed = 380,

    onSwiper,
    onProgress,
    onSlideChangeTransitionEnd,

    className,
    children,
    ...rest
  },
  ref
) {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [armedIndex, setArmedIndex] = useState<number | null>(stopWhenCenteredIndex);

  useImperativeHandle(ref, () => ({
    swiper: swiperRef.current,
    armStopAt: (i: number) => setArmedIndex(i),
  }));

  // ensure slides are proper SwiperSlide
  const slides = useMemo(() => {
    return Children.toArray(children).map((child, i) => {
      if (isValidElement(child) && isSlideEl(child as ReactElement)) {
        if (!wrapSlides) return child;

        const prev: AnyProps = (child as any).props ?? {};
        const style: React.CSSProperties = { ...(prev.style ?? {}), width: "auto" };
        const cls = `${prev.className ?? ""} !w-auto !h-auto flex-none`;
        return React.cloneElement(child as ReactElement, {
          key: child.key ?? i,
          style,
          className: cls,
        } as any);
      }

      if (wrapSlides) {
        return (
          <SwiperSlide key={i} style={{ width: "auto" }} className="!w-auto !h-auto flex-none">
            {child}
          </SwiperSlide>
        );
      }

      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "[StairsSwiper] wrapSlides=false but child is not <SwiperSlide>. It may break Swiper."
        );
      }
      return null;
    });
  }, [children, wrapSlides]);

  // stairs effect
  const handleProgress: NonNullable<SwiperProps["onProgress"]> = (swiper, progress) => {
    if (stairsEffect) {
      const firstSlide = swiper.slides[0] as HTMLElement | undefined;
      const cardW = firstSlide?.offsetWidth ?? 220;
      const BAND_PX = (cardW + gap) * bandMult;

      swiper.slides.forEach((el: HTMLElement) => {
        // debugger
        const p = (el as any).progress as number;
        const dx = Math.abs(p) * (cardW + gap);
        let rank = Math.floor(dx / BAND_PX);
        if (rank === 0 && Math.abs(p) > 0.001) rank = 1;
        const y = (rank * (rank + 1) / 2) * stepPx;
        // const y = rank * stepPx + (rank - 1) * stepPx;
        el.style.transform = `translateY(${y}px)`;
        // el.style.transform = `translateY(${y}px)`;
        el.style.transition = "transform 220ms ease";
      });
    }
    onProgress?.(swiper, progress);
  };

  const handleSlideChangeEnd: NonNullable<SwiperProps["onSlideChangeTransitionEnd"]> = (
    swiper
  ) => {
    if (armedIndex !== null && swiper.realIndex === armedIndex) {
      swiper.autoplay?.stop();
      setArmedIndex(null);
    }
    onSlideChangeTransitionEnd?.(swiper);
  };

  return (
    <div className={`w-full ${className ?? ""}`}>
      <Swiper
        modules={[Autoplay]}
        onSwiper={(s) => {
          swiperRef.current = s as SwiperCore;
          onSwiper?.(s);
        }}
        loop={loop}
        centeredSlides={centeredSlides}
        slidesPerView={slidesPerView}
        spaceBetween={gap}
        watchSlidesProgress={watchSlidesProgress}
        speed={speed}
        allowTouchMove={allowTouchMove}
        autoplay={autoplay}
        onProgress={handleProgress}
        onSlideChangeTransitionEnd={handleSlideChangeEnd}
        {...rest}
        className="w-full h-full"
      >
        {slides}
      </Swiper>
    </div>
  );
});

export default StairsSwiper;
