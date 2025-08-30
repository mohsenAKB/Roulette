import { ActionMenu } from "@/shared";
import { FC, ReactNode } from "react";

const Roulette: FC = (): ReactNode => {
  return (
    <div>
      <div className="px-[48px] my-4">
        <ActionMenu />
      </div>
    </div>
  );
};

export default Roulette;
