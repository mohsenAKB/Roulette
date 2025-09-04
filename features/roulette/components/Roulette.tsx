"use client";
import { ActionMenu, Card } from "@/shared";
import Image from "next/image";
import { FC, ReactNode, useState } from "react";
import Rolling from "./Rolling/Rolling";
import PrimaryForm from "./form/PrimaryForm";
import SecondaryForm from "./form/SecondaryForm";

const Roulette: FC = (): ReactNode => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <Image
        src="/images/background-image.png"
        alt="background"
        fill
        className="max-h-[788px] z-0 object-cover"
      />

      <section className="flex flex-col items-center z-1 relative">
        <div className="w-full px-[48px] my-4">
          <ActionMenu />
        </div>

        <Rolling />

        <PrimaryForm toggle={toggle} setToggle={setToggle} />

        {toggle && <SecondaryForm />}
        <div className="mt-[32] flex items-center gap-6 mb-[57px]">
          <Card
            title="Play Gold"
            description="Win 2X"
            imgSrc="/images/play-gold.svg"
            className="border-[2px] border-solid [border-image-source:radial-gradient(50%_100%_at_50%_0%,#FAA300_0%,rgba(250,163,0,0)_100%)] [border-image-slice:1]
            hover:text-title-gray hover:bg-[radial-gradient(50%_100.32%_at_50%_0%,_#634202_0%,_#0C111C_100%)] 
            "
          />

          <Card
            title="Play CS2"
            description="Win 14X"
            imgSrc="/images/play-cs2.svg"
            classNameTwo="text-title-gray"
            className=" bg-gray-900 hover:bg-[radial-gradient(50%_100.32%_at_50%_0%,_#6325C8_0%,_#1A0933_100%)]   border-2 border-solid
                      [border-image-source:radial-gradient(50%_100%_at_50%_0%,_rgba(255,255,255,0.5)_0%,_rgba(255,255,255,0)_100%)]
                      [border-image-slice:1]"
          />

          <Card
            title="Play Silver"
            description="Win 2X"
            imgSrc="/images/play-silver.svg"
            className="border-[2px] border-solid [border-image-source:radial-gradient(50%_100%_at_50%_0%,#7F8D9F_0%,rgba(127,141,159,0)_100%)] [border-image-slice:1]
            hover:bg-[radial-gradient(50%_100.32%_at_50%_0%,_#475566_0%,_#0C111C_100%)]
            "
          />
        </div>
      </section>
    </>
  );
};

export default Roulette;
