<script setup lang="ts">
import type { ArtworkStatus } from '../../types';

defineProps<{
  statut: ArtworkStatus;
  size?: 'sm' | 'md';
}>();
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 font-medium tracking-wider uppercase rounded-full transition-colors"
    :class="[
      size === 'sm' ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-xs',
      statut === 'disponible' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/60' :
      statut === 'reserve' ? 'bg-amber-50 text-amber-800 border border-amber-200/60' :
      'bg-stone-surface text-ink-500 border border-stone-subtle'
    ]"
  >
    <span
      class="w-1.5 h-1.5 rounded-full"
      :class="[
        statut === 'disponible' ? 'bg-emerald-500 animate-pulse' :
        statut === 'reserve' ? 'bg-amber-500' :
        'bg-ink-400'
      ]"
    />
    <span>
      {{
        statut === 'disponible' ? 'Disponible' :
        statut === 'reserve' ? 'Réservé' :
        'Collection privée'
      }}
    </span>
  </span>
</template>
