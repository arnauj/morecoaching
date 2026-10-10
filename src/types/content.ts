export interface Site {
  name: string;
  logo: string;
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    address: { street: string; city: string; region: string; zip: string };
  };
  social: { name: string; url: string; handle: string }[];
  legal: { owner: string; editor: string };
}

export interface Station {
  n: number;
  name: string;
  distance: string;
  focus: string;
  open: { men: string; women: string };
  tip: string;
}

export interface Hybrid {
  intro: { kicker: string; title: string; highlight: string; text: string[] };
  stats: { value: string; label: string }[];
  stations: Station[];
  weightsNote: string;
  divisions: { name: string; text: string }[];
  whyUs: { title: string; text: string }[];
  faq: { q: string; a: string }[];
}

export interface BoxClass {
  id: string;
  name: string;
  duration: string;
  level: string;
  text: string;
}

export interface Plan {
  name: string;
  /** null = precio pendiente de publicar */
  price: string | null;
  period: string;
  featured: boolean;
  features: string[];
}

export interface Box {
  hero: { kicker: string; title: string; text: string };
  location: { pendiente: boolean; text: string; mapsUrl: string };
  equipment: string[];
  classes: BoxClass[];
  schedule: {
    pendiente: boolean;
    days: { day: string; slots: { time: string; class: string }[] }[];
  };
  plans: Plan[];
  plansNote: string;
}

export interface Price {
  label: string;
  price: string;
  period: string;
  note: string;
}

export interface Service {
  id: string;
  title: string;
  short: string;
  /** Ruta sin extensión: se sirven `<image>.webp` y `<image>-800.webp` */
  image: string;
  includes: string[];
  prices: Price[];
  footnote?: string;
}

export interface Camps {
  title: string;
  subtitle: string;
  intro: string;
  image: string;
  advantages: string[];
  included: string[];
  prices: { days: number; price: string }[];
  pricesNote: string;
  extras: { title: string; text: string; price: string }[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  credentials: string[];
  bio: string[];
}

export interface Team {
  intro: string;
  photo: string;
  values: { title: string; text: string }[];
  members: TeamMember[];
}
