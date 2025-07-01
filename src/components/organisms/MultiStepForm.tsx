"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { FormStep } from "@/components/molecules/FormStep";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSelect,
  FormCheckbox,
  FormDatePicker,
} from "@/components/molecules/Form";
import {
  RegistrationData,
  registrationSchema,
  Step1Data,
  Step2Data,
} from "@/lib/validation";
import { ButtonVariant } from "@/lib/enums";

interface MultiStepFormProps {
  onSuccess?: (data: RegistrationData) => void;
  onError?: (error: Error) => void;
}

export const MultiStepForm = ({ onSuccess, onError }: MultiStepFormProps) => {
  const { t } = useTranslation();
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

  const onSubmit = (data: Step1Data & Step2Data) => {
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
        console.log("form step 1 ", isValid);
        console.log("form step 1 errors", form.formState.errors);
      } else if (currentStep === 2) {
        isValid = await form.trigger([
          "region",
          "phone",
          "nationalCode",
          "birthday",
          "ageConfirmation",
        ]);
        console.log("form step 2 ", isValid);
        console.log("form step 2 errors", form.formState.errors);
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {currentStep === 1 && (
            <FormStep
              currentStep={currentStep}
              totalSteps={totalSteps}
              stepTitle={t("step1")}
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>{t("firstName")}</FormLabel>
                      <Input
                        placeholder={t("firstNamePlaceholder")}
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>{t("lastName")}</FormLabel>
                      <Input
                        placeholder={t("lastNamePlaceholder")}
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>{t("email")}</FormLabel>
                      <Input
                        type="email"
                        placeholder={t("emailPlaceholder")}
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>{t("password")}</FormLabel>
                      <Input
                        type="password"
                        placeholder={t("passwordPlaceholder")}
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="currency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>{t("currency")}</FormLabel>
                      <FormSelect
                        placeholder={t("selectCurrency")}
                        options={[
                          { value: "USD", label: "USD" },
                          { value: "EUR", label: "EUR" },
                          { value: "GBP", label: "GBP" },
                        ]}
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>{t("region")}</FormLabel>
                      <FormSelect
                        placeholder={t("selectRegion")}
                        options={[
                          { value: "US", label: "United States" },
                          { value: "EU", label: "Europe" },
                          { value: "AS", label: "Asia" },
                        ]}
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>{t("phone")}</FormLabel>
                      <Input
                        type="tel"
                        placeholder={t("phonePlaceholder")}
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nationalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>{t("nationalCode")}</FormLabel>
                      <Input
                        placeholder={t("nationalCodePlaceholder")}
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="birthday"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>{t("birthday")}</FormLabel>
                      <FormDatePicker
                        selected={field.value ? new Date(field.value) : null}
                        onChange={(date) => field.onChange(date?.toISOString())}
                        placeholder={t("birthdayPlaceholder")}
                        maxDate={new Date()}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ageConfirmation"
                  render={({ field }) => (
                    <FormItem>
                      <FormCheckbox
                        checked={field.value}
                        onChange={field.onChange}
                        label={t("ageConfirmation")}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                disabled={registrationMutation.isPending}
                className="min-w-[100px]"
              >
                {registrationMutation.isPending ? "..." : t("submit")}
              </Button>
            ) : (
              <Button
                type="button"
                onClick={nextStep}
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
              <p className="text-green-600 text-sm">
                {t("registrationSuccess")}
              </p>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};
