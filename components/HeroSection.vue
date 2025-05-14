<template>
  <section class="max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse items-center py-12">
    <div class="md:w-1/2 mt-6 md:mt-0">
      <img src="/assets/default.png" alt="Батарея/Электровелосипед" class="w-full h-auto mt-10" />
    </div>
    <div class="md:w-1/2 m-4">
      <h1 class="text-4xl md:text-6xl font-bold">Электровелосипед своими руками</h1>
      <p class="text-base md:text-lg mt-4">Evola — когда одного заряда хватает на целый день приключений.</p>
      <Button type="button" variant="primary" class="mt-6" @click="navigateTo('kits')">
        Заказать комплект
      </Button>
    </div>
  </section>
</template>

<script setup>
import Button from './ui/Button.vue';
import { navigateTo } from '#app'

</script>

<style scoped>
</style>