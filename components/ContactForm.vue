<template>
  <div class="max-w-screen-xl mx-auto p-6">
    <h2 class="text-4xl md:text-6xl mb-4">Contact Us</h2>
    <form class="space-y-4">
      <div>
        <label for="name" class="block text-base md:text-lg">Name</label>
        <input type="text" id="name" class="w-full border rounded-lg p-2" required />
      </div>
      <div>
        <label for="phone" class="block text-base md:text-lg">Phone</label>
        <input type="tel" id="phone" class="w-full border rounded-lg p-2" required />
      </div>
      <Button type="button" variant="primary">
        Get Consultation
      </Button>
    </form>
  </div>
</template>

<script setup>
import Button from './ui/Button.vue';
</script>

<style scoped>
</style>