<template>
  <RentalLanding />
</template>

<script setup>
useSeoMeta({
  title: 'Wynajem rowerow elektrycznych Wroclaw | EVOLA',
  description: 'Wynajem rowerow elektrycznych we Wroclawiu. Full suspension 30Ah za 250 zl tygodniowo, hardtail 30Ah za 220 zl tygodniowo i osobny wynajem baterii od 1 tygodnia.',
  ogTitle: 'Wynajem rowerow elektrycznych Wroclaw | EVOLA',
  ogDescription: 'Arenda e-bike we Wroclawiu: full suspension 250 zl tydzien, hardtail 220 zl tydzien, dodatkowe baterie i serwis 2 razy w tygodniu w cenie.',
  ogImage: 'https://evola.pl/assets/bic.webp',
  twitterCard: 'summary_large_image',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Evola E-bicycles',
        url: 'https://evola.pl',
        image: 'https://evola.pl/assets/bic.webp',
        description: 'Wynajem rowerow elektrycznych we Wroclawiu z serwisem w cenie.',
        telephone: '+48789711631',
        email: 'evolateam@gmail.com',
        areaServed: 'PL',
        makesOffer: [
          {
            '@type': 'Offer',
            name: 'Full suspension 30Ah',
            price: '250',
            priceCurrency: 'PLN',
            description: 'Wynajem roweru elektrycznego full suspension na tydzien.'
          },
          {
            '@type': 'Offer',
            name: 'Hardtail 30Ah',
            price: '220',
            priceCurrency: 'PLN',
            description: 'Wynajem roweru elektrycznego hardtail na tydzien.'
          }
        ],
        sameAs: [
          'https://t.me/evola_manager',
          'https://www.facebook.com/profile.php?id=61572740802927'
        ]
      })
    }
  ]
})

import RentalLanding from '@/components/RentalLanding.vue'
</script>
