# VYRA — site

Internal operating doc, packaged as a Vite static site so it deploys cleanly on Vercel.

## Run locally
```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # outputs static files to /dist
```

## Deploy on Vercel
Push this folder to a GitHub repo, then import it in Vercel:

- **Framework Preset:** Vite
- **Build Command:** `npm run build` (auto-filled)
- **Output Directory:** `dist` (auto-filled)
- **Install Command:** `npm install` (auto-filled)

Vercel detects the Vite preset from `package.json` and the build just works.

## Notes
- `index.html` is the entire page (inline CSS + JS, no dependencies).
- To deploy the **public landing page** instead, replace `index.html` with that file.
- This doc is **public** once deployed — anyone with the URL can read it.
  For privacy, enable Vercel Deployment Protection (paid) or host it somewhere access-controlled.
