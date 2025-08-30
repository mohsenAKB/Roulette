import React, { FC } from 'react'
import { BaseButton, BaseButtonProps } from './BaseButton'

interface PrimaryButtonProps extends BaseButtonProps { }

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, className, ...props }) => {
  return <BaseButton {...props}>{children}</BaseButton>
}

export default PrimaryButton