<template>
  <section class="py-16 sm:py-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
      <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Text -->
        <div>
          <div class="label-pill mb-6 inline-flex">{{ $t('conversion.kicker') }}</div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style="color: var(--text-1);">
            {{ $t('conversion.title') }}
          </h2>
          <p class="text-[#8fa3bb] text-base leading-relaxed mb-8">
            {{ $t('conversion.description') }}
          </p>

          <!-- Steps -->
          <ol class="space-y-5">
            <li v-for="(step, i) in steps" :key="i" class="flex items-start gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black text-white" style="background: rgba(240,91,4,0.15); border: 1px solid rgba(240,91,4,0.3); color: var(--accent);">
                {{ i + 1 }}
              </div>
              <div>
                <div class="text-sm font-bold text-white mb-0.5">{{ step.title }}</div>
                <div class="text-sm text-[#566a7f]">{{ step.desc }}</div>
              </div>
            </li>
          </ol>
        </div>

        <!-- Image -->
        <div class="relative">
          <div class="absolute inset-0 rounded-3xl" style="background: radial-gradient(ellipse at 70% 50%, rgba(240,91,4,0.1) 0%, transparent 65%);"></div>
          <img
            src="/assets/conversion.webp"
            :alt="$t('conversion.imageAlt')"
            class="relative w-full h-auto rounded-3xl ring-1 ring-white/10 shadow-2xl"
          />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const steps = computed(() => [
  { title: t('conversion.steps.choose.title'), desc: t('conversion.steps.choose.description') },
  { title: t('conversion.steps.sign.title'), desc: t('conversion.steps.sign.description') },
  { title: t('conversion.steps.pickup.title'), desc: t('conversion.steps.pickup.description') },
  { title: t('conversion.steps.service.title'), desc: t('conversion.steps.service.description') },
])
</script>
