import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "locale/en.json";
import ru from "locale/ru.json";

const defaultNS = "common";

const resources = {
  en,
  ru,
};

i18n.use(initReactI18next).init({
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  defaultNS,
  resources,
});

export default i18n;
