# Quick Start - Dimake Landing

## Commandes essentielles

### 🚀 Développement

```bash
npm run dev
```
→ Ouvre http://localhost:3000 avec hot reload

### ✅ Validation avant push

```bash
npm run validate
```
→ Vérifie que tout compile correctement

### 🏭 Préproduction locale

```bash
npm run preproduction
```
→ Build + démarre en mode production sur http://localhost:3000

### 📤 Déploiement

```bash
git add .
git commit -m "Vos modifications"
git push origin main
```
→ Déploiement automatique sur Vercel

## Workflow quotidien

1. **Développer** : `npm run dev`
2. **Modifier** : Éditez les fichiers dans `app/`
3. **Valider** : `npm run validate`
4. **Pousser** : `git push origin main`

## Fichiers importants

- `app/page.tsx` - Contenu de la page d'accueil
- `app/layout.tsx` - Structure HTML et metadata
- `app/globals.css` - Styles globaux
- `public/images/` - Images et assets

## Besoin d'aide ?

- Documentation complète : `WORKFLOW.md`
- Structure du projet : `README.md`

## URLs

- **Local** : http://localhost:3000
- **Production** : https://dimake-landing-woc62vzra.vercel.app
- **Dashboard Vercel** : https://vercel.com/jean-christophe-poirots-projects-79270c3a/dimake-landing
- **GitHub** : https://github.com/jcpoirot/dimake-landing
