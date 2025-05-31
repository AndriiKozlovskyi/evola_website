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
            :src="selected.image"
            alt="Электрокомплект" 
            class="w-full max-w-sm mx-auto rounded-lg"
            loading="lazy"
          />
          <!-- <OptimizedImage
            :image="selected.image"
            :alt="t(`bicycleCompose.kits.${selected.value}.label`)"
            class="w-full max-w-sm mx-auto rounded-lg"
            fallbackSrc="https://placehold.co/600x400?text=Kit+Image"
          /> -->
          <!-- Add preload links for other images -->
          <link 
            v-for="option in options" 
            :key="option.value"
            rel="preload"
            as="image"
            :href="getImagePath(option.value)"
          />
        </div>

        <div class="w-full md:w-1/2 text-left">
          <p class="mb-4 text-gray-700 text-base sm:text-lg">
            {{ $t(`bicycleCompose.kits.${selected.value}.description`) }}
          </p>
          
          <div class="mb-6 flex flex-wrap gap-3 sm:gap-4 justify-start">
            <Button
              v-for="option in options"
              :key="option.value"
              :variant="selected.value === option.value ? 'primary' : 'outline'"
              @click="selected = option"
              class="flex-1 sm:flex-none text-sm sm:text-base"
            >
              {{ $t(`bicycleCompose.kits.${option.value}.label`) }}
            </Button>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left text-gray-700">
            <div class="p-3 bg-gray-50 rounded-lg">
              <div class="font-semibold text-sm sm:text-base">{{ $t('bicycleCompose.specs.power') }}</div>
              <div class="text-lg sm:text-xl">{{ $t(`bicycleCompose.kits.${selected.value}.power`) }}</div>
            </div>
            <div class="p-3 bg-gray-50 rounded-lg">
              <div class="font-semibold text-sm sm:text-base">{{ $t('bicycleCompose.specs.speed') }}</div>
              <div class="text-lg sm:text-xl">{{ $t(`bicycleCompose.kits.${selected.value}.speed`) }}</div>
            </div>
            <div class="p-3 bg-gray-50 rounded-lg col-span-2 sm:col-span-1">
              <div class="font-semibold text-sm sm:text-base">{{ $t('bicycleCompose.specs.range') }}</div>
              <div class="text-lg sm:text-xl text-red-700">{{ $t(`bicycleCompose.kits.${selected.value}.range`) }}</div>
            </div>
          </div>

          <p class="mt-2 text-xs sm:text-sm text-gray-500">
            {{ $t('bicycleCompose.rangeNote') }}
          </p>

          <div class="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <div class="text-xl sm:text-2xl font-bold">{{ $t(`bicycleCompose.kits.${selected.value}.price`) }} zl</div>
            <Button 
              variant="primary" 
              class="w-full sm:w-auto"
              @click="navigateTo(`/configure-kit?type=${selected.value}`)"
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
import { ref, onMounted } from 'vue'
import Button from './ui/Button.vue'
import OptimizedImage from './ui/OptimizedImage.vue'
import { navigateTo } from '#app'
import { useI18n } from 'vue-i18n'
import lite from '~/assets/lite.png';
import base from '~/assets/base.webp';
import turbo from '~/assets/turbo.png';

const { t } = useI18n()
const selected = ref({ value: 'lite', image: lite })

const options = [
  { value: 'lite', image: lite },
  { value: 'base', image: base },
  { value: 'turbo', image: turbo }
]

// Image mapping
const kitImages = {
  lite: '/assets/con250.webp',
  base: '/assets/con500.webp',
  turbo: '/assets/con3000.webp'
}

const getImagePath = (type: string) => kitImages[type as keyof typeof kitImages]

// const getKitImage = computed(() => getImagePath(selected.value))

// Preload images
onMounted(() => {
  Object.values(kitImages).forEach(src => {
    const img = new Image()
    img.src = src
  })
})
</script>
