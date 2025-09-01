import { PrimaryButton, Tooltip } from "@/shared";
import Image from "next/image";
import React, { FC, JSX } from "react";

const SecondaryForm: FC = (): JSX.Element => {
  return (
    <div className="flex gap-2.5">
      <div className="relative">
        <p className="mt-2.5 mb-1 text-[14px] font-semibold text-gray-500">
          Bet base amount
        </p>
        <input
          type="text"
          placeholder="0.00"
          className="relative pl-12 py-1.5 px-3.5 bg-gray-900 rounded-[8px] w-[182px] h-[48px]  placeholder:text-gray-500 placeholder:font-normal placeholder:text-[14px]"
        />
        <Image
          alt=""
          src="/icons/money.svg"
          width={20}
          height={20}
          className="absolute top-13 left-4 "
        />
      </div>

      <div className="relative">
        <p className="mt-2.5 mb-1 text-[14px] font-semibold text-gray-500">
          Stop if bet is more than
        </p>
        <input
          type="text"
          placeholder="0.00"
          className="relative pl-12 py-1.5 px-3.5 bg-gray-900 rounded-[8px] w-[182px] h-[48px]  placeholder:text-gray-500 placeholder:font-normal placeholder:text-[14px]"
        />
        <Image
          alt=""
          src="/icons/money.svg"
          width={20}
          height={20}
          className="absolute top-13 left-4 "
        />
      </div>

      <div className="relative">
        <p className="mt-2.5 mb-1 text-[14px] font-semibold text-gray-500 flex">
          If I win Increase by
          <Tooltip text="Tooltip" />
        </p>
        <input
          type="text"
          placeholder="0.00"
          className="relative pl-12 py-1.5 px-3.5 bg-gray-900 rounded-[8px] w-[182px] h-[48px]  placeholder:text-gray-500 placeholder:font-normal placeholder:text-[14px]"
        />
        <Image
          alt=""
          src="/icons/money.svg"
          width={20}
          height={20}
          className="absolute top-13 left-4 "
        />
      </div>

      <div className="relative">
        <p className="mt-2.5 mb-1 text-[14px] font-semibold text-gray-500 flex">
          If I lose Increase by
          <Tooltip text="Tooltip" />
        </p>
        <input
          type="text"
          placeholder="0.00"
          className="relative pl-12 py-1.5 px-3.5 bg-gray-900 rounded-[8px] w-[182px] h-[48px]  placeholder:text-gray-500 placeholder:font-normal placeholder:text-[14px]"
        />
        <Image
          alt=""
          src="/icons/money.svg"
          width={20}
          height={20}
          className="absolute top-13 left-4 "
        />
      </div>

      <PrimaryButton
        className="w-[131px] h-[48px] p-3 mt-8 ml-1 
             bg-[radial-gradient(42.35%_100%_at_50%_0%,_#9658FB_0%,_#7D2EFA_100%)]"
      >
        Place Bet
      </PrimaryButton>
    </div>
  );
};

export default SecondaryForm;
