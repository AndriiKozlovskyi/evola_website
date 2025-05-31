<template>
  <div class="max-w-screen-xl mx-auto px-4 py-16 mt-5 sm:py-24">
    <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4 sm:mb-6">
      {{ $t('batteries.title') }}
    </h1>
    
    <div class="text-center mb-8 sm:mb-12">
      <p class="text-lg sm:text-xl md:text-2xl text-gray-700 mb-2 sm:mb-4">
        {{ $t('batteries.rangeTitle') }}
      </p>
      <p class="text-xs sm:text-sm text-gray-500">
        {{ $t('batteries.rangeNote') }}
      </p>
      <Button type="button" variant="primary" class="mt-6 flex flex-row">
        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.523 15.3414C17.523 16.0828 16.9231 16.6828 16.1817 16.6828H15.5217V19.5276C15.5217 20.3448 14.8545 21.0121 14.0372 21.0121C13.22 21.0121 12.5528 20.3448 12.5528 19.5276V16.6828H11.4472V19.5276C11.4472 20.3448 10.78 21.0121 9.96276 21.0121C9.14552 21.0121 8.47828 20.3448 8.47828 19.5276V16.6828H7.81828C7.07683 16.6828 6.47693 16.0828 6.47693 15.3414V8.67589H17.523V15.3414ZM5.69656 8.67589C4.87931 8.67589 4.21207 9.34313 4.21207 10.1604V13.8569C4.21207 14.6741 4.87931 15.3414 5.69656 15.3414C6.51381 15.3414 7.18104 14.6741 7.18104 13.8569V10.1604C7.18104 9.34313 6.51381 8.67589 5.69656 8.67589ZM18.3034 8.67589C17.4862 8.67589 16.819 9.34313 16.819 10.1604V13.8569C16.819 14.6741 17.4862 15.3414 18.3034 15.3414C19.1207 15.3414 19.7879 14.6741 19.7879 13.8569V10.1604C19.7879 9.34313 19.1207 8.67589 18.3034 8.67589ZM14.9012 3.50698L16.1948 2.21337C16.3912 2.01699 16.3912 1.69682 16.1948 1.50044C16.0017 1.30406 15.6815 1.30406 15.4851 1.50044L14.0472 2.93837C13.4305 2.61821 12.7366 2.43837 12 2.43837C11.2634 2.43837 10.5695 2.61821 9.95276 2.93837L8.51483 1.50044C8.31845 1.30406 7.99828 1.30406 7.80518 1.50044C7.60879 1.69682 7.60879 2.01699 7.80518 2.21337L9.09879 3.50698C7.87449 4.38354 7.05724 5.78044 7.05724 7.37244C7.05724 7.55228 7.07378 7.72885 7.09033 7.90541H16.9097C16.9262 7.72885 16.9428 7.55228 16.9428 7.37244C16.9428 5.78044 16.1255 4.38354 14.9012 3.50698Z"/>
        </svg>
        <a href="https://play.google.com/store/apps/details?id=com.jiabaida.little_elephant" class="text-white">
          {{ $t('batteries.appButton') }}
        </a>
      </Button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
      <!-- Батарея 25Ah -->
      <div class="border rounded-xl p-4 sm:p-6 shadow-lg">
        <div class="flex flex-col space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold">{{ $t('batteries.battery25.title') }}</h2>
          <div class="w-full max-w-sm mx-auto h-[300px]"> <!-- Added fixed height -->
            <img 
              src="/assets/dp5c.jpg" 
              :alt="$t('batteries.battery25.title')" 
              class="w-full rounded-lg object-cover" 
              onerror="this.src='https://placehold.co/300x400?text=Battery+25Ah'"
            />
          </div>
          <ul class="text-gray-600 text-base sm:text-lg space-y-2">
            <li>• {{ $t('batteries.battery25.specs.cells') }}</li>
            <li>• {{ $t('batteries.battery25.specs.case') }}</li>
            <li>• {{ $t('batteries.battery25.specs.bms') }}</li>
            <li>• {{ $t('batteries.battery25.specs.voltage') }}</li>
            <li>• {{ $t('batteries.battery25.specs.charging') }}</li>
          </ul>
          <p class="text-gray-700 text-base sm:text-lg">
            {{ $t('batteries.battery25.description') }}
          </p>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span class="text-xl sm:text-2xl font-bold text-gray-900">{{ $t('batteries.battery25.price') }}</span>
            <Button variant="primary" class="w-full sm:w-auto" @click="handleBatteryOrder('25')">{{ $t('batteries.orderButton') }}</Button>
          </div>
        </div>
      </div>

      <!-- Батарея 30Ah -->
      <div class="border rounded-xl p-4 sm:p-6 shadow-lg">
        <div class="flex flex-col space-y-4">
          <h2 class="text-xl sm:text-2xl font-bold">{{ $t('batteries.battery30.title') }}</h2>
          <div class="w-full max-w-sm mx-auto h-[300px]"> <!-- Added fixed height -->
            <img 
              src="/assets/dp7.jpg" 
              :alt="$t('batteries.battery30.title')" 
              class="w-full rounded-lg object-cover"
              onerror="this.src='https://placehold.co/300x400?text=Battery+30Ah'"
            />
          </div>
          <ul class="text-gray-600 text-base sm:text-lg space-y-2">
            <li>• {{ $t('batteries.battery30.specs.cells') }}</li>
            <li>• {{ $t('batteries.battery30.specs.case') }}</li>
            <li>• {{ $t('batteries.battery30.specs.bms') }}</li>
            <li>• {{ $t('batteries.battery30.specs.voltage') }}</li>
            <li>• {{ $t('batteries.battery30.specs.charging') }}</li>
          </ul>
          <p class="text-gray-700 text-base sm:text-lg">
            {{ $t('batteries.battery30.description') }}
          </p>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span class="text-xl sm:text-2xl font-bold text-gray-900">{{ $t('batteries.battery30.price') }}</span>
            <Button variant="primary" class="w-full sm:w-auto" @click="handleBatteryOrder('30')">{{ $t('batteries.orderButton') }}</Button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 sm:mt-12 p-4 sm:p-6 bg-gray-50 rounded-lg">
      <h3 class="text-lg sm:text-xl font-semibold mb-4">{{ $t('batteries.advantages.title') }}</h3>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <li class="flex items-center">
          <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          {{ $t('batteries.advantages.warranty') }}
        </li>
        <li class="flex items-center">
          <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          {{ $t('batteries.advantages.cells') }}
        </li>
        <li class="flex items-center">
          <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          {{ $t('batteries.advantages.temperature') }}
        </li>
        <li class="flex items-center">
          <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          {{ $t('batteries.advantages.warranty') }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Button from '~/components/ui/Button.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const generateBatteryOrderText = (batteryType) => {
  
  const title = batteryType === '25' ? 
    t('batteries.battery25.title') : 
    t('batteries.battery30.title')
  
  const price = batteryType === '25' ? 
    t('batteries.battery25.price') : 
    t('batteries.battery30.price')

  return `
${t('kits.orderLabel')}:
----------------
${title}

${price}
  `.trim()
}

const handleBatteryOrder = async (batteryType) => {
  try {
    const orderText = generateBatteryOrderText(batteryType)
    await navigator.clipboard.writeText(orderText)
    alert(t('kits.orderCopiedMessage'))
    window.location.href = 'https://t.me/evola_manager'
  } catch (err) {
    // Fallback for older browsers
    const textarea = document.createElement('textarea')
    textarea.value = orderText
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    try {
      document.execCommand('copy')
      alert(t('kits.orderCopiedMessage'))
      window.location.href = 'https://t.me/evola_manager'
    } catch (err) {
      alert(t('kits.orderCopyError'))
    }
    document.body.removeChild(textarea)
  }
}
</script>