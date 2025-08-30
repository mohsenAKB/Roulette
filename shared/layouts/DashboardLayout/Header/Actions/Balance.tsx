import Image from "next/image"
import { FC, ReactNode } from "react"
import ArrowIcon from "./ArrowIcon"

const Balance: FC = (): ReactNode => {
  return (
    <div className="flex items-center gap-2 hover:cursor-pointer hover:text-title-gray transition-colors duration-200 ease-in-out">

      <Image
        width={20}
        height={20}
        alt="coin"
        src={"/icons/coin.svg"}
      />

      <span className="text-xs font-medium">0.00</span>

      <ArrowIcon className="group-hover:fill-title-gray" />
    </div>
  )
}

export default Balance