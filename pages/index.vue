<template>
  <div class="pb-14">
    <HeroSection />
    <div class="max-w-screen-xl mx-auto px-4 space-y-10 md:space-y-14">
      <div class="section-shell rounded-3xl p-4 sm:p-6 md:p-8">
        <PricingSection />
      </div>
      <div class="section-shell rounded-3xl p-4 sm:p-6 md:p-8">
        <BenefitsSection />
      </div>
      <div class="section-shell rounded-3xl p-4 sm:p-6 md:p-8">
        <BicycleComposeSection/>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Evola E-bicycles | Konwersja rowerow na elektryczne',
  description: 'Konwersja rowerow na elektryczne, zestawy z montazem oraz wydajne baterie dla codziennej jazdy i dlugich tras.',
  ogTitle: 'Evola E-bicycles | Konwersja rowerow na elektryczne',
  ogDescription: 'Poznaj gotowe zestawy EVOLA, porownaj moce i skonfiguruj swoj rower elektryczny online.',
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
        telephone: '+48789711631',
        email: 'evolateam@gmail.com',
        areaServed: 'PL',
        sameAs: [
          'https://t.me/evola_manager',
          'https://www.facebook.com/profile.php?id=61572740802927'
        ]
      })
    }
  ]
})

import HeroSection from '@/components/HeroSection.vue'
import BenefitsSection from '@/components/BenefitsSection.vue'
import PricingSection from '@/components/PricingSection.vue'
</script>

<style scoped>
</style>