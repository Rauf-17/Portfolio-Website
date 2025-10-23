import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";
import "primeicons/primeicons.css";
import { ThemeProvider } from "@/components/theming/theme-provider";
import { HeaderComponent } from "@/components/header/HeaderComponent";
import Footer from "@/components/footer/footer";
import ScrollToTop from "@/components/footer/scroll-to-top";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <HeaderComponent />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
