import cn from "@/shared/utility/cn";
import Image from "next/image";
import React, { FC, JSX } from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  className?: string;
}

const Card: FC<CardProps> = ({
  description,
  imgSrc,
  title,
  className,
}): JSX.Element => {
  return (
    <div className="flex flex-col gap-6">
      <div
        className={cn(
          "w-[380px] h-[96px] rounded-[12px] bg-gray-900 p-[24px] flex justify-between items-center",
          className
        )}
      >
        <div className="flex gap-4 items-center">
          <Image alt="coin" src={imgSrc} width={48} height={48} />
          <p className="text-[22px] font-normal text-emphasis-300">{title}</p>
        </div>
        <p className="text-[18px] font-semibold text-emphasis-300">
          {description}
        </p>
      </div>

      <div className="w-[380px] h-[315px] rounded-[16px]">
        <div className="w-full h-[50px] rounded-tl-[16px] rounded-tr-[16px] bg-gray-800 flex justify-between items-center px-[16px]">
          <p className="text-[18px] font-semibold text-gray-500 ">4 Player</p>

          <div className="flex gap-2 items-center">
            <Image alt="coin" src="/icons/coin.svg" width={20} height={20} />
            <p className="text-title-gray text-[14px] font-normal">75.00</p>
          </div>
        </div>

        <div className="flex flex-col px-[16px] py-[14px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <Image
                alt="avatar"
                src="/images/avatar-1.svg"
                width={40}
                height={40}
              />
              <p className="text-emphasis-300 text-[18px] font-semibold ">
                Mamdism Mb
              </p>
              <Image alt="icon" src="/icons/icon.svg" width={16} height={16} />
            </div>

            <div className="flex gap-2 items-center">
              <Image alt="coin" src="/icons/coin.svg" width={20} height={20} />
              <p className="text-title-gray text-[14px] font-normal">43.00</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-[16px] py-[14px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <Image
                alt="avatar"
                src="/images/avatar-2.svg"
                width={40}
                height={40}
              />
              <p className="text-emphasis-300 text-[18px] font-semibold ">
                Reza iop
              </p>
              <Image alt="icon" src="/icons/icon.svg" width={16} height={16} />
            </div>

            <div className="flex gap-2 items-center">
              <Image alt="coin" src="/icons/coin.svg" width={20} height={20} />
              <p className="text-title-gray text-[14px] font-normal">43.00</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-[16px] py-[14px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <Image
                alt="avatar"
                src="/images/avatar-3.svg"
                width={40}
                height={40}
              />
              <p className="text-emphasis-300 text-[18px] font-semibold ">
                Sarah Galler
              </p>
              <Image alt="icon" src="/icons/icon.svg" width={16} height={16} />
            </div>

            <div className="flex gap-2 items-center">
              <Image alt="coin" src="/icons/coin.svg" width={20} height={20} />
              <p className="text-title-gray text-[14px] font-normal">43.00</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-[16px] py-[14px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <Image
                alt="avatar"
                src="/images/avatar-4.svg"
                width={40}
                height={40}
              />
              <p className="text-emphasis-300 text-[18px] font-semibold ">
                Monica Woodly
              </p>
              <Image alt="icon" src="/icons/icon.svg" width={16} height={16} />
            </div>

            <div className="flex gap-2 items-center">
              <Image alt="coin" src="/icons/coin.svg" width={20} height={20} />
              <p className="text-title-gray text-[14px] font-normal">43.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
