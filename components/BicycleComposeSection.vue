<template>
  <section class="bg-white py-8 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-8">
        <h2 class="text-3xl sm:text-4xl md:text-6xl mb-4">
          {{ $t('bicycleCompose.title') }}
        </h2>
      </div>

      <div class="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
        <div class="w-full md:w-1/2">
          <img 
            src="/assets/bicycleTemplate.png" 
            alt="Электрокомплект" 
            class="w-full max-w-sm mx-auto rounded-lg"
            loading="lazy"
          />
        </div>

        <div class="w-full md:w-1/2 text-left">
          <p class="mb-4 text-gray-700 text-base sm:text-lg">
            {{ $t(`bicycleCompose.kits.${selected}.description`) }}
          </p>
          
          <div class="mb-6 flex flex-wrap gap-3 sm:gap-4 justify-start">
            <Button
              v-for="option in options"
              :key="option.value"
              :variant="selected === option.value ? 'primary' : 'outline'"
              @click="selected = option.value"
              class="flex-1 sm:flex-none text-sm sm:text-base"
            >
              {{ $t(`bicycleCompose.kits.${option.value}.label`) }}
            </Button>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left text-gray-700">
            <div class="p-3 bg-gray-50 rounded-lg">
              <div class="font-semibold text-sm sm:text-base">{{ $t('bicycleCompose.specs.power') }}</div>
              <div class="text-lg sm:text-xl">{{ $t(`bicycleCompose.kits.${selected}.power`) }}</div>
            </div>
            <div class="p-3 bg-gray-50 rounded-lg">
              <div class="font-semibold text-sm sm:text-base">{{ $t('bicycleCompose.specs.speed') }}</div>
              <div class="text-lg sm:text-xl">{{ $t(`bicycleCompose.kits.${selected}.speed`) }}</div>
            </div>
            <div class="p-3 bg-gray-50 rounded-lg col-span-2 sm:col-span-1">
              <div class="font-semibold text-sm sm:text-base">{{ $t('bicycleCompose.specs.range') }}</div>
              <div class="text-lg sm:text-xl text-red-700">{{ $t(`bicycleCompose.kits.${selected}.range`) }}</div>
            </div>
          </div>

          <p class="mt-2 text-xs sm:text-sm text-gray-500">
            {{ $t('bicycleCompose.rangeNote') }}
          </p>

          <div class="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <div class="text-xl sm:text-2xl font-bold">{{ $t(`bicycleCompose.kits.${selected}.price`) }} zl</div>
            <Button 
              variant="primary" 
              class="w-full sm:w-auto"
              @click="navigateTo(`/configure-kit?type=${selected}`)"
            >
              {{ $t('bicycleCompose.orderButton') }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Button from './ui/Button.vue'
import { navigateTo } from '#app'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const selected = ref('lite')

const options = [
  { value: 'lite' },
  { value: 'base' },
  { value: 'turbo' }
]
</script>
