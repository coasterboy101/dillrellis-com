# dillrellis-com

Main repository for my personal website hosted at dillrellis.com.

Built with Vite and React. The production build is static files served by nginx in a Docker container.

## Development

Requires Node.js 22 or newer.

```sh
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

Commit the `package-lock.json` that `npm install` generates so image builds are reproducible.

## Editing content

| What | Where |
| --- | --- |
| Home intro | `src/pages/Home.jsx` |
| Project list | `src/data/projects.js` |
| Bio, skills, contact links | `src/pages/About.jsx` |
| Colors and fonts | variables at the top of `src/styles.css` |
| Nav and footer | `src/components/Layout.jsx` |

## Docker

```sh
docker build -t dillrellis-com .
docker run --rm -p 8080:80 dillrellis-com
```

Then open http://localhost:8080.

Every push to `main` runs `.github/workflows/docker-publish.yml`, which builds the image and publishes it to `ghcr.io/coasterboy101/dillrellis-com` tagged `latest` and `sha-<commit>`.

## Unraid

1. The GHCR package is private by default. Either make it public (GitHub > Packages > dillrellis-com > Package settings > Change visibility), or on the Unraid terminal run `docker login ghcr.io` with your GitHub username and a personal access token that has the `read:packages` scope.
2. In the Unraid **Docker** tab, choose **Add Container** and set:
   - **Name:** `dillrellis-com`
   - **Repository:** `ghcr.io/coasterboy101/dillrellis-com:latest`
   - **Network Type:** `bridge`
   - **Add another Path, Port, Variable...** > Port: container port `80`, host port `8080` (or any free port)
3. Apply. The site is at `http://<unraid-ip>:8080`.

No volumes or environment variables are needed. To update after a push, use **Check for Updates** in the Docker tab and apply the update.

To serve the public domain, point your reverse proxy (Nginx Proxy Manager, SWAG, Cloudflare Tunnel, etc.) at `http://<unraid-ip>:8080`.
