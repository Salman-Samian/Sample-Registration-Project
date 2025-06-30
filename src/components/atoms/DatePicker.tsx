import React from "react";
import DatePickerLib from "react-datepicker";
import { cn } from "@/lib/utils";
import { DatePickerProps } from "@/lib/types";
import "react-datepicker/dist/react-datepicker.css";

export const DatePicker: React.FC<DatePickerProps> = ({
  selected,
  onChange,
  error,
  errorMessage,
  placeholder,
  className,
  maxDate,
  minDate,
}) => {
  return (
    <div className="w-full">
      <DatePickerLib
        selected={selected}
        onChange={onChange}
        placeholderText={placeholder}
        maxDate={maxDate}
        minDate={minDate}
        dateFormat="yyyy-MM-dd"
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-500 focus-visible:ring-red-500",
          className
        )}
      />
      {error && errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};
