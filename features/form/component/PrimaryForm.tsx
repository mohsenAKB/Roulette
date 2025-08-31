import { InputModifierBtn } from "@/shared";
import Image from "next/image";
import React, { FC, JSX } from "react";

const PrimaryForm: FC = (): JSX.Element => {
  return (
    <div className="my-8 flex justify-center gap-[11px]">
      <div className="relative ">
        <Image
          alt=""
          src="/icons/coin.svg"
          width={20}
          height={20}
          className="absolute top-4 left-3.5"
        />

        <input
          type="text"
          placeholder="Enter amount..."
          className="w-[760px] h-[48px] bg-gray-900 rounded-[8px] pl-10 placeholder:text-gray-500 placeholder:font-normal placeholder:text-[14px]
          hover:bg-gray-800  transition-all duration-300 ease-out
          "
        />

        <div className="flex  items-center gap-2 absolute right-2 top-2">
          <InputModifierBtn content="+0.1" />
          <InputModifierBtn content="1/2" />
          <InputModifierBtn content="+1" />
          <InputModifierBtn content="+10" />
          <InputModifierBtn content="+100" />
          <InputModifierBtn content="2X" />
          <InputModifierBtn content="Max" />
        </div>
      </div>
      <div>
        <div className="bg-gray-900 rounded-[8px] p-[8px] flex items-center w-[131px] h-[48px]  hover:bg-gray-800  transition-all duration-300 ease-out">
          <Image alt="" src="/icons/star.svg" width={20} height={20} />

          <p className="pl-1 pr-3 text-body-gray-900 text-[14px] font-semibold">
            Auto Bet
          </p>

          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default PrimaryForm;
