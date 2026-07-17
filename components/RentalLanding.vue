<template>
  <div class="overflow-hidden">
    <HeroSection />

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

    <div class="px-4 sm:px-6">
      <div class="divider-glow"></div>
    </div>

    <FaqSection />

  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import BenefitsSection from '@/components/BenefitsSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import BicycleComposeSection from '@/components/BicycleComposeSection.vue'
import ConversionSection from '@/components/ConversionSection.vue'
import ContactForm from '@/components/ContactForm.vue'
import FaqSection from '@/components/FaqSection.vue'
</script>