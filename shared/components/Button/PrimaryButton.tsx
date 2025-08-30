import React, { FC } from 'react'
import { BaseButton, BaseButtonProps } from './BaseButton'
import cn from '@/shared/utility/cn'

interface PrimaryButtonProps extends BaseButtonProps { }

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, className, ...props }) => {
  return <BaseButton
    {...props}
    className={cn(
      "relative  flex items-center gap-2 bg-primary-500 rounded-[50px] text-title-gray px-3 py-2.5  overflow-hidden group ",
      className,
    )}>
    {children}

    <span
      className="
    pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
    w-full h-full
    opacity-0 transition-opacity duration-300 group-hover:opacity-100
    [background:radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,.2)_20%,rgba(255,255,255,.1)_40%,transparent_80%)]
    mix-blend-screen
  "
    />




  </BaseButton>
}

export default PrimaryButton