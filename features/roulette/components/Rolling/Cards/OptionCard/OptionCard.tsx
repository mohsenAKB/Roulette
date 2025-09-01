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
        className="relative z-10"
      />
    }

    return null
  }

  return (
    <div className={cn(
      "w-[147px] h-[218px] flex justify-center items-center group hover:cursor-pointer transition-all duration-100",
      "border-[2px] border-solid  [border-image-slice:1]",
      "bg-gray-900/[0.56] rounded-xl",

      // cs and silver hover
      { "bg-primary-900": type === "cs" },
      { "[border-image-source:radial-gradient(50%_100%_at_50%_0%,#7F8D9F_6%,rgba(127,141,159,0)_94%)]": type === "silver" || type === "cs" },
      { "hover:[background:radial-gradient(50%_100.32%_at_50%_0%,rgba(71,85,102,0.56)_0%,rgba(12,17,28,0.56)_100%)]": type === "silver" },

      // gold hover
      { "[border-image-source:radial-gradient(50%_100%_at_50%_0%,#FAA300_0%,rgba(250,163,0,0)_100%)]": type === "gold" },
      { "hover:[background:radial-gradient(50%_100.32%_at_50%_0%,rgba(99,66,2,0.56)_0%,rgba(12,17,28,0.56)_100%)] hover:[border-image-source:radial-gradient(50%_100%_at_50%_0%,#7F8D9F_6%,rgba(127,141,159,0)_94%)]": type === "gold" },
    )}>

      <span
        className={cn(`
           pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
          w-full h-full rounded-xl
          opacity-0 transition-opacity duration-400 group-hover:opacity-100 
          mix-blend-screen
          shadow-[inset_0_-1px_0_0_#FFFFFF1A] z-0
          `,
          { "[background:radial-gradient(45%_100%_at_50%_0%,#6325C8_20%,#1A0933_70%,transparent_100%)]": type === "cs" },
        )}
      />

      {renderImageByType()}
    </div>
  )
}

export default OptionCard