<script setup lang="ts">
import { computed } from 'vue';
import { exhibitionsList } from '../../data/exhibitions';
import { Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-vue-next';

// Find current or upcoming exhibition
const activeExhibition = computed(() => {
  return exhibitionsList.find(e => e.en_cours);
});
</script>

<template>
  <aside
    v-if="activeExhibition"
    class="relative bg-gradient-to-r from-stone-surface via-paper-200 to-stone-surface border-y border-stone-subtle py-4 px-6 sm:px-8 text-ink-900 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gold/15 text-gold-dark rounded text-[11px] font-semibold uppercase tracking-wider">
          <Sparkles class="w-3.5 h-3.5" />
          <span>Exposition à venir</span>
        </span>

        <h3 class="font-serif text-lg font-medium text-ink-900">
          {{ activeExhibition.titre }}
        </h3>
      </div>

      <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-ink-700">
        <span class="inline-flex items-center gap-1.5">
          <MapPin class="w-3.5 h-3.5 text-gold" />
          <span>{{ activeExhibition.lieu }} &bull; {{ activeExhibition.ville }}</span>
        </span>

        <span class="inline-flex items-center gap-1.5">
          <Calendar class="w-3.5 h-3.5 text-gold" />
          <span>Avril — Mai 2025</span>
        </span>

        <router-link
          to="/a-propos#expositions"
          class="inline-flex items-center gap-1 font-semibold text-gold hover:text-gold-dark uppercase tracking-wider text-[11px] transition-colors"
        >
          <span>En savoir plus</span>
          <ArrowRight class="w-3.5 h-3.5" />
        </router-link>
      </div>
    </div>
  </aside>
</template>
