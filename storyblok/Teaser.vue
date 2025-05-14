<template>
    <div v-editable="blok" class="px-4">
        <div class="py-16 text-5xl font-bold text-center">
            <!-- <h1 class="text-xl">{{ block.name }}</h1> -->
        </div>
    </div>
  </template>
   
  <script setup>
  defineProps({ blok: Object })
  </script>