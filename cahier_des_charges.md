
# Cahier des Charges — Site Portfolio « Sandrina Kinet »

## 1. Présentation générale du projet

### 1.1 Contexte et objectifs

**Conception et développement d'un site web portfolio statique (100 % frontend) destiné à présenter l'univers pictural de ** **Sandrina Kinet** **, artiste peintre (également chercheuse en biologie à Montpellier, ayant notamment présenté l'exposition ***« Au fil des temps »* à l'IGMM).

* **Objectif principal :** Offrir un écrin numérique sobre, élégant et ultra-rapide pour mettre en valeur les œuvres, la démarche artistique et le parcours d'exposition.
* **Objectifs secondaires :** Faciliter la prise de contact (demandes d'acquisition, galeries, organisateurs d'expositions) avec une architecture légère, sans maintenance serveur ni base de données.

### 1.2 Cibles

* **Collectionneurs et acheteurs potentiels (particuliers, entreprises).**
* **Galeries d'art, curateurs et organisateurs d'expositions.**
* **Visiteurs curieux souhaitant découvrir la démarche Art & Science de l'artiste.**

## 2. Direction artistique et identité visuelle

**Le design adopte une approche ****"Galerie Épurée & Chronologique"** pour laisser toute la place aux pigments, aux textures et à la lumière des toiles.

* **Palette chromatique :**
  * **Fond principal :** Blanc cassé / papier galerie (`<span class="selected">#FAF9F6</span>`) pour éviter l'éblouissement du blanc pur.
  * **Fond secondaire (cartels, encarts) :** Gris pierre très doux (`<span class="selected">#F0EFEA</span>`).
  * **Texte principal :** Anthracite profond (`<span class="selected">#1C1C1E</span>`).
  * **Couleur d'accentuation :** Doré mat / ocre subtil (`<span class="selected">#9E7B4F</span>`) ou vert sauge discret selon la dominante des œuvres.
* **Typographie :**
  * **Titres et citations :** Police Serif éditoriale élégante (*Cormorant Garamond* ou  *Playfair Display* **).**
  * **Corps de texte et fiches techniques :** Police Sans-Serif ultra-lisible (*Inter* ou  *Plus Jakarta Sans* **).**
* **Animations :** Transitions douces en fondu ( *fade-in* **), léger effet de parallaxe sur la page d'accueil, absence d'effets intrusifs.**

## 3. Arborescence et spécifications fonctionnelles

```
Accueil
├── Œuvres (Galerie filtrable + Vue détaillée)
├── Au fil des temps (Frise chronologique / Séries)
├── Démarche & Parcours (Biographie, lien Art/Science, Expositions)
└── Contact & Acquisition (Formulaire pré-remplissable)

```

### 3.1 Page d'Accueil

* **Hero Section :** Mise en avant d'une toile emblématique en grand format avec le nom de l'artiste et un appel à l'action discret (« Découvrir la galerie »).
* **Sélection d'œuvres phares :** Grille asymétrique présentant 3 à 4 toiles récentes ou majeures.
* **Extrait de démarche :** Court texte d'introduction renvoyant vers la page complète.
* **Actualité / Prochaine exposition :** Encart dynamique piloté par le fichier de données statiques (affiché uniquement si un événement est actif).

### 3.2 Catalogue des Œuvres (`<span class="selected">/oeuvres</span>`)

* **Système de filtres instantanés côté client :**
  * **Par ****Série / Thématique** (ex.  *Au fil des temps* **, ** *Abstractions* **, ** *Paysages* **…).**
  * **Par ****Technique** (Huile sur toile, Acrylique, Technique mixte…).
  * **Par ** **Année de création** **.**
  * **Par ****Statut** (Disponible, Collection privée / Vendue).
* **Grille adaptative :** Affichage respectant les proportions réelles des toiles avec titre, année et pastille discrète de disponibilité.

### 3.3 Fiche détaillée d'une œuvre (`<span class="selected">/oeuvres/:slug</span>`)

* **Visuel Haute Définition avec Mode Loupe / Plein écran :** Zoom profond permettant d'observer le grain de la toile, les empâtements et le travail du pinceau.
* **Mise en situation à l'échelle (« Voir en situation ») :** Génération dynamique côté client d'un aperçu de la toile accrochée sur un mur type (avec un repère d'échelle type fauteuil ou plante) calculé automatiquement à partir des dimensions réelles renseignées dans les données du projet.
* **Cartel technique :** Titre, année, dimensions ($H \times L$** en cm), support, médium, statut (Disponible / Vendu), prix (optionnel, affichable à la demande).**
* **Note de l'artiste :** Court texte expliquant la genèse ou l'inspiration de la toile.
* **Bouton d'action :***« Se renseigner sur cette œuvre »* — redirige vers le formulaire de contact en pré-remplissant automatiquement l'objet avec le nom et la référence du tableau.

### 3.4 Parcours « Au fil des temps » (`<span class="selected">/chronologie</span>`)

* **Frise chronologique horizontale (sur ordinateur) / verticale (sur mobile) retraçant l'évolution stylistique de l'artiste par grandes périodes ou séries, mêlant œuvres achevées et photos d'atelier/esquisses.**

### 3.5 Démarche artistique & Expositions (`<span class="selected">/a-propos</span>`)

* **Texte de démarche :** Présentation du double regard scientifique (biologie, observation du vivant, notion du temps) et pictural.
* **Portrait de l'artiste** dans son atelier.
* **Historique des expositions :** Liste structurée (Année, Titre de l'exposition, Lieu, Ville) mettant en avant les expositions passées (ex.  *IGMM Montpellier* **) et futures.**

### 3.6 Contact & Acquisition (`<span class="selected">/contact</span>`)

* **Formulaire de contact géré sans serveur via un service tiers léger (** **Formspree** **, ****Web3Forms** ou  **EmailJS** **) avec sélection du motif : ** *Acquisition d'une œuvre* **, ** *Proposition d'exposition / Galerie* **, ** *Autre demande* **.**
* **Pré-remplissage automatique via paramètre d'URL (**`<span class="selected">?oeuvre=nom-du-tableau</span>`).
* **Liens vers les réseaux sociaux professionnels/artistiques (Instagram, etc.).**

## 4. Architecture technique (100 % Frontend)

### 4.1 Stack technique recommandée

| **Couche**                | **Technologie recommandée**                                                          | **Justification**                                                                                                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework Frontend**    | **Vue.js 3**(Vite)                                                                    | **Génération de site statique (SSG) ultra-rapide, routage fluide, optimisation native des assets locaux.**                                                                                |
| **Styles**                | **Tailwind CSS**                                                                      | **Développement rapide, design system cohérent et bundle CSS minimal.**                                                                                                                   |
| **Stockage des médias**  | **Dossier local du projet (**`<span class="selected">src/assets/oeuvres/</span>`)   | **Les images sont directement incluses dans le dépôt et optimisées automatiquement au moment du***build*(conversion en**WebP / AVIF**et génération de plusieurs résolutions). |
| **Données structurées** | **Fichiers locaux****JSON / TypeScript**(`<span class="selected">src/data/</span>`) | **Catalogue des œuvres, séries et expositions stocké sous forme d'objets typés, facile à mettre à jour sans base de données.**                                                       |
| **Formulaire de contact** | **Web3Forms**ou**Formspree**                                                    | **Envoi d'emails directement depuis le navigateur sans serveur backend.**                                                                                                                   |
| **Hébergement**          | **Netlify** **,****Vercel**ou**GitHub Pages**                             | **Hébergement statique gratuit/très économique avec CDN mondial, HTTPS automatique et déploiement continu via Git.**                                                                    |

### 4.2 Structure des données locales (`<span class="selected">src/data/</span>`)

**Les informations des tableaux sont centralisées dans un fichier **`<span class="selected">artworks.ts</span>` (ou `<span class="selected">artworks.json</span>`) :

* **Œuvre (`<span class="selected">Artwork</span>`) :**`<span class="selected">id</span>`, `<span class="selected">titre</span>`, `<span class="selected">slug</span>`, `<span class="selected">annee</span>`, `<span class="selected">largeur_cm</span>`, `<span class="selected">hauteur_cm</span>`, `<span class="selected">technique</span>`, `<span class="selected">support</span>`, `<span class="selected">description</span>`, `<span class="selected">statut</span>` (`<span class="selected">disponible</span>` | `<span class="selected">reserve</span>` | `<span class="selected">vendu</span>`), `<span class="selected">prix</span>`, `<span class="selected">image_principale</span>` (chemin local), `<span class="selected">images_details[]</span>`, `<span class="selected">ordre_affichage</span>`, `<span class="selected">serie_id</span>`.
* **Série (`<span class="selected">Series</span>`) :**`<span class="selected">id</span>`, `<span class="selected">nom</span>`, `<span class="selected">slug</span>`, `<span class="selected">description</span>`, `<span class="selected">periode</span>`, `<span class="selected">ordre</span>`.
* **Exposition (`<span class="selected">Exhibition</span>`) :**`<span class="selected">id</span>`, `<span class="selected">titre</span>`, `<span class="selected">lieu</span>`, `<span class="selected">ville</span>`, `<span class="selected">date_debut</span>`, `<span class="selected">date_fin</span>`, `<span class="selected">description</span>`, `<span class="selected">affiche_image</span>`.

### 4.3 Performance, SEO et Protection des images

* **Performance :** Score Lighthouse supérieur à $95/100$** grâce au rendu statique ; chargement différé (** *lazy loading* **) des images hors écran et préchargement des images critiques.**
* **Responsive Design :** Adaptation complète mobile, tablette et écrans haute résolution (Retina/4K) pour le rendu fidèle des couleurs.
* **SEO :** Génération statique de toutes les pages et des balises OpenGraph (pour que le partage d'un tableau sur les réseaux affiche sa photo et son titre), balises `<span class="selected">alt</span>` descriptives, sitemap XML généré automatiquement au  *build* **.**
* **Protection des œuvres :** Désactivation du clic droit basique sur les images HD et ajout de métadonnées EXIF/IPTC de copyright avant intégration dans le dossier `<span class="selected">assets</span>`.

## 5. Planning prévisionnel de réalisation

| **Phase**                                  | **Livrables**                                                                                                                                          | **Durée estimée**   |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| **1. Cadrage & Maquettage**                | **Wireframes, choix définitif de la charte graphique, validation sur 2 écrans types (Accueil + Fiche œuvre).**                                      | **4 à 5 jours**      |
| **2. Préparation des médias & données** | **Optimisation des photos des toiles, création de l'arborescence**`<span class="selected">src/assets/</span>`et structuration des fichiers JSON/TS. | **3 à 4 jours**      |
| **3. Développement Frontend**             | **Intégration des pages, filtres dynamiques, mode loupe HD, outil de mise en situation à l'échelle et formulaire Web3Forms.**                       | **1,5 à 2 semaines** |
| **4. Recette & Mise en ligne**             | **Tests multi-navigateurs/mobiles, optimisation SEO, configuration du nom de domaine et déploiement sur Vercel/Netlify.**                             | **2 à 3 jours**      |
