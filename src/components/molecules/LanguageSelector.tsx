"use client";

import { useTranslation } from "react-i18next";
import { useI18n } from "@/components/providers/I18nProvider";
import { cn } from "@/lib/utils";
import { bgGradient_teal_cyan } from "@/lib/constants";

export const LanguageSelector = () => {
  const { t } = useTranslation();
  const { currentLanguage, setLanguage } = useI18n();

  const languages = [
    { value: "en", label: "🇺🇸" },
    { value: "fa", label: "🇮🇷" },
  ];

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">{t("language")}:</span>
      <div>
        {languages.map((language) => (
          <button
            key={language.value}
            onClick={() => handleLanguageChange(language.value)}
            className={cn(
              "px-4 py-2 rounded-md",
              currentLanguage === language.value &&
                `${bgGradient_teal_cyan} text-white`
            )}
          >
            {language.label}
          </button>
        ))}
      </div>
    </div>
  );
};
