  /* eslint-disable @typescript-eslint/no-explicit-any */
  import { localeLanguage } from "../stores/localeLanguage";
  import { derived, get } from "svelte/store";
  import { i18nConstants } from "../config/i18n";

  const getNestedProperty = <T,>(obj: Record<string, any>, path: string) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj) as
      | T
      | undefined;
  };

  export const translate = (
    key: string,
    locale = get(localeLanguage),
    vars?: Record<string, string>
  ) => {
    if (!key) throw new Error("no key provided to $t()");
    if (!locale) throw new Error(`no translation for key "${key}"`);
    const localeTranslations = i18nConstants[locale];
    if (!localeTranslations) throw new Error("no translation for this locale");
    console.log(localeTranslations);
    let text = getNestedProperty<string>(localeTranslations, key);
    if (!text) throw new Error(`no translation found for ${locale}.${key}`);
    vars &&
      Object.keys(vars).forEach((key) => {
        const value = vars[key];
        text = text.replace(new RegExp(`{${key}}`, "g"), value);
      });
    return text;
  };
  
export const t = derived(localeLanguage, ($localeLanguage) => (key:string, vars?:Record<string, string>) => translate(key, $localeLanguage, vars));
