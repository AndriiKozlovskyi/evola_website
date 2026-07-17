<template>
  <section class="relative overflow-hidden min-h-[560px] md:min-h-[90vh] flex flex-col" style="background: var(--bg-1, #07111f);">

    <!-- Radial orange glow from top center -->
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse 80% 55% at 50% 0%, rgba(240,91,4,0.18) 0%, transparent 70%);"></div>
    <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(180deg, rgba(240,91,4,0.05) 0%, transparent 50%);"></div>

    <div class="relative z-10 flex-1 max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 pb-10 sm:pt-14 sm:pb-14 md:py-28 flex flex-col justify-center">

      <!-- Mobile: kicker + title always at top -->
      <div class="md:hidden">
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
            <h1 class="text-3xl sm:text-5xl lg:text-[3.8rem] font-black leading-[1.08] mb-4 sm:mb-5" style="color: var(--text-1);">
              {{ $t('hero.title') }}
            </h1>
            <p class="text-base text-[#8fa3bb] leading-relaxed mb-6 hidden">
              {{ $t('hero.subtitle') }}
            </p>
          </div>

          <!-- Desktop-only bullet points -->
          <div class="hidden md:grid gap-2.5 mb-4">
              <div v-for="pt in heroPoints" :key="pt" class="flex items-start gap-3 text-sm text-[#d7e1ec]">
                <span class="icon-dot mt-1.5 flex-shrink-0"></span>
                <span>{{ pt }}</span>
              </div>
            </div>

          <!-- Desktop CTAs -->
          <div class="hidden md:flex flex-row flex-wrap gap-3 items-center mt-5">
            <a href="tel:+48789711631"
              class="inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#f05b04] hover:bg-[#d44d03] px-6 py-3.5 rounded-xl transition-colors">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5C3 4.67 3.67 4 4.5 4H7.28C8.04 4 8.69 4.53 8.83 5.28L9.45 8.37C9.56 8.94 9.35 9.53 8.89 9.9L7.09 11.37C8.09 13.83 10.05 15.79 12.51 16.79L13.98 14.98C14.35 14.53 14.93 14.31 15.51 14.43L18.6 15.04C19.34 15.19 19.88 15.84 19.88 16.6V19.38C19.88 20.2 19.2 20.88 18.38 20.88H17.25C9.38 20.88 3 14.5 3 6.63V5.5Z"/>
              </svg>
              {{ $t('header.callUs') }}
            </a>
            <a href="https://t.me/evola_manager" target="_blank" rel="noopener"
              class="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#8fa3bb] hover:text-white transition-colors px-6 py-3.5 rounded-xl"
              style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
          </div>


        </div>

        <!-- Right: image -->
        <div class="relative flex items-center justify-center min-h-[260px] md:min-h-0">

          <!-- bike_hero — all screen sizes -->
          <img
            src="/assets/bike_hero.webp"
            :alt="$t('hero.imageAlt')"
            class="relative z-10 object-contain select-none w-full"
            style="max-height: 420px; filter: drop-shadow(0 20px 60px rgba(240,91,4,0.22)) drop-shadow(0 8px 24px rgba(0,0,0,0.5));"
            width="680" height="620"
            sizes="(max-width: 768px) 100vw, 50vw"
            decoding="async"
            fetchpriority="high"
          />
        </div>

      </div>

      <!-- Mobile CTAs — pinned to bottom of hero -->
      <div class="md:hidden relative z-10 flex flex-col gap-3 px-4 pt-10 pb-4">
        <a href="tel:+48789711631"
          class="inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#f05b04] hover:bg-[#d44d03] w-full py-3.5 rounded-xl transition-colors">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5C3 4.67 3.67 4 4.5 4H7.28C8.04 4 8.69 4.53 8.83 5.28L9.45 8.37C9.56 8.94 9.35 9.53 8.89 9.9L7.09 11.37C8.09 13.83 10.05 15.79 12.51 16.79L13.98 14.98C14.35 14.53 14.93 14.31 15.51 14.43L18.6 15.04C19.34 15.19 19.88 15.84 19.88 16.6V19.38C19.88 20.2 19.2 20.88 18.38 20.88H17.25C9.38 20.88 3 14.5 3 6.63V5.5Z"/>
          </svg>
          {{ $t('header.callUs') }}
        </a>
        <a href="https://t.me/evola_manager" target="_blank" rel="noopener"
          class="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#8fa3bb] hover:text-white transition-colors w-full py-3.5 rounded-xl"
          style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          Telegram
        </a>
      </div>

      <!-- Mobile description — after CTAs -->
      <p class="md:hidden text-sm text-[#8fa3bb] leading-relaxed px-4 pb-8">
        {{ $t('hero.subtitle') }}
      </p>

    </div>
  </section>

  <!-- Stats strip -->
  <section class="py-6 sm:py-8" style="border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-xl sm:text-2xl font-black text-[#f05b04] leading-none mb-1">{{ stat.value }}</div>
          <div class="text-xs text-[#566a7f] uppercase tracking-widest">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
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
</script>
