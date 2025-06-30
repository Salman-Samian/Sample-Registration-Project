// Form Field Types
export enum FormFieldType {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  SELECT = "select",
  CHECKBOX = "checkbox",
  DATE = "date",
}

// Button Variants
export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  OUTLINE = "outline",
  GHOST = "ghost",
  DESTRUCTIVE = "destructive",
}

// Button Sizes
export enum ButtonSize {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}

// Form Steps
export enum FormStep {
  STEP_1 = 1,
  STEP_2 = 2,
}

// API Status
export enum ApiStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

// Languages
export enum Language {
  ENGLISH = "en",
  PERSIAN = "fa",
}

// Validation Types
export enum ValidationType {
  REQUIRED = "required",
  MIN_LENGTH = "minLength",
  MAX_LENGTH = "maxLength",
  PATTERN = "pattern",
  EMAIL = "email",
  MIN_AGE = "minAge",
  CUSTOM = "custom",
}

// Toast types
export enum ToastType {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
  WARNING = "warning",
}
