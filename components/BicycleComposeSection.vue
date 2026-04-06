<template>
  <section class="py-16 sm:py-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6">

      <div class="text-center mb-10 sm:mb-14">
        <div class="label-pill mb-5 inline-flex">
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5M12 3.75 20.25 12 12 20.25" /></svg>
          {{ t('bicycleCompose.kicker') }}
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style="color: var(--text-1);">
          {{ t('bicycleCompose.title') }}
        </h2>
        <p class="text-[#8fa3bb] max-w-lg mx-auto text-base">
          {{ t('bicycleCompose.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:flex sm:justify-center gap-2 mb-8 sm:mb-10">
        <button
          v-for="option in rentalOptions"
          :key="option.value"
          @click="selected = option.value"
          :class="[
            'flex items-center justify-between sm:justify-center text-left sm:text-center px-4 sm:px-6 py-3 sm:py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 min-w-0',
            selected === option.value
              ? 'bg-[#f05b04] text-white shadow-lg shadow-orange-900/30'
              : 'text-[#8fa3bb] hover:text-white border border-white/10 hover:border-white/20'
          ]"
        >
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-full mr-3 sm:mr-2 border border-white/10 bg-white/5 align-middle flex-shrink-0">
            <svg v-if="option.value === 'fullSuspension'" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 17l4-8 4 4 4-8 4 12" /></svg>
            <svg v-else-if="option.value === 'hardtail'" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l5-7 4 4 7-9" /></svg>
            <svg v-else class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m-7 4h8m-7 4h5M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" /></svg>
          </span>
          <span class="flex-1 min-w-0">
            <span class="block sm:inline">{{ option.label }}</span>
            <span class="block sm:inline sm:ml-1.5 text-xs opacity-70">{{ option.meta }}</span>
          </span>
        </button>
      </div>

      <div class="grid md:grid-cols-2 gap-8 lg:gap-14 items-start">

        <div class="relative">
          <div class="absolute inset-0 rounded-3xl" style="background: radial-gradient(ellipse at center, rgba(240,91,4,0.12) 0%, transparent 70%);"></div>
          <img
            :src="activeOption.image"
            :alt="activeOption.label"
            class="relative w-full max-w-md mx-auto rounded-2xl ring-1 ring-white/10 object-contain"
            loading="lazy"
          />
        </div>

        <div>
          <p class="text-[#8fa3bb] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            {{ activeOption.description }}
          </p>

          <div class="grid gap-3 mb-8 sm:grid-cols-2" v-if="activeOption.highlights?.length">
            <div
              v-for="highlight in activeOption.highlights"
              :key="highlight"
              class="feature-tile px-4 py-3 text-sm text-[#d7e1ec]"
            >
              <div class="flex items-start gap-3">
                <span class="icon-dot mt-1.5"></span>
                <span>{{ highlight }}</span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div class="spec-badge">
              <div class="text-[10px] font-semibold uppercase tracking-widest text-[#566a7f] mb-1">
                {{ t('bicycleCompose.specs.primary') }}
              </div>
              <div class="text-lg sm:text-xl font-black text-white break-words">{{ activeOption.primary }}</div>
            </div>
            <div class="spec-badge">
              <div class="text-[10px] font-semibold uppercase tracking-widest text-[#566a7f] mb-1">
                {{ t('bicycleCompose.specs.secondary') }}
              </div>
              <div class="text-lg sm:text-xl font-black text-white break-words">{{ activeOption.secondary }}</div>
            </div>
            <div class="spec-badge" style="border-color: rgba(240,91,4,0.25); background: rgba(240,91,4,0.06);">
              <div class="text-[10px] font-semibold uppercase tracking-widest text-[#f05b04]/70 mb-1">
                {{ t('bicycleCompose.specs.tertiary') }}
              </div>
              <div class="text-lg sm:text-xl font-black text-[#f05b04] break-words">{{ activeOption.tertiary }}</div>
            </div>
          </div>

          <p class="text-xs text-[#566a7f] mb-8">{{ t('bicycleCompose.rangeNote') }}</p>

          <ul class="space-y-3 mb-8">
            <li v-for="item in activeOption.checklist" :key="item" class="flex items-start gap-3 text-sm text-[#8fa3bb]">
              <svg class="w-4 h-4 text-[#f05b04] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              <span>{{ item }}</span>
            </li>
          </ul>

          <div v-if="activeOption.variants?.length" class="mb-8">
            <div class="text-xs text-[#566a7f] uppercase tracking-widest mb-3">{{ t('bicycleCompose.variantLabel') }}</div>
            <div class="grid gap-3 sm:grid-cols-2">
              <div
                v-for="variant in activeOption.variants"
                :key="variant.capacity"
                class="variant-card"
              >
                <div>
                  <div class="text-sm font-semibold text-white">{{ variant.capacity }}</div>
                  <div class="text-xs text-[#8fa3bb]">{{ variant.note }}</div>
                </div>
                <div class="text-base font-black text-[#f6c08d]">{{ variant.price }}</div>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-6" style="border-top: 1px solid var(--border);">
            <div class="min-w-0">
              <div class="text-xs text-[#566a7f] uppercase tracking-widest mb-0.5">{{ t('bicycleCompose.priceFrom') }}</div>
              <div class="text-2xl sm:text-3xl font-black text-white break-words">{{ activeOption.priceNote }}</div>
            </div>
            <Button
              variant="primary"
              class="w-full sm:w-auto flex-1 sm:flex-none text-base py-3.5"
              @click="scrollToContact()"
            >
              {{ t('bicycleCompose.orderButton') }}
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from './ui/Button.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const selected = ref('fullSuspension')

const rentalOptions = computed(() => [
  {
    value: 'fullSuspension',
    image: '/assets/bic.webp',
    label: t('bicycleCompose.options.fullSuspension.label'),
    meta: t('bicycleCompose.options.fullSuspension.meta'),
    description: t('bicycleCompose.options.fullSuspension.description'),
    highlights: [
      t('bicycleCompose.options.fullSuspension.highlights.one'),
      t('bicycleCompose.options.fullSuspension.highlights.two'),
    ],
    primary: t('bicycleCompose.options.fullSuspension.primary'),
    secondary: t('bicycleCompose.options.fullSuspension.secondary'),
    tertiary: t('bicycleCompose.options.fullSuspension.tertiary'),
    priceNote: t('bicycleCompose.options.fullSuspension.priceNote'),
    checklist: [
      t('bicycleCompose.options.fullSuspension.checklist.one'),
      t('bicycleCompose.options.fullSuspension.checklist.two'),
      t('bicycleCompose.options.fullSuspension.checklist.three'),
      t('bicycleCompose.options.fullSuspension.checklist.four'),
    ],
  },
  {
    value: 'hardtail',
    image: '/assets/conversion.webp',
    label: t('bicycleCompose.options.hardtail.label'),
    meta: t('bicycleCompose.options.hardtail.meta'),
    description: t('bicycleCompose.options.hardtail.description'),
    highlights: [
      t('bicycleCompose.options.hardtail.highlights.one'),
      t('bicycleCompose.options.hardtail.highlights.two'),
    ],
    primary: t('bicycleCompose.options.hardtail.primary'),
    secondary: t('bicycleCompose.options.hardtail.secondary'),
    tertiary: t('bicycleCompose.options.hardtail.tertiary'),
    priceNote: t('bicycleCompose.options.hardtail.priceNote'),
    checklist: [
      t('bicycleCompose.options.hardtail.checklist.one'),
      t('bicycleCompose.options.hardtail.checklist.two'),
      t('bicycleCompose.options.hardtail.checklist.three'),
      t('bicycleCompose.options.hardtail.checklist.four'),
    ],
  },
  {
    value: 'battery',
    image: '/assets/dp7.jpg',
    label: t('bicycleCompose.options.battery.label'),
    meta: t('bicycleCompose.options.battery.meta'),
    description: t('bicycleCompose.options.battery.description'),
    highlights: [
      t('bicycleCompose.options.battery.highlights.one'),
      t('bicycleCompose.options.battery.highlights.two'),
    ],
    primary: t('bicycleCompose.options.battery.primary'),
    secondary: t('bicycleCompose.options.battery.secondary'),
    tertiary: t('bicycleCompose.options.battery.tertiary'),
    priceNote: t('bicycleCompose.options.battery.priceNote'),
    variants: [
      {
        capacity: t('bicycleCompose.options.battery.variants.v20.capacity'),
        price: t('bicycleCompose.options.battery.variants.v20.price'),
        note: t('bicycleCompose.options.battery.variants.v20.note'),
      },
      {
        capacity: t('bicycleCompose.options.battery.variants.v25.capacity'),
        price: t('bicycleCompose.options.battery.variants.v25.price'),
        note: t('bicycleCompose.options.battery.variants.v25.note'),
      },
      {
        capacity: t('bicycleCompose.options.battery.variants.v30.capacity'),
        price: t('bicycleCompose.options.battery.variants.v30.price'),
        note: t('bicycleCompose.options.battery.variants.v30.note'),
      },
      {
        capacity: t('bicycleCompose.options.battery.variants.v35.capacity'),
        price: t('bicycleCompose.options.battery.variants.v35.price'),
        note: t('bicycleCompose.options.battery.variants.v35.note'),
      },
    ],
    checklist: [
      t('bicycleCompose.options.battery.checklist.one'),
      t('bicycleCompose.options.battery.checklist.two'),
      t('bicycleCompose.options.battery.checklist.three'),
      t('bicycleCompose.options.battery.checklist.four'),
    ],
  },
])

const activeOption = computed(() => rentalOptions.value.find((option) => option.value === selected.value) ?? rentalOptions.value[0])

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

