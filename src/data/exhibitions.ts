import type { Exhibition } from '../types';

export const exhibitionsList: Exhibition[] = [
  {
    id: 'exhib-2025-next',
    titre: 'Vibrations du Vivant — Art & Biologie',
    lieu: 'Espace d’Art Contemporain',
    ville: 'Montpellier',
    date_debut: '2025-04-15',
    date_fin: '2025-05-30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    affiche_image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    lien: '/contact?motif=exposition',
    en_cours: true
  },
  {
    id: 'exhib-igmm-2023',
    titre: 'Au fil des temps — Dialogue Peinture & Science',
    lieu: 'IGMM (Institut de Génétique Moléculaire)',
    ville: 'Montpellier',
    date_debut: '2023-10-12',
    date_fin: '2023-12-15',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    affiche_image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'exhib-2022-clapiers',
    titre: 'Matières Silencieuses',
    lieu: 'Galerie de l’Ancien Presbytère',
    ville: 'Castelnau-le-Lez',
    date_debut: '2022-05-04',
    date_fin: '2022-05-22',
    description: 'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.',
    affiche_image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'exhib-2021-printemps',
    titre: 'Éclosions & Micro-cosmos',
    lieu: 'Espace Bagouet',
    ville: 'Montpellier',
    date_debut: '2021-09-10',
    date_fin: '2021-10-02',
    description: 'Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci.',
    affiche_image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop'
  }
];
