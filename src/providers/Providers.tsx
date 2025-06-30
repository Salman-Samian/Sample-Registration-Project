"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProvidersProps } from "@/lib/types";
import { I18nProvider } from "@/components/providers/I18nProvider";
import { ClientWrapper } from "@/components/providers/ClientWrapper";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ToastContainer } from "@/components/molecules/ToastContainer";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <ClientWrapper>
          <QueryProvider>
            <ToastContainer>{children}</ToastContainer>
          </QueryProvider>
        </ClientWrapper>
      </I18nProvider>
    </QueryClientProvider>
  );
};
