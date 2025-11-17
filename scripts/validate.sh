#!/bin/bash

# Script de validation avant push
# Usage: npm run validate

echo "🔍 Validation du projet Dimake Landing..."
echo ""

# Couleurs pour les messages
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Compteur d'erreurs
ERRORS=0

# 1. Vérifier que node_modules existe
echo "📦 Vérification des dépendances..."
if [ ! -d "node_modules" ]; then
    echo -e "${RED}❌ node_modules manquant. Exécutez 'npm install'${NC}"
    ERRORS=$((ERRORS + 1))
else
    echo -e "${GREEN}✅ Dépendances OK${NC}"
fi
echo ""

# 2. Build du projet
echo "🏗️  Build du projet..."
if npm run build > /tmp/dimake-build.log 2>&1; then
    echo -e "${GREEN}✅ Build réussi${NC}"
else
    echo -e "${RED}❌ Le build a échoué${NC}"
    echo "Détails de l'erreur :"
    tail -20 /tmp/dimake-build.log
    ERRORS=$((ERRORS + 1))
fi
echo ""

# 3. Vérification TypeScript (si tsconfig existe)
if [ -f "tsconfig.json" ]; then
    echo "📝 Vérification TypeScript..."
    if npx tsc --noEmit > /tmp/dimake-tsc.log 2>&1; then
        echo -e "${GREEN}✅ TypeScript OK${NC}"
    else
        echo -e "${YELLOW}⚠️  Avertissements TypeScript détectés${NC}"
        tail -10 /tmp/dimake-tsc.log
        # Ne pas compter comme erreur bloquante
    fi
    echo ""
fi

# Résumé
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✨ Validation réussie ! Vous pouvez pusher.${NC}"
    echo ""
    echo "Pour pousser vos changements :"
    echo "  git add ."
    echo "  git commit -m \"Votre message\""
    echo "  git push origin main"
    exit 0
else
    echo -e "${RED}❌ $ERRORS erreur(s) détectée(s).${NC}"
    echo -e "${RED}Corrigez les erreurs avant de pusher.${NC}"
    exit 1
fi
