import { createI18n } from "vue-i18n";
import fr from "@/locales/fr.json";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import it from "@/locales/it.json";

const lang = window.userLocale ?? "fr"; // TODO(i18n): use en

const i18n = createI18n({
  legacy: false,
  locale: lang,
  fallbackLocale: "en",
  messages: {
    en,
    fr,
    es,
    it,
  },
});

export default i18n;
