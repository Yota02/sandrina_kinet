<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { Artwork } from '../../types';
import { X, Palette, Square } from 'lucide-vue-next';

const props = defineProps<{
  artwork: Artwork | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

// Wall styles options
const wallThemes = [
  { id: 'gallery', name: 'Blanc Galerie', bg: '#FAF9F6', floor: '#8A735E' },
  { id: 'stone', name: 'Pierre Chaude', bg: '#EAE6DC', floor: '#6E5C4B' },
  { id: 'sage', name: 'Sauge Doux', bg: '#DCE2DE', floor: '#635345' },
  { id: 'noir', name: 'Anthracite Feutré', bg: '#2A2C30', floor: '#433A33', textLight: true }
];

const selectedWallTheme = ref(wallThemes[0]);

// Frame options
type FrameStyle = 'none' | 'oak' | 'black';
const selectedFrame = ref<FrameStyle>('oak');

// Reference ceiling height in cm
const CEILING_HEIGHT_CM = 260;

// Dimensions calculations
const artworkScaleStyle = computed(() => {
  if (!props.artwork) return {};

  // Percentage of wall height taken by the painting (based on a 260cm high wall)
  // We clamp between 15% and 65% for ideal layout in the room viewport
  const heightRatio = props.artwork.hauteur_cm / CEILING_HEIGHT_CM;

  // Let's use percentage relative to wall height (viewport is fixed ratio)
  return {
    height: `${heightRatio * 100}%`,
    aspectRatio: `${props.artwork.largeur_cm} / ${props.artwork.hauteur_cm}`
  };
});

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('close');
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
  document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});
</script>

<template>
  <div
    v-if="artwork"
    class="fixed inset-0 z-50 flex flex-col bg-ink-900/90 backdrop-blur-md text-ink-900 select-none animate-fadeIn"
  >
    <!-- Header -->
    <div class="h-16 px-6 bg-paper-100/95 border-b border-stone-subtle flex items-center justify-between flex-shrink-0">
      <div>
        <div class="flex items-center gap-2">
          <h2 class="font-serif text-lg font-semibold text-ink-900">
            Mise en situation à l'échelle — {{ artwork.titre }}
          </h2>
          <span class="text-xs px-2 py-0.5 bg-gold/15 text-gold-dark rounded font-mono font-medium">
            {{ artwork.largeur_cm }} &times; {{ artwork.hauteur_cm }} cm
          </span>
        </div>
        <p class="text-xs text-ink-500 hidden sm:block">
          Proportions réelles calculées pour une hauteur sous plafond standard de 2,60 m
        </p>
      </div>

      <div class="flex items-center gap-3">
        <button
          type="button"
          @click="emit('close')"
          class="p-2 hover:bg-stone-surface rounded-full text-ink-700 hover:text-ink-900 transition-colors"
          title="Fermer"
        >
          <X class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Main Room Stage -->
    <div
      class="flex-1 relative flex flex-col justify-end overflow-hidden transition-colors duration-500"
      :style="{ backgroundColor: selectedWallTheme.bg }"
    >
      <!-- Subtle Wall Texture / Light Cast -->
      <div
        class="absolute inset-0 pointer-events-none opacity-40"
        style="background: radial-gradient(circle at 50% 30%, rgba(255,255,255,0.7) 0%, rgba(0,0,0,0.08) 100%);"
      />

      <!-- Wall Area with Painting -->
      <div class="relative w-full h-[76%] flex items-center justify-center px-8 pb-12">
        <!-- Scale Dimension Guide lines (Discreet) -->
        <div class="relative flex items-center justify-center max-w-full max-h-full">
          <!-- The Artwork Container scaled to real dimensions -->
          <div
            class="relative transition-all duration-300 shadow-2xl flex items-center justify-center"
            :style="artworkScaleStyle"
            :class="[
              selectedFrame === 'oak' ? 'p-2 bg-[#C8AB87] shadow-art-frame' :
              selectedFrame === 'black' ? 'p-2 bg-[#1C1C1E] shadow-art-frame' :
              'shadow-gallery'
            ]"
          >
            <!-- Canvas Picture -->
            <img
              :src="artwork.image_principale"
              :alt="artwork.titre"
              class="w-full h-full object-cover artwork-protected shadow-inner"
              @contextmenu.prevent
            />

            <!-- Subtle Gallery Spotlight Glow -->
            <div
              class="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/20 blur-xl pointer-events-none"
            />
          </div>
        </div>
      </div>

      <!-- Furniture Layer (Canapé contemporain, plante, parquet) to give precise human scale -->
      <div class="relative w-full h-[24%] flex items-end justify-center">
        <!-- Wooden Parquet Floor -->
        <div
          class="absolute inset-0 border-t border-black/10 transition-colors duration-500"
          :style="{
            backgroundColor: selectedWallTheme.floor,
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 120px, rgba(0,0,0,0.05) 120px, rgba(0,0,0,0.05) 121px)'
          }"
        >
          <!-- Baseboard (Plinthe) -->
          <div class="w-full h-3 bg-white/40 border-b border-black/15 shadow-sm" />
        </div>

        <!-- Scale Furniture Props: Designer Bench/Sofa (Width ~ 210cm) -->
        <div class="relative z-10 w-full max-w-2xl px-6 flex items-end justify-between pointer-events-none select-none pb-2">
          <!-- Left: Modern Planter / Ficus (Scale ~140cm) -->
          <div class="w-16 sm:w-20 flex flex-col items-center opacity-85">
            <svg viewBox="0 0 100 180" class="w-full h-auto text-emerald-900 fill-current drop-shadow-md">
              <!-- Ceramic Pot -->
              <polygon points="25,120 75,120 68,175 32,175" fill="#EAE6DC" stroke="#7A6E63" stroke-width="2" />
              <!-- Plant Foliage -->
              <ellipse cx="50" cy="90" rx="35" ry="40" fill="#2D4438" opacity="0.9" />
              <ellipse cx="35" cy="70" rx="25" ry="35" fill="#3B5A4B" />
              <ellipse cx="65" cy="65" rx="28" ry="38" fill="#4B6F5D" />
              <ellipse cx="50" cy="40" rx="22" ry="32" fill="#5E8A73" />
            </svg>
            <span class="text-[9px] tracking-widest text-white/70 uppercase font-mono mt-0.5">140 cm</span>
          </div>

          <!-- Center: Minimalist Minimal Lounge Sofa (~210 cm) -->
          <div class="flex-1 max-w-md mx-6 flex flex-col items-center">
            <div class="w-full h-14 sm:h-16 bg-[#D8D4CA] rounded-t-md shadow-lg border border-[#B5B0A4] relative flex items-center justify-center">
              <!-- Cushions lines -->
              <div class="absolute inset-0 flex">
                <div class="flex-1 border-r border-[#B5B0A4]/60" />
                <div class="flex-1 border-r border-[#B5B0A4]/60" />
                <div class="flex-1" />
              </div>
              <span class="text-[10px] tracking-widest text-ink-700/60 font-mono uppercase z-10">Canapé 210 cm</span>
            </div>
            <!-- Sofa feet -->
            <div class="w-full flex justify-between px-6 -mt-0.5">
              <div class="w-2 h-4 bg-ink-900 rounded-b" />
              <div class="w-2 h-4 bg-ink-900 rounded-b" />
            </div>
          </div>

          <!-- Right: Ceramic Vase / Side Pedestal -->
          <div class="w-12 sm:w-16 flex flex-col items-center opacity-80">
            <div class="w-10 h-16 bg-[#C4BFB5] rounded-t-sm shadow-md border border-[#A8A296] flex items-center justify-center">
              <span class="text-[9px] font-mono text-ink-700/60">Table</span>
            </div>
            <div class="w-8 h-2 bg-ink-800 rounded-b" />
          </div>
        </div>
      </div>
    </div>

    <!-- Controls Bar -->
    <div class="px-6 py-4 bg-paper-100 border-t border-stone-subtle flex flex-wrap items-center justify-between gap-4 flex-shrink-0">
      <!-- Wall Color Switch -->
      <div class="flex items-center gap-3">
        <span class="text-xs font-medium text-ink-500 uppercase tracking-wider flex items-center gap-1.5">
          <Palette class="w-3.5 h-3.5 text-gold" />
          <span>Ambiance murale :</span>
        </span>
        <div class="flex items-center gap-2">
          <button
            v-for="theme in wallThemes"
            :key="theme.id"
            type="button"
            @click="selectedWallTheme = theme"
            class="px-2.5 py-1 text-xs rounded border transition-all flex items-center gap-1.5"
            :class="[
              selectedWallTheme.id === theme.id
                ? 'border-gold bg-gold/10 font-medium text-ink-900 ring-1 ring-gold/40'
                : 'border-stone-subtle bg-paper-50 text-ink-700 hover:border-ink-400'
            ]"
          >
            <span
              class="w-3 h-3 rounded-full border border-black/20"
              :style="{ backgroundColor: theme.bg }"
            />
            <span>{{ theme.name }}</span>
          </button>
        </div>
      </div>

      <!-- Framing Switch -->
      <div class="flex items-center gap-3">
        <span class="text-xs font-medium text-ink-500 uppercase tracking-wider flex items-center gap-1.5">
          <Square class="w-3.5 h-3.5 text-gold" />
          <span>Encadrement :</span>
        </span>
        <div class="flex items-center gap-1.5 text-xs">
          <button
            type="button"
            @click="selectedFrame = 'none'"
            class="px-2.5 py-1 rounded border transition-all"
            :class="selectedFrame === 'none' ? 'border-gold bg-gold/10 font-medium text-ink-900' : 'border-stone-subtle hover:border-ink-400'"
          >
            Châssis nu
          </button>
          <button
            type="button"
            @click="selectedFrame = 'oak'"
            class="px-2.5 py-1 rounded border transition-all"
            :class="selectedFrame === 'oak' ? 'border-gold bg-gold/10 font-medium text-ink-900' : 'border-stone-subtle hover:border-ink-400'"
          >
            Caisse bois clair
          </button>
          <button
            type="button"
            @click="selectedFrame = 'black'"
            class="px-2.5 py-1 rounded border transition-all"
            :class="selectedFrame === 'black' ? 'border-gold bg-gold/10 font-medium text-ink-900' : 'border-stone-subtle hover:border-ink-400'"
          >
            Caisse noire
          </button>
        </div>
      </div>

      <!-- Action: Inquire -->
      <router-link
        :to="`/contact?oeuvre=${artwork.slug}`"
        class="inline-flex items-center gap-2 px-4 py-2 bg-ink-900 text-paper-100 hover:bg-gold transition-colors text-xs uppercase tracking-widest rounded-sm font-medium"
      >
        <span>Se renseigner sur cette œuvre</span>
      </router-link>
    </div>
  </div>
</template>
