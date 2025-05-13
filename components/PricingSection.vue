<template>
  <section class="max-w-screen-xl mx-auto py-10">
    <h2 class="text-4xl md:text-6xl text-center mb-8">Цены на комплекты</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4">
      <div class="border rounded-lg p-6 text-center">
        <h3 class="text-2xl font-bold mb-4">Батареи</h3>
        <p class="text-gray-600 text-3xl font-bold mb-2">от 1600 zl</p>
        <p class="text-base md:text-lg mb-4">Батареи в корпусе с огромной ёмкостью по низким ценам.</p>
        <Button type="button" variant="primary">
          Оставить заявку
        </Button>
      </div>
      <div class="border rounded-lg p-6 text-center">
        <h3 class="text-2xl font-bold mb-4">Комплекты</h3>
        <p class="text-gray-600 text-3xl font-bold mb-2">от 2600 zl</p>
        <p class="text-base md:text-lg mb-4">Комплект под любые нужды 250w-3000w.</p>
        <Button type="button" variant="primary">
          Оставить заявку
        </Button>
      </div>
      <div class="border rounded-lg p-6 text-center">
        <h3 class="text-2xl font-bold mb-4">Велосипеды на заказ</h3>
        <p class="text-gray-600 text-3xl font-bold mb-2">от 3400 zl</p>
        <p class="text-base md:text-lg mb-4">Соберём электровелосипед с нуля под ваши нужды.</p>
        <Button type="button" variant="primary" >
          Оставить заявку
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from './ui/Button.vue';
</script>

<style scoped>
</style>