"use client";

import { StairsSwiper, StairsSwiperRef } from "@/shared";
import { SwiperSlide } from "swiper/react";
import OptionCard from "./OptionCard/OptionCard";
import Image from "next/image";
import { forwardRef } from "react";

type CardsProps = {
  slideSpeed: number;
  slideDelay?: number;
  autoplay?: boolean
};

const Cards = forwardRef<StairsSwiperRef, CardsProps>(function Cards(
  {
    autoplay,
    slideSpeed,
    slideDelay = 900
  },
  ref
) {
  const items = [
    <OptionCard type="cs" />,
    <OptionCard type="gold" />,
    <OptionCard type="silver" />,
    <OptionCard type="gold" />,
    <OptionCard type="silver" />,
    <OptionCard type="cs" />,
    <OptionCard type="gold" />,
    <OptionCard type="silver" />,
    <OptionCard type="gold" />,
    <OptionCard type="silver" />,
    <OptionCard type="cs" />,
    <OptionCard type="gold" />,
    <OptionCard type="silver" />,
    <OptionCard type="gold" />,
    <OptionCard type="silver" />,
    <OptionCard type="cs" />,
    <OptionCard type="gold" />,
    <OptionCard type="silver" />,
    <OptionCard type="gold" />,
    <OptionCard type="silver" />,
  ];

  return (
    <div className="min-h-[354px] flex flex-col items-center gap-3">
      <Image width={24} height={24} src="/icons/Polygon.svg" alt="arrow" />

      <StairsSwiper
        gap={12}
        stepPx={10}
        bandMult={1}
        stairsEffect
        speed={slideSpeed}
        autoplay={autoplay
          ? { delay: slideDelay, disableOnInteraction: false }
          : undefined
        }
        allowTouchMove={false}
        loop
        centeredSlides
        slidesPerView="auto"
        className="[&_.swiper]:min-h-[330px]"
        ref={ref}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className="!h-auto">
            {item}
          </SwiperSlide>
        ))}
      </StairsSwiper>
    </div>
  );
});

export default Cards;
