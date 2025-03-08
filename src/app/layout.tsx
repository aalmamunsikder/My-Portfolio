import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/context/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ParticlesBackground from '@/components/ParticlesBackground';
import I18nProvider from '@/components/I18nProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-slate-900 dark:text-white`}
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
