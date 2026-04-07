<template>
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

    <!-- Page Header -->
    <div class="text-center mb-16">
      <div class="label-pill mb-5 inline-flex">{{ $t('batteries.kicker') }}</div>
      <h1 class="text-3xl sm:text-5xl font-black mb-4" style="color: var(--text-1);">
        {{ $t('batteries.title') }}
      </h1>
      <p class="text-xl font-bold text-white mb-1">{{ $t('batteries.rangeTitle') }}</p>
      <p class="text-sm text-[#566a7f] mb-8">{{ $t('batteries.rangeNote') }}</p>

      <a
        href="https://play.google.com/store/apps/details?id=com.jiabaida.little_elephant"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
        style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);"
      >
        <svg class="w-5 h-5 text-[#f05b04]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.523 15.3414C17.523 16.0828 16.9231 16.6828 16.1817 16.6828H15.5217V19.5276C15.5217 20.3448 14.8545 21.0121 14.0372 21.0121C13.22 21.0121 12.5528 20.3448 12.5528 19.5276V16.6828H11.4472V19.5276C11.4472 20.3448 10.78 21.0121 9.96276 21.0121C9.14552 21.0121 8.47828 20.3448 8.47828 19.5276V16.6828H7.81828C7.07683 16.6828 6.47693 16.0828 6.47693 15.3414V8.67589H17.523V15.3414ZM5.69656 8.67589C4.87931 8.67589 4.21207 9.34313 4.21207 10.1604V13.8569C4.21207 14.6741 4.87931 15.3414 5.69656 15.3414C6.51381 15.3414 7.18104 14.6741 7.18104 13.8569V10.1604C7.18104 9.34313 6.51381 8.67589 5.69656 8.67589ZM18.3034 8.67589C17.4862 8.67589 16.819 9.34313 16.819 10.1604V13.8569C16.819 14.6741 17.4862 15.3414 18.3034 15.3414C19.1207 15.3414 19.7879 14.6741 19.7879 13.8569V10.1604C19.7879 9.34313 19.1207 8.67589 18.3034 8.67589ZM14.9012 3.50698L16.1948 2.21337C16.3912 2.01699 16.3912 1.69682 16.1948 1.50044C16.0017 1.30406 15.6815 1.30406 15.4851 1.50044L14.0472 2.93837C13.4305 2.61821 12.7366 2.43837 12 2.43837C11.2634 2.43837 10.5695 2.61821 9.95276 2.93837L8.51483 1.50044C8.31845 1.30406 7.99828 1.30406 7.80518 1.50044C7.60879 1.69682 7.60879 2.01699 7.80518 2.21337L9.09879 3.50698C7.87449 4.38354 7.05724 5.78044 7.05724 7.37244C7.05724 7.55228 7.07378 7.72885 7.09033 7.90541H16.9097C16.9262 7.72885 16.9428 7.55228 16.9428 7.37244C16.9428 5.78044 16.1255 4.38354 14.9012 3.50698Z"/>
        </svg>
        {{ $t('batteries.appButton') }}
      </a>
    </div>

    <!-- Battery Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">

      <!-- Battery 25Ah -->
      <div class="card-premium rounded-3xl overflow-hidden flex flex-col">
        <div class="relative bg-gradient-to-br from-[#0d1626] to-[#080e1a] p-8 flex items-center justify-center" style="min-height: 280px;">
          <div class="absolute inset-0" style="background: radial-gradient(ellipse at center, rgba(240,91,4,0.08) 0%, transparent 70%);"></div>
          <img
            src="/assets/dp5c.jpg"
            :alt="$t('batteries.battery25.title')"
            class="relative max-h-64 w-auto object-contain"
            onerror="this.src='https://placehold.co/300x400?text=Battery+25Ah'"
          />
        </div>
        <div class="p-7 flex flex-col flex-1 gap-5">
          <div>
            <h2 class="text-2xl font-black text-white mb-1">{{ $t('batteries.battery25.title') }}</h2>
            <p class="text-sm text-[#8fa3bb]">{{ $t('batteries.battery25.description') }}</p>
          </div>
          <ul class="space-y-2.5 flex-1">
            <li v-for="spec in ['cells','case','bms','voltage','charging']" :key="spec" class="flex items-center gap-3 text-sm text-[#8fa3bb]">
              <svg class="w-3.5 h-3.5 text-[#f05b04] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              {{ $t(`batteries.battery25.specs.${spec}`) }}
            </li>
          </ul>
          <div class="flex items-center justify-between pt-5" style="border-top: 1px solid var(--border);">
            <div>
              <div class="text-xs text-[#566a7f] uppercase tracking-widest mb-0.5">{{ $t('batteries.priceLabel') }}</div>
              <div class="text-2xl font-black text-white">{{ $t('batteries.battery25.price') }}</div>
            </div>
            <Button variant="primary" @click="handleBatteryOrder('25')">{{ $t('batteries.orderButton') }}</Button>
          </div>
        </div>
      </div>

      <!-- Battery 30Ah -->
      <div class="card-accent rounded-3xl overflow-hidden flex flex-col" style="border-color: rgba(240,91,4,0.3);">
        <div class="relative p-8 flex items-center justify-center" style="min-height: 280px; background: linear-gradient(135deg, rgba(240,91,4,0.1) 0%, rgba(240,91,4,0.04) 100%);">
          <div class="absolute top-4 right-4">
            <span class="text-[10px] font-black uppercase tracking-widest text-white bg-[#f05b04] px-2.5 py-1 rounded-full">{{ $t('batteries.bestValueBadge') }}</span>
          </div>
          <img
            src="/assets/dp7.jpg"
            :alt="$t('batteries.battery30.title')"
            class="relative max-h-64 w-auto object-contain"
            onerror="this.src='https://placehold.co/300x400?text=Battery+30Ah'"
          />
        </div>
        <div class="p-7 flex flex-col flex-1 gap-5">
          <div>
            <h2 class="text-2xl font-black text-white mb-1">{{ $t('batteries.battery30.title') }}</h2>
            <p class="text-sm text-[#8fa3bb]">{{ $t('batteries.battery30.description') }}</p>
          </div>
          <ul class="space-y-2.5 flex-1">
            <li v-for="spec in ['cells','case','bms','voltage','charging']" :key="spec" class="flex items-center gap-3 text-sm text-[#8fa3bb]">
              <svg class="w-3.5 h-3.5 text-[#f05b04] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              {{ $t(`batteries.battery30.specs.${spec}`) }}
            </li>
          </ul>
          <div class="flex items-center justify-between pt-5" style="border-top: 1px solid rgba(240,91,4,0.2);">
            <div>
              <div class="text-xs text-[#f05b04]/60 uppercase tracking-widest mb-0.5">{{ $t('batteries.priceLabel') }}</div>
              <div class="text-2xl font-black text-white">{{ $t('batteries.battery30.price') }}</div>
            </div>
            <Button variant="primary" @click="handleBatteryOrder('30')">{{ $t('batteries.orderButton') }}</Button>
          </div>
        </div>
      </div>

    </div>

    <!-- Advantages -->
    <div class="card-premium rounded-3xl p-8 sm:p-10">
      <h3 class="text-lg font-black text-white mb-6">{{ $t('batteries.advantages.title') }}</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="adv in advantages" :key="adv" class="flex items-center gap-3 p-4 rounded-xl" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);">
          <svg class="w-5 h-5 text-[#f05b04] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
          <span class="text-sm text-[#8fa3bb]">{{ $t(`batteries.advantages.${adv}`) }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import Button from '~/components/ui/Button.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const advantages = ['warranty', 'cells', 'temperature', 'monitoring']

useHead({
  title: 'Baterie do rowerów elektrycznych | Evola E-bicycles',
  meta: [
    { name: 'description', content: 'Wysokiej jakości baterie do rowerów elektrycznych. Pojemność 25Ah i 30Ah. Smart BMS z Bluetooth. Gwarancja 12 miesięcy.' }
  ]
})

const generateBatteryOrderText = (batteryType) => {
  const title = batteryType === '25' ? t('batteries.battery25.title') : t('batteries.battery30.title')
  const price = batteryType === '25' ? t('batteries.battery25.price') : t('batteries.battery30.price')
  return `${t('kits.orderLabel')}:\n${title}\n${price}`.trim()
}

const handleBatteryOrder = async (batteryType) => {
  window.location.href = 'tel:+48789711631'
}
</script>