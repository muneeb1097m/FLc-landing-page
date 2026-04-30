import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faseeh Lall & Co | Your Marketing Department",
  description: "B2B Lead Generation — LinkedIn & Facebook USA · UK · Canada · UAE · KSA · Australia · Pakistan",
  icons: {
    icon: "/favicon.png",
  },
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
