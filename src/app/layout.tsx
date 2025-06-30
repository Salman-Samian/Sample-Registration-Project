import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ClientWrapper } from "@/components/providers/ClientWrapper";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ToastContainer } from "@/components/molecules/ToastContainer";

const inter = Inter({ subsets: ["latin"] });

const rubik = localFont({
  src: "../assets/fonts/Rubik/Rubik-VariableFont_wght.ttf",
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Registration Form",
  description: "Multi-step registration form with validation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rubik.variable}`}>
        <ClientWrapper>
          <QueryProvider>
            <ToastContainer>{children}</ToastContainer>
          </QueryProvider>
        </ClientWrapper>
      </body>
    </html>
  );
}
