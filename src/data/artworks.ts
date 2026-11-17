import type { Artwork } from '../types';

export const artworksList: Artwork[] = [
  {
    id: 'afdt-01',
    titre: 'Au fil des temps I — Sédimentation',
    slug: 'au-fil-des-temps-sedimentation',
    annee: 2024,
    largeur_cm: 116,
    hauteur_cm: 89,
    technique: 'Huile et pigments naturels sur lin brut',
    support: 'Châssis lin de haute facture',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    note_artiste: '« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. »',
    statut: 'disponible',
    prix: '2 800 €',
    image_principale: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=85&w=1600&auto=format&fit=crop',
    images_details: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=85&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=85&w=1400&auto=format&fit=crop'
    ],
    ordre_affichage: 1,
    serie_id: 'au-fil-des-temps',
    dominant_color: '#9E7B4F',
    ratio: 1.3
  },
  {
    id: 'afdt-02',
    titre: 'Chronomorphose II',
    slug: 'chronomorphose-ii',
    annee: 2023,
    largeur_cm: 100,
    hauteur_cm: 100,
    technique: 'Technique mixte et encres végétales',
    support: 'Toile de lin grain moyen',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    note_artiste: '« Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra. »',
    statut: 'disponible',
    prix: '2 400 €',
    image_principale: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=85&w=1600&auto=format&fit=crop',
    images_details: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=85&w=1400&auto=format&fit=crop'
    ],
    ordre_affichage: 2,
    serie_id: 'au-fil-des-temps',
    dominant_color: '#5B7065',
    ratio: 1.0
  },
  {
    id: 'rc-01',
    titre: 'Membranes & Fréquences',
    slug: 'membranes-et-frequences',
    annee: 2023,
    largeur_cm: 81,
    hauteur_cm: 65,
    technique: 'Huile sur toile, empâtements au couteau',
    support: 'Châssis à clés en chêne',
    description: 'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.',
    note_artiste: '« Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. »',
    statut: 'vendu',
    prix: 'Collection privée',
    image_principale: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=85&w=1600&auto=format&fit=crop',
    images_details: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=85&w=1400&auto=format&fit=crop'
    ],
    ordre_affichage: 3,
    serie_id: 'resonances-cellulaires',
    dominant_color: '#B29774',
    ratio: 1.25
  },
  {
    id: 'rc-02',
    titre: 'Mitose Poétique',
    slug: 'mitose-poetique',
    annee: 2022,
    largeur_cm: 130,
    hauteur_cm: 97,
    technique: 'Huile et pigments purs broyés',
    support: 'Toile de lin extra-large',
    description: 'Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
    note_artiste: '« Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. »',
    statut: 'disponible',
    prix: '3 400 €',
    image_principale: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=85&w=1600&auto=format&fit=crop',
    images_details: [
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=85&w=1400&auto=format&fit=crop'
    ],
    ordre_affichage: 4,
    serie_id: 'resonances-cellulaires',
    dominant_color: '#C49B66',
    ratio: 1.34
  },
  {
    id: 'hm-01',
    titre: 'Sillage Méditerranéen',
    slug: 'sillage-mediterraneen',
    annee: 2022,
    largeur_cm: 92,
    hauteur_cm: 73,
    technique: 'Acrylique, sables du Gard et liant mat',
    support: 'Toile tendue sur bois',
    description: 'Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.',
    note_artiste: '« Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. »',
    statut: 'reserve',
    prix: '1 950 €',
    image_principale: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=85&w=1600&auto=format&fit=crop',
    images_details: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=85&w=1400&auto=format&fit=crop'
    ],
    ordre_affichage: 5,
    serie_id: 'horizons-matiere',
    dominant_color: '#8A7A68',
    ratio: 1.26
  },
  {
    id: 'hm-02',
    titre: 'Garrigue Blanche à l’Aube',
    slug: 'garrigue-blanche-a-l-aube',
    annee: 2021,
    largeur_cm: 60,
    hauteur_cm: 60,
    technique: 'Huile et blanc de zinc sur panneau de chêne',
    support: 'Panneau bois apprêté',
    description: 'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.',
    note_artiste: '« Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. »',
    statut: 'disponible',
    prix: '1 100 €',
    image_principale: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=85&w=1600&auto=format&fit=crop',
    images_details: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=85&w=1400&auto=format&fit=crop'
    ],
    ordre_affichage: 6,
    serie_id: 'horizons-matiere',
    dominant_color: '#E5E0D5',
    ratio: 1.0
  },
  {
    id: 'meta-01',
    titre: 'Genèse et Frémissement',
    slug: 'genese-et-fremissement',
    annee: 2020,
    largeur_cm: 120,
    hauteur_cm: 80,
    technique: 'Technique mixte, pigments dorés et encres',
    support: 'Toile de lin belge',
    description: 'Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus.',
    note_artiste: '« Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. »',
    statut: 'vendu',
    prix: 'Collection particulière',
    image_principale: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=85&w=1600&auto=format&fit=crop',
    images_details: [
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=85&w=1400&auto=format&fit=crop'
    ],
    ordre_affichage: 7,
    serie_id: 'metamorphoses',
    dominant_color: '#A88349',
    ratio: 1.5
  },
  {
    id: 'meta-02',
    titre: 'Symphonie des Fluides',
    slug: 'symphonie-des-fluides',
    annee: 2019,
    largeur_cm: 80,
    hauteur_cm: 80,
    technique: 'Huile fluide et résines naturelles',
    support: 'Toile sur châssis entoilé',
    description: 'Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc. Sed adipiscing ornare risus. Morbi est est, blandit sit amet, hendrerit sit amet, vulputate ac, leo.',
    note_artiste: '« Vivamus vestibulum ntulla nec ante. Praesent placerat risus quis eros. Fusce pellentesque suscipit nibh. Integer vitae libero ac risus egestas placerat. »',
    statut: 'disponible',
    prix: '1 650 €',
    image_principale: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=85&w=1600&auto=format&fit=crop',
    images_details: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=85&w=1400&auto=format&fit=crop'
    ],
    ordre_affichage: 8,
    serie_id: 'metamorphoses',
    dominant_color: '#637A6D',
    ratio: 1.0
  }
];
