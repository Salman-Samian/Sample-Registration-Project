import { ToastType, ButtonVariant, ButtonSize } from "./enums";
import { RegistrationData } from "./validation";

// API Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string;
}

// Form Types
export interface SelectOption {
  value: string;
  label: string;
}

export interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  type: string;
  name: string;
  placeholder?: string;
  options?: SelectOption[];
  value?: string | boolean | Date | null;
  onChange?: (value: string | boolean | Date | null) => void;
  className?: string;
}

// Component Props Types
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  error?: boolean;
  errorMessage?: string;
  placeholder?: string;
}

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  label?: string;
}

export interface DatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  error?: boolean;
  errorMessage?: string;
  placeholder?: string;
  className?: string;
  maxDate?: Date;
  minDate?: Date;
}

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
}

export interface FormStepProps {
  currentStep: number;
  totalSteps: number;
  stepTitle: string;
  children: React.ReactNode;
}

export interface MultiStepFormProps {
  onComplete?: (data: RegistrationData) => void;
}

export interface RegistrationFormProps {
  onRegistrationComplete?: (data: RegistrationData) => void;
  onRegistrationError?: (error: Error) => void;
}

export interface ProvidersProps {
  children: React.ReactNode;
}

export interface I18nProviderProps {
  children: React.ReactNode;
}

export interface ClientWrapperProps {
  children: React.ReactNode;
}

// Data Types
export interface Currency {
  value: string;
  label: string;
}

export interface Region {
  value: string;
  label: string;
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  minAge?: number;
  value?: unknown;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export interface ErrorMessages {
  [key: string]: {
    [key: string]: string;
  };
}

export interface StarterData {
  currencies: Currency[];
  regions: Region[];
  validationRules: ValidationRules;
  errorMessages: {
    [language: string]: ErrorMessages;
  };
}

// API Endpoints
export interface ApiEndpoints {
  register: string;
  currencies: string;
  regions: string;
}

// Query Keys
export interface QueryKeys {
  currencies: string[];
  regions: string[];
}

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

export interface ToastContainerProps {
  children: React.ReactNode;
}

// Extend Window interface
declare global {
  interface Window {
    showToast: (toast: Omit<ToastMessage, "id">) => void;
  }
}
