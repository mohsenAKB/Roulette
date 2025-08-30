import { PrimaryHighlightedButton } from "@/shared"
import Image from "next/image"
import { FC, ReactNode } from "react"

const Deposit: FC = (): ReactNode => {
  return <PrimaryHighlightedButton>
    <Image
      src="\icons\plus-circle.svg"
      width={20}
      height={20}
      alt="plus"
    />


    <span className="text-[12px] font-medium">Deposit</span>
  </PrimaryHighlightedButton>
}

export default Deposit