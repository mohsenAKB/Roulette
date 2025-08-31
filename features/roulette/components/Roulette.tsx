import { PrimaryForm } from "@/features/form";
import { ActionMenu } from "@/shared";
import Image from "next/image";
import { FC, ReactNode } from "react";
import Rolling from "./Rolling/Rolling";

const Roulette: FC = (): ReactNode => {
  return (
    // TODO: should remove min height
    <section className="min-h-[1000px] flex flex-col items-center">

      <Image
        src="/images/background-image.png"
        alt="background"
        fill
        className="max-h-[788px] z-0 object-cover"
      />

      <div className="w-full px-[48px] my-4">
        <ActionMenu />
      </div>

      <Rolling />

      <PrimaryForm />
    </section>
  );
};

export default Roulette;
