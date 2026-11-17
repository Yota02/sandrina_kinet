<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { artworksList } from '../data/artworks';
import { seriesList } from '../data/series';
import ArtworkBadge from '../components/common/ArtworkBadge.vue';
import ArtworkZoomModal from '../components/gallery/ArtworkZoomModal.vue';
import ArtworkRoomView from '../components/gallery/ArtworkRoomView.vue';
import {
  ArrowLeft,
  Maximize2,
  Eye,
  Mail,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Share2
} from 'lucide-vue-next';

const route = useRoute();

const slug = computed(() => route.params.slug as string);

const currentIndex = computed(() => {
  return artworksList.findIndex(a => a.slug === slug.value);
});

const artwork = computed(() => {
  return artworksList[currentIndex.value] || artworksList[0];
});

const serie = computed(() => {
  return seriesList.find(s => s.id === artwork.value.serie_id);
});

const prevArtwork = computed(() => {
  if (currentIndex.value > 0) {
    return artworksList[currentIndex.value - 1];
  }
  return artworksList[artworksList.length - 1];
});

const nextArtwork = computed(() => {
  if (currentIndex.value < artworksList.length - 1) {
    return artworksList[currentIndex.value + 1];
  }
  return artworksList[0];
});

// Modals
const isZoomOpen = ref(false);
const isRoomViewOpen = ref(false);
const showCopyToast = ref(false);

function shareLink() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href);
    showCopyToast.value = true;
    setTimeout(() => {
      showCopyToast.value = false;
    }, 2500);
  }
}
</script>

<template>
  <div v-if="artwork" class="pt-28 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-12">
    <!-- Top Bar Navigation -->
    <div class="flex items-center justify-between border-b border-stone-subtle/70 pb-4">
      <router-link
        to="/oeuvres"
        class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink-700 hover:text-gold transition-colors font-medium"
      >
        <ArrowLeft class="w-4 h-4" />
        <span>Retour à la galerie</span>
      </router-link>

      <!-- Prev / Next Navigation -->
      <div class="flex items-center gap-4 text-xs">
        <router-link
          v-if="prevArtwork"
          :to="`/oeuvres/${prevArtwork.slug}`"
          class="inline-flex items-center gap-1 text-ink-500 hover:text-ink-900 transition-colors"
          title="Œuvre précédente"
        >
          <ChevronLeft class="w-4 h-4" />
          <span class="hidden sm:inline">Précédente</span>
        </router-link>

        <span class="text-stone-300">|</span>

        <router-link
          v-if="nextArtwork"
          :to="`/oeuvres/${nextArtwork.slug}`"
          class="inline-flex items-center gap-1 text-ink-500 hover:text-ink-900 transition-colors"
          title="Œuvre suivante"
        >
          <span class="hidden sm:inline">Suivante</span>
          <ChevronRight class="w-4 h-4" />
        </router-link>
      </div>
    </div>

    <!-- Main Content: Visual Left + Cartel Right -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <!-- Visual Column (Lg 7 cols) -->
      <div class="lg:col-span-7 space-y-4">
        <!-- Main Artwork Frame -->
        <div class="relative bg-stone-surface p-6 sm:p-10 rounded-sm border border-stone-subtle shadow-gallery flex items-center justify-center min-h-[460px]">
          <img
            :src="artwork.image_principale"
            :alt="artwork.titre"
            class="max-w-full max-h-[70vh] object-contain shadow-2xl cursor-zoom-in artwork-protected"
            @click="isZoomOpen = true"
            @contextmenu.prevent
          />

          <!-- Quick Actions on Top-Right -->
          <div class="absolute top-4 right-4 flex items-center gap-2">
            <button
              type="button"
              @click="shareLink"
              class="p-2.5 bg-paper-100/90 hover:bg-white text-ink-800 rounded-full shadow-md backdrop-blur-sm transition-all hover:scale-105"
              title="Partager le lien de l'œuvre"
            >
              <Share2 class="w-4 h-4" />
            </button>
          </div>

          <!-- Status badge Top-Left -->
          <div class="absolute top-4 left-4">
            <ArtworkBadge :statut="artwork.statut" size="md" />
          </div>
        </div>

        <!-- Detail Action Buttons Under Image -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            @click="isZoomOpen = true"
            class="w-full py-3 px-4 bg-paper-50 hover:bg-stone-surface border border-stone-subtle rounded-sm text-xs uppercase tracking-widest text-ink-800 font-medium inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <Maximize2 class="w-4 h-4 text-gold" />
            <span>Mode Loupe HD & Détails</span>
          </button>

          <button
            type="button"
            @click="isRoomViewOpen = true"
            class="w-full py-3 px-4 bg-paper-50 hover:bg-stone-surface border border-stone-subtle rounded-sm text-xs uppercase tracking-widest text-ink-800 font-medium inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <Eye class="w-4 h-4 text-gold" />
            <span>Voir en situation (à l'échelle)</span>
          </button>
        </div>

        <!-- Copy confirmation toast -->
        <div
          v-if="showCopyToast"
          class="p-3 bg-ink-900 text-paper-100 text-xs rounded text-center animate-fadeIn"
        >
          Lien de l'œuvre copié dans le presse-papier !
        </div>
      </div>

      <!-- Cartel & Info Column (Lg 5 cols) -->
      <div class="lg:col-span-5 space-y-8">
        <!-- Title & Series -->
        <div class="space-y-3">
          <div v-if="serie" class="text-xs uppercase tracking-widest text-gold font-semibold">
            Série : <router-link :to="`/oeuvres?serie=${serie.id}`" class="underline hover:text-gold-dark">{{ serie.nom }}</router-link>
          </div>

          <h1 class="font-serif text-3xl sm:text-4xl text-ink-900 font-medium leading-tight">
            {{ artwork.titre }}
          </h1>

          <p class="text-xs text-ink-500 font-mono">
            Création originale &bull; {{ artwork.annee }}
          </p>
        </div>

        <!-- Technical Cartel Table -->
        <div class="bg-stone-surface/70 border border-stone-subtle rounded-sm p-6 space-y-4">
          <h3 class="text-xs uppercase tracking-widest font-semibold text-ink-900 border-b border-stone-subtle/80 pb-2">
            Cartel Technique
          </h3>

          <dl class="space-y-3 text-xs">
            <div class="flex justify-between py-1 border-b border-stone-subtle/40">
              <dt class="text-ink-500">Dimensions</dt>
              <dd class="font-medium text-ink-900">{{ artwork.hauteur_cm }} &times; {{ artwork.largeur_cm }} cm</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-stone-subtle/40">
              <dt class="text-ink-500">Médium & Technique</dt>
              <dd class="font-medium text-ink-900 text-right">{{ artwork.technique }}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-stone-subtle/40">
              <dt class="text-ink-500">Support</dt>
              <dd class="font-medium text-ink-900 text-right">{{ artwork.support }}</dd>
            </div>
            <div class="flex justify-between py-1 border-b border-stone-subtle/40">
              <dt class="text-ink-500">Disponibilité</dt>
              <dd class="font-medium text-ink-900 capitalize">
                {{ artwork.statut === 'disponible' ? 'Disponible pour acquisition' : (artwork.statut === 'vendu' ? 'Collection privée' : 'Réservé') }}
              </dd>
            </div>
            <div class="flex justify-between py-1">
              <dt class="text-ink-500">Prix / Estimation</dt>
              <dd class="font-medium text-gold-dark font-serif text-sm">
                {{ artwork.statut === 'disponible' && artwork.prix ? artwork.prix : 'Sur demande' }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- Note de l'artiste -->
        <div v-if="artwork.note_artiste" class="space-y-3 bg-paper-50 p-6 border-l-2 border-gold rounded-r-sm">
          <div class="flex items-center gap-2 text-xs uppercase tracking-wider text-ink-500 font-semibold">
            <Sparkles class="w-3.5 h-3.5 text-gold" />
            <span>Note d'intention de l'artiste</span>
          </div>
          <p class="font-serif italic text-ink-800 text-base leading-relaxed">
            {{ artwork.note_artiste }}
          </p>
        </div>

        <!-- Description -->
        <div class="space-y-2">
          <h4 class="text-xs uppercase tracking-widest font-semibold text-ink-700">
            Regard sur l'œuvre
          </h4>
          <p class="text-ink-700 text-sm leading-relaxed">
            {{ artwork.description }}
          </p>
        </div>

        <!-- Primary CTA: Se renseigner -->
        <div class="space-y-4 pt-4 border-t border-stone-subtle">
          <router-link
            :to="`/contact?oeuvre=${artwork.slug}`"
            class="w-full py-4 px-6 bg-ink-900 text-paper-100 hover:bg-gold transition-all duration-300 rounded-sm text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-md group"
          >
            <Mail class="w-4 h-4" />
            <span>Se renseigner sur cette œuvre</span>
          </router-link>

          <p class="text-[11px] text-ink-500 text-center leading-normal">
            Certificat d'authenticité fourni signé par l'artiste Sandrina Kinet. Livraison soignée en caisse d'art ou remise en main propre à l'atelier de Montpellier.
          </p>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <ArtworkZoomModal
      v-if="isZoomOpen"
      :artwork="artwork"
      @close="isZoomOpen = false"
    />

    <ArtworkRoomView
      v-if="isRoomViewOpen"
      :artwork="artwork"
      @close="isRoomViewOpen = false"
    />
  </div>
</template>
