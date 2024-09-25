import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./src/locales/en/translation.json";
import arTranslation from "./src/locales/ar/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Add this line
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

    fallbackLng: "en", // Fallback language in case the current language translation is not available
    debug: true,
    detection: {
      order: ["localStorage", "cookie", "navigator"], // Define detection order
      caches: ["localStorage"], // Cache the language in localStorage
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    // Optional: Set right-to-left (RTL) support for Arabic
    react: {
      useSuspense: false,
    },
  });

export default i18n;
