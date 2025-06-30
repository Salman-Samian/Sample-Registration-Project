"use client";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import { I18nProvider } from "./I18nProvider";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export const ClientWrapper = ({ children }: ClientWrapperProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <I18nProvider>{children}</I18nProvider>
    </I18nextProvider>
  );
};
