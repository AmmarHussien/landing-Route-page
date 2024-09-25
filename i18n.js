import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./src/locales/en/translation.json";
import arTranslation from "./src/locales/ar/translation.json";

i18n
  .use(initReactI18next) // Pass the i18n instance to react-i18next.
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language in case the current language translation is not available
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    // Optional: Set right-to-left (RTL) support for Arabic
    react: {
      useSuspense: false,
    },
  });

export default i18n;
