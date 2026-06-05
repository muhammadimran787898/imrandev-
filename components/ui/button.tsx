import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "default" | "icon" | "sm";
  variant?: "default" | "outline";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = "default", variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-bold transition",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "outline" &&
            "border border-white/20 bg-white/5 text-white hover:border-white/45 hover:bg-white/10",
          variant === "default" &&
            "border border-white/40 bg-white text-[#333333] hover:bg-[#f0f0f0]",
          size === "icon" && "h-11 w-11 rounded-full",
          size === "sm" && "min-h-8 rounded-full px-3 text-xs",
          size === "default" && "min-h-11 rounded-full px-5",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
