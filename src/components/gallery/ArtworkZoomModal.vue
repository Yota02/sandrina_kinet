<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { Artwork } from '../../types';
import { X, ZoomIn, ZoomOut, RotateCcw, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-vue-next';

const props = defineProps<{
  artwork: Artwork | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const zoomLevel = ref(1); // 1 = fit, 2 = 200%, 3 = 300%
const currentImageIndex = ref(0);
const containerRef = ref<HTMLDivElement | null>(null);
const isPanning = ref(false);
const startX = ref(0);
const startY = ref(0);
const translateX = ref(0);
const translateY = ref(0);

const allImages = computed(() => {
  if (!props.artwork) return [];
  const list = [props.artwork.image_principale];
  if (props.artwork.images_details) {
    list.push(...props.artwork.images_details);
  }
  return list;
});

const currentImage = computed(() => {
  return allImages.value[currentImageIndex.value] || props.artwork?.image_principale || '';
});

function handleZoomIn() {
  if (zoomLevel.value < 3.5) {
    zoomLevel.value = Number((zoomLevel.value + 0.5).toFixed(1));
  }
}

function handleZoomOut() {
  if (zoomLevel.value > 1) {
    zoomLevel.value = Number((zoomLevel.value - 0.5).toFixed(1));
    if (zoomLevel.value <= 1) {
      resetPan();
    }
  }
}

function resetZoom() {
  zoomLevel.value = 1;
  resetPan();
}

function resetPan() {
  translateX.value = 0;
  translateY.value = 0;
}

function startDrag(e: MouseEvent) {
  if (zoomLevel.value <= 1) return;
  isPanning.value = true;
  startX.value = e.clientX - translateX.value;
  startY.value = e.clientY - translateY.value;
}

function onDrag(e: MouseEvent) {
  if (!isPanning.value || zoomLevel.value <= 1) return;
  translateX.value = e.clientX - startX.value;
  translateY.value = e.clientY - startY.value;
}

function stopDrag() {
  isPanning.value = false;
}

function selectImage(idx: number) {
  currentImageIndex.value = idx;
  resetZoom();
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('close');
  } else if (e.key === 'ArrowRight' && allImages.value.length > 1) {
    currentImageIndex.value = (currentImageIndex.value + 1) % allImages.value.length;
    resetZoom();
  } else if (e.key === 'ArrowLeft' && allImages.value.length > 1) {
    currentImageIndex.value = (currentImageIndex.value - 1 + allImages.value.length) % allImages.value.length;
    resetZoom();
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
    class="fixed inset-0 z-50 flex flex-col bg-ink-900/95 backdrop-blur-xl text-paper-100 select-none animate-fadeIn"
  >
    <!-- Top Bar -->
    <div class="h-16 px-6 border-b border-white/10 flex items-center justify-between flex-shrink-0 bg-ink-900/60">
      <div class="flex items-center gap-4">
        <div>
          <h2 class="font-serif text-lg sm:text-xl font-medium tracking-wide text-white">
            {{ artwork.titre }}
          </h2>
          <p class="text-xs text-stone-300">
            {{ artwork.hauteur_cm }} &times; {{ artwork.largeur_cm }} cm &bull; {{ artwork.technique }} ({{ artwork.annee }})
          </p>
        </div>
      </div>

      <!-- Controls: Zoom & Close -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Zoom Controls -->
        <div class="flex items-center bg-white/10 rounded-full px-2 py-1 text-xs">
          <button
            type="button"
            @click="handleZoomOut"
            :disabled="zoomLevel <= 1"
            class="p-1 hover:text-gold disabled:opacity-30 disabled:hover:text-white transition-colors"
            title="Dézoomer"
          >
            <ZoomOut class="w-4 h-4" />
          </button>

          <span class="px-2 font-mono text-[11px] text-white/90">
            {{ Math.round(zoomLevel * 100) }}%
          </span>

          <button
            type="button"
            @click="handleZoomIn"
            :disabled="zoomLevel >= 3.5"
            class="p-1 hover:text-gold disabled:opacity-30 disabled:hover:text-white transition-colors"
            title="Zoomer les détails"
          >
            <ZoomIn class="w-4 h-4" />
          </button>
        </div>

        <button
          v-if="zoomLevel > 1"
          type="button"
          @click="resetZoom"
          class="p-2 hover:bg-white/10 rounded-full text-stone-300 hover:text-white transition-colors"
          title="Réinitialiser le zoom"
        >
          <RotateCcw class="w-4 h-4" />
        </button>

        <button
          type="button"
          @click="emit('close')"
          class="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors ml-2"
          title="Fermer (Échap)"
        >
          <X class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Main Viewport (Loupe / Pan) -->
    <div
      ref="containerRef"
      class="flex-1 overflow-hidden relative flex items-center justify-center p-4 cursor-grab"
      :class="{ 'cursor-grabbing': isPanning, 'cursor-zoom-in': zoomLevel === 1 }"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @click="zoomLevel === 1 ? handleZoomIn() : null"
    >
      <div
        class="transition-transform duration-100 ease-out flex items-center justify-center"
        :style="{
          transform: `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`
        }"
      >
        <img
          :src="currentImage"
          :alt="artwork.titre"
          class="max-h-[82vh] max-w-[90vw] object-contain shadow-2xl rounded-sm artwork-protected pointer-events-none"
          @contextmenu.prevent
        />
      </div>

      <!-- Navigation Arrows for multi-photo artworks -->
      <button
        v-if="allImages.length > 1"
        type="button"
        @click.stop="currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length; resetZoom();"
        class="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/25 backdrop-blur-md rounded-full text-white transition-all"
        title="Image précédente"
      >
        <ChevronLeft class="w-5 h-5" />
      </button>

      <button
        v-if="allImages.length > 1"
        type="button"
        @click.stop="currentImageIndex = (currentImageIndex + 1) % allImages.length; resetZoom();"
        class="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/25 backdrop-blur-md rounded-full text-white transition-all"
        title="Image suivante"
      >
        <ChevronRight class="w-5 h-5" />
      </button>
    </div>

    <!-- Bottom Bar: Thumbnails & Copyright note -->
    <div class="h-20 px-6 border-t border-white/10 flex items-center justify-between flex-shrink-0 bg-ink-900/70">
      <!-- Image Thumbnails -->
      <div class="flex items-center gap-3">
        <button
          v-for="(img, idx) in allImages"
          :key="idx"
          type="button"
          @click="selectImage(idx)"
          class="relative w-12 h-12 rounded border-2 overflow-hidden transition-all"
          :class="currentImageIndex === idx ? 'border-gold scale-105' : 'border-white/20 opacity-60 hover:opacity-100'"
        >
          <img :src="img" :alt="`Détail ${idx + 1}`" class="w-full h-full object-cover" />
        </button>
        <span v-if="allImages.length > 1" class="text-xs text-stone-400 pl-2">
          Vue {{ currentImageIndex + 1 }} sur {{ allImages.length }}
        </span>
      </div>

      <!-- Instruction / Notice -->
      <div class="hidden sm:flex items-center gap-2 text-xs text-stone-400">
        <ShieldCheck class="w-4 h-4 text-gold/80" />
        <span>Observation haute fidélité &bull; Clic pour agrandir &bull; Glisser pour explorer les empâtements</span>
      </div>
    </div>
  </div>
</template>
