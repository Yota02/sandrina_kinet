<script setup lang="ts">
import { exhibitionsList } from '../data/exhibitions';
import { Microscope, Palette, MapPin, Sparkles } from 'lucide-vue-next';
</script>

<template>
  <div class="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-20">
    <!-- Intro & Portrait Section -->
    <section class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <!-- Text Left -->
      <div class="lg:col-span-7 space-y-6">
        <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-semibold">
          <Sparkles class="w-4 h-4" />
          <span>Biographie & Démarche</span>
        </div>

        <h1 class="font-serif text-4xl sm:text-5xl text-ink-900 leading-tight font-normal">
          Sandrina Kinet
        </h1>

        <p class="text-base sm:text-lg text-gold-dark font-serif italic">
          Lorem ipsum dolor sit amet &bull; Consectetur adipiscing elit
        </p>

        <div class="space-y-4 text-ink-700 leading-relaxed text-sm sm:text-base">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>

      <!-- Portrait Right -->
      <div class="lg:col-span-5 relative">
        <div class="bg-paper-50 p-4 rounded-sm border border-stone-subtle shadow-2xl relative">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
            alt="Sandrina Kinet dans son atelier de peinture"
            class="w-full h-[460px] object-cover rounded-sm filter brightness-95"
          />
          <div class="absolute bottom-6 left-6 right-6 bg-paper-100/95 backdrop-blur-md p-4 rounded-sm border border-stone-subtle/80">
            <h3 class="font-serif text-lg text-ink-900 font-medium">Sandrina Kinet</h3>
            <p class="text-xs text-ink-500">Lorem ipsum &bull; Montpellier, France</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Art & Science Manifesto -->
    <section class="bg-stone-surface/70 border border-stone-subtle p-8 sm:p-12 rounded-sm space-y-8">
      <div class="max-w-3xl space-y-3">
        <span class="text-xs uppercase tracking-widest text-gold font-semibold">Le Manifeste Plastique</span>
        <h2 class="font-serif text-3xl text-ink-900 font-normal">
          Lorem ipsum dolor sit amet consectetur
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="space-y-3 bg-paper-100 p-6 rounded-sm border border-stone-subtle">
          <div class="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold">
            <Microscope class="w-5 h-5" />
          </div>
          <h3 class="font-serif text-xl text-ink-900 font-medium">L'Infiniment Petit</h3>
          <p class="text-xs text-ink-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam sed nisi nulla quis sem.
          </p>
        </div>

        <div class="space-y-3 bg-paper-100 p-6 rounded-sm border border-stone-subtle">
          <div class="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold">
            <Palette class="w-5 h-5" />
          </div>
          <h3 class="font-serif text-xl text-ink-900 font-medium">Pigments & Alchimie</h3>
          <p class="text-xs text-ink-600 leading-relaxed">
            Fusce nec tellus sed augue semper porta. Mauris massa vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia.
          </p>
        </div>

        <div class="space-y-3 bg-paper-100 p-6 rounded-sm border border-stone-subtle">
          <div class="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold">
            <Sparkles class="w-5 h-5" />
          </div>
          <h3 class="font-serif text-xl text-ink-900 font-medium">L'Épreuve du Temps</h3>
          <p class="text-xs text-ink-600 leading-relaxed">
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh aenean quam in scelerisque sem at dolor maecenas.
          </p>
        </div>
      </div>
    </section>

    <!-- Expositions Historique (Section 3.5) -->
    <section id="expositions" class="space-y-8 scroll-mt-28">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-subtle pb-4 gap-4">
        <div>
          <span class="text-xs uppercase tracking-widest text-gold font-semibold">Parcours & Rencontres</span>
          <h2 class="font-serif text-3xl sm:text-4xl text-ink-900 mt-1 font-normal">
            Historique des Expositions
          </h2>
        </div>
        <p class="text-xs text-ink-500 font-mono">
          Montpellier & Région Occitanie
        </p>
      </div>

      <!-- Structured list of exhibitions -->
      <div class="space-y-6">
        <article
          v-for="exhib in exhibitionsList"
          :key="exhib.id"
          class="p-6 sm:p-8 bg-paper-50 border border-stone-subtle rounded-sm transition-all hover:shadow-md hover:border-gold/40 flex flex-col md:flex-row md:items-start justify-between gap-6"
          :class="{ 'ring-1 ring-gold/40 bg-paper-100': exhib.en_cours }"
        >
          <div class="space-y-3 flex-1">
            <div class="flex flex-wrap items-center gap-3">
              <span
                v-if="exhib.en_cours"
                class="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-semibold uppercase tracking-wider rounded-full border border-emerald-300"
              >
                Prochaine exposition
              </span>

              <span class="text-xs font-mono text-ink-500">
                {{ exhib.date_debut }} &mdash; {{ exhib.date_fin }}
              </span>
            </div>

            <h3 class="font-serif text-2xl text-ink-900 font-medium">
              {{ exhib.titre }}
            </h3>

            <div class="flex items-center gap-4 text-xs text-ink-600 font-medium">
              <span class="inline-flex items-center gap-1.5">
                <MapPin class="w-3.5 h-3.5 text-gold" />
                <span>{{ exhib.lieu }}</span>
              </span>
              <span>&bull;</span>
              <span>{{ exhib.ville }}</span>
            </div>

            <p class="text-sm text-ink-700 leading-relaxed pt-1">
              {{ exhib.description }}
            </p>
          </div>

          <div class="md:w-48 flex-shrink-0 flex flex-col justify-between">
            <div class="aspect-[4/3] bg-stone-surface rounded overflow-hidden mb-3 border border-stone-subtle">
              <img
                :src="exhib.affiche_image"
                :alt="exhib.titre"
                class="w-full h-full object-cover"
              />
            </div>

            <router-link
              to="/contact?motif=exposition"
              class="w-full py-2 px-3 text-center bg-stone-surface hover:bg-gold hover:text-white text-ink-800 text-xs font-medium uppercase tracking-wider rounded-sm transition-colors"
            >
              Proposer un projet
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <!-- Bottom Contact Callout -->
    <section class="p-8 sm:p-12 bg-ink-900 text-paper-100 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-8">
      <div class="space-y-2 text-center sm:text-left">
        <h3 class="font-serif text-2xl sm:text-3xl font-medium">
          Organiser une visite d'atelier
        </h3>
        <p class="text-stone-300 text-xs sm:text-sm max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>

      <router-link
        to="/contact?motif=visite"
        class="px-6 py-3.5 bg-gold text-white hover:bg-gold-light hover:text-ink-900 uppercase text-xs tracking-widest font-semibold rounded-sm transition-colors flex-shrink-0"
      >
        Prendre rendez-vous
      </router-link>
    </section>
  </div>
</template>
