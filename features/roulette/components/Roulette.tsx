"use client";
import { ActionMenu, Card } from "@/shared";
import Image from "next/image";
import { FC, ReactNode, useState } from "react";
import Rolling from "./Rolling/Rolling";
import PrimaryForm from "./form/PrimaryForm";
import SecondaryForm from "./form/SecondaryForm";

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

        {toggle && <SecondaryForm />}
        <div className="mt-[23px] flex items-center gap-6 mb-[57px]">
          <Card
            title="Play Gold"
            description="Win 2X"
            imgSrc="/images/play-gold.svg"
          />

          <Card
            title="Play Gold"
            description="Win 2X"
            imgSrc="/images/play-gold.svg"
          />

          <Card
            title="Play Gold"
            description="Win 2X"
            imgSrc="/images/play-gold.svg"
          />
        </div>
      </section>
    </>
  );
};

export default Roulette;
