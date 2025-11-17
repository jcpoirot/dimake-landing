# Dimake Landing Page

Landing page minimaliste pour Dimake - Conseil en transformation digitale

## Stack technique

- **Framework** : Next.js 16 avec App Router
- **Langage** : TypeScript
- **Styling** : Tailwind CSS 4
- **Hébergement** : Vercel
- **Analytics** : Vercel Analytics

## Installation

```bash
# Cloner le repository
git clone https://github.com/jcpoirot/dimake-landing.git
cd dimake-landing

# Installer les dépendances
npm install
```

## Démarrage rapide

```bash
# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement avec Turbopack
- `npm run build` - Compile le projet pour la production
- `npm start` - Lance le serveur de production en local
- `npm run lint` - Vérifie la qualité du code

## Structure du projet

```
dimake-landing/
├── app/
│   ├── globals.css      # Styles globaux + Tailwind
│   ├── layout.tsx       # Layout principal avec metadata
│   └── page.tsx         # Page d'accueil
├── public/
│   └── images/
│       └── logo.png     # Logo Dimake
├── WORKFLOW.md          # Documentation du workflow de développement
└── package.json
```

## Workflow de développement

Consultez [WORKFLOW.md](./WORKFLOW.md) pour le processus complet de développement et déploiement.

### En résumé

1. **Développement local** : `npm run dev`
2. **Test du build** : `npm run build && npm start`
3. **Déploiement** : `git push origin main`

Vercel déploie automatiquement chaque push sur `main` en production.

## Déploiements

- **Production** : https://dimake-landing-woc62vzra.vercel.app
- **Repository** : https://github.com/jcpoirot/dimake-landing
- **Dashboard Vercel** : https://vercel.com/jean-christophe-poirots-projects-79270c3a/dimake-landing

## Configuration du domaine custom

Pour pointer dimake.io vers ce site :

1. Ajoutez le domaine dans les settings Vercel
2. Configurez les enregistrements DNS chez Gandi selon les instructions Vercel
3. Attendez la propagation DNS (quelques minutes à quelques heures)

## Licence

Propriété de Dimake
