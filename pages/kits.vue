<template>
  <div class="max-w-screen-xl mx-auto px-4 py-16 sm:py-24">
    <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4 sm:mb-6">
      Комплекты для электровелосипеда
    </h1>
    
    <div class="text-center mb-8 sm:mb-12">
      <p class="text-lg sm:text-xl md:text-2xl text-gray-700 mb-2 sm:mb-4">
        От городской езды до экстремального бездорожья
      </p>
      <p class="text-xs sm:text-sm text-gray-500">
        Подберите комплект под свои задачи
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
      <!-- Lite Kit -->
      <div class="border rounded-xl p-6 shadow-lg">
        <div class="flex flex-col space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold">LITE</h2>
          <div class="w-full aspect-video">
            <img 
              src="/assets/default.png" 
              alt="Комплект LITE" 
              class="w-full h-full object-cover rounded-lg"
              onerror="this.src='https://placehold.co/600x400?text=LITE+Kit'"
            />
          </div>
          <div class="grid grid-cols-3 gap-2 text-center">
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <div class="text-sm font-semibold">Мощность</div>
                <div>250W</div>
              </div>
            </div>
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div class="text-sm font-semibold">Скорость</div>
                <div>25 км/ч</div>
              </div>
            </div>
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
              <div>
                <div class="text-sm font-semibold">Запас хода</div>
                <div>100 км</div>
              </div>
            </div>
          </div>
          <p class="text-gray-700 text-sm">
            Идеальное решение для города. Легальный комплект, не требующий регистрации.
          </p>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span class="text-xl sm:text-2xl font-bold">2600 PLN</span>
            <Button variant="primary" class="w-full sm:w-auto">Заказать</Button>
          </div>
        </div>
      </div>

      <!-- Base Kit -->
      <div class="border rounded-xl p-6 shadow-lg">
        <div class="flex flex-col space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold">BASE</h2>
          <div class="w-full aspect-video">
            <img 
              src="/assets/default.png" 
              alt="Комплект BASE" 
              class="w-full h-full object-cover rounded-lg"
              onerror="this.src='https://placehold.co/600x400?text=BASE+Kit'"
            />
          </div>
          <div class="grid grid-cols-3 gap-2 text-center">
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <div class="text-sm font-semibold">Мощность</div>
                <div>500W</div>
              </div>
            </div>
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div class="text-sm font-semibold">Скорость</div>
                <div>40 км/ч</div>
              </div>
            </div>
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
              <div>
                <div class="text-sm font-semibold">Запас хода</div>
                <div>70 км</div>
              </div>
            </div>
          </div>
          <p class="text-gray-700 text-sm">
            Универсальный комплект для города и легкого бездорожья.
          </p>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span class="text-xl sm:text-2xl font-bold">3200 PLN</span>
            <Button variant="primary" class="w-full sm:w-auto">Заказать</Button>
          </div>
        </div>
      </div>

      <!-- Turbo Kit -->
      <div class="border rounded-xl p-6 shadow-lg">
        <div class="flex flex-col space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold">TURBO</h2>
          <div class="w-full aspect-video">
            <img 
              src="/assets/default.png" 
              alt="Комплект TURBO" 
              class="w-full h-full object-cover rounded-lg"
              onerror="this.src='https://placehold.co/600x400?text=TURBO+Kit'"
            />
          </div>
          <div class="grid grid-cols-3 gap-2 text-center">
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <div class="text-sm font-semibold">Мощность</div>
                <div>3000W</div>
              </div>
            </div>
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div class="text-sm font-semibold">Скорость</div>
                <div>70 км/ч</div>
              </div>
            </div>
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
              <div>
                <div class="text-sm font-semibold">Запас хода</div>
                <div>70 км</div>
              </div>
            </div>
          </div>
          <p class="text-gray-700 text-sm">
            Максимальная мощность для экстремального катания и сложного рельефа.
          </p>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span class="text-xl sm:text-2xl font-bold">4500 PLN</span>
            <Button variant="primary" class="w-full sm:w-auto">Заказать</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '~/components/ui/Button.vue'
</script>