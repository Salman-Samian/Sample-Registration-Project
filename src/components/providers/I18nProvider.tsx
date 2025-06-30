"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { languageDirections } from "@/lib/i18n";

interface I18nContextType {
  currentLanguage: string;
  setLanguage: (language: string) => void;
  direction: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
      const newDirection =
        languageDirections[lng as keyof typeof languageDirections] || "ltr";
      setDirection(newDirection);

      // Update document direction
      document.documentElement.dir = newDirection;
      document.documentElement.lang = lng;
    };

    // Set initial direction
    const initialDirection =
      languageDirections[currentLanguage as keyof typeof languageDirections] ||
      "ltr";
    setDirection(initialDirection);
    document.documentElement.dir = initialDirection;
    document.documentElement.lang = currentLanguage;

    // Listen for language changes
    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n, currentLanguage]);

  const setLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <I18nContext.Provider value={{ currentLanguage, setLanguage, direction }}>
      {children}
    </I18nContext.Provider>
  );
};
