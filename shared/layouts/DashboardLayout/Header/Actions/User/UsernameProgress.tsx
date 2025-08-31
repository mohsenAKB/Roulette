import LinearProgress from "@/shared/components/LinearProgress/LinearProgress"
import Image from "next/image"
import { FC, ReactNode } from "react"

const UsernameProgress: FC = (): ReactNode => {
  return (
    <div className="flex flex-col gap-2 min-w-[100px]">
      <div className="flex flex-row gap-2 items-center">
        <span className="flex-1 text-body-gray-900 text-[14px] font-semibold text-end">Pouya</span>
        <Image
          src="\icons\level-badge.svg"
          alt="user-account"
          width={18}
          height={18}
        />
      </div>

      <span className="leading-[1] h-[7px]">
        <LinearProgress percent={45} />
      </span>
    </div>
  )
}

export default UsernameProgress