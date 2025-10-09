import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptTranslation from './pt.json';
import enTranslation from './en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { ...ptTranslation },
      en: { ...enTranslation },
    },
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;