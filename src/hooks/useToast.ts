import { useCallback } from "react";
import { ToastType } from "@/lib/enums";

export const useToast = () => {
  const showToast = useCallback(
    (type: ToastType, title: string, message?: string, duration?: number) => {
      if (typeof window !== "undefined" && window.showToast) {
        window.showToast({
          type,
          title,
          message,
          duration,
        });
      }
    },
    []
  );

  const success = useCallback(
    (title: string, message?: string) => {
      showToast(ToastType.SUCCESS, title, message);
    },
    [showToast]
  );

  const error = useCallback(
    (title: string, message?: string) => {
      showToast(ToastType.ERROR, title, message);
    },
    [showToast]
  );

  const info = useCallback(
    (title: string, message?: string) => {
      showToast(ToastType.INFO, title, message);
    },
    [showToast]
  );

  const warning = useCallback(
    (title: string, message?: string) => {
      showToast(ToastType.WARNING, title, message);
    },
    [showToast]
  );

  return {
    showToast,
    success,
    error,
    info,
    warning,
  };
};
