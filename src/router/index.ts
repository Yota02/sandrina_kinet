import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import GalleryView from '../views/GalleryView.vue';
import ArtworkDetailView from '../views/ArtworkDetailView.vue';
import TimelineView from '../views/TimelineView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Accueil — Sandrina Kinet | Artiste Peintre' }
    },
    {
      path: '/oeuvres',
      name: 'gallery',
      component: GalleryView,
      meta: { title: 'Galerie des Œuvres — Sandrina Kinet' }
    },
    {
      path: '/oeuvres/:slug',
      name: 'artwork-detail',
      component: ArtworkDetailView,
      meta: { title: 'Œuvre — Sandrina Kinet' }
    },
    {
      path: '/chronologie',
      name: 'timeline',
      component: TimelineView,
      meta: { title: 'Au fil des temps — Parcours Chronologique | Sandrina Kinet' }
    },
    {
      path: '/a-propos',
      name: 'about',
      component: AboutView,
      meta: { title: 'Démarche & Parcours — Sandrina Kinet' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { title: 'Contact & Acquisition — Sandrina Kinet' }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
});

export default router;
