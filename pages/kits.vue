<template>
  <div class="max-w-screen-xl mx-auto px-4 py-16 mt-5 sm:py-24">
    <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4 sm:mb-6">
      {{$t('kits.title')}}
    </h1>
    
    <div class="text-center mb-8 sm:mb-12">
      <p class="text-lg sm:text-xl md:text-2xl text-gray-700 mb-2 sm:mb-4">
        {{$t('kits.subtitle')}}
      </p>
      <p class="text-xs sm:text-sm text-gray-500">
        {{$t('kits.selectKit')}}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
      <!-- Lite Kit -->
      <div class="border rounded-xl p-6 shadow-lg">
        <div class="flex flex-col space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold">LITE</h2>
          <div class="w-full aspect-video">
            <img 
              src="/assets/con250.png" 
              alt="Комплект LITE" 
              class="w-full h-full object-cover rounded-lg"
              onerror="this.src='https://placehold.co/600x400?text=LITE+Kit'"
            />
          </div>
          <div class="grid sm:grid-cols-3 grid-cols-1 gap-2 text-center">
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <div>250W</div>
              </div>
            </div>
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div>25 {{ $t('common.speed') }}</div>
              </div>
            </div>
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
              <div>
                <div>100 {{ $t('common.range') }}</div>
              </div>
            </div>
          </div>
          <p class="text-gray-700 text-sm">
            {{ $t('kits.liteTitle') }}
          </p>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span class="text-xl sm:text-2xl font-bold">2600 PLN</span>
            <Button  
              variant="primary" 
              @click="navigateTo(`/configure-kit?type=lite`)"
              class="w-full sm:w-auto"
            >{{$t('kits.orderLabel')}}</Button>
          </div>
        </div>
      </div>

      <!-- Base Kit -->
      <div class="border rounded-xl p-6 shadow-lg">
        <div class="flex flex-col space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold">BASE</h2>
          <div class="w-full aspect-video">
            <img 
              src="/assets/con500.png" 
              alt="Комплект BASE" 
              class="w-full h-full object-cover rounded-lg"
              onerror="this.src='https://placehold.co/600x400?text=BASE+Kit'"
            />
          </div>
          <div class="grid sm:grid-cols-3 grid-cols-1 gap-2 text-center">
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <div>500W</div>
              </div>
            </div>
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div>40 {{ $t('common.speed') }}</div>
              </div>
            </div>
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
              <div>
                <div>70 {{ $t('common.range') }}</div>
              </div>
            </div>
          </div>
          <p class="text-gray-700 text-sm">
            {{ $t('kits.baseTitle') }}
          </p>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span class="text-xl sm:text-2xl font-bold">3200 PLN</span>
            <Button 
              variant="primary" 
              @click="navigateTo(`/configure-kit?type=base`)"
              class="w-full sm:w-auto"
            >{{$t('kits.orderLabel')}}</Button>
          </div>
        </div>
      </div>

      <!-- Turbo Kit -->
      <div class="border rounded-xl p-6 shadow-lg">
        <div class="flex flex-col space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold">TURBO</h2>
          <div class="w-full aspect-video">
            <img 
              src="/assets/con3000.png" 
              alt="Комплект TURBO" 
              class="w-full h-full object-cover rounded-lg"
              onerror="this.src='https://placehold.co/600x400?text=TURBO+Kit'"
            />
          </div>
          <div class="grid sm:grid-cols-3 grid-cols-1 gap-2 text-center">
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <div>3000W</div>
              </div>
            </div>
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div>70 {{ $t('common.speed') }}</div>
              </div>
            </div>
            <div class="p-2 bg-gray-50 rounded flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
              <div>
                <div>70 {{ $t('common.range') }}</div>
              </div>
            </div>
          </div>
          <p class="text-gray-700 text-sm">
            {{ $t('kits.turboTitle') }}
          </p>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span class="text-xl sm:text-2xl font-bold">4500 PLN</span>
            <Button 
              variant="primary" 
              @click="navigateTo(`/configure-kit?type=lite`)"
              class="w-full sm:w-auto"
            >{{$t('kits.orderLabel')}}</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '~/components/ui/Button.vue'
</script>