import es from "../i18n/locales/es.json"
import en from "../i18n/locales/en.json"

import i18n from "i18next" /* es el motor que administra las traducciones. */
import { initReactI18next } from "react-i18next" /* conecta i18next con React */
import LanguageDetector from "i18next-browser-languagedetector" /* detecta el idioma del navegador y puede recordar el idioma seleccionado. */

export const resources = {
  es: {translation: es},
  en: {translation: en},
}

i18n
  .use(LanguageDetector) /* permite detectar el idioma del navegador y gestionar su persistencia */
  .use(initReactI18next) /* conecta i18next con React */
  .init({ /* inicializa el sistema de traducciones */
    resources, /* indica dónde están nuestros diccionarios */
    fallbackLng: "es", /* si no se reconoce el idioma, utiliza español */
    interpolation: {
      escapeValue: false, /* evita que i18next escape el contenido, porque React ya gestiona esa protección al mostrar texto. */
    },
  });

export default i18n;