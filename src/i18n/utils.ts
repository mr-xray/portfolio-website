import { ui, defaultLang } from "./ui";
import { getRelativeLocaleUrl } from "astro:i18n";

export function getLangFromUrl(url: URL): keyof typeof ui | null {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return null;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function removeLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return url.pathname.replace("/" + lang + "/", "");
  return url.pathname;
}

export function translateURL(url: URL, lang: keyof typeof ui): string {
  let strippedUrl = removeLangFromUrl(url);
  return getRelativeLocaleUrl(lang, strippedUrl);
}
