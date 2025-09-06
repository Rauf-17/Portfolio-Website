import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "primeicons/primeicons.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Raufull Islam Rauf",
  description: "Full Stack Developer Portfolio - Showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
