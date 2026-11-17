<script setup lang="ts">
import { ArrowRight, Microscope, Palette, Clock } from 'lucide-vue-next';
</script>

<template>
  <section class="py-24 bg-stone-surface/60 border-y border-stone-subtle/80">
    <div class="max-w-7xl mx-auto px-6 sm:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Visual Column: Atelier atmosphere / macro visual -->
        <div class="lg:col-span-5 relative">
          <div class="relative bg-paper-100 p-4 shadow-xl rounded-sm border border-stone-subtle">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=85&w=1000&auto=format&fit=crop"
              alt="Atelier de peinture et pigments de Sandrina Kinet"
              class="w-full h-96 object-cover rounded-sm filter brightness-95 contrast-105"
            />
            <div class="absolute bottom-6 left-6 right-6 bg-paper-100/95 backdrop-blur-md p-4 rounded-sm border border-stone-subtle/80 text-xs">
              <p class="font-serif italic text-ink-900 text-sm">
                « La peinture commence là où la formule biologique cède le pas au silence de la matière. »
              </p>
              <span class="block text-[11px] text-ink-500 uppercase tracking-widest mt-1">
                Atelier de création &bull; Montpellier
              </span>
            </div>
          </div>
        </div>

        <!-- Text Column -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-semibold">
            <Microscope class="w-4 h-4" />
            <span>Démarche Art & Science</span>
          </div>

          <h2 class="font-serif text-3xl sm:text-4xl text-ink-900 leading-snug font-normal">
            Le double regard : la précision du vivant et l'effervescence de la toile.
          </h2>

          <p class="text-ink-700 leading-relaxed text-sm sm:text-base">
            Chercheuse en biologie à l'Institut de Génétique Moléculaire de Montpellier (IGMM), Sandrina Kinet côtoie au quotidien les mécanismes intimes de la cellule, les flux de macromolécules et la fugacité des états d'équilibre. 
          </p>

          <p class="text-ink-700 leading-relaxed text-sm sm:text-base">
            Dans son atelier, ce regard scientifique se métamorphose. Les protocoles rigoureux s'effacent devant la densité des huiles, les transparences de glacis et les sédimentations de pigments purs. Chaque tableau est une traversée du temps géologique et organique, un écho poétique aux mystères qui animent chaque particule vivante.
          </p>

          <!-- 3 Pillares -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-stone-subtle">
            <div class="space-y-1.5">
              <div class="flex items-center gap-2 text-gold font-serif text-lg font-medium">
                <Clock class="w-4 h-4" />
                <span>Temporalité</span>
              </div>
              <p class="text-xs text-ink-500 leading-normal">
                Sédimentation lente, séchage des huiles et mémoires inscrites au fil des temps.
              </p>
            </div>

            <div class="space-y-1.5">
              <div class="flex items-center gap-2 text-gold font-serif text-lg font-medium">
                <Microscope class="w-4 h-4" />
                <span>Organique</span>
              </div>
              <p class="text-xs text-ink-500 leading-normal">
                Membranes semi-perméables, résonances cellulaires et dynamique mitotique.
              </p>
            </div>

            <div class="space-y-1.5">
              <div class="flex items-center gap-2 text-gold font-serif text-lg font-medium">
                <Palette class="w-4 h-4" />
                <span>Matière pure</span>
              </div>
              <p class="text-xs text-ink-500 leading-normal">
                Pigments naturels, toiles de lin brut et empâtements minéraux au couteau.
              </p>
            </div>
          </div>

          <div class="pt-4">
            <router-link
              to="/a-propos"
              class="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-ink-900 hover:text-gold transition-colors"
            >
              <span>Lire la biographie complète et le parcours d'exposition</span>
              <ArrowRight class="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
