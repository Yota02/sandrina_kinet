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
    description: 'Toile majeure explorant les couches successives du temps cellulaire. Les strates d’ocres et de blanc minéral s’entremêlent comme les mémoires inscrites au cœur de nos cellules.',
    note_artiste: '« Dans le laboratoire comme devant le chevalet, le temps n’est jamais linéaire. Il s’accumule, se délite puis renaît sous une autre texture. Cette toile traduit cette lente maturation des pigments déposés au fil des semaines. »',
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
    description: 'Dialogue intime entre la rigueur de l’observation biologique et le lâcher-prise plastique. Tonalités sauge, terre d’ombre et transparences laiteuses.',
    note_artiste: '« Une évocation des membranes biologiques semi-perméables : ce qui passe, ce qui est retenu, ce que le regard devine en transparence. »',
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
    description: 'Une vibration subtile traversant le champ de vision, rappelant la pulsation invisible des molécules et la résonance des tissus organiques.',
    note_artiste: '« La frontière invisible entre deux mondes : le dedans et le dehors, le microscopique et le monumental. »',
    statut: 'vendu',
    prix: 'Collection privée (Montpellier)',
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
    description: 'L’instant sacré de la division, du dédoublement de la vie en deux polarités distinctes baignées d’une clarté dorée intense.',
    note_artiste: '« Quand la science observe le fuseau mitotique au microscope à fluorescence, l’artiste y voit une chorégraphie universelle du renouveau. »',
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
    description: 'Inspirée par la minéralité des garrigues et les embruns du littoral languedocien. Les pigments capturent la morsure du sel et l’éclat de midi.',
    note_artiste: '« Une mémoire de la marche silencieuse dans les reliefs arides du Pic Saint-Loup, où la roche semble respirer avec le soleil. »',
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
    description: 'Une étude de silence et d’épure. La clarté matinale révélant les reliefs légers de la pâte.',
    note_artiste: '« L’œil s’habitue à la pénombre, puis l’infime nuance de blanc devient un monde entier. »',
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
    description: 'La rupture des équilibres initiaux. Jaillissement d’un foyer lumineux doré perçant une nuit organique sombre et veloutée.',
    note_artiste: '« Le premier geste sur la toile vierge est semblable à l’étincelle chimique qui amorce une réaction enzymatique : irréversible et vivante. »',
    statut: 'vendu',
    prix: 'Collection particulière (Paris)',
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
    description: 'Exploration de la viscosité et des gradients de diffusion. Une pièce contemplative où la lumière semble émaner de l’intérieur même du pigment.',
    note_artiste: '« Laisser la physique des fluides guider la course du pinceau, comme le sang dans les capillaires ou la sève dans les vaisseaux végétaux. »',
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
