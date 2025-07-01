import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // Form labels
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      password: "Password",
      currency: "Currency",
      region: "Region",
      phone: "Phone Number",
      nationalCode: "National Code",
      birthday: "Birthday",
      ageConfirmation: "I am over 18 years old",
      registrationDescription: "Complete your registration in two simple steps",
      registrationForm: "Registration Form",

      // Form steps
      step1: "Step 1: Basic Information",
      step2: "Step 2: Additional Information",

      // Buttons
      next: "Next",
      previous: "Previous",
      submit: "Submit",
      register: "Register",

      // Placeholders
      firstNamePlaceholder: "Enter your first name",
      lastNamePlaceholder: "Enter your last name",
      emailPlaceholder: "Enter your email address",
      passwordPlaceholder: "Enter your password",
      phonePlaceholder: "Enter your phone number",
      nationalCodePlaceholder: "Enter your national code",
      birthdayPlaceholder: "Enter your birthday",
      ageConfirmationPlaceholder: "I am over 18 years old",
      regionPlaceholder: "Select a region",

      // Messages
      registrationSuccess: "Registration successful!",
      registrationError: "Registration failed. Please try again.",

      // Language
      language: "Language",
      english: "English",
      persian: "Persian",

      // Additional translations
      step: "Step",
      of: "of",
      selectCurrency: "Select a currency",
      selectRegion: "Select a region",

      // Error Messages
      errors: {
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
      },
    },
  },
  fa: {
    translation: {
      // Form labels
      firstName: "نام",
      lastName: "نام خانوادگی",
      email: "ایمیل",
      password: "رمز عبور",
      currency: "ارز",
      region: "منطقه",
      phone: "شماره تلفن",
      nationalCode: "کد ملی",
      birthday: "تاریخ تولد",
      ageConfirmation: "من بالای ۱۸ سال سن دارم",
      registrationDescription: "ثبت نام خود را در دو مرحله ساده انجام دهید",
      registrationForm: "فرم ثبت نام",

      // Form steps
      step1: "مرحله ۱: اطلاعات پایه",
      step2: "مرحله ۲: اطلاعات تکمیلی",

      // Buttons
      next: "بعدی",
      previous: "قبلی",
      submit: "ثبت",
      register: "ثبت نام",

      // Placeholders
      firstNamePlaceholder: "نام خود را وارد کنید",
      lastNamePlaceholder: "نام خانوادگی خود را وارد کنید",
      emailPlaceholder: "آدرس ایمیل خود را وارد کنید",
      passwordPlaceholder: "رمز عبور خود را وارد کنید",
      phonePlaceholder: "شماره تلفن خود را وارد کنید",
      nationalCodePlaceholder: "کد ملی خود را وارد کنید",
      birthdayPlaceholder: "تاریخ تولد خود را وارد کنید",
      ageConfirmationPlaceholder: "من بالای ۱۸ سال سن دارم",
      regionPlaceholder: "منطقه را انتخاب کنید",

      // Messages
      registrationSuccess: "ثبت نام با موفقیت انجام شد!",
      registrationError: "ثبت نام ناموفق بود. لطفاً دوباره تلاش کنید.",

      // Language
      language: "زبان",
      english: "English",
      persian: "فارسی",

      // Additional translations
      step: "مرحله",
      of: "از",
      selectCurrency: "ارز را انتخاب کنید",
      selectRegion: "منطقه را انتخاب کنید",

      // Error Messages
      errors: {
        firstName: {
          required: "نام ضروری است",
          minLength: "نام باید حداقل ۲ کاراکتر باشد",
          maxLength: "نام باید کمتر از ۵۰ کاراکتر باشد",
          pattern: "نام فقط می‌تواند شامل حروف و فاصله باشد",
        },
        lastName: {
          required: "نام خانوادگی ضروری است",
          minLength: "نام خانوادگی باید حداقل ۲ کاراکتر باشد",
          maxLength: "نام خانوادگی باید کمتر از ۵۰ کاراکتر باشد",
          pattern: "نام خانوادگی فقط می‌تواند شامل حروف و فاصله باشد",
        },
        email: {
          required: "ایمیل ضروری است",
          pattern: "لطفاً یک ایمیل معتبر وارد کنید",
        },
        password: {
          required: "رمز عبور ضروری است",
          minLength: "رمز عبور باید حداقل ۸ کاراکتر باشد",
          pattern:
            "رمز عبور باید شامل حداقل یک حرف بزرگ، یک حرف کوچک، یک عدد و یک کاراکتر خاص باشد",
        },
        currency: {
          required: "لطفاً یک ارز انتخاب کنید",
        },
        region: {
          required: "لطفاً یک منطقه انتخاب کنید",
        },
        phone: {
          required: "شماره تلفن ضروری است",
          pattern: "لطفاً یک شماره تلفن معتبر وارد کنید",
        },
        nationalCode: {
          required: "کد ملی ضروری است",
          pattern: "لطفاً یک کد ملی معتبر وارد کنید",
        },
        birthday: {
          required: "تاریخ تولد ضروری است",
          minAge: "شما باید حداقل ۱۸ سال سن داشته باشید",
        },
        ageConfirmation: {
          required: "شما باید تأیید کنید که بالای ۱۸ سال هستید",
          value: "شما باید تأیید کنید که بالای ۱۸ سال هستید",
        },
      },
    },
  },
};

// Language direction configuration
export const languageDirections = {
  en: "ltr",
  fa: "rtl",
} as const;

// Only initialize i18n on the client side
if (typeof window !== "undefined") {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      debug: process.env.NODE_ENV === "development",

      interpolation: {
        escapeValue: false,
      },

      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
    });
}

export default i18n;
