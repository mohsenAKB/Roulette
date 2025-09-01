import React, { FC, JSX } from "react";
import LastTen from "./LastTen/LastTen";
import LastHundred from "./LastHundred/LastHundred";

const Items: FC = (): JSX.Element => {
  return (
    <div className="flex w-full justify-center gap-8">
      <LastTen />
      <LastHundred />
    </div>
  );
};

export default Items;
