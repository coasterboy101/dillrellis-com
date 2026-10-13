# dillrellis-com

Main repository for my personal website hosted at dillrellis.com.

Built with Vite and React. The production build is static files served by a small Node process behind an Nginx reverse proxy on a DigitalOcean droplet.

## Development

Requires Node.js 22 or newer.

```sh
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm start         # serve dist/ the way the droplet does, at http://127.0.0.1:3000
```

Commit the `package-lock.json` that `npm install` generates: the droplet installs with `npm ci`, which fails without it.

Day-to-day work happens on the `dev` branch. Merge `dev` into `main` to release.

## Editing content

| What | Where |
| --- | --- |
| Home intro | `src/pages/Home.jsx` |
| Project list | `src/data/projects.js` |
| Bio, skills, contact links | `src/pages/About.jsx` |
| Colors and fonts | variables at the top of `src/styles.css` |
| Nav and footer | `src/components/Layout.jsx` |
