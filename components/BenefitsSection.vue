<template>
  <section class="py-16 sm:py-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6">

      <!-- Section header -->
      <div class="text-center mb-10 sm:mb-14">
        <div class="label-pill mb-5 mx-auto inline-flex">{{ $t('benefits.kicker') }}</div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style="color: var(--text-1);">
          {{ $t('benefits.title') }}
        </h2>
        <p class="text-[#8fa3bb] max-w-xl mx-auto text-base">
          {{ $t('benefits.description') }}
        </p>
      </div>

      <!-- Benefit cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="benefit in benefits"
          :key="benefit.key"
          class="card-premium group relative flex flex-col gap-4 p-5 sm:p-6 rounded-2xl overflow-hidden"
        >
          <!-- Top accent line -->
          <div class="absolute top-0 left-6 right-6 h-px" style="background: linear-gradient(90deg, transparent, var(--accent), transparent); opacity: 0.4;"></div>

          <!-- Icon -->
          <div class="benefit-icon-shell">
            <svg v-if="benefit.key === 'service'" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-4.5M14 4l6 6m0-6l-9 9-4 1 1-4 9-9z" /></svg>
            <svg v-else-if="benefit.key === 'gear'" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 7h12M6 12h12M6 17h8" /></svg>
            <svg v-else-if="benefit.key === 'contract'" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h8m-8 4h8m-8 4h5M7 3h10a2 2 0 012 2v14l-4-2-3 2-3-2-4 2V5a2 2 0 012-2z" /></svg>
            <svg v-else class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-6.5-4.35-8.5-8.34C1.66 9.04 3.1 5 7.26 5c2.03 0 3.21 1.1 4.74 2.83C13.53 6.1 14.71 5 16.74 5c4.16 0 5.6 4.04 3.76 7.66C18.5 16.65 12 21 12 21z" /></svg>
          </div>

          <!-- Text -->
          <div>
            <div class="text-2xl font-black text-white mb-1">{{ benefit.stat }}</div>
            <div class="text-sm font-semibold text-[#d7e1ec] mb-2">{{ benefit.title }}</div>
            <p class="text-sm text-[#8fa3bb] leading-relaxed">{{ benefit.text }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const benefits = computed(() => [
  { key: 'service', stat: t('benefits.stats.service'), title: t('benefits.titles.service'), text: t('benefits.items.service') },
  { key: 'gear', stat: t('benefits.stats.gear'), title: t('benefits.titles.gear'), text: t('benefits.items.gear') },
  { key: 'contract', stat: t('benefits.stats.contract'), title: t('benefits.titles.contract'), text: t('benefits.items.contract') },
  { key: 'care', stat: t('benefits.stats.care'), title: t('benefits.titles.care'), text: t('benefits.items.care') },
])
</script>
