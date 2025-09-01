"use client";

import { StairsSwiper } from "@/shared";
import { SwiperSlide } from "swiper/react";
import OptionCard from "./OptionCard/OptionCard";
import Image from "next/image";


const Cards = () => {

  const items = [
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

    <OptionCard type="cs" />,

  ]


  return <div className="min-h-[354px] flex flex-col items-center gap-3">
    <Image
      width={24}
      height={24}
      src="/icons/Polygon.svg"
      alt="arrow"
    />

    <StairsSwiper
      gap={12}
      stepPx={10}
      bandMult={1}
      stairsEffect
      autoplay={{ delay: 900, disableOnInteraction: false }}
      allowTouchMove={false}
      loop
      centeredSlides
      slidesPerView="auto"
      className="[&_.swiper]:min-h-[330px]"
    >
      {items.map((item, i) => (
        <SwiperSlide key={i} className="!h-auto">
          {item}
        </SwiperSlide>
      ))}
    </StairsSwiper>

  </div>
}

export default Cards