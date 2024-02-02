export const languages = {
  en: "EN",
  de: "DE",
};

export const showDefaultLang = false;

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.physics": "Physics",
    "nav.dev": "Software",
    "nav.blog": "Blog",
  },
  de: {
    "nav.home": "Home",
    "nav.about": "Über mich",
    "nav.physics": "Physik",
    "nav.dev": "Software",
    "nav.blog": "Blog",
  },
} as const;

export const defaultLang: keyof typeof ui = "en";
