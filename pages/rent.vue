<template>
  <RentalLanding />
</template>

<script setup>
useSeoMeta({
  title: 'Arenda i wynajem e-bike | EVOLA',
  description: 'Wypozyczalnia rowerow elektrycznych EVOLA: full suspension 30Ah za 250 zl tygodniowo, hardtail 30Ah za 220 zl i dodatkowe baterie od 1 tygodnia.',
  ogTitle: 'Arenda i wynajem e-bike | EVOLA',
  ogDescription: 'Pelna oferta wynajmu rowerow elektrycznych i baterii we Wroclawiu z serwisem 2 razy w tygodniu w cenie.',
  ogImage: 'https://evola.pl/assets/bic.webp',
  twitterCard: 'summary_large_image',
})

import RentalLanding from '@/components/RentalLanding.vue'
</script>