<template>
  <section class="max-w-screen-xl mx-auto px-4 pt-24 pb-10 sm:pb-14 md:pt-36 md:pb-20 flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8">
    <div class="md:w-1/2 mt-2 md:mt-0">
      <img 
        src="/assets/bic.webp" 
        :alt="$t('hero.imageAlt')" 
        class="w-full h-auto rounded-3xl shadow-2xl shadow-orange-900/10 ring-1 ring-black/10" 
        width="960"
        height="640"
        decoding="async"
        fetchpriority="high"
      />
    </div>
    <div class="md:w-1/2 rounded-3xl p-5 sm:p-6 md:p-9 bg-white/80 ring-1 ring-black/10 shadow-xl">
      <p class="inline-flex text-xs sm:text-sm font-semibold tracking-widest uppercase text-orange-700 bg-orange-50 px-3 py-1 rounded-full">
        EVOLA ELECTRIC
      </p>
      <h1 class="text-3xl sm:text-4xl md:text-6xl font-extrabold mt-4 leading-tight">{{ $t('hero.title') }}</h1>
      <p class="text-base md:text-lg mt-4 text-gray-700">{{ $t('hero.subtitle') }}</p>
      <Button 
        type="button" 
        variant="primary" 
        class="mt-7" 
        @click="navigateTo('kits')"
      >
        {{ $t('hero.orderButton') }}
      </Button>
    </div>
  </section>
</template>

<script setup>
import Button from './ui/Button.vue'
import { navigateTo } from '#app'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
</style>