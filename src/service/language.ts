import { atom } from "nanostores";
import { ui, defaultLang } from "../i18n/ui";
import { getLangFromUrl } from "../i18n/utils";

export const locale = atom(defaultLang);

/*
 * Order of locale decision:
 * 1. URL Path --> if default, pass down
 * 2. Preferred Locale --> if none / not supported, pass down
 * 3. Default Locale --> en
 */

export const determineLocale = (url: URL, preferredLocale?: string) => {
  const urlLang: keyof typeof ui | null = getLangFromUrl(url);
  if (!urlLang) {
    locale.set(
      preferredLocale && preferredLocale in ui
        ? (preferredLocale as keyof typeof ui)
        : defaultLang,
    );
  } else {
    locale.set(urlLang);
  }
};
