<template>
  <RentalLanding />
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const seoMeta = computed(() => {
  switch (locale.value) {
    case 'pl':
      return {
        title: 'Wynajem Rowerów Elektrycznych dla Kurierów — Wrocław | Evola',
        description: 'Wynajem e-bike dla kurierów we Wrocławiu. Hardtail 200 zł/tydz., full suspension 250 zł/tydz. Obsługa techniczna po naszej stronie, bonusy dla stałych klientów.',
      }
    case 'en':
      return {
        title: 'Electric Bike Rental for Couriers — Wroclaw | Evola',
        description: 'E-bike rental for couriers in Wroclaw. Hardtail 200 zł/week, full suspension 250 zł/week. Full service covered, loyalty bonuses for regular customers.',
      }
    default:
      return {
        title: 'Аренда Электровелосипедов для Курьеров — Вроцлав | Evola',
        description: 'Аренда электровелосипедов для курьеров во Вроцлаве. Хардтейл 200 zł/нед., full suspension 250 zł/нед. Обслуживание полностью за наш счёт плюс бонусы постоянным клиентам.',
      }
  }
})

useSeoMeta({
  title: () => seoMeta.value.title,
  description: () => seoMeta.value.description,
  ogTitle: () => seoMeta.value.title,
  ogDescription: () => seoMeta.value.description,
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
        description: 'Wynajem rowerów elektrycznych we Wrocławiu z serwisem w cenie.',
        telephone: '+48789711631',
        email: 'evolateam@gmail.com',
        areaServed: 'PL',
        makesOffer: [
          {
            '@type': 'Offer',
            name: 'Full suspension 30Ah',
            price: '250',
            priceCurrency: 'PLN',
            description: 'Wynajem roweru elektrycznego full suspension na tydzień.'
          },
          {
            '@type': 'Offer',
            name: 'Hardtail 30Ah',
            price: '200',
            priceCurrency: 'PLN',
            description: 'Wynajem roweru elektrycznego hardtail na tydzień.'
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
