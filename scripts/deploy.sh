#!/usr/bin/env bash

# Arrêt du script en cas d'erreur
set -e

echo "==============================================="
echo "  🚀 Déploiement sur GitHub Pages"
echo "==============================================="

echo "1. Construction du projet en cours..."
npm run build

echo "2. Ajout de 404.html et .nojekyll pour GitHub Pages..."
cp dist/index.html dist/404.html
touch dist/.nojekyll

# Détection de l'URL du dépôt distant
REMOTE_URL=$(git config --get remote.origin.url || true)

if [ -z "$REMOTE_URL" ]; then
  echo ""
  echo "⚠️ Aucun dépôt distant 'origin' n'a été détecté."
  echo "👉 Liez d'abord votre projet à votre dépôt GitHub :"
  echo "   git remote add origin https://github.com/<VOTRE-NOM-UTILISATEUR>/<NOM-DU-DEPOT>.git"
  echo "   git push -u origin main"
  echo "Puis relancez : npm run deploy"
  exit 1
fi

echo "3. Publication du dossier dist sur la branche gh-pages..."
cd dist

# Initialiser un dépôt git éphémère dans dist pour isoler le déploiement
rm -rf .git
git init
git checkout -B gh-pages
git add -A
git commit -m "deploy: publication GitHub Pages $(date +'%Y-%m-%d %H:%M:%S')"

git push -f "$REMOTE_URL" gh-pages:gh-pages

cd ..

echo ""
echo "==============================================="
echo "  ✅ Déploiement terminé avec succès !"
echo "  Votre site sera accessible sur GitHub Pages."
echo "==============================================="
