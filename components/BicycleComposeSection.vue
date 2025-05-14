<template>
  <section class="bg-white py-8 sm:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="text-center mb-8">
        <h2 class="text-3xl sm:text-4xl md:text-6xl mb-4">
          Готовые наборы
        </h2>
        <p class="text-base sm:text-lg mb-6">
          
          <br class="hidden sm:block" />
 
        </p>
      </div>

      <!-- Содержимое комплекта -->
      <div class="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
        <div class="w-full md:w-1/2">
          <img 
            src="/assets/default.png" 
            alt="Электрокомплект" 
            class="w-full max-w-sm mx-auto rounded-lg"
            loading="lazy"
          />
        </div>

        <div class="w-full md:w-1/2 text-left">
          <p class="mb-4 text-gray-700 text-base sm:text-lg">{{ selectedKit.description }}</p>
          
          <!-- Выбор комплекта и характеристики -->
          <div class="mb-6 flex flex-wrap gap-3 sm:gap-4 justify-start">
            <Button
              v-for="option in options"
              :key="option.value"
              :variant="selected === option.value ? 'primary' : 'outline'"
              @click="selected = option.value"
              class="flex-1 sm:flex-none text-sm sm:text-base"
            >
              {{ option.label }}
            </Button>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left text-gray-700">
            <div class="p-3 bg-gray-50 rounded-lg">
              <div class="font-semibold text-sm sm:text-base">Мощность</div>
              <div class="text-lg sm:text-xl">{{ selectedKit.power }}</div>
            </div>
            <div class="p-3 bg-gray-50 rounded-lg">
              <div class="font-semibold text-sm sm:text-base">Макс. скорость</div>
              <div class="text-lg sm:text-xl">{{ selectedKit.speed }}</div>
            </div>
            <div class="p-3 bg-gray-50 rounded-lg col-span-2 sm:col-span-1">
              <div class="font-semibold text-sm sm:text-base">Дальность</div>
              <div class="text-lg sm:text-xl text-red-700">{{ selectedKit.range }}</div>
            </div>
          </div>

          <p class="mt-2 text-xs sm:text-sm text-gray-500">
            * Запас хода на электротяге (без педалей) на 25 км/ч
          </p>

          <div class="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <div class="text-xl sm:text-2xl font-bold">{{ selectedKit.price }} zl</div>
            <Button 
              variant="primary" 
              class="w-full sm:w-auto"
              @click="navigateTo(`/configure-kit?type=${selected}`)"
            >
              Заказать
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

const selected = ref('lite')

const options = [
  { label: 'Lite', value: 'lite' },
  { label: 'Base', value: 'base' },
  { label: 'Turbo', value: 'turbo' }
]

const kits = {
  lite: {
    description: 'Лёгкий набор для спокойных катаний в городе, парках и на природе.',
    power: '250 Вт',
    speed: '35 км/ч',
    range: '100 км',
    price: '2600'
  },
  base: {
    description: 'Базовый универсальный комплект для повседневного использования.',
    power: '500 Вт',
    speed: '40 км/ч',
    range: '70 км',
    price: '3500'
  },
  turbo: {
    description: 'Максимальная мощность и дальность — для тех, кто хочет больше.',
    power: '3000 Вт',
    speed: '70 км/ч',
    range: '70 км',
    price: '4000'
  }
}

const selectedKit = computed(() => kits[selected.value])
</script>
