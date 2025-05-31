<template>
  <section class="max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse items-center py-12">
    <div class="md:w-1/2 mt-6 md:mt-0">
      <img 
        src="/assets/bic.webp" 
        :alt="$t('hero.imageAlt')" 
        class="w-full h-auto mt-10" 
      />
    </div>
    <div class="md:w-1/2 m-4">
      <h1 class="text-4xl md:text-6xl font-bold">{{ $t('hero.title') }}</h1>
      <p class="text-base md:text-lg mt-4">{{ $t('hero.subtitle') }}</p>
      <Button 
        type="button" 
        variant="primary" 
        class="mt-6" 
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