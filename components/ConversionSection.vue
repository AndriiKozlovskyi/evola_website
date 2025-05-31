<template>
  <section class="max-w-screen-xl sm:mx-auto mx-4 py-16">
    <div class="flex flex-col md:flex-row items-center">
      <div class="md:w-1/2">
        <h2 class="text-4xl md:text-6xl mb-4">{{ $t('conversion.title') }}</h2>
        <p class="text-base md:text-lg mb-6">
          {{ $t('conversion.description') }}
        </p>
      </div>
      <div class="md:w-1/2">
        <img 
          src="/assets/conversion.webp" 
          :alt="$t('conversion.imageAlt')" 
          class="w-full h-auto" 
        />
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