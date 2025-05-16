<template>
  <section class="max-w-screen-xl sm:mx-auto mx-4 py-10">
    <h2 class="text-4xl md:text-6xl text-center mb-8">{{ $t('benefits.title') }}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div class="flex flex-col items-center">
        <img src="/assets/distance.png" alt="Range" class="mb-4" />
        <p class="text-base md:text-lg">{{ $t('benefits.items.range') }}</p>
      </div>
      <div class="flex flex-col items-center">
        <img src="/assets/compose.png" alt="Assembly" class="mb-4" />
        <p class="text-base md:text-lg">{{ $t('benefits.items.assembly') }}</p>
      </div>
      <div class="flex flex-col items-center">
        <img src="/assets/place.png" alt="Compact" class="mb-4" />
        <p class="text-base md:text-lg">{{ $t('benefits.items.compact') }}</p>
      </div>
      <div class="flex flex-col items-center">
        <img src="/assets/guarantee.png" alt="Warranty" class="mb-4" />
        <p class="text-base md:text-lg">{{ $t('benefits.items.warranty') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
</style>