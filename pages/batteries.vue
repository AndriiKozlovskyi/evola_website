<template>
  <div class="max-w-screen-xl mx-auto px-4 py-16 sm:py-24">
    <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4 sm:mb-6">
      Батареи для электровелосипедов
    </h1>
    
    <div class="text-center mb-8 sm:mb-12">
      <p class="text-lg sm:text-xl md:text-2xl text-gray-700 mb-2 sm:mb-4">
        Запас хода до 100 км на одном заряде*
      </p>
      <p class="text-xs sm:text-sm text-gray-500">
        * При средней скорости 25 км/ч на ровной дороге
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
      <!-- Батарея 25Ah -->
      <div class="border rounded-xl p-4 sm:p-6 shadow-lg">
        <div class="flex flex-col space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold">Батарея 25Ah</h2>
          <div class="w-full max-w-sm mx-auto">
            <img 
              src="/assets/dp5c.jpg" 
              alt="Батарея 25Ah" 
              class="w-full rounded-lg object-cover"
              onerror="this.src='https://placehold.co/300x400?text=Battery+25Ah'"
            />
          </div>
          <ul class="text-gray-600 text-base sm:text-lg space-y-2">
            <li>• Ячейки: 21700 M58T</li>
            <li>• Корпус: Polly DP5C</li>
            <li>• Smart BMS с Bluetooth</li>
            <li>• Напряжение: 48V</li>
            <li>• Зарядка 4А</li>
          </ul>
          <p class="text-gray-700 text-base sm:text-lg">
            Идеальное решение для городского использования, компактный корпус.
          </p>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span class="text-xl sm:text-2xl font-bold text-gray-900">1600 PLN</span>
            <Button variant="primary" class="w-full sm:w-auto">Заказать</Button>
          </div>
        </div>
      </div>

      <!-- Батарея 30Ah -->
      <div class="border rounded-xl p-4 sm:p-6 shadow-lg">
        <div class="flex flex-col space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold">Батарея 30Ah</h2>
          <div class="w-full max-w-sm mx-auto">
            <img 
              src="/assets/dp7.jpg" 
              alt="Батарея 30Ah" 
              class="w-full rounded-lg object-cover"
              onerror="this.src='https://placehold.co/300x400?text=Battery+30Ah'"
            />
          </div>
          <ul class="text-gray-600 text-base sm:text-lg space-y-2">
            <li>• Ячейки: 21700 M58T</li>
            <li>• Корпус: Polly DP7</li>
            <li>• Smart BMS с Bluetooth</li>
            <li>• Напряжение: 48V</li>
            <li>• Зарядка 4А</li>
          </ul>
          <p class="text-gray-700 text-base sm:text-lg">
            Увеличенная ёмкость для длительных поездок. Просторный корпус 
            обеспечивает оптимальное охлаждение.
          </p>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span class="text-xl sm:text-2xl font-bold text-gray-900">1900 PLN</span>
            <Button variant="primary" class="w-full sm:w-auto">Заказать</Button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 sm:mt-12 p-4 sm:p-6 bg-gray-50 rounded-lg">
      <h3 class="text-lg sm:text-xl font-semibold mb-4">Преимущества наших батарей:</h3>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <li class="flex items-center">
          <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Гарантия 12 месяцев
        </li>
        <li class="flex items-center">
          <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Оригинальные ячейки
        </li>
        <li class="flex items-center">
          <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Контроль температуры
        </li>
        <li class="flex items-center">
          <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Мониторинг через телефон
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Button from '~/components/ui/Button.vue'
</script>