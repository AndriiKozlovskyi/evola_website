<template>
    <div v-editable="blok" class="px-4">
        <div class="w-full bg-gray-100 rounded-md text-center overflow-hidden">
            <div class="px-12 py-6">
                <h1 class="text-xl">{{ block.name }}</h1>
            </div>
        </div>
    </div>
  </template>
   
  <script setup>
  defineProps({ blok: Object })
  </script>