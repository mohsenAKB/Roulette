import React, { FC, ReactNode } from "react";

import { LayoutProps } from "@/shared"

import "./globals.css"

const RootLayout: FC<LayoutProps> = ({
  children,
}): ReactNode => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}


export default RootLayout