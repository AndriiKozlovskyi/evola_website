<template>
  <section class="relative overflow-hidden min-h-[560px] md:min-h-[90vh] flex flex-col">

    <!-- Full dark base -->
    <div class="absolute inset-0" style="background: var(--bg-1, #07111f);"></div>

    <!-- Desktop: right orange diagonal panel -->
    <div class="absolute inset-y-0 right-0 hidden md:block"
         style="width: 52%; clip-path: polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%); background: linear-gradient(135deg, rgba(240,91,4,0.18) 0%, rgba(180,60,0,0.10) 50%, rgba(100,30,0,0.06) 100%);">
      <div class="absolute inset-0"
           style="background: radial-gradient(ellipse at 60% 40%, rgba(240,91,4,0.22) 0%, transparent 65%);"></div>
    </div>

    <!-- Mobile: diagonal orange panel -->
    <div class="absolute inset-x-0 bottom-0 md:hidden pointer-events-none"
         style="top: 30%; clip-path: polygon(0% 60%, 100% 0%, 100% 100%, 10% 100%); background: linear-gradient(160deg, rgba(240,91,4,0.17) 0%, rgba(160,50,0,0.10) 50%, rgba(80,20,0,0.05) 100%);">
      <div class="absolute inset-0"
           style="background: radial-gradient(ellipse at 50% 60%, rgba(240,91,4,0.18) 0%, transparent 65%);"></div>
    </div>
    <!-- Mobile: diagonal border line -->
    <div class="absolute inset-x-0 bottom-0 md:hidden pointer-events-none" style="top: 30%;">
      <svg class="absolute top-0 left-0 w-full" style="height: 60px;" preserveAspectRatio="none" viewBox="0 0 100 10">
        <line x1="0" y1="1.8" x2="100" y2="0"
              stroke="rgba(240,91,4,0.30)" stroke-width="0.25" vector-effect="non-scaling-stroke"/>
      </svg>
    </div>

    <!-- Desktop: diagonal border line -->
    <div class="absolute inset-y-0 right-0 hidden md:block pointer-events-none" style="width: 52%;">
      <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="12" y1="0" x2="0" y2="100"
              stroke="rgba(240,91,4,0.25)" stroke-width="0.3" vector-effect="non-scaling-stroke"/>
      </svg>
    </div>

    <div class="relative z-10 flex-1 max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 pb-10 sm:pt-14 sm:pb-14 md:py-28 flex flex-col justify-center">

      <!-- Mobile: kicker + title always at top -->
      <div class="md:hidden mb-4">
        <div class="label-pill mb-4 self-start inline-flex">
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.75 12.75l4.5 4.5 10-10.5"/>
          </svg>
          {{ $t('hero.kicker') }}
        </div>
        <h1 class="text-3xl font-black leading-[1.1]" style="color: var(--text-1);">
          {{ $t('hero.title') }}
        </h1>
      </div>

      <div class="grid md:grid-cols-2 md:gap-0 items-center w-full gap-6">

        <!-- Left: text -->
        <div class="flex flex-col md:pr-10 lg:pr-16">

          <!-- Desktop-only kicker + H1 -->
          <div class="hidden md:block">
            <div class="label-pill mb-6 self-start">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.75 12.75l4.5 4.5 10-10.5"/>
              </svg>
              {{ $t('hero.kicker') }}
            </div>
            <h1 class="text-3xl sm:text-5xl lg:text-[3.8rem] font-black leading-[1.08] mb-5 sm:mb-6" style="color: var(--text-1);">
              {{ $t('hero.title') }}
            </h1>
          </div>

          <p class="text-base sm:text-lg text-[#8fa3bb] leading-relaxed mb-3">
            {{ $t('hero.subtitle') }}
          </p>

          <!-- Desktop-only bullet points -->
          <div class="hidden md:grid gap-3 mb-4">
            <div v-for="point in heroPoints" :key="point" class="feature-tile px-4 py-3 text-sm text-[#d7e1ec]">
              <div class="flex items-start gap-3">
                <span class="icon-dot mt-1.5"></span>
                <span>{{ point }}</span>
              </div>
            </div>
          </div>

          <p class="hidden md:block text-sm text-[#566a7f] mb-8 sm:mb-10">
            {{ $t('hero.locationLine') }}
          </p>

          <!-- CTA Row -->
          <div class="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center mb-6 md:mb-0">
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
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </div>

          <!-- Desktop-only quick stats -->
          <div class="hidden md:grid mt-10 sm:mt-12 grid-cols-2 sm:flex sm:flex-wrap gap-x-6 sm:gap-x-8 gap-y-5">
            <div v-for="stat in stats" :key="stat.label" class="flex flex-col min-w-0">
              <span class="text-2xl font-black text-white">{{ stat.value }}</span>
              <span class="text-xs text-[#566a7f] mt-0.5">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <!-- Right: image -->
        <div class="relative flex items-center justify-center min-h-[260px] md:min-h-0">

          <!-- Desktop image (original rounded card) -->
          <div class="hidden md:block relative w-full">
            <div class="absolute inset-0 rounded-3xl" style="background: radial-gradient(ellipse at center, rgba(240,91,4,0.15) 0%, transparent 70%);"></div>
            <img
              src="/assets/bic.webp"
              :alt="$t('hero.imageAlt')"
              class="relative w-full h-auto rounded-3xl object-cover ring-1 ring-white/10 shadow-2xl"
              width="960"
              height="640"
              decoding="async"
              fetchpriority="high"
            />
            <!-- Floating badge (desktop) -->
            <div class="absolute bottom-3 left-3 right-3 sm:right-auto sm:bottom-4 sm:left-6 z-20 card-premium bg-black/80 px-3 sm:px-4 py-3 flex items-center gap-3 max-w-[calc(100%-1.5rem)] sm:max-w-none">
              <div class="w-9 h-9 rounded-full flex items-center justify-center" style="background: rgba(240,91,4,0.15); border: 1px solid rgba(240,91,4,0.3);">
                <svg class="w-4 h-4 text-[#f05b04]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3l2.8 5.68 6.27.92-4.54 4.42 1.07 6.23L12 17.29l-5.6 2.96 1.07-6.23L2.93 9.6l6.27-.92L12 3z"/>
                </svg>
              </div>
              <div>
                <div class="text-xs font-bold text-white">{{ $t('hero.badgeTitle') }}</div>
                <div class="text-[10px] text-[#8fa3bb]">{{ $t('hero.badgeSubtitle') }}</div>
              </div>
            </div>
          </div>

          <!-- Mobile image (bike_hero.png, same pattern as batteries page) -->
          <img
            src="/assets/bike_hero.png"
            :alt="$t('hero.imageAlt')"
            class="md:hidden mb-16 relative z-10 w-auto object-contain select-none"
            style="max-height: 300px; max-width: 100%; filter: drop-shadow(0 20px 60px rgba(240,91,4,0.22)) drop-shadow(0 8px 24px rgba(0,0,0,0.5));"
            decoding="async"
            fetchpriority="high"
          />

          <!-- Mobile price strip -->
          <div class="absolute bottom-0 inset-x-0 md:hidden flex justify-center gap-2.5 pb-3">
            <div class="flex flex-col items-center rounded-xl px-4 py-2.5 gap-0.5"
                 style="background: rgba(240,91,4,0.15); backdrop-filter: blur(6px); border: 1px solid rgba(240,91,4,0.35);">
              <span class="text-[11px] font-black text-white leading-none">Full suspension</span>
              <span class="text-[10px] font-bold text-[#f05b04] leading-none">250 zł / нед.</span>
              <span class="text-[9px] text-[#566a7f] leading-none mt-0.5">{{ $t('hero.stats.service') }}</span>
            </div>
            <div class="flex flex-col items-center rounded-xl px-4 py-2.5 gap-0.5"
                 style="background: rgba(0,0,0,0.6); backdrop-filter: blur(6px); border: 1px solid rgba(255,255,255,0.08);">
              <span class="text-[11px] font-black text-white leading-none">Hardtail</span>
              <span class="text-[10px] font-bold text-[#f07040] leading-none">220 zł / нед.</span>
              <span class="text-[9px] text-[#566a7f] leading-none mt-0.5">30Ah · сервис</span>
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
