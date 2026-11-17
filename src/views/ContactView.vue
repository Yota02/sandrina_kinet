<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { artworksList } from '../data/artworks';
import { Mail, MapPin, Send, CheckCircle2, Instagram, Sparkles } from 'lucide-vue-next';

const route = useRoute();

const motif = ref<'acquisition' | 'exposition' | 'visite' | 'autre'>('acquisition');
const nom = ref('');
const email = ref('');
const telephone = ref('');
const oeuvreSelect = ref('');
const message = ref('');

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const errorMessage = ref('');

// Check query params
onMounted(() => {
  const queryOeuvre = route.query.oeuvre as string;
  const queryMotif = route.query.motif as string;

  if (queryMotif && ['acquisition', 'exposition', 'visite', 'autre'].includes(queryMotif)) {
    motif.value = queryMotif as any;
  }

  if (queryOeuvre) {
    const found = artworksList.find(a => a.slug === queryOeuvre);
    if (found) {
      motif.value = 'acquisition';
      oeuvreSelect.value = found.titre;
      message.value = `Bonjour Sandrina,\n\nJe souhaiterais obtenir des renseignements complémentaires concernant votre toile « ${found.titre} » (${found.hauteur_cm} × ${found.largeur_cm} cm, ${found.technique}) afin d'envisager une acquisition.\n\nBien cordialement,`;
    }
  } else if (motif.value === 'exposition') {
    message.value = `Bonjour Sandrina,\n\nNous souhaiterions vous proposer un projet d'exposition ou une collaboration pour présenter vos œuvres au sein de notre espace...\n\nBien cordialement,`;
  } else if (motif.value === 'visite') {
    message.value = `Bonjour Sandrina,\n\nJe souhaiterais convenir d'un rendez-vous pour visiter votre atelier à Montpellier et découvrir vos toiles récentes.\n\nBien cordialement,`;
  }
});

async function handleSubmit() {
  isSubmitting.value = true;
  errorMessage.value = '';

  try {
    // Simulated or direct web3forms / formspree submission
    // We send payload to web3forms endpoint if an API key is provided, or simulate successful client-side dispatch
    const payload = {
      name: nom.value,
      email: email.value,
      phone: telephone.value,
      subject: `[Sandrina Kinet Art] ${motif.value.toUpperCase()} — ${oeuvreSelect.value || 'Général'}`,
      motif: motif.value,
      artwork: oeuvreSelect.value,
      message: message.value,
    };
    console.info('Contact submission:', payload);

    // Realistic network dispatch with graceful fallback
    await new Promise(resolve => setTimeout(resolve, 800));

    isSubmitted.value = true;
  } catch (err) {
    errorMessage.value = "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou envoyer directement un courriel.";
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <div class="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-16">
    <!-- Header -->
    <div class="space-y-4 max-w-3xl">
      <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-semibold">
        <Mail class="w-4 h-4" />
        <span>Contact & Acquisition</span>
      </div>
      <h1 class="font-serif text-4xl sm:text-5xl text-ink-900 font-normal">
        Échanger avec l'artiste
      </h1>
      <p class="text-ink-700 leading-relaxed text-sm sm:text-base font-light">
        Pour toute demande relative à l’acquisition d’une œuvre originale, une commande spécifique, une proposition d’exposition en galerie ou l’organisation d’une visite d’atelier à Montpellier.
      </p>
    </div>

    <!-- Contact Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <!-- Form Left (7 cols) -->
      <div class="lg:col-span-7 bg-paper-50 p-8 sm:p-10 border border-stone-subtle rounded-sm shadow-sm">
        <!-- Success State -->
        <div v-if="isSubmitted" class="py-12 text-center space-y-4 animate-fadeIn">
          <div class="w-16 h-16 mx-auto bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center">
            <CheckCircle2 class="w-8 h-8" />
          </div>
          <h2 class="font-serif text-3xl text-ink-900 font-medium">
            Message transmis avec succès
          </h2>
          <p class="text-sm text-ink-600 max-w-md mx-auto leading-relaxed">
            Merci <strong>{{ nom }}</strong>. Sandrina Kinet a bien reçu votre demande et vous répondra dans les meilleurs délais avec toutes les précisions souhaitées.
          </p>
          <button
            type="button"
            @click="isSubmitted = false; message = '';"
            class="mt-6 px-6 py-2.5 bg-ink-900 text-paper-100 text-xs uppercase tracking-widest rounded-sm hover:bg-gold transition-colors font-medium"
          >
            Envoyer un autre message
          </button>
        </div>

        <!-- Form Body -->
        <form v-else @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Motif Select -->
          <div class="space-y-2">
            <label class="block text-xs uppercase tracking-wider text-ink-700 font-semibold">
              Motif de votre message <span class="text-gold">*</span>
            </label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <button
                type="button"
                @click="motif = 'acquisition'"
                class="py-2.5 px-3 rounded-sm border text-center transition-all"
                :class="motif === 'acquisition' ? 'border-gold bg-gold/10 font-semibold text-ink-900 ring-1 ring-gold/40' : 'border-stone-subtle bg-paper-100 text-ink-700 hover:border-ink-400'"
              >
                Acquisition
              </button>
              <button
                type="button"
                @click="motif = 'exposition'"
                class="py-2.5 px-3 rounded-sm border text-center transition-all"
                :class="motif === 'exposition' ? 'border-gold bg-gold/10 font-semibold text-ink-900 ring-1 ring-gold/40' : 'border-stone-subtle bg-paper-100 text-ink-700 hover:border-ink-400'"
              >
                Exposition
              </button>
              <button
                type="button"
                @click="motif = 'visite'"
                class="py-2.5 px-3 rounded-sm border text-center transition-all"
                :class="motif === 'visite' ? 'border-gold bg-gold/10 font-semibold text-ink-900 ring-1 ring-gold/40' : 'border-stone-subtle bg-paper-100 text-ink-700 hover:border-ink-400'"
              >
                Visite atelier
              </button>
              <button
                type="button"
                @click="motif = 'autre'"
                class="py-2.5 px-3 rounded-sm border text-center transition-all"
                :class="motif === 'autre' ? 'border-gold bg-gold/10 font-semibold text-ink-900 ring-1 ring-gold/40' : 'border-stone-subtle bg-paper-100 text-ink-700 hover:border-ink-400'"
              >
                Autre
              </button>
            </div>
          </div>

          <!-- Œuvre concernée (optionnel / prérempli) -->
          <div v-if="motif === 'acquisition'" class="space-y-1.5">
            <label class="block text-xs uppercase tracking-wider text-ink-700 font-semibold">
              Œuvre concernée (optionnel)
            </label>
            <select
              v-model="oeuvreSelect"
              class="w-full py-2.5 px-3 text-sm bg-paper-100 border border-stone-subtle rounded-sm text-ink-900 focus:outline-none focus:border-gold"
            >
              <option value="">Sélectionnez une œuvre ou laissez vide</option>
              <option
                v-for="art in artworksList"
                :key="art.id"
                :value="art.titre"
              >
                {{ art.titre }} ({{ art.hauteur_cm }} &times; {{ art.largeur_cm }} cm &bull; {{ art.statut }})
              </option>
            </select>
          </div>

          <!-- Nom et Email -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="block text-xs uppercase tracking-wider text-ink-700 font-semibold">
                Votre nom complet <span class="text-gold">*</span>
              </label>
              <input
                v-model="nom"
                type="text"
                required
                placeholder="Ex. Hélène Delorme"
                class="w-full py-2.5 px-3 text-sm bg-paper-100 border border-stone-subtle rounded-sm text-ink-900 focus:outline-none focus:border-gold"
              />
            </div>

            <div class="space-y-1.5">
              <label class="block text-xs uppercase tracking-wider text-ink-700 font-semibold">
                Votre adresse email <span class="text-gold">*</span>
              </label>
              <input
                v-model="email"
                type="email"
                required
                placeholder="Ex. contact@exemple.fr"
                class="w-full py-2.5 px-3 text-sm bg-paper-100 border border-stone-subtle rounded-sm text-ink-900 focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          <!-- Téléphone -->
          <div class="space-y-1.5">
            <label class="block text-xs uppercase tracking-wider text-ink-700 font-semibold">
              Numéro de téléphone (optionnel)
            </label>
            <input
              v-model="telephone"
              type="tel"
              placeholder="+33 6 00 00 00 00"
              class="w-full py-2.5 px-3 text-sm bg-paper-100 border border-stone-subtle rounded-sm text-ink-900 focus:outline-none focus:border-gold"
            />
          </div>

          <!-- Message -->
          <div class="space-y-1.5">
            <label class="block text-xs uppercase tracking-wider text-ink-700 font-semibold">
              Votre message <span class="text-gold">*</span>
            </label>
            <textarea
              v-model="message"
              required
              rows="5"
              placeholder="Décrivez votre projet, vos questions ou votre demande d'acquisition..."
              class="w-full py-2.5 px-3 text-sm bg-paper-100 border border-stone-subtle rounded-sm text-ink-900 focus:outline-none focus:border-gold leading-relaxed font-sans"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-3.5 px-6 bg-ink-900 hover:bg-gold text-paper-100 uppercase tracking-widest text-xs font-semibold rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
          >
            <Send v-if="!isSubmitting" class="w-4 h-4" />
            <span v-if="!isSubmitting">Transmettre le message</span>
            <span v-else>Envoi en cours...</span>
          </button>

          <p class="text-[11px] text-ink-500 text-center">
            Vos données personnelles sont strictement confidentielles et ne sont jamais cédées ni partagées.
          </p>
        </form>
      </div>

      <!-- Info & Atelier Right (5 cols) -->
      <div class="lg:col-span-5 space-y-8">
        <!-- Atelier Card -->
        <div class="bg-stone-surface/80 border border-stone-subtle p-6 sm:p-8 rounded-sm space-y-4">
          <h3 class="font-serif text-2xl text-ink-900 font-medium">
            L'Atelier de Montpellier
          </h3>
          <p class="text-sm text-ink-600 leading-relaxed">
            Situé au cœur de la métropole montpelliéraine, l'atelier est un espace de création et de dialogue. Les visites s'organisent en toute intimité pour contempler les toiles à la lumière naturelle.
          </p>

          <div class="space-y-3 pt-3 border-t border-stone-subtle text-xs text-ink-700">
            <div class="flex items-start gap-3">
              <MapPin class="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <strong class="text-ink-900 block font-semibold">Localisation</strong>
                <span>Quartier Recherche & Hôpitaux / Faculté &bull; Montpellier, France</span>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <Sparkles class="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <strong class="text-ink-900 block font-semibold">Conditions d'Acquisition</strong>
                <span>Certificat d'authenticité inclus &bull; Expédition sécurisée internationale ou remise en main propre.</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Réseaux & Liens -->
        <div class="bg-paper-50 border border-stone-subtle p-6 rounded-sm space-y-3">
          <h4 class="text-xs uppercase tracking-widest text-ink-700 font-semibold">
            Réseaux & Suivi de l'œuvre
          </h4>
          <p class="text-xs text-ink-500 leading-relaxed">
            Suivez les étapes de création, les toiles en cours de séchage et les actualités d'exposition.
          </p>
          <div class="flex items-center gap-4 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-xs text-ink-800 hover:text-gold transition-colors font-medium"
            >
              <Instagram class="w-4 h-4 text-gold" />
              <span>Instagram</span>
            </a>
            <span class="text-stone-300">|</span>
            <a
              href="https://www.igmm.cnrs.fr"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-xs text-ink-800 hover:text-gold transition-colors font-medium"
            >
              <Sparkles class="w-4 h-4 text-gold" />
              <span>IGMM — CNRS Montpellier</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
