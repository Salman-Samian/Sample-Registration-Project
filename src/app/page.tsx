"use client";

import { RegistrationForm } from "@/components/organisms/RegistrationForm";
import { LanguageSelector } from "@/components/molecules/LanguageSelector";
import { RegistrationData } from "@/lib/validation";
import { cn } from "@/lib/utils";
import { Select } from "@/components/atoms/Select";
import { useState } from "react";
import { bgGradient_options } from "@/lib/constants";

export default function Home() {
  const [bgGradient, setBgGradient] = useState(bgGradient_options[0].value);

  const handleRegistrationComplete = (data: RegistrationData) => {
    console.log("Registration completed successfully:", data);
    // Additional success handling if needed
  };

  const handleRegistrationError = (err: Error) => {
    console.error("Registration failed:", err);
    // Additional error handling if needed
  };

  return (
    <main className={cn(bgGradient, "p-4")}>
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex justify-between items-center">
          {/* Background Gradient Selector */}
          <div className="flex justify-end">
            <Select
              options={bgGradient_options}
              value={bgGradient}
              onChange={(value) => setBgGradient(value.target.value)}
            />
          </div>
          <div className="flex justify-start">
            {/* Language Selector */}
            <LanguageSelector />
          </div>
        </div>

        <RegistrationForm
          key="RegistrationForm"
          onRegistrationComplete={handleRegistrationComplete}
          onRegistrationError={handleRegistrationError}
        />
      </div>
    </main>
  );
}
