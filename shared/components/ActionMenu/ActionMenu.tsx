import Image from "next/image";
import Link from "next/link";
import React, { FC, JSX } from "react";

const ActionMenu: FC = (): JSX.Element => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center ">
        <Link href="#" className="flex gap-2 items-centers">
          <Image
            alt="Leave icon"
            src="/icons/arrow-left.svg"
            width={20}
            height={20}
          />
          <p className="text-emphasis-300 text-[14px] font-semibold">Leave</p>
        </Link>
      </div>

      <div className="flex gap-3">
        <Link href="#" className="flex gap-2 items-centers">
          <Image
            alt="Leave icon"
            src="/icons/volume-high.svg"
            width={20}
            height={20}
          />
        </Link>

        <Link href="#" className="flex gap-2 items-centers">
          <Image
            alt="Leave icon"
            src="/icons/help-circle.svg"
            width={20}
            height={20}
          />
        </Link>

        <Link href="#" className="flex gap-2 items-centers">
          <Image
            alt="Leave icon"
            src="/icons/shield-check.svg"
            width={20}
            height={20}
          />
          <p className="text-emphasis-300 text-[14px] font-semibold">
            Fairness
          </p>
        </Link>

        <Link href="#" className="flex gap-2 items-centers">
          <Image
            alt="Leave icon"
            src="/icons/share.svg"
            width={20}
            height={20}
          />
          <p className="text-emphasis-300 text-[14px] font-semibold">Share</p>
        </Link>
      </div>
    </div>
  );
};

export default ActionMenu;
