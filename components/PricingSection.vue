<template>
  <section id="rent-offers" class="py-16 sm:py-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="text-center mb-10 sm:mb-14">
        <div class="label-pill mb-5 inline-flex">{{ $t('pricing.kicker') }}</div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style="color: var(--text-1);">
          {{ $t('pricing.title') }}
        </h2>
        <p class="text-[#8fa3bb] max-w-lg mx-auto text-base">
          {{ $t('pricing.description') }}
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">

        <div class="pricing-card card-premium rounded-2xl p-5 sm:p-7 flex flex-col gap-5 h-full">
          <div>
            <div class="icon-badge mb-4" style="color: #9ec5ff;">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 17l6-6 4 4 6-8" /></svg>
            </div>
            <div class="text-xs font-semibold uppercase tracking-widest text-[#566a7f] mb-2">{{ $t('pricing.cards.hardtail.title') }}</div>
            <div class="text-3xl sm:text-4xl font-black text-white">{{ $t('pricing.cards.hardtail.price') }}</div>
          </div>
          <div class="divider-glow"></div>
          <p class="text-[#8fa3bb] text-sm leading-relaxed flex-1">{{ $t('pricing.cards.hardtail.description') }}</p>
          <ul class="space-y-2">
            <li v-for="item in hardtailFeatures" :key="item" class="flex items-center gap-2 text-sm text-[#8fa3bb]">
              <svg class="w-4 h-4 text-[#9ec5ff] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              {{ item }}
            </li>
          </ul>
          <Button type="button" variant="outline" class="w-full mt-auto" @click="redirectToCall()">
            {{ $t('pricing.cards.hardtail.orderButton') }}
          </Button>
        </div>

        <div class="pricing-card card-accent rounded-2xl p-5 sm:p-7 flex flex-col gap-5 relative overflow-hidden h-full" style="border-color: rgba(240,91,4,0.4);">
          <div class="absolute top-4 right-4 sm:top-5 sm:right-5">
            <span class="text-[10px] font-black uppercase tracking-widest text-white bg-[#f05b04] px-2.5 py-1 rounded-full">{{ $t('pricing.popularBadge') }}</span>
          </div>
          <div>
            <div class="icon-badge icon-badge-accent mb-4">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 3l-1.9 5.86H5l4.95 3.58L8.05 18 13 14.42 17.95 18l-1.9-5.56L21 8.86h-6.1L13 3z" /></svg>
            </div>
            <div class="text-xs font-semibold uppercase tracking-widest text-[#f05b04]/70 mb-2">{{ $t('pricing.cards.fullSuspension.title') }}</div>
            <div class="text-lg sm:text-xl font-black text-[#f05b04] mb-2 pr-20 sm:pr-24">{{ $t('pricing.cards.fullSuspension.slogan') }}</div>
            <div class="text-3xl sm:text-4xl font-black text-white">{{ $t('pricing.cards.fullSuspension.price') }}</div>
          </div>
          <div class="divider-glow"></div>
          <p class="text-[#8fa3bb] text-sm leading-relaxed flex-1">{{ $t('pricing.cards.fullSuspension.description') }}</p>
          <ul class="space-y-2">
            <li v-for="item in fullSuspensionFeatures" :key="item" class="flex items-center gap-2 text-sm text-[#8fa3bb]">
              <svg class="w-4 h-4 text-[#f05b04] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              {{ item }}
            </li>
          </ul>
          <Button type="button" variant="primary" class="w-full mt-auto" @click="redirectToCall()">
            {{ $t('pricing.cards.fullSuspension.orderButton') }}
          </Button>
        </div>

        <div class="pricing-card card-premium rounded-2xl p-5 sm:p-7 flex flex-col gap-5 h-full">
          <div>
            <div class="icon-badge mb-4" style="color: #7ee0c3;">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 7H9m7 5H8m4 5H8m8-13v16a1 1 0 01-1.45.9L12 19l-2.55 1.9A1 1 0 018 20V4a1 1 0 011-1h6a1 1 0 011 1z" /></svg>
            </div>
            <div class="text-xs font-semibold uppercase tracking-widest text-[#566a7f] mb-2">{{ $t('pricing.cards.battery.title') }}</div>
            <div class="text-3xl sm:text-4xl font-black text-white">{{ $t('pricing.cards.battery.price') }}</div>
          </div>
          <div class="divider-glow"></div>
          <p class="text-[#8fa3bb] text-sm leading-relaxed flex-1">{{ $t('pricing.cards.battery.description') }}</p>
          <ul class="space-y-2">
            <li v-for="item in batteryFeatures" :key="item" class="flex items-center gap-2 text-sm text-[#8fa3bb]">
              <svg class="w-4 h-4 text-[#7ee0c3] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              {{ item }}
            </li>
          </ul>
          <Button type="button" variant="outline" class="w-full mt-auto" @click="redirectToCall()">
            {{ $t('pricing.cards.battery.orderButton') }}
          </Button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import Button from './ui/Button.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const hardtailFeatures = [
  t('pricing.features.hardtailBattery'),
  t('pricing.features.hardtailSetup'),
  t('pricing.features.hardtailService'),
  t('pricing.features.hardtailContract'),
]
const fullSuspensionFeatures = [
  t('pricing.features.fullBattery'),
  t('pricing.features.fullAdvantage'),
  t('pricing.features.fullService'),
  t('pricing.features.fullGear'),
]
const batteryFeatures = [
  t('pricing.features.batteryExtra'),
  t('pricing.features.batterySeparate'),
  t('pricing.features.batteryMinimum'),
  t('pricing.features.batteryContract'),
]

function redirectToCall() {
  window.location.href = 'tel:+48789711631'
}
</script>
