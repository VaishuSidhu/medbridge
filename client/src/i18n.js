import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationHI from './locales/hi/translation.json';

// The translations
const resources = {
  en: {
    translation: translationEN
  },
  hi: {
    translation: translationHI
  }
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;