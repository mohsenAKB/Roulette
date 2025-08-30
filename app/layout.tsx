import React, { FC, ReactNode } from "react";

import { LayoutProps, fonts } from "@/shared"

import "./globals.css"

const RootLayout: FC<LayoutProps> = ({
  children,
}): ReactNode => {
  return (
    <html lang="en">
      <body className={fonts.chakraPetch.variable}>
        {children}
      </body>
    </html>
  );
}


export default RootLayout