# Davolifin — Next.js 14 (App Router) — FR/NL/EN

## Démarrage
```bash
npm i
npm run dev
# http://localhost:3000/fr
```

## Déploiement (Vercel)
- Importer ce repo sur Vercel (Next.js auto-détecté).
- Redirection `/` → `/fr` gérée par `middleware.ts`.
- Routes : `/fr`, `/nl`, `/en`.

## À personnaliser (remplacement rapide)
- Domaine dans metadata/head: `ton-domaine.tld`
- Calendly, téléphone (`tel:+32...`), WhatsApp (`wa.me/32...`)
- Endpoint Formspree du formulaire
- Ajouter `favicon.ico` et `og-image.jpg` dans `/public`
