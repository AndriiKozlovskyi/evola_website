<template>
  <div class="max-w-screen-xl mx-auto px-4 py-16 mt-5 sm:py-24">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Left side - Image -->
      <div class="w-full">
        <img 
          :src="selectedKit.image || '/assets/default.png'"
          :alt="selectedKit.name"
          class="w-full h-auto rounded-lg shadow-lg"
          onerror="this.src='https://placehold.co/600x400?text=Kit+Image'"
        />
      </div>

      <!-- Right side - Configuration -->
      <div class="space-y-6">
        <h1 class="text-2xl sm:text-3xl font-bold">{{ selectedKit.name }}</h1>
        
        <!-- Battery Selection -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">{{ $t('kits.batteryLabel') }}</label>
          <select v-model="selectedBattery" class="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm">
            <option value="25">25 AH (1600 PLN)</option>
            <option value="30">30 AH (2000 PLN)</option>
          </select>
        </div>

        <!-- Motor Position -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">{{ $t('kits.motorPositionLabel') }}</label>
          <select v-model="motorPosition" class="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm">
            <option value="front">{{ $t('kits.frontWheel') }}</option>
            <option value="rear">{{ $t('kits.rearWheel') }}</option>
          </select>
        </div>

        <!-- Wheel Size -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">{{ $t('kits.wheelSizeLabel') }}</label>
          <select v-model="wheelSize" class="w-full px-3 py-2 rounded-md border-gray-300 shadow-sm">
            <option v-for="size in [20, 24, 26, 29]" :key="size" :value="size">
              {{ size }}"
            </option>
          </select>
        </div>

        <!-- Specifications -->
        <div class="grid grid-cols-2 gap-4 pt-6">
          <div class="p-3 bg-gray-50 rounded-lg flex items-center">
            <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <div class="text-sm font-semibold">{{$t('kits.speedLabel')}}</div>
              <div>{{ calculatedSpeed }}  {{ $t('common.speed') }}</div>
            </div>
          </div>
          
          <div class="p-3 bg-gray-50 rounded-lg flex items-center">
            <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
            <div>
              <div class="text-sm font-semibold">{{ $t('kits.rangeLabel') }}</div>
              <div>{{ calculatedRange }} {{ $t('common.range') }}</div>
            </div>
          </div>
        </div>

        <!-- Total Price -->
        <div class="pt-6 border-t">
          <div class="flex justify-between items-center mb-4">
            <span class="text-lg font-semibold">{{ $t('kits.totalPriceLabel') }}:</span>
            <span class="text-2xl font-bold">{{ totalPrice }} PLN</span>
          </div>
          <Button variant="primary" class="w-full" @click="handleOrder">{{ $t('kits.buyButton') }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Button from '~/components/ui/Button.vue'
import liteImage from '~/assets/con250.png'
import baseImage from '~/assets/con500.png'
import turboImage from '~/assets/con3000.png'

const { t } = useI18n()
const route = useRoute()
const kitType = route.query.type || 'lite'

const selectedBattery = ref('25')
const motorPosition = ref('rear')
const wheelSize = ref(26)

const kitsConfig = {
  lite: {
    name: 'LITE Kit',
    basePrice: 1200,
    baseSpeed: 25,
    image: liteImage,
    speedMultiplier: 1
  },
  base: {
    name: 'BASE Kit',
    basePrice: 1400,
    baseSpeed: 40,
    image: baseImage,
    speedMultiplier: 1
  },
  turbo: {
    name: 'TURBO Kit',
    basePrice: 2000,
    baseSpeed: 70,
    image: turboImage,
    speedMultiplier: 1
  }
}

const selectedKit = computed(() => kitsConfig[kitType])

onMounted(() => {
  console.log(selectedKit.value.image)
})

const calculatedSpeed = computed(() => {
  const baseSpeed = selectedKit.value.baseSpeed
  const sizeFactor = wheelSize.value / 26 // 26" as reference
  return Math.round(baseSpeed * sizeFactor * selectedKit.value.speedMultiplier)
})

const calculatedRange = computed(() => {
  const baseRange = selectedBattery.value === '25' ? 70 : 100
  return Math.round(baseRange * (1 - (calculatedSpeed.value - selectedKit.value.baseSpeed) / 100))
})

const totalPrice = computed(() => {
  const batteryPrice = selectedBattery.value === '25' ? 1600 : 2000
  return selectedKit.value.basePrice + batteryPrice
})

const generateOrderText = () => {
  const kitName = selectedKit.value.name
  const batterySize = `${selectedBattery.value}Ah`
  const batteryPrice = selectedBattery.value === '25' ? '1600' : '2000'
  const position = motorPosition.value
  const wheel = `${wheelSize.value}"`
  const speed = `${calculatedSpeed.value} ${t('common.speed')}`
  const range = `${calculatedRange.value} ${t('common.range')}`
  const price = `${totalPrice.value} PLN`

  return `
${t('kits.orderLabel')}:
----------------
${kitName}
${t('kits.batteryLabel')}: ${batterySize} (${batteryPrice} PLN)
${t('kits.motorPositionLabel')}: ${position === 'front' ? t('kits.frontWheel') : t('kits.rearWheel')}
${t('kits.wheelSizeLabel')}: ${wheel}
${t('kits.speedLabel')}: ${speed}
${t('kits.rangeLabel')}: ${range}
----------------
${t('kits.totalPriceLabel')}: ${price}
  `.trim()
}

const handleOrder = async () => {
  try {
    const orderText = generateOrderText()
    await navigator.clipboard.writeText(orderText)
    alert(t('kits.orderCopiedMessage'))
    // Redirect to Telegram
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
      // Redirect to Telegram
      window.location.href = 'https://t.me/evola_manager'
    } catch (err) {
      alert(t('kits.orderCopyError'))
    }
    document.body.removeChild(textarea)
  }
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>