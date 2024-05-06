import { writable } from "svelte/store";

const createLocaleLanguageStore = () => {
  const { set, subscribe } = writable(
    localStorage.getItem("language") || navigator.language
  );
  const updateLanguage = (language: string) => {
    localStorage.setItem("language", language);
    set(language);
  };
  return {
    subscribe,
    updateLanguage,
  };
};

export const localeLanguage = createLocaleLanguageStore();
