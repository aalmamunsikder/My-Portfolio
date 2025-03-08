"use client";

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <Menu as="div" className="fixed left-5 top-5 z-50">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Menu.Button className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-white dark:bg-white/10 dark:text-white">
          <span>{currentLanguage.flag}</span>
          <span>{currentLanguage.name}</span>
        </Menu.Button>
      </motion.div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-40 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800">
          <div className="p-1">
            {languages.map((language) => (
              <Menu.Item key={language.code}>
                {({ active }) => (
                  <button
                    onClick={() => i18n.changeLanguage(language.code)}
                    className={`${
                      active
                        ? 'bg-primary text-white'
                        : 'text-gray-900 dark:text-white'
                    } group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm`}
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
} 