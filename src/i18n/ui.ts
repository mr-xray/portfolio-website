export const languages = {
  en: "EN",
  de: "DE",
};

export const showDefaultLang = false;

export const ui = {
  en: {
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
  },
  de: {
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
  },
} as const;

export const defaultLang: keyof typeof ui = "en";
