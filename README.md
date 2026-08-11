# Swapnil Gavit — Portfolio

Premium, dark-mode-first personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, React Router, React Icons, Three.js and EmailJS.

## Getting started

This project was scaffolded without internet access, so dependencies have **not** been installed yet. On a machine with internet access:

```bash
cd swapnil-portfolio
npm install
npm run dev       # start local dev server
npm run build      # production build (outputs to dist/)
npm run preview    # preview the production build
```

## Before you launch

All editable content lives in one place: `src/data/content.js`. Update it with your real details, then search the codebase for `PLACEHOLDER` to find every value that still needs a real value:

- **Resume** — replace `public/resume-swapnil-gavit.pdf` with your real resume (keep the same filename), or update `personal.resumeUrl` in `content.js`.
- **Contact links** — `socials` in `content.js` (LinkedIn, GitHub, Twitter, Instagram) and `personal.phone` / `personal.location`.
- **GitHub username** — `githubUsername` in `content.js`, used by the GitHub activity widget on the homepage.
- **Contact form** — `src/pages/Contact.jsx` has three `EMAILJS_*` constants at the top. Create a free account at https://www.emailjs.com and paste in your Service ID, Template ID and Public Key. Until configured, the form falls back to opening the visitor's email client.
- **Photos** — the Travel and Gallery pages currently use gradient placeholders (`galleryPhotos` / `travelDestinations` in `content.js`). Add real images to `src/assets` and swap the gradient divs for `<img>` tags.
- **Blog posts** — `blogPosts` in `content.js` has excerpts only; full post bodies are placeholders in `src/pages/BlogPost.jsx`.
- **SEO domain** — `index.html` references `https://swapnilgavit.com` in canonical/OG tags and structured data; update if your domain differs.

## Structure

```
src/
  components/   Reusable UI (navbar, footer, cards, map, animations, widgets)
  context/      Theme (dark/light) context
  data/         All site content — edit this file first
  pages/        One file per route
```

## Notes

- Dark mode is the default; the toggle in the navbar switches to light and persists via localStorage.
- The GitHub contributions widget and visitor counter work client-side; the GitHub widget calls the public GitHub REST API (no auth) and falls back to an illustrative pattern if the request fails.
- PWA: `public/manifest.json` and a `theme-color` meta tag are included. For full offline support, add a service worker (e.g. via `vite-plugin-pwa`).
- No backend is required for the site to run — the contact form uses EmailJS (client-side) or a `mailto:` fallback.
