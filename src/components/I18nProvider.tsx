"use client";

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/client';

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
} 