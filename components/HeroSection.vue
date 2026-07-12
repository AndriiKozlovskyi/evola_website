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
            <p class="text-base text-[#8fa3bb] leading-relaxed mb-6">
              {{ $t('hero.subtitle') }}
            </p>
          </div>

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

          <!-- Desktop CTAs -->
          <div class="hidden md:flex flex-row flex-wrap gap-3 items-center">
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

          <!-- bike_hero.png — all screen sizes -->
          <img
            src="/assets/bike_hero.png"
            :alt="$t('hero.imageAlt')"
            class="mb-20 md:mb-20 relative z-10 object-contain select-none w-full"
            style="max-height: 420px; filter: drop-shadow(0 20px 60px rgba(240,91,4,0.22)) drop-shadow(0 8px 24px rgba(0,0,0,0.5));"
            decoding="async"
            fetchpriority="high"
          />

          <!-- Price strip -->
          <div class="absolute bottom-0 inset-x-0 flex justify-center gap-2.5 pb-3 md:pb-4">
            <div class="flex flex-col items-center rounded-xl px-4 py-2.5 gap-0.5"
                 style="background: rgba(240,91,4,0.15); backdrop-filter: blur(6px); border: 1px solid rgba(240,91,4,0.35);">
              <span class="text-[14px] font-black text-white leading-none">{{ $t('hero.priceChips.fullSuspensionLabel') }}</span>
              <span class="text-[13px] font-bold text-[#f05b04] leading-none">{{ $t('hero.priceChips.fullSuspensionPrice') }}</span>
              <span class="text-[12px] text-[#566a7f] leading-none mt-0.5">{{ $t('hero.stats.service') }}</span>
            </div>
            <div class="flex flex-col items-center rounded-xl px-4 py-2.5 gap-0.5"
                 style="background: rgba(0,0,0,0.6); backdrop-filter: blur(6px); border: 1px solid rgba(255,255,255,0.08);">
              <span class="text-[14px] font-black text-white leading-none">Hardtail</span>
              <span class="text-[13px] font-bold text-[#f07040] leading-none">{{ $t('hero.priceChips.hardtailPrice') }}</span>
              <span class="text-[12px] text-[#566a7f] leading-none mt-0.5">{{ $t('hero.priceChips.hardtailNote') }}</span>
            </div>
          </div>
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
