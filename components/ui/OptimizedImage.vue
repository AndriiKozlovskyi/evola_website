<template>
  <div class="relative w-full h-full">
    <picture v-show="!loading">
      <source :srcset="image" type="image/webp" />
      <img
        :src="image"
        :alt="alt"
        class="w-full max-w-sm mx-auto rounded-lg"
        loading="lazy"
        decoding="async"
        @error="handleError"
        @load="handleLoad"
      />
    </picture>
    <div 
      v-show="loading" 
      class="absolute inset-0 bg-gray-100 animate-pulse"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  image: string
  alt: string
  className?: string
  fallbackSrc?: string
}>()

const loading = ref(true)

const webpSrc = computed(() => {
  return props.src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
})

const handleError = (e: Event) => {
  const img = e.target as HTMLImageElement
  if (props.fallbackSrc) {
    img.src = props.fallbackSrc
  }
}

const handleLoad = () => {
  loading.value = false
}
</script>
<style scoped>

</style>