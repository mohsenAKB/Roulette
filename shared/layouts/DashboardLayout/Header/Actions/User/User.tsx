import { FC, ReactNode } from "react"
import UsernameProgress from "./UsernameProgress"
import UserMenu from "./UserMenu"

const User: FC = (): ReactNode => {
  return (
    <div className="flex items-center gap-[7px]">
      <UsernameProgress />
      <UserMenu />
    </div>
  )
}

export default User