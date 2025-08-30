import Image from "next/image";
import React, { FC, JSX } from "react";

const EmailInput: FC = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col">
      <h3 className="text-body-gray-900 text-[14px] font-semibold mb-[8px]">
        Email
      </h3>

      <div className="w-full flex relative">
        <Image
          alt="email-icon"
          src="/icons/email.svg"
          width={20}
          height={20}
          className="absolute top-[15px] left-3"
        />
        <input
          type="text"
          placeholder="cs2skin@example.com"
          className="bg-surface w-[280px] h-[48px] py-1.5 px-3.5 rounded-[8px] placeholder:font-bold
          placeholder:text-gray-500  pl-10
          "
        />
        <Image
          alt="email-icon"
          src="/icons/send.svg"
          width={20}
          height={20}
          className="absolute top-[15px] right-3 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default EmailInput;
