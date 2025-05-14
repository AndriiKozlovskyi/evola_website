<template>
  <div v-editable="blok" class="px-4">
    <picture>
      <source
        media="(min-width: 768px)"
        :srcset="`${blok.image}?fit=max&w=1200&h=800&q=80`"
        :alt="blok.image.alt"
      />
      <source
        media="(max-width: 767px)"
        :srcset="`${blok.image}?fit=max&w=600&h=400&q=75`"
        :alt="blok.image.alt"
      />
      <img
        :src="blok.image"
        :alt="blok.image.alt"
        class="mx-auto w-full md:w-3/4 object-cover"
        width="1200"
        height="800"
        loading="lazy"
      />
    </picture>
    <div class="container mx-auto max-w-screen-md mb-12">
      <h1 class="text-4xl md:text-6xl text-gray-800 font-bold mt-8 md:mt-12 mb-4">
        {{ blok.title }}
      </h1>
      <h2 class="text-xl md:text-2xl text-gray-500 font-bold mb-4">
        {{ blok.description }}
      </h2>
      <div class="text-gray-600 mb-3">Автор: <b>{{ blok.author }}</b></div>
      <div v-html="blok.content" class="prose prose-sm md:prose-lg mt-8"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  aspect-ratio: 3/2;
}

@media (max-width: 767px) {
  img {
    aspect-ratio: 3/2;
  }
}
</style>
