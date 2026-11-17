<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { Menu, X } from 'lucide-vue-next';

const route = useRoute();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Œuvres', path: '/oeuvres' },
  { name: 'Au fil des temps', path: '/chronologie' },
  { name: 'Démarche & Parcours', path: '/a-propos' },
  { name: 'Contact', path: '/contact' },
];

function handleScroll() {
  isScrolled.value = window.scrollY > 20;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-paper-100/90 backdrop-blur-md shadow-sm border-b border-stone-subtle/40 py-3.5'
        : 'bg-paper-100/60 backdrop-blur-sm py-5'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
      <!-- Brand Logo / Title -->
      <router-link
        to="/"
        class="group flex flex-col focus:outline-none"
        @click="isMobileMenuOpen = false"
      >
        <span class="font-serif text-2xl sm:text-3xl tracking-widest text-ink-900 group-hover:text-gold transition-colors font-medium">
          SANDRINA KINET
        </span>
        <span class="text-[10px] tracking-[0.25em] text-ink-500 uppercase -mt-1 group-hover:text-ink-700 transition-colors">
          Artiste Peintre &bull; Montpellier
        </span>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="relative py-1 text-sm tracking-wider uppercase font-medium transition-colors"
          :class="[
            route.path === item.path
              ? 'text-gold'
              : 'text-ink-700 hover:text-ink-900'
          ]"
        >
          {{ item.name }}
          <span
            v-if="route.path === item.path"
            class="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold transition-all"
          />
        </router-link>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button
        type="button"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 text-ink-700 hover:text-ink-900 focus:outline-none"
        aria-label="Menu principal"
      >
        <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-paper-100/98 backdrop-blur-xl border-b border-stone-subtle shadow-xl px-6 py-6 space-y-4"
      >
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          @click="isMobileMenuOpen = false"
          class="block py-2 text-base tracking-wider uppercase font-medium transition-colors"
          :class="[
            route.path === item.path
              ? 'text-gold pl-2 border-l-2 border-gold'
              : 'text-ink-700 hover:text-ink-900'
          ]"
        >
          {{ item.name }}
        </router-link>
      </div>
    </transition>
  </header>
</template>
