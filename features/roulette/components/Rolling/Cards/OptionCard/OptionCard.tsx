import { cn } from "@/shared"
import Image from "next/image"
import { FC, ReactNode } from "react"

interface OptionCardProps {
  type: "gold" | "silver" | "cs"
}

const OptionCard: FC<OptionCardProps> = ({
  type
}): ReactNode => {

  const renderImageByType = (): ReactNode => {
    let imageSource = ""

    switch (type) {
      case "cs":
        imageSource = "/images/play-cs2-big.svg"
        break
      case "gold":
        imageSource = "/images/play-gold-big.svg"
        break
      case "silver":
        imageSource = "/images/play-silver-big.svg"
        break
    }

    if (imageSource) {
      return <Image
        quality={100}
        src={imageSource}
        alt={type}
        width={94}
        height={94}
        sizes="400"
      />
    }

    return null
  }

  return (
    <div className={cn(
      "w-[147px] h-[218px] flex justify-center items-center",
      "border-[2px] border-solid  [border-image-slice:1]",
      "bg-gray-900/[0.56] rounded-xl",
      { "[border-image-source:radial-gradient(50%_100%_at_50%_0%,#7F8D9F_6%,rgba(127,141,159,0)_94%)]": type === "silver" || type === "cs" },
      { "[border-image-source:radial-gradient(50%_100%_at_50%_0%,#FAA300_0%,rgba(250,163,0,0)_100%)]": type === "gold" },
      { "bg-primary-900": type === "cs" }
    )}>
      {renderImageByType()}
    </div>
  )
}

export default OptionCard