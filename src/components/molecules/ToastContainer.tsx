"use client";

import { useState, useCallback } from "react";
import { Toast } from "@/components/atoms/Toast";
import { ToastContainerProps, ToastMessage } from "@/lib/types";

export const ToastContainer = ({ children }: ToastContainerProps) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((toast: Omit<ToastMessage, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  if (typeof window !== "undefined") {
    // Expose addToast function globally check types.ts
    window.showToast = addToast;
  }

  return (
    <>
      {children}

      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={removeToast} />
        ))}
      </div>
    </>
  );
};
