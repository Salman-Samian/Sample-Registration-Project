import React from "react";
import { useTranslation } from "react-i18next";
import { FormStepProps } from "@/lib/types";

export const FormStep: React.FC<FormStepProps> = ({
  currentStep,
  totalSteps,
  stepTitle,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      {/* Progress indicator */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{stepTitle}</h2>
          <label className="text-xs text-muted-foreground">
            {t("step")} {currentStep} {t("of")} {totalSteps}
          </label>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Form content */}
      <div className="space-y-4">{children}</div>
    </div>
  );
};
