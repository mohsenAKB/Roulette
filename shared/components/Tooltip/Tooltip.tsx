import Image from "next/image";
import React, { FC, JSX } from "react";

interface TooltipProps {
  text: string;
}

const Tooltip: FC<TooltipProps> = ({ text }): JSX.Element => {
  return (
    <div className="flex items-center ml-1 cursor-pointer relative group">
      <div className="w-max bg-gray-800 rounded-[4px] flex justify-center items-center py-1.5 px-2 absolute top-[-30px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-999">
        <p className="text-[12px] font-normal text-emphasis-300">{text}</p>
      </div>

      <Image alt="tooltip" src="/icons/tooltip.svg" width={16} height={16} />
    </div>
  );
};

export default Tooltip;
