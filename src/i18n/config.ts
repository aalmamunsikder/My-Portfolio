import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'nav.home': 'Home',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hero.greeting': 'Hi, I\'m',
      'hero.role': 'Full Stack Developer',
      'hero.description': 'I build exceptional digital experiences.',
      'skills.title': 'My Expertise',
      'experience.title': 'Work Experience',
      'projects.title': 'Featured Projects',
      'contact.title': 'Get in Touch',
      'contact.name': 'Your Name',
      'contact.email': 'Your Email',
      'contact.message': 'Your Message',
      'contact.send': 'Send Message',
    },
  },
  es: {
    translation: {
      'nav.home': 'Inicio',
      'nav.skills': 'Habilidades',
      'nav.experience': 'Experiencia',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contacto',
      'hero.greeting': 'Hola, soy',
      'hero.role': 'Desarrollador Full Stack',
      'hero.description': 'Construyo experiencias digitales excepcionales.',
      'skills.title': 'Mi Experiencia',
      'experience.title': 'Experiencia Laboral',
      'projects.title': 'Proyectos Destacados',
      'contact.title': 'Contacto',
      'contact.name': 'Tu Nombre',
      'contact.email': 'Tu Email',
      'contact.message': 'Tu Mensaje',
      'contact.send': 'Enviar Mensaje',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'es'],
} as const;

export type Locale = (typeof i18nConfig)['locales'][number]; 