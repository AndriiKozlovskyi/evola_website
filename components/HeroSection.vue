<template>
  <section class="relative flex items-center min-h-[auto] sm:min-h-[90vh]">
    <!-- Background glow effects -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-20" style="background: radial-gradient(circle, #f05b04 0%, transparent 70%); transform: translate(30%, -30%);"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10" style="background: radial-gradient(circle, #1e3c78 0%, transparent 70%); transform: translate(-30%, 30%);"></div>
    </div>

    <div class="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28 w-full">
      <div class="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

        <!-- Text Block -->
        <div class="flex flex-col">
          <div class="label-pill mb-6 self-start">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.75 12.75l4.5 4.5 10-10.5" /></svg>
            {{ $t('hero.kicker') }}
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-[3.8rem] font-black leading-[1.08] mb-5 sm:mb-6" style="color: var(--text-1);">
            {{ $t('hero.title') }}
          </h1>

          <p class="text-base sm:text-lg text-[#8fa3bb] leading-relaxed mb-3">
            {{ $t('hero.subtitle') }}
          </p>

          <div class="grid gap-3 mb-4">
            <div
              v-for="point in heroPoints"
              :key="point"
              class="feature-tile px-4 py-3 text-sm text-[#d7e1ec]"
            >
              <div class="flex items-start gap-3">
                <span class="icon-dot mt-1.5"></span>
                <span>{{ point }}</span>
              </div>
            </div>
          </div>

          <p class="text-sm text-[#566a7f] mb-8 sm:mb-10">
            {{ $t('hero.locationLine') }}
          </p>

          <!-- CTA Row -->
          <div class="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center">
            <Button
              type="button"
              variant="primary"
              class="w-full sm:w-auto text-base px-8 py-3.5"
              @click="redirectToCall()"
            >
              {{ $t('hero.orderButton') }}
            </Button>
            <button
              class="inline-flex w-full sm:w-auto justify-center sm:justify-start items-center gap-2 text-sm font-medium text-[#8fa3bb] hover:text-white transition-colors"
              @click="redirectToCall()"
            >
              <span>{{ $t('hero.viewOffers') }}</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <!-- Quick stats -->
          <div class="mt-10 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 sm:gap-x-8 gap-y-5">
            <div v-for="stat in stats" :key="stat.label" class="flex flex-col min-w-0">
              <span class="text-2xl font-black text-white">{{ stat.value }}</span>
              <span class="text-xs text-[#566a7f] mt-0.5">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <!-- Image Block -->
        <div class="hidden md:block relative">
          <div class="absolute inset-0 rounded-3xl " style="background: radial-gradient(ellipse at center, rgba(240,91,4,0.15) 0%, transparent 70%);"></div>
          <img
            src="/assets/bic.webp"
            :alt="$t('hero.imageAlt')"
            class="relative w-full h-auto rounded-3xl object-cover ring-1 ring-white/10 shadow-2xl"
            width="960"
            height="640"
            decoding="async"
            fetchpriority="high"
          />
          <!-- Floating badge -->
          <div class="absolute bottom-3 left-3 right-3 sm:right-auto sm:bottom-4 sm:left-6 z-20 card-premium bg-black/80 px-3 sm:px-4 py-3 flex items-center gap-3 max-w-[calc(100%-1.5rem)] sm:max-w-none">
            <div class="w-9 h-9 rounded-full flex items-center justify-center" style="background: rgba(240,91,4,0.15); border: 1px solid rgba(240,91,4,0.3);">
              <svg class="w-4 h-4 text-[#f05b04]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3l2.8 5.68 6.27.92-4.54 4.42 1.07 6.23L12 17.29l-5.6 2.96 1.07-6.23L2.93 9.6l6.27-.92L12 3z" /></svg>
            </div>
            <div>
              <div class="text-xs font-bold text-white">{{ $t('hero.badgeTitle') }}</div>
              <div class="text-[10px] text-[#8fa3bb]">{{ $t('hero.badgeSubtitle') }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import Button from './ui/Button.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const heroPoints = computed(() => [
  t('hero.points.one'),
  t('hero.points.two'),
  t('hero.points.three'),
])

const stats = computed(() => [
  { value: t('hero.statValues.fullSuspension'), label: t('hero.stats.fullSuspension') },
  { value: t('hero.statValues.hardtail'), label: t('hero.stats.hardtail') },
  { value: t('hero.statValues.service'), label: t('hero.stats.service') },
  { value: t('hero.statValues.minimum'), label: t('hero.stats.minimum') },
])

function redirectToCall() {
  window.location.href = 'tel:+48789711631'
}
</script>
