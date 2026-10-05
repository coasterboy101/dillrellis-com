# dillrellis-com

Main repository for my personal website hosted at dillrellis.com.

Built with Vite and React. The production build is static files hosted on Netlify.

## Development

Requires Node.js 22 or newer.

```sh
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

Commit the `package-lock.json` that `npm install` generates so Netlify builds are reproducible.

Day-to-day work happens on the `dev` branch. Merge `dev` into `main` to release.

## Editing content

| What | Where |
| --- | --- |
| Home intro | `src/pages/Home.jsx` |
| Project list | `src/data/projects.js` |
| Bio, skills, contact links | `src/pages/About.jsx` |
| Colors and fonts | variables at the top of `src/styles.css` |
| Nav and footer | `src/components/Layout.jsx` |

## Deployment

The site is deployed by Netlify, configured in `netlify.toml`: it runs `npm run build` on Node 22, publishes `dist/`, rewrites unknown paths to `index.html` for client-side routing, and sets long-lived cache headers on `/assets/`.

| Branch | Deploys to |
| --- | --- |
| `main` | Production (dillrellis.com) |
| `dev` | Branch deploy at `dev--<site-name>.netlify.app` |

Pull requests get their own deploy previews.

### One-time Netlify setup

1. In Netlify, choose **Add new site** > **Import an existing project** and pick the `coasterboy101/dillrellis-com` GitHub repository. The build settings are read from `netlify.toml`.
2. Under **Site configuration** > **Build & deploy** > **Branches and deploy contexts**, keep `main` as the production branch and add `dev` to the branch deploys.
3. Under **Domain management**, add `dillrellis.com` and follow the DNS instructions. Netlify provisions HTTPS automatically.