import React, { FC } from 'react'
import { BaseButton, BaseButtonProps } from './BaseButton'
import cn from '@/shared/utility/cn'

interface PrimaryButtonProps extends BaseButtonProps { }

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, className, ...props }) => {
  return (
    <BaseButton
      {...props}
      className={cn(
        "relative flex items-center gap-2 bg-primary-500 rounded-[50px] text-title-gray px-3 py-2.5 overflow-hidden group",
        className,
      )}
    >
      {children}

      {/* Highlight overlay */}
      <span
        className="
          pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
          w-full h-full
          opacity-0 transition-opacity duration-400 group-hover:opacity-100
          [background:radial-gradient(50%_60%_at_50%_0%,rgb(255,255,255,.2)_20%,rgba(255,255,255,.15)_40%,transparent_80%)]
          mix-blend-screen
          shadow-[inset_0_-1px_0_0_#FFFFFF1A]
        "
      />

      {/* Gradient border only at the top */}
      <span
        className="
          pointer-events-none absolute top-0 left-0 w-full h-[2px]
          [background:radial-gradient(50%_100%_at_50%_0%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%)]
        "
      />
    </BaseButton>
  )
}

export default PrimaryButton
