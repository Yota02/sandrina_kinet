export type ArtworkStatus = 'disponible' | 'reserve' | 'vendu';

export interface Artwork {
  id: string;
  titre: string;
  slug: string;
  annee: number;
  largeur_cm: number;
  hauteur_cm: number;
  technique: string;
  support: string;
  description: string;
  note_artiste?: string;
  statut: ArtworkStatus;
  prix?: string; // Ex: "1 200 €" ou "Sur demande"
  image_principale: string;
  images_details?: string[];
  ordre_affichage: number;
  serie_id: string;
  dominant_color?: string; // pour le fond ou le cadre
  ratio?: number; // largeur / hauteur
}

export interface Series {
  id: string;
  nom: string;
  slug: string;
  periode: string;
  description: string;
  ordre: number;
  couverture?: string;
}

export interface Exhibition {
  id: string;
  titre: string;
  lieu: string;
  ville: string;
  date_debut: string;
  date_fin: string;
  description: string;
  affiche_image?: string;
  lien?: string;
  en_cours?: boolean;
}
