import React from "react";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/lib/types";
import { ButtonVariant, ButtonSize } from "@/lib/enums";

export const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.MEDIUM,
  className,
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variants = {
    [ButtonVariant.PRIMARY]:
      "bg-primary text-primary-foreground hover:bg-primary/90",
    [ButtonVariant.SECONDARY]:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    [ButtonVariant.OUTLINE]:
      "border border-input hover:bg-accent hover:text-accent-foreground",
    [ButtonVariant.GHOST]: "hover:bg-accent hover:text-accent-foreground",
    [ButtonVariant.DESTRUCTIVE]:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  };

  const sizes = {
    [ButtonSize.SMALL]: "h-9 px-3 text-sm",
    [ButtonSize.MEDIUM]: "h-10 px-4 py-2",
    [ButtonSize.LARGE]: "h-11 px-8",
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
