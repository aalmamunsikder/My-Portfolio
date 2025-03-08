"use client";

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const languages = [
  { code: 'en', name: 'EN', flag: '🇺🇸' },
  { code: 'es', name: 'ES', flag: '🇪🇸' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <motion.div
      className="fixed top-4 right-4 z-50 flex gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
            i18n.language === lang.code
              ? 'bg-primary text-white'
              : 'bg-primary/10 text-primary hover:bg-primary/20'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-base">{lang.flag}</span>
          <span>{lang.name}</span>
        </motion.button>
      ))}
    </motion.div>
  );
} 