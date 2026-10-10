import type { Box, Camps, Hyrox, Service, Site, Team } from '../types/content';
import siteJson from '../data/site.json';
import hyroxJson from '../data/hyrox.json';
import boxJson from '../data/box.json';
import servicesJson from '../data/services.json';
import campsJson from '../data/camps.json';
import teamJson from '../data/team.json';

// Punto único de acceso al contenido: los JSON se validan contra los tipos aquí.
export const site: Site = siteJson;
export const hyrox: Hyrox = hyroxJson;
export const box: Box = boxJson;
export const services: Service[] = servicesJson;
export const camps: Camps = campsJson;
export const team: Team = teamJson;

/** Prefija rutas internas con el `base` de Astro (p. ej. /morecoaching en GitHub Pages). */
export const url = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

export const whatsappUrl = (text = 'Hola More Coaching, me gustaría información sobre el box HYROX.') =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const classById = (id: string) => box.classes.find((c) => c.id === id);
