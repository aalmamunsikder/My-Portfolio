import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/context/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ParticlesBackground from '@/components/ParticlesBackground';
import I18nProvider from '@/components/I18nProvider';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Al Mamun Sikder | Portfolio",
  description: "Web & App Developer, UI/UX Designer, Tech Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased dark:bg-slate-900 dark:text-white`}
      >
        <ThemeProvider>
          <I18nProvider>
            <ParticlesBackground />
            <ThemeToggle />
            <LanguageSwitcher />
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
