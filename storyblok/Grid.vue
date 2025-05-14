<template>
    <div v-editable="blok" class="px-4">
      <StoryblokComponent class="container mx-auto grid grid-cols-3 gap-12 place-content-center py-16" v-for="blok in blok.columnds" :key="blok._uid" :blok="blok" />
    </div>
  </template>
   
  <script setup>
  defineProps({ blok: Object })
  </script>