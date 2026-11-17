# Portfolio Artistique — Sandrina Kinet

Site web portfolio officiel pour **Sandrina Kinet**, artiste peintre et chercheuse en biologie à Montpellier (CNRS / IGMM).

---

## 🎨 Caractéristiques & Fonctionnalités

1. **Accueil & Hero Épuré** :
   - Présentation de la toile emblématique *« Au fil des temps I — Sédimentation »*.
   - Encart dynamique pour les expositions en cours et à venir.
   - Sélection d'œuvres phares et extrait du manifeste Art & Science.

2. **Catalogue Raisonné (`/oeuvres`)** :
   - Filtres instantanés : par **Série** (*Au fil des temps*, *Résonances Cellulaires*, *Horizons & Matières*, *Éclosions*), par **Technique** (Huile, Technique mixte, Acrylique), par **Disponibilité** (Disponible, Réservé, Collection privée), et recherche textuelle.
   - Grille adaptative avec cartels techniques et pastilles d'état.

3. **Fiche Détaillée d'une Œuvre (`/oeuvres/:slug`)** :
   - **Mode Loupe HD & Plein Écran** : Zoom profond interactif (jusqu'à 350 %) avec navigation à la souris / toucher pour examiner les empâtements, pigments et le grain du lin.
   - **Mise en situation à l'échelle (« Voir en situation »)** : Simulation murale calculée dynamiquement à partir des dimensions réelles ($H \times L$ en cm) avec repères d'échelle (canapé 210 cm, plante 140 cm, hauteur sous plafond 2,60 m), changement d'ambiance murale et d'encadrement (châssis nu, caisse bois clair, caisse noire).
   - Cartel complet, note d'intention de l'artiste et bouton de demande d'acquisition pré-remplie.

4. **Parcours « Au fil des temps » (`/chronologie`)** :
   - Frise chronologique retraçant l'évolution stylistique, les séries et les liens étroits avec la recherche biologique à l'IGMM Montpellier.

5. **Démarche & Parcours (`/a-propos`)** :
   - Présentation du double regard biologique (cellules, membranes, temps) et pictural.
   - Portrait de l'artiste dans son atelier.
   - Historique des expositions (IGMM Montpellier, etc.).

6. **Contact & Acquisition (`/contact`)** :
   - Formulaire pré-rempli automatiquement lors d'un clic depuis une œuvre (`?oeuvre=nom-de-la-toile`).
   - Sélection de motif : Acquisition, Proposition d'exposition, Visite d'atelier, Autre.
   - Protection discrète anti-copie sur le clic-droit des toiles.

---

## 🛠️ Stack Technique

- **Framework** : Vue.js 3 (Composition API + `<script setup>`)
- **Build Tool** : Vite 6
- **Langage** : TypeScript
- **Styles** : Tailwind CSS
- **Typographies** : *Cormorant Garamond* (Serif d'art) & *Plus Jakarta Sans* (Sans-serif)
- **Icônes** : Lucide Vue Next

---

## 🚀 Démarrage Rapide

### 1. Lancer le serveur de développement
```bash
npm run dev
```
Le site sera accessible localement sur `http://localhost:5173/`.

### 2. Compiler pour la production
```bash
npm run build
```
Les fichiers statiques optimisés sont générés dans le dossier `dist/`.

### 3. Déployer sur GitHub Pages

#### Option A — Déploiement automatique en 1 commande :
```bash
npm run deploy
```
*Ce script compile le projet, prépare les fichiers `404.html` et `.nojekyll` (nécessaires pour le routage SPA sur GitHub Pages) et publie automatiquement le dossier `dist` sur la branche `gh-pages`.*

#### Option B — Déploiement continu via GitHub Actions (inclus) :
Le fichier [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) est déjà configuré. Dès que vous poussez sur la branche `main` de votre dépôt GitHub, le site se déploie automatiquement sur GitHub Pages.
*(Pensez simplement à activer GitHub Pages dans les paramètres de votre dépôt GitHub : **Settings > Pages > Build and deployment > Source : GitHub Actions**).*

---

## 📁 Comment ajouter ou modifier une œuvre ?

Toutes les œuvres sont centralisées dans [`src/data/artworks.ts`](src/data/artworks.ts). Il suffit d'ajouter un objet :

```typescript
{
  id: 'nouvelle-oeuvre',
  titre: 'Titre du Tableau',
  slug: 'titre-du-tableau',
  annee: 2025,
  largeur_cm: 100,
  hauteur_cm: 80,
  technique: 'Huile et pigments naturels sur lin',
  support: 'Châssis en bois à clés',
  description: 'Description du tableau...',
  note_artiste: '« Note poétique de l\'artiste... »',
  statut: 'disponible', // 'disponible' | 'reserve' | 'vendu'
  prix: '2 200 €',
  image_principale: 'https://...', // ou chemin dans src/assets/oeuvres/
  images_details: ['https://...'],
  ordre_affichage: 9,
  serie_id: 'au-fil-des-temps'
}
```
