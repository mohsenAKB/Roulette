"use client";

import { StairsSwiper } from "@/shared";
import { SwiperSlide } from "swiper/react";


const Cards = () => {

  const items = ["⭐", "⚔️", "🛡️", "🎯", "🔥", "💎", "🍀", "⚔️", "🛡️", "🎯", "🔥", "💎", "🍀", "⭐", "⚔️", "🛡️", "🎯", "🔥", "💎", "🍀", "⚔️", "🛡️", "🎯", "🔥", "💎", "🍀"];


  return <div>

    <StairsSwiper
      gap={16}
      stepPx={14}
      bandMult={1}
      stairsEffect
      autoplay={{ delay: 900, disableOnInteraction: false }}
      allowTouchMove={false}
      loop
      centeredSlides
      slidesPerView="auto"
    >
      {items.map((it, i) => (
        <SwiperSlide key={i} className="!h-auto">
          <div
            className="rounded-xl bg-gradient-to-b from-purple-800 to-purple-500 text-white text-2xl flex items-center justify-center shadow-lg w-[160px] h-[140px]"
          >
            {it}
          </div>
        </SwiperSlide>
      ))}
    </StairsSwiper>

  </div>
}

export default Cards