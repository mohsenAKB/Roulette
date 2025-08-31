"use client";
import { PrimaryForm } from "@/features/roulette/components/form";
import { ActionMenu } from "@/shared";
import Image from "next/image";
import { FC, ReactNode, useState } from "react";
import Rolling from "./Rolling/Rolling";

const Roulette: FC = (): ReactNode => {
  const [toggle, setToggle] = useState<boolean>(false);
  console.log(toggle, "toggle");

  return (
    <>
      <Image
        src="/images/background-image.png"
        alt="background"
        fill
        className="max-h-[788px] z-0 object-cover"
      />
      {/* TODO: should remove min height */}
      <section className="min-h-[1000px] flex flex-col items-center z-1 relative">
        <div className="w-full px-[48px] my-4">
          <ActionMenu />
        </div>

        <Rolling />

        <PrimaryForm toggle={toggle} setToggle={setToggle} />
      </section>
    </>
  );
};

export default Roulette;
