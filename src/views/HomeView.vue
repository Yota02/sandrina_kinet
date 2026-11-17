<script setup lang="ts">
import { ref } from 'vue';
import { artworksList } from '../data/artworks';
import type { Artwork } from '../types';

import HeroSection from '../components/home/HeroSection.vue';
import UpcomingExhibitionBanner from '../components/home/UpcomingExhibitionBanner.vue';
import FeaturedArtworks from '../components/home/FeaturedArtworks.vue';
import ArtistStatementSnippet from '../components/home/ArtistStatementSnippet.vue';
import ArtworkZoomModal from '../components/gallery/ArtworkZoomModal.vue';
import ArtworkRoomView from '../components/gallery/ArtworkRoomView.vue';

// Selected artwork for hero
const heroArtwork = artworksList[0];

// Selection of 3 featured artworks
const featuredArtworks = artworksList.slice(1, 4);

// Modals state
const zoomingArtwork = ref<Artwork | null>(null);
const roomViewingArtwork = ref<Artwork | null>(null);

function openZoom(artwork: Artwork) {
  zoomingArtwork.value = artwork;
}

function openRoomView(artwork: Artwork) {
  roomViewingArtwork.value = artwork;
}
</script>

<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <HeroSection
      :hero-artwork="heroArtwork"
      @room-view="openRoomView"
    />

    <!-- Dynamic Upcoming Exhibition Banner -->
    <UpcomingExhibitionBanner />

    <!-- Featured Artworks Showcase -->
    <FeaturedArtworks
      :artworks="featuredArtworks"
      @zoom="openZoom"
      @room-view="openRoomView"
    />

    <!-- Poetic Pause / Art Statement -->
    <section class="py-16 bg-paper-200/50 border-t border-stone-subtle text-center px-6">
      <div class="max-w-3xl mx-auto space-y-4">
        <span class="text-xs uppercase tracking-widest text-gold font-medium">Réflexion</span>
        <blockquote class="font-serif text-2xl sm:text-3xl text-ink-900 italic font-normal leading-relaxed">
          « Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. »
        </blockquote>
        <cite class="block text-xs uppercase tracking-widest text-ink-500 not-italic">
          — Sandrina Kinet
        </cite>
      </div>
    </section>

    <!-- Artist Statement Snippet -->
    <ArtistStatementSnippet />

    <!-- Loupe Zoom Modal -->
    <ArtworkZoomModal
      v-if="zoomingArtwork"
      :artwork="zoomingArtwork"
      @close="zoomingArtwork = null"
    />

    <!-- Room Scale View Modal -->
    <ArtworkRoomView
      v-if="roomViewingArtwork"
      :artwork="roomViewingArtwork"
      @close="roomViewingArtwork = null"
    />
  </div>
</template>
