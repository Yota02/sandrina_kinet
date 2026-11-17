<script setup lang="ts">
import type { Artwork } from '../../types';
import ArtworkCard from '../gallery/ArtworkCard.vue';
import { ArrowRight } from 'lucide-vue-next';

defineProps<{
  artworks: Artwork[];
}>();

const emit = defineEmits<{
  (e: 'zoom', artwork: Artwork): void;
  (e: 'roomView', artwork: Artwork): void;
}>();
</script>

<template>
  <section class="py-20 px-6 sm:px-8 max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-subtle/80 pb-6 gap-6">
      <div>
        <span class="text-xs uppercase tracking-widest text-gold font-semibold">
          Sélection curatée
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl text-ink-900 mt-2 font-normal">
          Œuvres phares & Créations récentes
        </h2>
      </div>

      <router-link
        to="/oeuvres"
        class="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-ink-900 hover:text-gold transition-colors"
      >
        <span>Consulter l'ensemble du catalogue ({{ artworks.length + 4 }}+)</span>
        <ArrowRight class="w-4 h-4" />
      </router-link>
    </div>

    <!-- Asymmetric Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ArtworkCard
        v-for="art in artworks"
        :key="art.id"
        :artwork="art"
        @zoom="emit('zoom', art)"
        @room-view="emit('roomView', art)"
      />
    </div>
  </section>
</template>
