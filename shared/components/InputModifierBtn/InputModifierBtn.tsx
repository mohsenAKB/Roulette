import Link from "next/link";
import React, { FC, JSX } from "react";

interface InputModifierBtnProps {
  content: string;
}

const InputModifierBtn: FC<InputModifierBtnProps> = ({
  content,
}): JSX.Element => {
  return (
    <Link
      href="#"
      className="w-fit rounded-sm h-[32px] p-[8px] bg-[#FFFFFF0F] flex justify-center items-center "
    >
      <span className="text-title-gray text-[12px] font-medium ">
        {content}
      </span>
    </Link>
  );
};

export default InputModifierBtn;
