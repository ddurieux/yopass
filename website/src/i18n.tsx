import i18n from "i18next";
import { initReactI18next } from 'react-i18next';


import Backend from 'i18next-http-backend';

const url = process.env.PUBLIC_URL
? `${process.env.PUBLIC_URL}/`
: '/';

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({

  backend: {
    loadPath: `${url}/locales/{{lng}}.json`
  },

  fallbackLng: "en",
  lng: "en",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  appendNamespaceToMissingKey: true,

});

export default i18n;
