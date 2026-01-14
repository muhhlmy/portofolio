import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";
import HeaderSection from "./components/layouts/header";
import AOSProvider from "./components/AOSProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Portofolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <AOSProvider />
        <HeaderSection />
        {children}
      </body>
    </html>
  );
}
