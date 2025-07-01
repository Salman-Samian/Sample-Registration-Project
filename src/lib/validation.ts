import { z } from "zod";

// Step 1 Schema
export const step1Schema = z.object({
  firstName: z
    .string()
    .min(2, "firstName.minLength")
    .max(50, "firstName.maxLength")
    .regex(/^[a-zA-Z\s]+$/, "firstName.pattern"),
  lastName: z
    .string()
    .min(2, "lastName.minLength")
    .max(50, "lastName.maxLength")
    .regex(/^[a-zA-Z\s]+$/, "lastName.pattern"),
  email: z.string().email("email.pattern"),
  password: z
    .string()
    .min(8, "password.minLength")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "password.pattern"
    ),
  currency: z.string().min(1, "currency.required"),
});

// Step 2 Schema
export const step2Schema = z.object({
  region: z.string().min(1, "region.required"),
  phone: z
    .string()
    .min(1, "phone.required")
    .regex(/^[+]?[1-9]\d{1,14}$/, "phone.pattern"),
  nationalCode: z
    .string()
    .min(1, "nationalCode.required")
    .regex(/^[0-9]{5,15}$/, "nationalCode.pattern"),
  birthday: z
    .string()
    .min(1, "birthday.required")
    .refine((dateString) => {
      if (!dateString) return false;
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return false;

      const today = new Date();
      const age = today.getFullYear() - date.getFullYear();
      const monthDiff = today.getMonth() - date.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < date.getDate())
      ) {
        return age - 1 >= 18;
      }
      return age >= 18;
    }, "birthday.minAge"),
  ageConfirmation: z
    .boolean()
    .refine((val) => val === true, "ageConfirmation.value"),
});

// Complete Registration Schema
export const registrationSchema = step1Schema.merge(step2Schema);

// Step 1 and 2 types
export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type RegistrationData = z.infer<typeof registrationSchema>;
