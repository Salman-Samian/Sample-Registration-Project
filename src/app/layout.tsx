import "./globals.css";
import { inter, rubik } from "@/lib/constants";
import { Providers } from "@/providers/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rubik.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
