import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "../atoms";

interface FormErrorProps {
  error?: string;
  className?: string;
  show?: boolean;
}

export const FormError: React.FC<FormErrorProps> = ({
  error,
  className,
  show = true,
}) => {
  if (!show || !error) return null;

  return (
    <Label className={cn("text-red-500 text-sm mt-1", className)}>
      {error}
    </Label>
  );
};
