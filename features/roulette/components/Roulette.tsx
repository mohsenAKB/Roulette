import { PrimaryForm } from "@/features/form";
import { ActionMenu } from "@/shared";
import Image from "next/image";
import { FC, ReactNode } from "react";

const Roulette: FC = (): ReactNode => {
  return (
    // TODO: should remove min height
    <section className="min-h-[1000px]">

      <Image
        src="/images/background-image.png"
        alt="background"
        fill
        className="max-h-[788px] z-0 object-cover"
      />

      <div className="px-[48px] my-4">
        <ActionMenu />
        <PrimaryForm />
      </div>
    </section>
  );
};

export default Roulette;
