import React, { FC } from 'react'
import { BaseButton, BaseButtonProps } from './BaseButton'
import cn from '@/shared/utility/cn'

interface PrimaryButtonProps extends BaseButtonProps { }

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, className, ...props }) => {
  return <BaseButton
    {...props}
    className={cn(
      "flex items-center gap-2 bg-primary-500 rounded-[50px] text-title-gray px-3 py-2.5",
      className,
    )}>{children}
  </BaseButton>
}

export default PrimaryButton