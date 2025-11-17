# Workflow de développement Dimake Landing

## Architecture

- **Local (dev)** : Développement et tests en local sur votre machine
- **Preview (Vercel)** : Prévisualisation automatique sur chaque commit/branche
- **Production (Vercel)** : Version live sur dimake.io (après validation)

## Commandes disponibles

### Développement local

```bash
npm run dev
```
Lance le serveur de développement sur http://localhost:3000
- Hot reload activé (les changements sont visibles immédiatement)
- Turbopack activé pour des builds ultra-rapides

### Build de production local

```bash
npm run build
```
Compile le projet pour vérifier qu'il n'y a pas d'erreurs avant de pousser

### Prévisualisation du build local

```bash
npm run build && npm start
```
Lance le serveur de production en local sur http://localhost:3000

### Linter (vérification du code)

```bash
npm run lint
```
Vérifie la qualité du code (sera ajouté si nécessaire)

## Workflow recommandé

### 1. Développement local

```bash
# Assurez-vous d'être à jour avec la branche main
git pull origin main

# Lancez le serveur de développement
npm run dev

# Ouvrez http://localhost:3000 dans votre navigateur
# Faites vos modifications - elles apparaissent en temps réel
```

### 2. Test du build en local (préproduction)

```bash
# Arrêtez le serveur de dev (Ctrl+C)

# Buildez le projet
npm run build

# Si le build réussit, lancez la version de production en local
npm start

# Vérifiez sur http://localhost:3000 que tout fonctionne
```

### 3. Commit et push (déploiement preview)

```bash
# Ajoutez vos fichiers modifiés
git add .

# Créez un commit
git commit -m "Description de vos modifications"

# Poussez sur GitHub
git push origin main
```

**Vercel déploiera automatiquement** :
- Un preview si vous êtes sur une branche de feature
- La production si vous poussez sur `main`

### 4. Workflow avec branches (recommandé pour des changements importants)

```bash
# Créez une branche pour votre feature
git checkout -b feature/nouvelle-section

# Faites vos modifications et testez localement
npm run dev

# Commitez vos changements
git add .
git commit -m "Ajout de la nouvelle section"

# Poussez la branche
git push origin feature/nouvelle-section

# Vercel créera automatiquement un déploiement preview
# Vous recevrez une URL unique pour tester (ex: dimake-landing-git-feature-nouvelle-section.vercel.app)

# Une fois validé, mergez dans main via GitHub ou en ligne de commande
git checkout main
git merge feature/nouvelle-section
git push origin main

# Cela déclenchera le déploiement en production
```

## URLs des environnements

- **Local** : http://localhost:3000
- **Preview Vercel** : URL unique générée pour chaque branche/commit
- **Production Vercel** : https://dimake-landing-woc62vzra.vercel.app
- **Production (futur)** : https://dimake.io (après configuration DNS)

## Vérifications avant de pousser

1. ✅ `npm run build` réussit sans erreurs
2. ✅ `npm start` fonctionne et le site s'affiche correctement
3. ✅ Testez toutes les fonctionnalités modifiées
4. ✅ Vérifiez le responsive (mobile, tablette, desktop)

## Rollback en cas de problème

Si un déploiement en production pose problème :

```bash
# Retournez au commit précédent
git revert HEAD
git push origin main

# Ou depuis le dashboard Vercel :
# Allez dans "Deployments" et cliquez sur "Promote to Production"
# sur un déploiement antérieur fonctionnel
```

## Astuces

- Gardez toujours `main` stable et fonctionnel
- Utilisez des branches pour les expérimentations
- Consultez les logs de build Vercel si un déploiement échoue
- Les déploiements preview sont parfaits pour montrer des changements avant validation
