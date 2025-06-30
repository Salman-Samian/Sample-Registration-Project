import { useTranslation } from "react-i18next";

export const useErrorTranslation = () => {
  const { t } = useTranslation();

  const getErrorMessage = (fieldName: string, errorType: string): string => {
    // Handle both direct error types and translation keys
    let errorKey: string;

    // If errorType contains a dot, it's already a translation key
    if (errorType.includes(".")) {
      errorKey = `errors.${errorType}`;
    } else {
      errorKey = `errors.${fieldName}.${errorType}`;
    }

    const translatedError = t(errorKey);

    // If the translation exists and is not the same as the key, return it
    if (translatedError && translatedError !== errorKey) {
      return translatedError;
    }

    // Fallback to default error messages
    const fallbackMessages: Record<string, Record<string, string>> = {
      firstName: {
        required: "First name is required",
        minLength: "First name must be at least 2 characters",
        maxLength: "First name must be less than 50 characters",
        pattern: "First name can only contain letters and spaces",
      },
      lastName: {
        required: "Last name is required",
        minLength: "Last name must be at least 2 characters",
        maxLength: "Last name must be less than 50 characters",
        pattern: "Last name can only contain letters and spaces",
      },
      email: {
        required: "Email is required",
        pattern: "Please enter a valid email address",
      },
      password: {
        required: "Password is required",
        minLength: "Password must be at least 8 characters",
        pattern:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      },
      currency: {
        required: "Please select a currency",
      },
      region: {
        required: "Please select a region",
      },
      phone: {
        required: "Phone number is required",
        pattern: "Please enter a valid phone number",
      },
      nationalCode: {
        required: "National code is required",
        pattern: "Please enter a valid national code",
      },
      birthday: {
        required: "Birthday is required",
        minAge: "You must be at least 18 years old",
      },
      ageConfirmation: {
        required: "You must confirm that you are over 18",
        value: "You must confirm that you are over 18",
      },
    };

    // Handle translation keys (e.g., "firstName.minLength")
    if (errorType.includes(".")) {
      const [field, type] = errorType.split(".");
      return fallbackMessages[field]?.[type] || "Invalid field";
    }

    return fallbackMessages[fieldName]?.[errorType] || "Invalid field";
  };

  return { getErrorMessage };
};
