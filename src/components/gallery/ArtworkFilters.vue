<script setup lang="ts">
import { computed } from 'vue';
import type { Series } from '../../types';
import { Search, RotateCcw } from 'lucide-vue-next';

const props = defineProps<{
  seriesList: Series[];
  selectedSerie: string;
  selectedTechnique: string;
  selectedStatut: string;
  searchQuery: string;
  techniquesList: string[];
  totalResults: number;
}>();

const emit = defineEmits<{
  (e: 'update:selectedSerie', val: string): void;
  (e: 'update:selectedTechnique', val: string): void;
  (e: 'update:selectedStatut', val: string): void;
  (e: 'update:searchQuery', val: string): void;
  (e: 'reset'): void;
}>();

const hasActiveFilters = computed(() => {
  return (
    props.selectedSerie !== 'all' ||
    props.selectedTechnique !== 'all' ||
    props.selectedStatut !== 'all' ||
    props.searchQuery.trim() !== ''
  );
});
</script>

<template>
  <div class="bg-stone-surface/70 border border-stone-subtle p-5 sm:p-6 rounded-sm shadow-sm space-y-5">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <!-- Search Input -->
      <div class="relative w-full md:w-80">
        <Search class="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          :value="searchQuery"
          @input="emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
          placeholder="Rechercher par titre ou mot-clé..."
          class="w-full pl-10 pr-4 py-2 text-xs bg-paper-100 border border-stone-subtle rounded-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-ink-900"
        />
      </div>

      <!-- Results count & reset -->
      <div class="flex items-center justify-between w-full md:w-auto gap-4 text-xs">
        <span class="text-ink-500 font-medium">
          <strong class="text-ink-900 font-semibold">{{ totalResults }}</strong> œuvre{{ totalResults > 1 ? 's' : '' }} trouvée{{ totalResults > 1 ? 's' : '' }}
        </span>

        <button
          v-if="hasActiveFilters"
          type="button"
          @click="emit('reset')"
          class="inline-flex items-center gap-1.5 text-gold hover:text-gold-dark font-medium transition-colors"
        >
          <RotateCcw class="w-3.5 h-3.5" />
          <span>Réinitialiser les filtres</span>
        </button>
      </div>
    </div>

    <!-- Filter Buttons & Selects -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-stone-subtle/50">
      <!-- Filtre Série -->
      <div>
        <label class="block text-[11px] uppercase tracking-wider text-ink-500 font-medium mb-1.5">
          Série / Thématique
        </label>
        <select
          :value="selectedSerie"
          @change="emit('update:selectedSerie', ($event.target as HTMLSelectElement).value)"
          class="w-full py-2 px-3 text-xs bg-paper-100 border border-stone-subtle rounded-sm text-ink-800 focus:outline-none focus:border-gold"
        >
          <option value="all">Toutes les séries</option>
          <option
            v-for="serie in seriesList"
            :key="serie.id"
            :value="serie.id"
          >
            {{ serie.nom }}
          </option>
        </select>
      </div>

      <!-- Filtre Technique -->
      <div>
        <label class="block text-[11px] uppercase tracking-wider text-ink-500 font-medium mb-1.5">
          Technique / Médium
        </label>
        <select
          :value="selectedTechnique"
          @change="emit('update:selectedTechnique', ($event.target as HTMLSelectElement).value)"
          class="w-full py-2 px-3 text-xs bg-paper-100 border border-stone-subtle rounded-sm text-ink-800 focus:outline-none focus:border-gold"
        >
          <option value="all">Toutes les techniques</option>
          <option
            v-for="tech in techniquesList"
            :key="tech"
            :value="tech"
          >
            {{ tech }}
          </option>
        </select>
      </div>

      <!-- Filtre Statut -->
      <div>
        <label class="block text-[11px] uppercase tracking-wider text-ink-500 font-medium mb-1.5">
          Disponibilité
        </label>
        <select
          :value="selectedStatut"
          @change="emit('update:selectedStatut', ($event.target as HTMLSelectElement).value)"
          class="w-full py-2 px-3 text-xs bg-paper-100 border border-stone-subtle rounded-sm text-ink-800 focus:outline-none focus:border-gold"
        >
          <option value="all">Tous les statuts</option>
          <option value="disponible">Disponibles à l'acquisition</option>
          <option value="reserve">Réservées</option>
          <option value="vendu">Collections privées (Vendues)</option>
        </select>
      </div>
    </div>
  </div>
</template>
