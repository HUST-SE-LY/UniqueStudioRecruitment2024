import { writable } from "svelte/store";
import type { i18nConstants } from "../config/i18n";

const createLocaleLanguageStore = () => {
  const { set, subscribe } = writable<keyof typeof i18nConstants>(
    (localStorage.getItem("language") || navigator.language) as keyof typeof i18nConstants
  );
  const updateLanguage = (language: keyof typeof i18nConstants) => {
    localStorage.setItem("language", language);
    set(language);
  };
  return {
    subscribe,
    updateLanguage,
  };
};

export const localeLanguage = createLocaleLanguageStore();
