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
        <p className="mt-2.5 mb-1 text-[14px] font-semibold text-gray-500">
          If I win Increase by
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
          If I lose Increase by
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
    </div>
  );
};

export default SecondaryForm;
