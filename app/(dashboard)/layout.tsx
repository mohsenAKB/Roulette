import { FC, ReactNode } from "react"

import { DashboardLayout, LayoutProps } from "@/shared"

const Layout: FC<LayoutProps> = ({
  children
}): ReactNode => {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  )
}

export default Layout