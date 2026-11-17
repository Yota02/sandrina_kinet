<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/common/Navbar.vue';
import Footer from './components/common/Footer.vue';
import { ShieldAlert } from 'lucide-vue-next';

const showProtectionNotice = ref(false);
let noticeTimer: any = null;

function handleContextMenu(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (target && (target.classList.contains('artwork-protected') || target.closest('.artwork-protected'))) {
    e.preventDefault();
    showProtectionNotice.value = true;
    if (noticeTimer) clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => {
      showProtectionNotice.value = false;
    }, 2800);
  }
}

onMounted(() => {
  window.addEventListener('contextmenu', handleContextMenu);
});

onUnmounted(() => {
  window.removeEventListener('contextmenu', handleContextMenu);
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-paper-100 text-ink-900 selection:bg-gold/20 selection:text-ink-900">
    <Navbar />

    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer />

    <!-- Subtle Right-Click Protection Toast -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <div
        v-if="showProtectionNotice"
        class="fixed bottom-6 right-6 z-50 bg-ink-900/95 backdrop-blur-md text-paper-100 px-4 py-3 rounded-sm shadow-2xl border border-gold/40 flex items-center gap-3 text-xs"
      >
        <ShieldAlert class="w-4 h-4 text-gold flex-shrink-0" />
        <span>Œuvre originale de Sandrina Kinet &bull; Reproduction protégée par le droit d'auteur.</span>
      </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
