<script setup lang="ts">
import { ArrowUp, Mail, MapPin, Sparkles } from 'lucide-vue-next';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<template>
  <footer class="bg-stone-surface border-t border-stone-subtle text-ink-700 mt-24">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <!-- Col 1: Brand & Philosophy -->
        <div class="md:col-span-2 space-y-4">
          <h3 class="font-serif text-2xl tracking-widest text-ink-900 font-semibold">
            SANDRINA KINET
          </h3>
          <p class="text-sm text-ink-500 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div class="flex items-center gap-2 text-xs text-ink-500 pt-2">
            <MapPin class="w-4 h-4 text-gold flex-shrink-0" />
            <span>Atelier & Recherche — Montpellier, Occitanie, France</span>
          </div>
        </div>

        <!-- Col 2: Navigation rapide -->
        <div class="space-y-3">
          <h4 class="text-xs font-semibold tracking-widest uppercase text-ink-900">
            Explorer
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link to="/oeuvres" class="hover:text-gold transition-colors">
                Catalogue des Œuvres
              </router-link>
            </li>
            <li>
              <router-link to="/chronologie" class="hover:text-gold transition-colors">
                Parcours « Au fil des temps »
              </router-link>
            </li>
            <li>
              <router-link to="/a-propos" class="hover:text-gold transition-colors">
                Démarche Art & Biologie
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:text-gold transition-colors">
                Contact & Acquisitions
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Col 3: Contact direct & Visites -->
        <div class="space-y-3">
          <h4 class="text-xs font-semibold tracking-widest uppercase text-ink-900">
            Échanges & Galeries
          </h4>
          <p class="text-xs text-ink-500 leading-relaxed">
            Visites d’atelier sur rendez-vous pour collectionneurs, curateurs et amateurs d’art.
          </p>
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 text-sm text-gold font-medium hover:underline pt-1"
          >
            <Mail class="w-4 h-4" />
            <span>Contacter l'artiste</span>
          </router-link>
          <div class="pt-2">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-paper-100 rounded text-[11px] text-ink-700 border border-stone-subtle">
              <Sparkles class="w-3 h-3 text-gold" />
              <span>Expositions passées : IGMM, Carré d'Art</span>
            </span>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-stone-subtle/80 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-500 gap-4">
        <p>
          &copy; {{ new Date().getFullYear() }} Sandrina Kinet. Tous droits réservés. Toiles protégées par le droit d'auteur.
        </p>
        <div class="flex items-center gap-6">
          <router-link to="/contact" class="hover:text-ink-900 transition-colors">
            Mentions légales
          </router-link>
          <button
            type="button"
            @click="scrollToTop"
            class="inline-flex items-center gap-1.5 hover:text-gold transition-colors focus:outline-none"
            aria-label="Retour en haut"
          >
            <span>Haut de page</span>
            <ArrowUp class="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
