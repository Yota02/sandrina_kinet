<script setup lang="ts">
import { ref } from 'vue';
import type { Artwork } from '../../types';
import ArtworkBadge from '../common/ArtworkBadge.vue';
import { Maximize2, Eye } from 'lucide-vue-next';

defineProps<{
  artwork: Artwork;
}>();

const emit = defineEmits<{
  (e: 'zoom', artwork: Artwork): void;
  (e: 'roomView', artwork: Artwork): void;
}>();

const isLoaded = ref(false);
</script>

<template>
  <article
    class="group relative bg-paper-50 border border-stone-subtle/70 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-hover-art hover:-translate-y-1"
  >
    <!-- Artwork Visual Container -->
    <div class="relative bg-stone-surface aspect-[4/3] overflow-hidden flex items-center justify-center p-4 sm:p-6">
      <!-- Loading Skeleton -->
      <div
        v-if="!isLoaded"
        class="absolute inset-0 bg-stone-surface animate-pulse"
      />

      <!-- Image with gentle shadow -->
      <router-link
        :to="`/oeuvres/${artwork.slug}`"
        class="relative block w-full h-full flex items-center justify-center focus:outline-none"
      >
        <img
          :src="artwork.image_principale"
          :alt="`${artwork.titre} — Sandrina Kinet`"
          loading="lazy"
          @load="isLoaded = true"
          class="max-w-full max-h-full object-contain shadow-gallery transition-transform duration-500 group-hover:scale-[1.02] artwork-protected"
          @contextmenu.prevent
        />
      </router-link>

      <!-- Overlay Quick Actions -->
      <div class="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <button
          type="button"
          @click.stop="emit('zoom', artwork)"
          class="p-2 bg-paper-100/90 hover:bg-white text-ink-900 rounded-full shadow-md backdrop-blur-sm transition-transform hover:scale-110"
          title="Zoomer les détails"
          aria-label="Zoomer les détails"
        >
          <Maximize2 class="w-4 h-4 text-ink-800" />
        </button>
        <button
          type="button"
          @click.stop="emit('roomView', artwork)"
          class="p-2 bg-paper-100/90 hover:bg-white text-ink-900 rounded-full shadow-md backdrop-blur-sm transition-transform hover:scale-110"
          title="Voir en situation (à l'échelle)"
          aria-label="Voir en situation à l'échelle"
        >
          <Eye class="w-4 h-4 text-gold" />
        </button>
      </div>

      <!-- Pastille Statut -->
      <div class="absolute top-3 left-3 z-10">
        <ArtworkBadge :statut="artwork.statut" size="sm" />
      </div>
    </div>

    <!-- Cartel Technique -->
    <div class="p-5 flex-1 flex flex-col justify-between border-t border-stone-subtle/50 bg-paper-50">
      <div>
        <div class="flex items-baseline justify-between gap-2 mb-1">
          <router-link
            :to="`/oeuvres/${artwork.slug}`"
            class="font-serif text-xl sm:text-2xl text-ink-900 font-medium hover:text-gold transition-colors line-clamp-1"
          >
            {{ artwork.titre }}
          </router-link>
          <span class="text-xs text-ink-500 font-mono flex-shrink-0">
            {{ artwork.annee }}
          </span>
        </div>

        <p class="text-xs text-ink-500 mb-2">
          {{ artwork.hauteur_cm }} &times; {{ artwork.largeur_cm }} cm &bull; {{ artwork.technique }}
        </p>

        <p class="text-xs text-ink-700/80 line-clamp-2 leading-relaxed">
          {{ artwork.description }}
        </p>
      </div>

      <div class="mt-4 pt-3 border-t border-stone-subtle/40 flex items-center justify-between">
        <span class="text-xs font-serif italic text-ink-500">
          {{ artwork.statut === 'disponible' && artwork.prix ? artwork.prix : (artwork.statut === 'vendu' ? 'Collection privée' : 'Réservé') }}
        </span>

        <router-link
          :to="`/oeuvres/${artwork.slug}`"
          class="text-xs uppercase tracking-wider font-semibold text-gold hover:text-gold-dark transition-colors inline-flex items-center gap-1"
        >
          <span>Découvrir</span>
          <span aria-hidden="true">&rarr;</span>
        </router-link>
      </div>
    </div>
  </article>
</template>
