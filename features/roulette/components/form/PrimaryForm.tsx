import { InputModifierBtn } from "@/shared";
import Image from "next/image";
import React, { FC, JSX } from "react";

interface PrimaryFormProps {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}

const PrimaryForm: FC<PrimaryFormProps> = ({
  toggle,
  setToggle,
}): JSX.Element => {

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="mt-8 flex justify-center gap-[11px]">
      <div className="relative ">
        <Image
          alt=""
          src="/icons/coin.svg"
          width={20}
          height={20}
          className="absolute top-[15px] left-3.5"
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

      <div className="z-999">
        <div className="bg-gray-900 z-50 rounded-[8px] p-[8px] flex items-center w-[131px] h-[48px]  hover:bg-gray-800  transition-all duration-300 ease-out">
          <Image alt="" src="/icons/star.svg" width={20} height={20} />

          <p className=" pr-3 text-body-gray-900 text-[14px] font-semibold">
            Auto Bet
          </p>

          <input
            type="checkbox"
            id="switch"
            className="hidden peer"
            onClick={toggleHandler}
          />

          <label
            htmlFor="switch"
            className=" before:mt-[-1px] rounded-[14px] w-[23px] h-[14px] bg-[#78788052] before:content-[''] before:border-2  before:absolute before:w-[12px] before:h-[12px] before:bg-emphasis-300 before:rounded-full before:top-[2px]  before:transition-all checked:bg-blue-600 relative cursor-pointer
            
            peer-checked:bg-primary-500 peer-checked:before:translate-x-[10px] peer-checked:before:mt-[-1px] peer-checked:before:bg-white peer-checked:before:border-0
            "
          ></label>

        </div>

      </div>
      
    </div>
  );
};

export default PrimaryForm;
