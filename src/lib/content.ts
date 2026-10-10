import type { Box, Camps, Hybrid, Service, Site, Team } from '../types/content';
import { localize, splitPath, type Locale } from '../i18n/config';
import es from '../i18n/ui/es';
import en from '../i18n/ui/en';
import de from '../i18n/ui/de';
import it from '../i18n/ui/it';
import siteJson from '../data/site.json';
import hybridEs from '../data/es/hibrido.json';
import boxEs from '../data/es/box.json';
import servicesEs from '../data/es/services.json';
import campsEs from '../data/es/camps.json';
import teamEs from '../data/es/team.json';
import hybridEn from '../data/en/hibrido.json';
import boxEn from '../data/en/box.json';
import servicesEn from '../data/en/services.json';
import campsEn from '../data/en/camps.json';
import teamEn from '../data/en/team.json';
import hybridDe from '../data/de/hibrido.json';
import boxDe from '../data/de/box.json';
import servicesDe from '../data/de/services.json';
import campsDe from '../data/de/camps.json';
import teamDe from '../data/de/team.json';
import hybridIt from '../data/it/hibrido.json';
import boxIt from '../data/it/box.json';
import servicesIt from '../data/it/services.json';
import campsIt from '../data/it/camps.json';
import teamIt from '../data/it/team.json';

// Contenido traducible: un JSON por idioma en src/data/<idioma>/, validado contra los tipos.
interface Content {
  hybrid: Hybrid;
  box: Box;
  services: Service[];
  camps: Camps;
  team: Team;
}
const contents: Record<Locale, Content> = {
  es: { hybrid: hybridEs, box: boxEs, services: servicesEs, camps: campsEs, team: teamEs },
  en: { hybrid: hybridEn, box: boxEn, services: servicesEn, camps: campsEn, team: teamEn },
  de: { hybrid: hybridDe, box: boxDe, services: servicesDe, camps: campsDe, team: teamDe },
  it: { hybrid: hybridIt, box: boxIt, services: servicesIt, camps: campsIt, team: teamIt },
};

// Punto único de acceso al contenido común (no depende del idioma).
export const site: Site = siteJson;

const ui = { es, en, de, it };

/** Prefija rutas de ficheros estáticos con el `base` de Astro (p. ej. /morecoaching en GitHub Pages). */
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

export const whatsappUrl = (text: string) => `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const navItems = [
  { key: 'hybrid', href: '/entrenamiento-hibrido' },
  { key: 'box', href: '/box' },
  { key: 'services', href: '/servicios' },
  { key: 'camps', href: '/training-camps' },
  { key: 'about', href: '/quienes-somos' },
] as const;

/** Idioma, textos de interfaz, contenido y enlaces de la página actual. */
export function useI18n(pageUrl: URL) {
  const { lang, path } = splitPath(pageUrl.pathname);
  const content = contents[lang];
  return {
    lang,
    path,
    t: ui[lang],
    ...content,
    link: (p: string) => localize(lang, p),
    classById: (id: string) => content.box.classes.find((c) => c.id === id),
  };
}
