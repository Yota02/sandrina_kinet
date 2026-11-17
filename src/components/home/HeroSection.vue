<script setup lang="ts">
import { ArrowRight, Eye, Sparkles } from 'lucide-vue-next';
import type { Artwork } from '../../types';

defineProps<{
  heroArtwork: Artwork;
}>();

const emit = defineEmits<{
  (e: 'roomView', artwork: Artwork): void;
}>();
</script>

<template>
  <section class="relative min-h-[90vh] flex items-center pt-24 pb-16 px-6 sm:px-8 overflow-hidden bg-paper-100">
    <!-- Atmospheric Background accents -->
    <div
      class="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none"
    />
    <div
      class="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-sage/5 blur-3xl pointer-events-none"
    />

    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <!-- Left Column: Typography & Intent -->
      <div class="lg:col-span-5 space-y-8 z-10">
        <div class="space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-stone-surface rounded-full text-xs text-ink-700 tracking-widest uppercase border border-stone-subtle">
            <span class="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>Artiste Peintre &bull; Montpellier</span>
          </div>

          <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink-900 leading-[1.1] font-normal">
            La matière picturale au fil des <span class="italic font-serif text-gold">temps</span>.
          </h1>

          <p class="text-base sm:text-lg text-ink-700/90 font-light leading-relaxed max-w-lg">
            Entre rigueur scientifique et lâcher-prise chromatique, Sandrina Kinet explore les strates du vivant, la mémoire cellulaire et l’impermanence à travers des toiles aux pigments bruts et empâtements sensibles.
          </p>
        </div>

        <!-- Call to actions -->
        <div class="flex flex-wrap items-center gap-4 pt-2">
          <router-link
            to="/oeuvres"
            class="px-6 py-3.5 bg-ink-900 text-paper-100 uppercase tracking-widest text-xs font-medium hover:bg-gold transition-all duration-300 rounded-sm shadow-md inline-flex items-center gap-2 group"
          >
            <span>Découvrir la galerie</span>
            <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </router-link>

          <router-link
            to="/chronologie"
            class="px-6 py-3.5 bg-transparent border border-ink-900/30 text-ink-900 uppercase tracking-widest text-xs font-medium hover:border-gold hover:text-gold transition-all duration-300 rounded-sm inline-flex items-center gap-2"
          >
            <span>Parcours « Au fil des temps »</span>
          </router-link>
        </div>

        <!-- Curatorial footnote -->
        <div class="pt-6 border-t border-stone-subtle/80 flex items-center gap-4 text-xs text-ink-500">
          <div class="p-2 bg-stone-surface rounded-full">
            <Sparkles class="w-4 h-4 text-gold" />
          </div>
          <p>
            Exposition inaugurale « Au fil des temps » accueillie à l’Institut de Génétique Moléculaire de Montpellier (IGMM).
          </p>
        </div>
      </div>

      <!-- Right Column: Hero Artwork Showcase -->
      <div class="lg:col-span-7 flex flex-col items-center justify-center relative">
        <div class="relative w-full max-w-xl group">
          <!-- Frame Background shadow -->
          <div class="relative bg-paper-50 p-4 sm:p-6 shadow-2xl rounded-sm border border-stone-subtle/80">
            <div class="relative overflow-hidden aspect-[4/3] bg-stone-surface flex items-center justify-center">
              <img
                :src="heroArtwork.image_principale"
                :alt="heroArtwork.titre"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 artwork-protected"
                @contextmenu.prevent
              />

              <!-- Overlay quick room view button -->
              <button
                type="button"
                @click="emit('roomView', heroArtwork)"
                class="absolute bottom-4 right-4 px-3.5 py-2 bg-paper-100/95 hover:bg-white text-ink-900 rounded-sm shadow-lg backdrop-blur-sm text-xs font-medium tracking-wider uppercase inline-flex items-center gap-2 transition-transform hover:scale-105"
              >
                <Eye class="w-3.5 h-3.5 text-gold" />
                <span>Voir au mur</span>
              </button>
            </div>

            <!-- Cartel under Hero Image -->
            <div class="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-t border-stone-subtle/40 pt-3">
              <div>
                <h2 class="font-serif text-xl sm:text-2xl text-ink-900 font-medium">
                  {{ heroArtwork.titre }}
                </h2>
                <p class="text-xs text-ink-500 mt-0.5">
                  {{ heroArtwork.hauteur_cm }} &times; {{ heroArtwork.largeur_cm }} cm &bull; {{ heroArtwork.technique }} ({{ heroArtwork.annee }})
                </p>
              </div>

              <router-link
                :to="`/oeuvres/${heroArtwork.slug}`"
                class="text-xs uppercase font-medium tracking-widest text-gold hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
              >
                <span>Fiche détaillée</span>
                <span aria-hidden="true">&rarr;</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
