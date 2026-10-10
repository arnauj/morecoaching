# More Coaching — web

Nueva web de [morecoaching.net](https://morecoaching.net), centrada en el box de HYROX.

Stack: Astro 7 + TypeScript (strict) + Tailwind CSS 4. Sin backend: todo el contenido vive en JSON.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
```

## Dónde está cada cosa

| Ruta | Contenido |
| --- | --- |
| `src/data/<idioma>/*.json` | Contenido editable por idioma (`es`, `en`, `de`, `it`): textos, precios, horarios, equipo, FAQ |
| `src/data/site.json` | Datos comunes a todos los idiomas (contacto, redes, logo) |
| `src/i18n/` | Idiomas disponibles (`config.ts`) y textos de interfaz (`ui/<idioma>.ts`) |
| `src/types/content.ts` | Tipos TypeScript del contenido JSON |
| `src/pages/[...locale]/` | Páginas, generadas por idioma: español en la raíz y `/en`, `/de`, `/it` (`/`, `/hyrox`, `/box`, `/servicios`, `/training-camps`, `/quienes-somos`, `/contacto`, legales) |
| `src/components/` | Componentes; `HeroRace.astro` es la animación de portada |
| `src/styles/global.css` | Tokens de diseño (colores de marca, tipografías) |
| `public/img/` | Logo (`logo/principal.webp`) y fotos |

## Idiomas

Español es el idioma por defecto (sin prefijo). Al cambiar un texto en `src/data/es/` o `src/i18n/ui/es.ts`,
actualiza también las demás traducciones; `npm run check` avisa si a un idioma le falta un campo.

## Pendiente de confirmar

- Dirección, horario y tarifas del box (`src/data/box.json` → campos marcados con `"pendiente": true`).
- Pesos y repeticiones HYROX: comprobar con el reglamento oficial de la temporada en hyrox.com.
- Formulario de contacto: ahora abre WhatsApp / email con el mensaje rellenado. Conectar a un endpoint (Formspree, API propia…) cuando exista.

## Despliegue

Cada push a `master` publica la web en GitHub Pages (`.github/workflows/deploy.yml`) en
https://arnauj.github.io/morecoaching/. La ruta base se controla con `SITE_URL` y `BASE_PATH`;
para un dominio propio en la raíz basta con no definirlas.
