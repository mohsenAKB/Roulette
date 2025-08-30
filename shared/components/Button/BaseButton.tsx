import cn from "@/shared/utility/cn";
import { FC, ReactNode, ButtonHTMLAttributes } from "react";

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const BaseButton: FC<BaseButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center px-4 py-2 rounded-lg duration-200 hover:cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
