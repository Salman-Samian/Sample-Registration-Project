import { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

// Tailwind color gradient constants
export const bgGradient_blue_indigo =
  "bg-gradient-to-br from-blue-50 to-indigo-100";

export const bgGradient_purple_pink =
  "bg-gradient-to-br from-purple-50 to-pink-100";

export const bgGradient_green_emerald =
  "bg-gradient-to-br from-green-50 to-emerald-100";

export const bgGradient_orange_amber =
  "bg-gradient-to-br from-orange-50 to-amber-100";

export const bgGradient_red_rose = "bg-gradient-to-br from-red-50 to-rose-100";

export const bgGradient_teal_cyan =
  "bg-gradient-to-br from-teal-50 to-cyan-100";

export const bgGradient_yellow_lime =
  "bg-gradient-to-br from-yellow-50 to-lime-100";

export const bgGradient_violet_fuchsia =
  "bg-gradient-to-br from-violet-50 to-fuchsia-100";

export const bgGradient_slate_gray =
  "bg-gradient-to-br from-slate-50 to-gray-100";

export const bgGradient_indigo_purple =
  "bg-gradient-to-br from-indigo-50 to-purple-100";

export const bgGradient_emerald_teal =
  "bg-gradient-to-br from-emerald-50 to-teal-100";

export const bgGradient_options = [
  { value: bgGradient_blue_indigo, label: "Blue Indigo" },
  { value: bgGradient_green_emerald, label: "Green Emerald" },
  { value: bgGradient_orange_amber, label: "Orange Amber" },
  { value: bgGradient_red_rose, label: "Red Rose" },
  { value: bgGradient_teal_cyan, label: "Teal Cyan" },
  { value: bgGradient_yellow_lime, label: "Yellow Lime" },
  { value: bgGradient_violet_fuchsia, label: "Violet Fuchsia" },
  { value: bgGradient_slate_gray, label: "Slate Gray" },
  { value: bgGradient_indigo_purple, label: "Indigo Purple" },
];

export const rubik = localFont({
  src: "../assets/fonts/Rubik/Rubik-VariableFont_wght.ttf",
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Registration Form",
  description: "Multi-step registration form with validation",
};

export const inter = Inter({ subsets: ["latin"] });
