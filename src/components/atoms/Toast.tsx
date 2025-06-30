"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { ToastType } from "@/lib/enums";

export interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  onClose: (id: string) => void;
}

const toastIcons = {
  [ToastType.SUCCESS]: CheckCircle,
  [ToastType.ERROR]: AlertCircle,
  [ToastType.INFO]: Info,
  [ToastType.WARNING]: AlertCircle,
};

const toastStyles = {
  [ToastType.SUCCESS]: "bg-green-50 border-green-200 text-green-800",
  [ToastType.ERROR]: "bg-red-50 border-red-200 text-red-800",
  [ToastType.INFO]: "bg-blue-50 border-blue-200 text-blue-800",
  [ToastType.WARNING]: "bg-yellow-50 border-yellow-200 text-yellow-800",
};

const iconStyles = {
  [ToastType.SUCCESS]: "text-green-500",
  [ToastType.ERROR]: "text-red-500",
  [ToastType.INFO]: "text-blue-500",
  [ToastType.WARNING]: "text-yellow-500",
};

export const Toast = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const Icon = toastIcons[type];

  useEffect(() => {
    // Show toast with animation
    const showTimer = setTimeout(() => setIsVisible(true), 100);

    // Auto-hide toast
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(id), 300); // Wait for fade out animation
    }, duration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [id, duration, onClose]);

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 border rounded-lg shadow-lg transition-all duration-300 transform",
        toastStyles[type],
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}
      style={{ minWidth: "300px", maxWidth: "400px" }}
    >
      <Icon className={cn("w-5 h-5 mt-0.5 flex-shrink-0", iconStyles[type])} />

      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm">{title}</h4>
        {message && <p className="text-sm mt-1 opacity-90">{message}</p>}
      </div>

      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(() => onClose(id), 300);
        }}
        className="flex-shrink-0 p-1 hover:bg-black/5 rounded transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
