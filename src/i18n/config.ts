export const locales = ['es', 'en', 'de', 'it'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  de: 'Deutsch',
  it: 'Italiano',
};

export const ogLocales: Record<Locale, string> = {
  es: 'es_ES',
  en: 'en_GB',
  de: 'de_DE',
  it: 'it_IT',
};

const isLocale = (v: string | undefined): v is Locale => locales.includes(v as Locale);
const base = () => import.meta.env.BASE_URL.replace(/\/$/, '');

/** Rutas estáticas de cada página: español en la raíz, el resto bajo /en, /de, /it. */
export const localeStaticPaths = () =>
  locales.map((l) => ({ params: { locale: l === defaultLocale ? undefined : l } }));

/** Ruta sin `base` ni prefijo de idioma, p. ej. /en/box → /box */
export function splitPath(pathname: string): { lang: Locale; path: string } {
  let rest = pathname.startsWith(base()) ? pathname.slice(base().length) : pathname;
  const first = rest.split('/')[1];
  const lang = isLocale(first) ? first : defaultLocale;
  if (isLocale(first)) rest = rest.slice(first.length + 1);
  return { lang, path: rest.replace(/\/$/, '') || '/' };
}

/** Enlace interno en el idioma indicado (incluye `base`). */
export function localize(lang: Locale, path: string): string {
  return `${base()}${lang === defaultLocale ? '' : `/${lang}`}${path}`;
}
