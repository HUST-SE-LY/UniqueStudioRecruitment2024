import { writable } from "svelte/store";

const createLocaleLanguageStore = () => {
  const { set, subscribe } = writable(navigator.language);
  return {
    subscribe,
    updateLanguage: (language:string) => set(language)
  };
};

export const localeLanguage = createLocaleLanguageStore();
