import Badge from "@/shared/components/Badge/Badge"
import Image from "next/image"
import { FC, ReactNode } from "react"

const UserMenu: FC = (): ReactNode => {
  return (
    <Badge>
      <Image
        className="rounded-full"
        width={44}
        height={44}
        sizes="200px"
        src="/images/avatar.jpg"
        alt="avatar"
      />
    </Badge>
  )
}

export default UserMenu