<template>
  <section class="py-16 sm:py-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6">

      <!-- Section header -->
      <div class="text-center mb-10 sm:mb-14">
        <div class="label-pill mb-5 mx-auto inline-flex">{{ $t(`${namespace}.kicker`) }}</div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style="color: var(--text-1);">
          {{ $t(`${namespace}.title`) }}
        </h2>
        <p class="text-[#8fa3bb] max-w-xl mx-auto text-base">
          {{ $t(`${namespace}.description`) }}
        </p>
      </div>

      <!-- FAQ items -->
      <div class="max-w-3xl mx-auto flex flex-col gap-3">
        <div
          v-for="item in faqItems"
          :key="item.key"
          class="card-premium rounded-2xl overflow-hidden"
        >
          <button
            type="button"
            class="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
            :aria-expanded="openKey === item.key"
            @click="toggle(item.key)"
          >
            <span class="text-sm sm:text-base font-bold text-white">{{ item.question }}</span>
            <svg
              class="w-5 h-5 flex-shrink-0 text-[#f05b04] transition-transform duration-200"
              :class="openKey === item.key ? 'rotate-45' : ''"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <div v-show="openKey === item.key" class="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
            <p class="text-sm text-[#8fa3bb] leading-relaxed">{{ item.answer }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  namespace: { type: String, default: 'faq' },
  itemKeys: { type: Array, default: () => ['minTerm', 'service', 'whatIncluded', 'battery', 'contract', 'conversion'] }
})

const { t } = useI18n()

const faqItems = computed(() => props.itemKeys.map((key) => ({
  key,
  question: t(`${props.namespace}.items.${key}.question`),
  answer: t(`${props.namespace}.items.${key}.answer`)
})))

const openKey = ref(props.itemKeys[0])

function toggle(key) {
  openKey.value = openKey.value === key ? null : key
}

useHead(() => ({
  script: [
    {
      key: `faq-ld-${props.namespace}`,
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.value.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer }
        }))
      })
    }
  ]
}))
</script>
