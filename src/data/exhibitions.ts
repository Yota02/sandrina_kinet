import type { Exhibition } from '../types';

export const exhibitionsList: Exhibition[] = [
  {
    id: 'exhib-2025-next',
    titre: 'Vibrations du Vivant — Art & Biologie',
    lieu: 'Espace d’Art Contemporain & Recherche',
    ville: 'Montpellier',
    date_debut: '2025-04-15',
    date_fin: '2025-05-30',
    description: 'Une grande rétrospective croisant recherche fondamentale et création plastique, présentant 25 toiles inédites de la série « Au fil des temps » et des installations de toiles libres.',
    affiche_image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    lien: '/contact?motif=exposition',
    en_cours: true
  },
  {
    id: 'exhib-igmm-2023',
    titre: 'Au fil des temps — Dialogue Peinture & Science',
    lieu: 'IGMM (Institut de Génétique Moléculaire de Montpellier)',
    ville: 'Montpellier',
    date_debut: '2023-10-12',
    date_fin: '2023-12-15',
    description: 'Exposition personnelle au cœur du pôle scientifique CNRS / Université de Montpellier, interrogeant la notion du temps biologique, de la dégradation et de la résilience cellulaire à travers la matière picturale.',
    affiche_image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'exhib-2022-clapiers',
    titre: 'Matières Silencieuses',
    lieu: 'Galerie de l’Ancien Presbytère',
    ville: 'Castelnau-le-Lez',
    date_debut: '2022-05-04',
    date_fin: '2022-05-22',
    description: 'Focus sur les toiles à l’huile et pigments minéraux, explorant la texture brute de la toile de lin et les nuances d’ocres.',
    affiche_image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'exhib-2021-printemps',
    titre: 'Éclosions & Micro-cosmos',
    lieu: 'Espace Bagouet / Exposition collective',
    ville: 'Montpellier',
    date_debut: '2021-09-10',
    date_fin: '2021-10-02',
    description: 'Rencontre entre plasticiens montpelliérains autour de l’infiniment petit et des structures du vivant.',
    affiche_image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop'
  }
];
