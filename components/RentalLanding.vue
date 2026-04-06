<template>
  <div class="overflow-hidden">
    <HeroSection />

    <div class=" px-4 sm:px-6">
      <div class="divider-glow my-4"></div>
    </div>

    <PricingSection />

    <div class="  px-4 sm:px-6">
      <div class="divider-glow"></div>
    </div>

    <BicycleComposeSection />

    <div class=" px-4 sm:px-6">
      <div class="divider-glow"></div>
    </div>

    <BenefitsSection />

    <div class="px-4 sm:px-6">
      <div class="divider-glow"></div>
    </div>

    <ConversionSection />

  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import BenefitsSection from '@/components/BenefitsSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import BicycleComposeSection from '@/components/BicycleComposeSection.vue'
import ConversionSection from '@/components/ConversionSection.vue'
import ContactForm from '@/components/ContactForm.vue'
</script>