<template>
  <section class="max-w-screen-xl mx-auto py-10">
    <h2 class="text-4xl md:text-6xl text-center mb-8">{{ $t('pricing.title') }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4">
      <div class="border rounded-lg p-6 text-center">
        <h3 class="text-2xl font-bold mb-4">{{ $t('pricing.batteries.title') }}</h3>
        <p class="text-gray-600 text-3xl font-bold mb-2">{{ $t('pricing.batteries.price') }}</p>
        <p class="text-base md:text-lg mb-4">{{ $t('pricing.batteries.description') }}</p>
        <Button type="button" variant="primary" @click="navigateTo('batteries')">
          {{ $t('pricing.batteries.orderButton') }}
        </Button>
      </div>
      <div class="border rounded-lg p-6 text-center">
        <h3 class="text-2xl font-bold mb-4">{{ $t('pricing.kits.title') }}</h3>
        <p class="text-gray-600 text-3xl font-bold mb-2">{{ $t('pricing.kits.price') }}</p>
        <p class="text-base md:text-lg mb-4">{{ $t('pricing.kits.description') }}</p>
        <Button type="button" variant="primary" @click="navigateTo('kits')">
          {{ $t('pricing.kits.orderButton') }}
        </Button>
      </div>
      <div class="border rounded-lg p-6 text-center">
        <h3 class="text-2xl font-bold mb-4">{{ $t('pricing.customBikes.title') }}</h3>
        <p class="text-gray-600 text-3xl font-bold mb-2">{{ $t('pricing.customBikes.price') }}</p>
        <p class="text-base md:text-lg mb-4">{{ $t('pricing.customBikes.description') }}</p>
        <a href="https://t.me/evola_manager">
          <Button type="button" variant="primary">
            {{ $t('pricing.customBikes.orderButton') }}
          </Button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from './ui/Button.vue';
import { navigateTo } from '#app'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
</style>