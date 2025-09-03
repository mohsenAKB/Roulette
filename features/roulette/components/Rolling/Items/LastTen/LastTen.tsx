import Image from "next/image";
import React, { FC, JSX } from "react";

const LastTen: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-[14px] font-semibold text-emphasis-300 leading-[18px]">
        Last 10
      </p>
      <div className="flex gap-2">
        <div className="flex items-center justify-center  rounded-[8px] border-[0.5px] border-sun-700 w-8 h-8">
          <Image
            alt="icon"
            src="/images/play-gold-small.svg"
            width={16}
            height={16}
            className="object-cover h-4 "
          />
        </div>

        <div className="flex items-center justify-center  rounded-[8px] border-[0.5px] border-gray-500 w-8 h-8">
          <Image
            alt="icon"
            src="/images/test.png"
            width={16}
            height={16}
            unoptimized
            quality={100}
            className="object-cover h-4 "
          />
        </div>

        <div className="flex items-center justify-center  rounded-[8px] border-[0.5px] border-sun-700 w-8 h-8">
          <Image
            alt="icon"
            src="/images/play-gold-small.svg"
            width={16}
            height={16}
            className="object-cover h-4 "
          />
        </div>

        <div className="flex items-center justify-center  rounded-[8px] border-[0.5px] border-gray-500 w-8 h-8">
          <Image
            alt="icon"
            src="/images/play-silver-small.svg"
            width={16}
            height={16}
            className="object-cover h-4 "
          />
        </div>

        <div className="flex items-center justify-center  rounded-[8px] border-[0.5px] border-solid border-purple-800 w-8 h-8 bg-purple-700 ">
          <Image
            alt="icon"
            src="/images/playcs2-small.svg"
            width={16}
            height={16}
            className="object-cover h-4 "
          />
        </div>

        <div className="flex items-center justify-center  rounded-[8px] border-[0.5px] border-sun-700 w-8 h-8">
          <Image
            alt="icon"
            src="/images/play-gold-small.svg"
            width={16}
            height={16}
            className="object-cover h-4 "
          />
        </div>

        <div className="flex items-center justify-center  rounded-[8px] border-[0.5px] border-gray-500 w-8 h-8">
          <Image
            alt="icon"
            src="/images/play-silver-small.svg"
            width={16}
            height={16}
            className="object-cover h-4 "
          />
        </div>

        <div className="flex items-center justify-center  rounded-[8px] border-[0.5px] border-gray-500 w-8 h-8">
          <Image
            alt="icon"
            src="/images/play-silver-small.svg"
            width={16}
            height={16}
            className="object-cover h-4 "
          />
        </div>

        <div className="flex items-center justify-center  rounded-[8px] border-[0.5px] border-sun-700 w-8 h-8">
          <Image
            alt="icon"
            src="/images/play-gold-small.svg"
            width={16}
            height={16}
            className="object-cover h-4 "
          />
        </div>

        <div className="flex items-center justify-center  rounded-[8px] border-[0.5px] border-gray-500 w-8 h-8 bg-[linear-gradient(270deg,#090C1A_11.72%,rgba(9,12,27,0)_113.51%)]">
          <Image
            alt="icon"
            src="/images/play-silver-small.svg"
            width={16}
            height={16}
            className="object-cover h-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default LastTen;
