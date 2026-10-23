## Deployment

The site runs on a DigitalOcean droplet (Debian 13 "trixie", 64-bit). Everything the droplet needs is in `deploy/`:

| File | Purpose |
| --- | --- |
| `deploy/nginx.conf` | Nginx site: reverse proxies `dillrellis.com` to `127.0.0.1:3000`, gzips responses, and sets cache headers (`/assets/` cached forever, everything else revalidated) |
| `deploy/dillrellis-com.service` | systemd unit that runs `npm start`, which serves `dist/` on `127.0.0.1:3000` with an `index.html` fallback for client-side routes |
| `deploy/deploy.sh` | Pulls a branch, runs `npm ci` and `npm run build`, and restarts the service |
| `deploy/update-deps.sh` | Updates the npm packages `npm audit` reports as vulnerable, rebuilds, and restarts the service |

Requests flow: browser -> Nginx (ports 80/443, TLS) -> Node (`sirv`, loopback port 3000) -> `dist/`.

Only `main` is deployed. There are no automatic deploys, branch deploys, or pull request previews; a release goes live when you run the deploy script.

### Deploying a release

Merge `dev` into `main`, push, then on the droplet:

```sh
ssh root@<droplet-ip> /srv/dillrellis-com/deploy/deploy.sh
```

The script discards any local changes in `/srv/dillrellis-com` and resets it to `origin/main`. Pass a branch name as an argument to deploy something else, for example `deploy.sh dev`.

### Updating vulnerable packages

`deploy/update-deps.sh` runs `npm audit` in the checkout and updates every package it reports. A vulnerable direct dependency goes to its latest release, even a new major version. A vulnerable transitive dependency goes to the newest version its dependents' ranges allow. Once the build passes, the script restarts the service and prints the changes and whatever `npm audit` still reports. If an install or the build fails, it restores `package.json` and `package-lock.json`, rebuilds the old versions and restarts, so the site keeps running.

```sh
ssh root@<droplet-ip> /srv/dillrellis-com/deploy/update-deps.sh --dry-run   # list what would be updated
ssh root@<droplet-ip> /srv/dillrellis-com/deploy/update-deps.sh
```

The next `deploy.sh` resets the checkout to `origin/main` and undoes the update. Copy the two files back, commit them on `dev`, and release them as usual:

```sh
scp root@<droplet-ip>:/srv/dillrellis-com/package.json root@<droplet-ip>:/srv/dillrellis-com/package-lock.json .
```

A package that `npm audit` still reports has no fixed version within its dependents' ranges. It needs a new upstream release or an `overrides` entry in `package.json`.

### Droplet dependencies

All of these must be installed on the droplet before the first deploy.

| Dependency | Debian package | Needed for |
| --- | --- | --- |
| Nginx | `nginx` | Reverse proxy and TLS termination |
| Node.js 22 or newer, with npm | none; installed with [NVM](https://github.com/nvm-sh/nvm) | Building the site (`npm ci`, `npm run build`) and running the server (`npm start`). Debian 13's own `nodejs` package is Node 20, which is too old |
| Git | `git` | Cloning the repository and pulling releases |
| curl and CA certificates | `curl`, `ca-certificates` | Downloading NVM and Node |
| Certbot with the Nginx plugin | `certbot`, `python3-certbot-nginx` | Issuing and renewing the Let's Encrypt certificate |
| ufw (optional) | `ufw` | Firewall, if you are not using a DigitalOcean cloud firewall |

systemd and `runuser` (from `util-linux`) are also required and are part of every Debian install. The npm packages, including the `sirv-cli` static server, are installed by `npm ci` during each deploy.

`npm ci` and the Vite build can run out of memory on the smallest (512 MB) droplet. Use a 1 GB droplet or add swap.

### One-time droplet setup

Run as root on a fresh Debian 13 droplet.

1. Install the dependencies:

   ```sh
   apt update
   apt install -y nginx git curl ca-certificates certbot python3-certbot-nginx ufw
   ```

2. Install NVM system-wide in `/usr/local/nvm`, use it to install Node 22, and link `node`, `npm` and `npx` into `/usr/local/bin`:

   ```sh
   export NVM_DIR=/usr/local/nvm
   mkdir -p "$NVM_DIR"
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
   . "$NVM_DIR/nvm.sh"
   nvm install 22
   nvm alias default 22
   NODE_BIN="$(dirname "$(nvm which 22)")"
   ln -sf "$NODE_BIN/node" "$NODE_BIN/npm" "$NODE_BIN/npx" /usr/local/bin/
   node --version   # must print v22 or newer
   ```

   NVM normally installs into the current user's home directory, but the service user's home is the repository checkout, and NVM only works in shells that source `nvm.sh`. Installing it in `/usr/local/nvm` and linking the binaries into `/usr/local/bin` puts Node on the `PATH` for root, for `deploy.sh` (which runs npm as the service user) and for the systemd unit (which runs `/usr/local/bin/npm`). The installer also adds NVM to root's `~/.bashrc`, so `nvm` is available in later root shells.

3. Create the service user and clone the repository into `/srv/dillrellis-com`:

   ```sh
   useradd --system --user-group --home-dir /srv/dillrellis-com --shell /usr/sbin/nologin dillrellis
   install -d -o dillrellis -g dillrellis /srv/dillrellis-com
   runuser -u dillrellis -- git clone https://github.com/coasterboy101/dillrellis-com.git /srv/dillrellis-com
   ```

   The HTTPS clone only works while the GitHub repository is public. If it is private, add a read-only deploy key for the `dillrellis` user and clone over SSH instead.

4. Install the systemd unit and run the first deploy, which builds the site and starts the server:

   ```sh
   cp /srv/dillrellis-com/deploy/dillrellis-com.service /etc/systemd/system/
   systemctl daemon-reload
   systemctl enable dillrellis-com
   /srv/dillrellis-com/deploy/deploy.sh
   curl -I http://127.0.0.1:3000/   # expect HTTP/1.1 200 OK
   ```

5. Enable the Nginx site:

   ```sh
   cp /srv/dillrellis-com/deploy/nginx.conf /etc/nginx/sites-available/dillrellis.com
   sudo ln -s /etc/nginx/sites-available/dillrellis.com /etc/nginx/sites-enabled/
   sudo rm /etc/nginx/sites-enabled/default
   nginx -t && systemctl reload nginx
   ```

6. Open the firewall:

   ```sh
   ufw allow 22/tcp
   ufw allow 80/tcp
   ufw allow 443/tcp
   ufw enable
   ```

7. Point the `A` records for `dillrellis.com` and `www.dillrellis.com` at the droplet's IP address. Once they resolve, get the certificate:

   ```sh
   certbot --nginx -d dillrellis.com -d www.dillrellis.com
   ```

   Certbot adds the HTTPS server block and the HTTP-to-HTTPS redirect to `/etc/nginx/sites-available/dillrellis.com` and renews the certificate automatically.

If `deploy/nginx.conf` or `deploy/dillrellis-com.service` changes later, copy it to the droplet again as in steps 4 and 5. Copying `nginx.conf` over the installed file removes Certbot's additions, so rerun the `certbot --nginx` command afterwards.

### Upgrading Node

The links in `/usr/local/bin` point at one specific Node version, so after installing a new one with NVM, relink them and redeploy. As root:

```sh
nvm install 22            # or a newer major version
nvm alias default 22
NODE_BIN="$(dirname "$(nvm which default)")"
ln -sf "$NODE_BIN/node" "$NODE_BIN/npm" "$NODE_BIN/npx" /usr/local/bin/
/srv/dillrellis-com/deploy/deploy.sh
```

`nvm uninstall <version>` removes an old version once nothing links to it.

### Troubleshooting

```sh
systemctl status dillrellis-com     # is the Node server running?
journalctl -u dillrellis-com -n 50  # its logs
nginx -t                            # is the Nginx config valid?
tail /var/log/nginx/error.log       # a 502 here means the Node server is down
```
