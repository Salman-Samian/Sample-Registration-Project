import React from "react";
import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";
import { Select } from "../atoms/Select";
import { Checkbox } from "../atoms/Checkbox";
import { DatePicker } from "../atoms/DatePicker";
import { FormFieldType } from "@/lib/enums";
import { FormFieldProps } from "@/lib/types";

export const FormField: React.FC<FormFieldProps> = ({
  label,
  required = false,
  error = false,
  errorMessage,
  type,
  name,
  placeholder,
  options = [],
  value,
  onChange,
  className,
}) => {
  const renderField = () => {
    switch (type) {
      case FormFieldType.TEXT:
      case FormFieldType.EMAIL:
      case FormFieldType.PASSWORD:
        return (
          <Input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value as string}
            onChange={(e) => onChange?.(e.target.value)}
            error={error}
            errorMessage={errorMessage}
            className={className}
          />
        );

      case FormFieldType.SELECT:
        return (
          <Select
            name={name}
            options={options}
            placeholder={placeholder}
            value={value as string}
            onChange={(e) => onChange?.(e.target.value)}
            error={error}
            errorMessage={errorMessage}
            className={className}
          />
        );

      case FormFieldType.CHECKBOX:
        return (
          <Checkbox
            name={name}
            checked={value as boolean}
            onChange={(e) => onChange?.(e.target.checked)}
            label={label}
            error={error}
            errorMessage={errorMessage}
            className={className}
          />
        );

      case FormFieldType.DATE:
        return (
          <DatePicker
            selected={value as Date | null}
            onChange={(date) => onChange?.(date)}
            placeholder={placeholder}
            error={error}
            errorMessage={errorMessage}
            className={className}
            maxDate={new Date()}
          />
        );

      default:
        return null;
    }
  };

  if (type === FormFieldType.CHECKBOX) {
    return renderField();
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      {renderField()}
    </div>
  );
};
