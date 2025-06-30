"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/atoms/Button";
import { FormStep } from "@/components/molecules/FormStep";
import { registrationSchema, RegistrationData } from "@/lib/validation";
import { useErrorTranslation } from "@/lib/errorUtils";
import { ButtonVariant } from "@/lib/enums";

interface MultiStepFormProps {
  onSuccess?: (data: RegistrationData) => void;
  onError?: (error: Error) => void;
}

export const MultiStepForm = ({ onSuccess, onError }: MultiStepFormProps) => {
  const { t } = useTranslation();
  const { getErrorMessage } = useErrorTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  const form = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
  });

  const registrationMutation = useMutation({
    mutationFn: async (data: RegistrationData) => {
      const response = await axios.post("/api/register", data);
      return response.data;
    },
    onSuccess: (data) => {
      onSuccess?.(data);
    },
    onError: (error: Error) => {
      onError?.(error);
    },
  });

  const onSubmit = (data: RegistrationData) => {
    registrationMutation.mutate(data);
  };

  const nextStep = async () => {
    if (currentStep < totalSteps) {
      // Trigger validation for current step fields
      let isValid = false;

      if (currentStep === 1) {
        isValid = await form.trigger([
          "firstName",
          "lastName",
          "email",
          "password",
          "currency",
        ]);
      } else if (currentStep === 2) {
        isValid = await form.trigger([
          "region",
          "phone",
          "nationalCode",
          "birthday",
          "ageConfirmation",
        ]);
      }

      // Only proceed if validation passes
      if (isValid) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isLastStep = currentStep === totalSteps;
  const isFirstStep = currentStep === 1;

  return (
    <div className="w-full max-w-2xl mx-auto p-5">
      {/* Form */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {currentStep === 1 && (
          <FormStep
            currentStep={currentStep}
            totalSteps={totalSteps}
            stepTitle={t("step1")}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("firstName")} *
                </label>
                <input
                  {...form.register("firstName")}
                  className="w-full p-2 border rounded-md"
                  placeholder={t("firstNamePlaceholder")}
                />
                {form.formState.errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {getErrorMessage(
                      "firstName",
                      form.formState.errors.firstName.message || "required"
                    )}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("lastName")} *
                </label>
                <input
                  {...form.register("lastName")}
                  className="w-full p-2 border rounded-md"
                  placeholder={t("lastNamePlaceholder")}
                />
                {form.formState.errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {getErrorMessage(
                      "lastName",
                      form.formState.errors.lastName.message || "required"
                    )}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("email")} *
                </label>
                <input
                  type="email"
                  {...form.register("email")}
                  className="w-full p-2 border rounded-md"
                  placeholder={t("emailPlaceholder")}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {getErrorMessage(
                      "email",
                      form.formState.errors.email.message || "required"
                    )}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("password")} *
                </label>
                <input
                  type="password"
                  {...form.register("password")}
                  className="w-full p-2 border rounded-md"
                  placeholder={t("passwordPlaceholder")}
                />
                {form.formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {getErrorMessage(
                      "password",
                      form.formState.errors.password.message || "required"
                    )}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("currency")} *
                </label>
                <select
                  {...form.register("currency")}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">{t("selectCurrency")}</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
                {form.formState.errors.currency && (
                  <p className="text-red-500 text-sm mt-1">
                    {getErrorMessage(
                      "currency",
                      form.formState.errors.currency.message || "required"
                    )}
                  </p>
                )}
              </div>
            </div>
          </FormStep>
        )}

        {currentStep === 2 && (
          <FormStep
            currentStep={currentStep}
            totalSteps={totalSteps}
            stepTitle={t("step2")}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("region")} *
                </label>
                <select
                  {...form.register("region")}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">{t("selectRegion")}</option>
                  <option value="US">United States</option>
                  <option value="EU">Europe</option>
                  <option value="AS">Asia</option>
                </select>
                {form.formState.errors.region && (
                  <p className="text-red-500 text-sm mt-1">
                    {getErrorMessage(
                      "region",
                      form.formState.errors.region.message || "required"
                    )}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("phone")} *
                </label>
                <input
                  type="tel"
                  {...form.register("phone")}
                  className="w-full p-2 border rounded-md"
                  placeholder={t("phonePlaceholder")}
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {getErrorMessage(
                      "phone",
                      form.formState.errors.phone.message || "required"
                    )}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("nationalCode")} *
                </label>
                <input
                  {...form.register("nationalCode")}
                  className="w-full p-2 border rounded-md"
                  placeholder={t("nationalCodePlaceholder")}
                />
                {form.formState.errors.nationalCode && (
                  <p className="text-red-500 text-sm mt-1">
                    {getErrorMessage(
                      "nationalCode",
                      form.formState.errors.nationalCode.message || "required"
                    )}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  {t("birthday")} *
                </label>
                <input
                  type="date"
                  {...form.register("birthday", {
                    setValueAs: (value) =>
                      value ? new Date(value) : undefined,
                  })}
                  className="w-full p-2 border rounded-md"
                  max={new Date().toISOString().split("T")[0]}
                />
                {form.formState.errors.birthday && (
                  <p className="text-red-500 text-sm mt-1">
                    {getErrorMessage(
                      "birthday",
                      form.formState.errors.birthday.message || "required"
                    )}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    {...form.register("ageConfirmation")}
                    className="rounded"
                  />
                  <span className="text-sm font-medium">
                    {t("ageConfirmation")} *
                  </span>
                </label>
                {form.formState.errors.ageConfirmation && (
                  <p className="text-red-500 text-sm mt-1">
                    {getErrorMessage(
                      "ageConfirmation",
                      form.formState.errors.ageConfirmation.message ||
                        "required"
                    )}
                  </p>
                )}
              </div>
            </div>
          </FormStep>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          <Button
            type="button"
            variant={ButtonVariant.OUTLINE}
            onClick={prevStep}
            disabled={isFirstStep}
            className="min-w-[100px]"
          >
            {t("previous")}
          </Button>

          {isLastStep ? (
            <Button
              type="submit"
              onClick={() => onSubmit(form.getValues())}
              disabled={registrationMutation.isPending}
              className="min-w-[100px]"
            >
              {registrationMutation.isPending ? "..." : t("submit")}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => nextStep()}
              className="min-w-[100px]"
            >
              {t("next")}
            </Button>
          )}
        </div>

        {/* Error Message */}
        {registrationMutation.isError && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-sm">{t("registrationError")}</p>
          </div>
        )}

        {/* Success Message */}
        {registrationMutation.isSuccess && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-600 text-sm">{t("registrationSuccess")}</p>
          </div>
        )}
      </form>
    </div>
  );
};
