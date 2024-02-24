export const languages = {
  en: "EN",
  de: "DE",
};

export const showDefaultLang = false;

export const ui = {
  en: {
    "blog.headline": "Blog entries in",
    "blog.author": "By",
    "blog.en": "English",
    "blog.de": "German",
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.pics": "Images",
    "nav.dev": "Software",
    "nav.blog": "Blog",
    "pics.me": "Me & Friends",
    "pics.tanzania": "Tanzania",
    "pics.pets": "Pets",
    "pics.hobbies": "Hobbies",
    "pics.scenery": "Scenery",
    "pics.other": "Other",
    "picbrowser.load": "Load more",
  },
  de: {
    "blog.headline": "Blog-Artikel auf",
    "blog.author": "Von",
    "blog.en": "Englisch",
    "blog.de": "Deutsch",
    "nav.home": "Home",
    "nav.about": "Über mich",
    "nav.pics": "Bilder",
    "nav.dev": "Software",
    "nav.blog": "Blog",
    "pics.me": "Ich",
    "pics.tanzania": "Tansania",
    "pics.pets": "Tiere",
    "pics.hobbies": "Hobbys",
    "pics.scenery": "Landschaft",
    "pics.other": "Sonstiges",
    "picbrowser.load": "Mehr laden",
  },
} as const;

export const defaultLang: keyof typeof ui = "en";
