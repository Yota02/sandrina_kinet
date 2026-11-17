<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { artworksList } from '../data/artworks';
import { seriesList } from '../data/series';
import type { Artwork } from '../types';

import ArtworkCard from '../components/gallery/ArtworkCard.vue';
import ArtworkFilters from '../components/gallery/ArtworkFilters.vue';
import ArtworkZoomModal from '../components/gallery/ArtworkZoomModal.vue';
import ArtworkRoomView from '../components/gallery/ArtworkRoomView.vue';

const route = useRoute();

// Pre-select serie if query param exists (ex: /oeuvres?serie=au-fil-des-temps)
const initialSerie = (route.query.serie as string) || 'all';

const selectedSerie = ref<string>(initialSerie);
const selectedTechnique = ref<string>('all');
const selectedStatut = ref<string>('all');
const searchQuery = ref<string>('');

// Modals
const zoomingArtwork = ref<Artwork | null>(null);
const roomViewingArtwork = ref<Artwork | null>(null);

// Extract unique techniques
const techniquesList = computed(() => {
  const techs = new Set<string>();
  artworksList.forEach(a => techs.add(a.technique));
  return Array.from(techs);
});

// Filtered Artworks
const filteredArtworks = computed(() => {
  return artworksList.filter(art => {
    // Serie filter
    if (selectedSerie.value !== 'all' && art.serie_id !== selectedSerie.value) {
      return false;
    }

    // Technique filter
    if (selectedTechnique.value !== 'all' && art.technique !== selectedTechnique.value) {
      return false;
    }

    // Status filter
    if (selectedStatut.value !== 'all' && art.statut !== selectedStatut.value) {
      return false;
    }

    // Search query filter
    if (searchQuery.value.trim() !== '') {
      const q = searchQuery.value.toLowerCase();
      const matchTitle = art.titre.toLowerCase().includes(q);
      const matchDesc = art.description.toLowerCase().includes(q);
      const matchTech = art.technique.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchTech) {
        return false;
      }
    }

    return true;
  });
});

function resetFilters() {
  selectedSerie.value = 'all';
  selectedTechnique.value = 'all';
  selectedStatut.value = 'all';
  searchQuery.value = '';
}
</script>

<template>
  <div class="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-12">
    <!-- Header -->
    <div class="space-y-4 max-w-3xl">
      <span class="text-xs uppercase tracking-widest text-gold font-semibold">
        Catalogue Raisonné & Galerie
      </span>
      <h1 class="font-serif text-4xl sm:text-5xl text-ink-900 font-normal">
        Œuvres & Créations Picturales
      </h1>
      <p class="text-ink-700 leading-relaxed text-sm sm:text-base font-light">
        Explorez les toiles de Sandrina Kinet à travers ses différentes périodes et recherches de matières. Chaque pièce est unique, réalisée à l'huile, pigments minéraux broyés et techniques mixtes sur toiles de lin de haute facture.
      </p>
    </div>

    <!-- Interactive Filters Component -->
    <ArtworkFilters
      :series-list="seriesList"
      :techniques-list="techniquesList"
      :selected-serie="selectedSerie"
      :selected-technique="selectedTechnique"
      :selected-statut="selectedStatut"
      :search-query="searchQuery"
      :total-results="filteredArtworks.length"
      @update:selected-serie="selectedSerie = $event"
      @update:selected-technique="selectedTechnique = $event"
      @update:selected-statut="selectedStatut = $event"
      @update:search-query="searchQuery = $event"
      @reset="resetFilters"
    />

    <!-- Gallery Grid -->
    <div v-if="filteredArtworks.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ArtworkCard
        v-for="art in filteredArtworks"
        :key="art.id"
        :artwork="art"
        @zoom="zoomingArtwork = art"
        @room-view="roomViewingArtwork = art"
      />
    </div>

    <!-- Empty State -->
    <div
      v-else
      class="py-20 text-center bg-stone-surface/40 rounded-sm border border-stone-subtle space-y-4"
    >
      <p class="font-serif text-2xl text-ink-700 italic">
        Aucune œuvre ne correspond à vos critères de recherche.
      </p>
      <button
        type="button"
        @click="resetFilters"
        class="px-5 py-2.5 bg-ink-900 text-paper-100 rounded-sm text-xs uppercase tracking-widest hover:bg-gold transition-colors font-medium"
      >
        Réinitialiser les filtres
      </button>
    </div>

    <!-- Modals -->
    <ArtworkZoomModal
      v-if="zoomingArtwork"
      :artwork="zoomingArtwork"
      @close="zoomingArtwork = null"
    />

    <ArtworkRoomView
      v-if="roomViewingArtwork"
      :artwork="roomViewingArtwork"
      @close="roomViewingArtwork = null"
    />
  </div>
</template>
