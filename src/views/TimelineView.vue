<script setup lang="ts">
import { ref } from 'vue';
import { artworksList } from '../data/artworks';
import { ArrowRight, Clock } from 'lucide-vue-next';
import ArtworkRoomView from '../components/gallery/ArtworkRoomView.vue';
import type { Artwork } from '../types';

const selectedPeriodId = ref<string>('au-fil-des-temps');
const roomViewingArtwork = ref<Artwork | null>(null);

// Chronological timeline milestones
const timelineMilestones = [
  {
    annee: '2024 — Présent',
    serieId: 'au-fil-des-temps',
    titre: 'Au fil des temps — Sédimentation & Mémoire',
    sousTitre: 'Recherches sur l’épaisseur du temps et les pigments naturels',
    description: 'Une phase de maturation où le tableau devient une géologie sensible. Sandrina Kinet privilégie les toiles de lin brut non blanchies et superpose des couches successives d’huiles et de terres naturelles.',
    quote: '« Laisser la matière respirer et se déposer comme les sédiments au fond des eaux calmes. »',
    atelierImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    focusArtworks: artworksList.filter(a => a.serie_id === 'au-fil-des-temps')
  },
  {
    annee: '2022 — 2023',
    serieId: 'resonances-cellulaires',
    titre: 'Résonances Cellulaires — L’Écho Biologique',
    sousTitre: 'Dialogue avec l’IGMM (Institut de Génétique Moléculaire de Montpellier)',
    description: 'Période marquée par l’exposition emblématique au sein du pôle CNRS de Montpellier. Les structures cellulaires, les membranes perméables et la mitose inspirent des toiles d’une intense vibration poétique.',
    quote: '« Les formes du vivant ne sont pas figées ; elles palpitent, se divisent et se régénèrent. »',
    atelierImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop',
    focusArtworks: artworksList.filter(a => a.serie_id === 'resonances-cellulaires')
  },
  {
    annee: '2020 — 2022',
    serieId: 'horizons-matiere',
    titre: 'Horizons & Matières — La Minéralité du Midi',
    sousTitre: 'Terres d’ocres, calcaires et lumière languedocienne',
    description: 'Inspirée par les paysages âpres et lumineux de l’Occitanie, de la garrigue aux rivages méditerranéens. L’artiste intègre des matières minérales broyées et du sable fin pour conférer au tableau un relief tactile.',
    quote: '« La roche réchauffée par le soleil du Sud garde la chaleur du jour bien après le crépuscule. »',
    atelierImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop',
    focusArtworks: artworksList.filter(a => a.serie_id === 'horizons-matiere')
  },
  {
    annee: '2017 — 2020',
    serieId: 'metamorphoses',
    titre: 'Éclosions & Métamorphoses — L’Élan Vital',
    sousTitre: 'Gestuelle fluide et premières explorations abstraites',
    description: 'Les prémices de la démarche : un travail approfondi sur la fluidité des huiles, les contrastes d’opacité et de transparence, capturant l’instant charnière où une forme émerge du néant.',
    quote: '« Le premier geste est toujours un acte d’abandon à l’inconnu. »',
    atelierImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop',
    focusArtworks: artworksList.filter(a => a.serie_id === 'metamorphoses')
  }
];
</script>

<template>
  <div class="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-16">
    <!-- Header -->
    <div class="space-y-4 max-w-3xl">
      <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-semibold">
        <Clock class="w-4 h-4" />
        <span>Frise Chronologique & Séries</span>
      </div>
      <h1 class="font-serif text-4xl sm:text-5xl text-ink-900 font-normal">
        Parcours « Au fil des temps »
      </h1>
      <p class="text-ink-700 leading-relaxed text-sm sm:text-base font-light">
        Parcourez l’évolution stylistique et intellectuelle de Sandrina Kinet. De la première étincelle gestuelle jusqu’aux grandes sédimentations de pigments actuelles, découvrez comment la recherche biologique et l'expérimentation picturale s’entremêlent au fil des années.
      </p>
    </div>

    <!-- Timeline Milestones Navigation Tabs (Horizontal on Desktop) -->
    <div class="border-b border-stone-subtle/80 flex items-center gap-2 sm:gap-6 overflow-x-auto pb-4 scrollbar-none">
      <button
        v-for="mile in timelineMilestones"
        :key="mile.serieId"
        type="button"
        @click="selectedPeriodId = mile.serieId"
        class="whitespace-nowrap px-4 py-2 rounded-sm text-xs uppercase tracking-wider font-medium transition-all"
        :class="[
          selectedPeriodId === mile.serieId
            ? 'bg-ink-900 text-paper-100 shadow-sm'
            : 'bg-stone-surface text-ink-700 hover:text-ink-900 hover:bg-stone-subtle/50'
        ]"
      >
        <span>{{ mile.annee }}</span>
        <span class="ml-2 font-serif normal-case italic opacity-80 hidden md:inline">({{ mile.serieId.replace('-', ' ') }})</span>
      </button>
    </div>

    <!-- Timeline Progression Body -->
    <div class="space-y-24">
      <section
        v-for="(mile, idx) in timelineMilestones"
        :key="mile.serieId"
        :id="mile.serieId"
        class="relative border-l-2 border-gold/40 pl-6 sm:pl-10 space-y-8 transition-opacity duration-300"
        :class="{ 'opacity-100': selectedPeriodId === mile.serieId, 'opacity-90': selectedPeriodId !== mile.serieId }"
      >
        <!-- Milestone Pin on the line -->
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-paper-100 border-2 border-gold flex items-center justify-center">
          <span class="w-1.5 h-1.5 rounded-full bg-gold" />
        </div>

        <!-- Period Header -->
        <div class="space-y-2">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 bg-stone-surface text-ink-700 text-xs font-mono font-medium rounded border border-stone-subtle">
              {{ mile.annee }}
            </span>
            <span class="text-xs uppercase tracking-widest text-gold font-semibold">
              Période {{ idx + 1 }} sur {{ timelineMilestones.length }}
            </span>
          </div>

          <h2 class="font-serif text-3xl sm:text-4xl text-ink-900 font-medium">
            {{ mile.titre }}
          </h2>
          <p class="text-sm font-serif italic text-gold-dark">
            {{ mile.sousTitre }}
          </p>
        </div>

        <!-- Description & Quote -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-7 space-y-4">
            <p class="text-ink-700 leading-relaxed text-sm sm:text-base">
              {{ mile.description }}
            </p>

            <blockquote class="bg-paper-50 border-l-2 border-gold p-4 text-ink-800 font-serif italic text-sm">
              {{ mile.quote }}
            </blockquote>
          </div>

          <!-- Studio / Mood visual -->
          <div class="lg:col-span-5">
            <div class="relative bg-paper-50 p-3 shadow-md rounded-sm border border-stone-subtle">
              <img
                :src="mile.atelierImage"
                :alt="mile.titre"
                class="w-full h-48 object-cover rounded-sm filter brightness-95"
              />
              <span class="block text-[11px] text-ink-500 mt-2 text-center uppercase tracking-wider">
                Recherche visuelle & ambiance d’atelier
              </span>
            </div>
          </div>
        </div>

        <!-- Paintings Born in this Period -->
        <div v-if="mile.focusArtworks.length > 0" class="pt-6 space-y-4">
          <div class="flex items-center justify-between border-b border-stone-subtle/60 pb-2">
            <h3 class="text-xs uppercase tracking-widest font-semibold text-ink-800">
              Œuvres représentatives de cette période ({{ mile.focusArtworks.length }})
            </h3>
            <router-link
              :to="`/oeuvres?serie=${mile.serieId}`"
              class="text-xs text-gold hover:underline flex items-center gap-1 font-medium"
            >
              <span>Voir toute la série</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </router-link>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="art in mile.focusArtworks"
              :key="art.id"
              class="bg-paper-50 border border-stone-subtle p-4 rounded-sm flex flex-col justify-between group hover:shadow-md transition-shadow"
            >
              <router-link :to="`/oeuvres/${art.slug}`" class="block aspect-[4/3] bg-stone-surface mb-3 overflow-hidden rounded-sm flex items-center justify-center p-2">
                <img
                  :src="art.image_principale"
                  :alt="art.titre"
                  class="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </router-link>

              <div>
                <h4 class="font-serif text-lg text-ink-900 group-hover:text-gold transition-colors font-medium">
                  {{ art.titre }}
                </h4>
                <p class="text-xs text-ink-500 mt-0.5">
                  {{ art.hauteur_cm }} &times; {{ art.largeur_cm }} cm &bull; {{ art.technique }}
                </p>
              </div>

              <div class="mt-4 pt-3 border-t border-stone-subtle/50 flex items-center justify-between text-xs">
                <span class="text-ink-600 font-mono text-[11px]">{{ art.annee }}</span>
                <router-link
                  :to="`/oeuvres/${art.slug}`"
                  class="text-gold font-medium hover:underline inline-flex items-center gap-1"
                >
                  <span>Examiner</span>
                  <ArrowRight class="w-3 h-3" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Modal for scale view -->
    <ArtworkRoomView
      v-if="roomViewingArtwork"
      :artwork="roomViewingArtwork"
      @close="roomViewingArtwork = null"
    />
  </div>
</template>
