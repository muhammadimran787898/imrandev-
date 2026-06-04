import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "default" | "icon";
  variant?: "default" | "outline";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = "default", variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-bold transition",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
          "disabled:pointer-events-none disabled:opacity-50",
          variant === "outline" &&
            "border border-white/15 bg-white/5 text-white hover:border-cyan-300/45 hover:bg-cyan-300/10",
          variant === "default" &&
            "border border-cyan-300/45 bg-cyan-300 text-slate-950 hover:bg-emerald-300",
          size === "icon" ? "h-11 w-11 rounded-full" : "min-h-11 rounded-full px-5",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
