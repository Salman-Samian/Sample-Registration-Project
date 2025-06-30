import React from "react";
import { useTranslation } from "react-i18next";
import { MultiStepForm } from "./MultiStepForm";
import { RegistrationData } from "@/lib/validation";
import { RegistrationFormProps } from "@/lib/types";
import { useToast } from "@/hooks/useToast";

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onRegistrationComplete,
  onRegistrationError,
}) => {
  const { t } = useTranslation();
  const { success, error } = useToast();

  const handleRegistrationComplete = (data: RegistrationData) => {
    console.log("Registration completed:", data);
    success(t("registrationSuccess"), t("registrationSuccess"));
    onRegistrationComplete?.(data);
  };

  const handleRegistrationError = (err: Error) => {
    console.error("Registration failed:", err);
    error(t("registrationError"), err.message || t("registrationError"));
    onRegistrationError?.(err);
  };

  return (
    <div className="h-full py-10 rounded-[24px]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t("register")}
          </h1>
          <p className="text-gray-600">{t("registrationDescription")}</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-lg">
          <MultiStepForm
            onSuccess={handleRegistrationComplete}
            onError={handleRegistrationError}
          />
        </div>
      </div>
    </div>
  );
};
