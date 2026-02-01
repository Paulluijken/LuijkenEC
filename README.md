# LuijkenEC — website (Next.js 14 static export)

Dit project bouwt een **statische** website met Next.js 14 (via `output: "export"`).  
De output komt in de map `out/` en kan naar TransIP webroot worden geüpload.

## Lokaal draaien
```bash
npm install
npm run dev
```

## Build (statische export)
```bash
npm install
npm run build
```
Daarna staat je site in `out/`.

## Deploy naar TransIP via GitHub Actions (SFTP/SSH)
Aanbevolen: **SSH key** (geen wachtwoorden in Actions).

### GitHub secrets (Repo → Settings → Secrets and variables → Actions)
- `SSH_HOST` = bijv. `luijkf.ssh.transip.me` (zonder `sftp://`)
- `SSH_USER` = je TransIP SFTP/SSH user (bij jou: `luijkenecnl`)
- `SSH_KEY`  = de private key (ed25519) als multi-line secret

### TransIP webroot (jouw omgeving)
- `/data/sites/web/luijkenecnl/www`

Push naar `main` → build → webroot clean → upload `out/`.
