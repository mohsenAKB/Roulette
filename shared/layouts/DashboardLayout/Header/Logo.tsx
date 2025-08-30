import Image from 'next/image'
import { FC, ReactNode } from 'react'

const Logo: FC = (): ReactNode => {
  return <Image
    src={"/logo/Logo.svg"}
    alt='logo'
    width={132.62}
    height={44}
  />
}

export default Logo