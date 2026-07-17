<template>
  <div>

    <!-- Hero -->
    <section class="relative overflow-hidden min-h-[560px] md:min-h-[680px] flex flex-col" style="background: var(--bg-1, #07111f);">

      <!-- Radial orange glow from top center -->
      <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse 80% 55% at 50% 0%, rgba(240,91,4,0.18) 0%, transparent 70%);"></div>
      <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(180deg, rgba(240,91,4,0.05) 0%, transparent 50%);"></div>

      <div class="relative z-10 flex-1 max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 pb-10 sm:pt-14 sm:pb-14 md:py-28 flex flex-col justify-center">

        <!-- Mobile: title at top -->
        <div class="md:hidden">
          <div class="label-pill mb-4 self-start inline-flex">⚡ {{ $t('conversionPage.kicker') }}</div>
          <h1 class="text-3xl font-black leading-[1.1]" style="color: var(--text-1);">
            {{ $t('conversionPage.heroTitle') }}
          </h1>
        </div>

        <div class="grid md:grid-cols-2 md:gap-0 items-center w-full gap-6">

          <!-- Left: text -->
          <div class="flex flex-col md:pr-10 lg:pr-16">
            <div class="hidden md:block">
              <div class="label-pill mb-6 self-start inline-flex">⚡ {{ $t('conversionPage.kicker') }}</div>
              <h1 class="text-3xl sm:text-5xl lg:text-[3.6rem] font-black leading-[1.08] mb-5" style="color: var(--text-1);">
                {{ $t('conversionPage.heroTitle') }}
              </h1>
              <p class="text-base text-[#8fa3bb] leading-relaxed mb-8">
                {{ $t('conversionPage.heroSubtitle') }}
              </p>
            </div>

            <!-- Desktop CTAs -->
            <div class="hidden md:flex flex-row flex-wrap gap-3 items-center">
              <a href="tel:+48789711631"
                class="inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#f05b04] hover:bg-[#d44d03] px-6 py-3.5 rounded-xl transition-colors btn-glow">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5C3 4.67 3.67 4 4.5 4H7.28C8.04 4 8.69 4.53 8.83 5.28L9.45 8.37C9.56 8.94 9.35 9.53 8.89 9.9L7.09 11.37C8.09 13.83 10.05 15.79 12.51 16.79L13.98 14.98C14.35 14.53 14.93 14.31 15.51 14.43L18.6 15.04C19.34 15.19 19.88 15.84 19.88 16.6V19.38C19.88 20.2 19.2 20.88 18.38 20.88H17.25C9.38 20.88 3 14.5 3 6.63V5.5Z"/></svg>
                {{ $t('conversionPage.ctaCall') }}
              </a>
              <a href="https://t.me/evola_manager" target="_blank" rel="noopener"
                class="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#8fa3bb] hover:text-white transition-colors px-6 py-3.5 rounded-xl"
                style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Telegram
              </a>
            </div>
          </div>

          <!-- Right: image -->
          <div class="relative flex items-center justify-center min-h-[260px] md:min-h-0">
            <img
              src="/assets/bike1.webp"
              :alt="$t('conversionPage.imageAltGiant')"
              class="relative z-10 object-cover select-none w-full rounded-2xl"
              style="max-height: 460px; filter: drop-shadow(0 20px 60px rgba(240,91,4,0.2)) drop-shadow(0 8px 24px rgba(0,0,0,0.55));"
              width="680" height="510"
              sizes="(max-width: 768px) 100vw, 50vw"
              decoding="async"
              fetchpriority="high"
            />
          </div>

        </div>

        <!-- Mobile CTAs -->
        <div class="md:hidden flex flex-col gap-3 px-0 pt-8 pb-4">
          <a href="tel:+48789711631"
            class="inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#f05b04] hover:bg-[#d44d03] w-full py-3.5 rounded-xl transition-colors">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5C3 4.67 3.67 4 4.5 4H7.28C8.04 4 8.69 4.53 8.83 5.28L9.45 8.37C9.56 8.94 9.35 9.53 8.89 9.9L7.09 11.37C8.09 13.83 10.05 15.79 12.51 16.79L13.98 14.98C14.35 14.53 14.93 14.31 15.51 14.43L18.6 15.04C19.34 15.19 19.88 15.84 19.88 16.6V19.38C19.88 20.2 19.2 20.88 18.38 20.88H17.25C9.38 20.88 3 14.5 3 6.63V5.5Z"/></svg>
            {{ $t('conversionPage.ctaCall') }}
          </a>
          <a href="https://t.me/evola_manager" target="_blank" rel="noopener"
            class="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#8fa3bb] hover:text-white transition-colors w-full py-3.5 rounded-xl"
            style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            Telegram
          </a>
        </div>

        <!-- Mobile subtitle -->
        <p class="md:hidden text-sm text-[#8fa3bb] leading-relaxed pb-6">
          {{ $t('conversionPage.heroSubtitle') }}
        </p>

      </div>
    </section>

    <!-- Stats strip -->
    <section class="py-6 sm:py-8" style="border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-xl sm:text-2xl font-black text-[#f05b04] leading-none mb-1">{{ stat.value }}</div>
            <div class="text-xs text-[#566a7f] uppercase tracking-widest">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-16 sm:py-24">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <div class="label-pill mb-4 inline-flex">{{ $t('conversionPage.servicesKicker') }}</div>
          <h2 class="text-3xl sm:text-4xl font-black" style="color: var(--text-1);">
            {{ $t('conversionPage.servicesTitle') }}
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 gap-5">
          <div
            v-for="service in services"
            :key="service.titleKey"
            class="rounded-2xl p-6 sm:p-8 flex flex-col"
            :style="service.accent ? 'background: rgba(240,91,4,0.06); border: 1px solid rgba(240,91,4,0.2);' : 'background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);'"
          >
            <div class="flex items-start justify-between gap-4 mb-4">
              <h3 class="text-lg sm:text-xl font-black" style="color: var(--text-1);">{{ $t(service.titleKey) }}</h3>
              <div v-if="service.accent" class="flex-shrink-0 text-xs font-bold text-[#f05b04] border border-[#f05b04]/30 rounded-full px-3 py-1 bg-[#f05b04]/10 whitespace-nowrap">
                {{ $t(service.badgeKey) }}
              </div>
            </div>
            <p class="text-sm text-[#8fa3bb] leading-relaxed mb-5">{{ $t(service.descKey) }}</p>
            <ul class="space-y-2 mb-6 flex-1">
              <li v-for="fKey in service.featureKeys" :key="fKey" class="flex items-center gap-3 text-sm text-[#d7e1ec]">
                <span class="icon-dot flex-shrink-0"></span>
                {{ $t(fKey) }}
              </li>
            </ul>
            <div class="pt-4 flex items-center justify-between" style="border-top: 1px solid rgba(255,255,255,0.07);">
              <div class="text-xs text-[#566a7f] uppercase tracking-widest">{{ $t('bicycleCompose.priceFrom') }}</div>
              <div class="text-base font-black" :class="service.accent ? 'text-[#f05b04]' : 'text-white'">{{ $t(service.priceKey) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="py-12 sm:py-20" style="background: rgba(255,255,255,0.015); border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-10">
          <div class="label-pill mb-4 inline-flex">{{ $t('conversionPage.galleryKicker') }}</div>
          <h2 class="text-3xl sm:text-4xl font-black mb-3" style="color: var(--text-1);">
            {{ $t('conversionPage.galleryTitle') }}
          </h2>
          <p class="text-[#8fa3bb] text-sm sm:text-base max-w-xl mx-auto">
            {{ $t('conversionPage.gallerySubtitle') }}
          </p>
        </div>
        <div class="grid sm:grid-cols-3 gap-4 sm:gap-6">
          <div v-for="photo in photos" :key="photo.src" class="relative group rounded-2xl overflow-hidden" style="border: 1px solid rgba(255,255,255,0.08);">
            <img
              :src="photo.src"
              :alt="$t(photo.altKey)"
              class="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
              width="820"
              height="1093"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 427px"
            />
            <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(5,10,18,0.85) 0%, transparent 50%);"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="text-sm font-semibold text-white">{{ $t(photo.labelKey) }}</div>
            </div>
          </div>
        </div>
        <p class="text-center text-xs text-[#566a7f] mt-6">{{ $t('conversionPage.suitableNote') }}</p>
      </div>
    </section>

    <!-- Tech specs -->
    <section class="py-16 sm:py-24">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <div class="label-pill mb-4 inline-flex">{{ $t('conversionPage.techKicker') }}</div>
          <h2 class="text-3xl sm:text-4xl font-black" style="color: var(--text-1);">
            {{ $t('conversionPage.techTitle') }}
          </h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8 lg:gap-12">

          <!-- Motors -->
          <div>
            <h3 class="text-lg font-black text-white mb-5">{{ $t('conversionPage.motorsTitle') }}</h3>
            <div class="space-y-4">
              <div
                v-for="motor in motors"
                :key="motor.nameKey"
                class="rounded-2xl p-5"
                style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);"
              >
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background: rgba(240,91,4,0.12); border: 1px solid rgba(240,91,4,0.25);">
                    <svg class="w-4 h-4 text-[#f05b04]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <div class="text-sm font-bold text-white">{{ $t(motor.nameKey) }}</div>
                </div>
                <p class="text-sm text-[#8fa3bb] leading-relaxed mb-3">{{ $t(motor.descKey) }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="proKey in motor.proKeys" :key="proKey" class="text-xs text-[#d7e1ec] px-2.5 py-1 rounded-lg" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);">
                    ✓ {{ $t(proKey) }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Batteries -->
          <div>
            <h3 class="text-lg font-black text-white mb-5">{{ $t('conversionPage.batteriesTitle') }}</h3>
            <div class="rounded-2xl p-6" style="background: rgba(240,91,4,0.05); border: 1px solid rgba(240,91,4,0.18);">
              <div class="grid grid-cols-1 gap-3">
                <div v-for="spec in battSpecs" :key="spec" class="flex items-center gap-3 text-sm">
                  <div class="w-5 h-5 rounded flex items-center justify-center flex-shrink-0" style="background: rgba(240,91,4,0.15);">
                    <svg class="w-3 h-3 text-[#f05b04]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span class="text-[#d7e1ec]">{{ $t(spec) }}</span>
                </div>
              </div>
            </div>

            <!-- Suitable bikes -->
            <div class="mt-5 rounded-2xl p-5" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
              <h4 class="text-sm font-bold text-white mb-2">{{ $t('conversionPage.suitableTitle') }}</h4>
              <p class="text-xs text-[#8fa3bb] mb-3 leading-relaxed">{{ $t('conversionPage.suitableDesc') }}</p>
              <div class="grid grid-cols-2 gap-2">
                <div v-for="item in suitableItems" :key="item" class="flex items-center gap-2 text-xs text-[#d7e1ec]">
                  <span class="icon-dot flex-shrink-0"></span>
                  {{ $t(item) }}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="py-16 sm:py-24" style="background: rgba(255,255,255,0.015); border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <div class="label-pill mb-4 inline-flex">{{ $t('conversionPage.processKicker') }}</div>
          <h2 class="text-3xl sm:text-4xl font-black" style="color: var(--text-1);">
            {{ $t('conversionPage.processTitle') }}
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div v-for="(step, i) in processSteps" :key="i" class="relative">
            <div class="rounded-2xl p-6 h-full" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);">
              <div class="w-10 h-10 rounded-full flex items-center justify-center font-black text-base mb-4" style="background: rgba(240,91,4,0.12); border: 1px solid rgba(240,91,4,0.3); color: var(--accent);">
                {{ i + 1 }}
              </div>
              <div class="text-sm font-bold text-white mb-2">{{ $t(step.titleKey) }}</div>
              <p class="text-sm text-[#8fa3bb] leading-relaxed">{{ $t(step.descKey) }}</p>
            </div>
            <div v-if="i < processSteps.length - 1" class="hidden lg:block absolute top-10 -right-3 w-6 text-[#3d5066] text-xl font-light z-10">›</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why us -->
    <section class="py-16 sm:py-24">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <div class="label-pill mb-4 inline-flex">{{ $t('conversionPage.whyKicker') }}</div>
          <h2 class="text-3xl sm:text-4xl font-black" style="color: var(--text-1);">
            {{ $t('conversionPage.whyTitle') }}
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 gap-5">
          <div v-for="reason in whyReasons" :key="reason.titleKey" class="feature-tile px-6 py-5">
            <div class="flex items-start gap-4">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style="background: rgba(240,91,4,0.1); border: 1px solid rgba(240,91,4,0.2);">
                <svg class="w-4 h-4 text-[#f05b04]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              </div>
              <div>
                <div class="text-sm font-bold text-white mb-1">{{ $t(reason.titleKey) }}</div>
                <p class="text-sm text-[#8fa3bb] leading-relaxed">{{ $t(reason.descKey) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 sm:py-24" style="background: rgba(255,255,255,0.015); border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);">
      <div class="max-w-2xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-10">
          <div class="label-pill mb-4 inline-flex">{{ $t('conversionPage.faqKicker') }}</div>
          <h2 class="text-3xl sm:text-4xl font-black" style="color: var(--text-1);">
            {{ $t('conversionPage.faqTitle') }}
          </h2>
        </div>
        <div class="space-y-3">
          <div
            v-for="(item, i) in faqItems"
            :key="i"
            class="rounded-2xl overflow-hidden"
            style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);"
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              @click="openFaq = openFaq === i ? null : i"
            >
              <span class="text-sm font-semibold text-white">{{ $t(item.qKey) }}</span>
              <svg
                class="w-4 h-4 text-[#f05b04] flex-shrink-0 transition-transform duration-200"
                :class="openFaq === i ? 'rotate-45' : ''"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"
              ><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
            </button>
            <div v-show="openFaq === i" class="px-5 pb-5">
              <p class="text-sm text-[#8fa3bb] leading-relaxed">{{ $t(item.aKey) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 sm:py-24">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div class="max-w-2xl mx-auto text-center rounded-3xl p-10 sm:p-14" style="background: rgba(240,91,4,0.06); border: 1px solid rgba(240,91,4,0.18);">
          <h2 class="text-3xl sm:text-4xl font-black mb-4" style="color: var(--text-1);">
            {{ $t('conversionPage.ctaTitle') }}
          </h2>
          <p class="text-base text-[#8fa3bb] leading-relaxed mb-8">
            {{ $t('conversionPage.ctaDesc') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <a
              href="tel:+48789711631"
              class="inline-flex items-center justify-center gap-2 font-bold rounded-xl px-7 py-3.5 text-sm bg-[#f05b04] text-white hover:bg-[#d44d03] shadow-lg shadow-orange-900/30 btn-glow transition-all duration-200"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5C3 4.67 3.67 4 4.5 4H7.28C8.04 4 8.69 4.53 8.83 5.28L9.45 8.37C9.56 8.94 9.35 9.53 8.89 9.9L7.09 11.37C8.09 13.83 10.05 15.79 12.51 16.79L13.98 14.98C14.35 14.53 14.93 14.31 15.51 14.43L18.6 15.04C19.34 15.19 19.88 15.84 19.88 16.6V19.38C19.88 20.2 19.2 20.88 18.38 20.88H17.25C9.38 20.88 3 14.5 3 6.63V5.5Z"/></svg>
              {{ $t('conversionPage.ctaCall') }}
            </a>
            <a
              href="https://t.me/evola_manager"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-7 py-3.5 text-sm text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              {{ $t('conversionPage.ctaTelegram') }}
            </a>
          </div>
          <p class="text-xs text-[#566a7f]">{{ $t('conversionPage.ctaNote') }}</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const openFaq = ref(null)

const seoMeta = computed(() => ({
  title: t('conversionPage.metaTitle'),
  description: t('conversionPage.metaDescription'),
}))

useSeoMeta({
  title: () => seoMeta.value.title,
  description: () => seoMeta.value.description,
  ogTitle: () => seoMeta.value.title,
  ogDescription: () => seoMeta.value.description,
  ogImage: 'https://evola-bikes.com/assets/bike1.webp',

  twitterCard: 'summary_large_image',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Konwersja roweru na elektryczny — EVOLA Wrocław',
        description: 'Konwersja roweru na elektryczny i montaż zestawu elektrycznego do roweru. Mid Drive, silnik w piaście, akumulatory do 35Ah. Gwarancja 12 miesięcy.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'EVOLA E-bicycles',
          url: 'https://evola-bikes.com',
          telephone: '+48789711631',
          email: 'evolateam@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'ul. Kwiska 20',
            addressLocality: 'Wrocław',
            addressCountry: 'PL'
          },
          image: 'https://evola-bikes.com/assets/bike1.webp',
          sameAs: [
            'https://t.me/evola_manager',
            'https://www.facebook.com/profile.php?id=61572740802927'
          ]
        },
        areaServed: { '@type': 'City', name: 'Wrocław' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Usługi konwersji e-bike',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Konwersja roweru na elektryczny',
                description: 'Montaż napędu elektrycznego Mid Drive lub Hub Motor, akumulatora do 35Ah, kontrolera i wyświetlacza.'
              },
              price: '1200',
              priceCurrency: 'PLN',
              priceSpecification: {
                '@type': 'PriceSpecification',
                minPrice: '1200',
                priceCurrency: 'PLN'
              },
              availability: 'https://schema.org/InStock',
              seller: { '@type': 'LocalBusiness', name: 'EVOLA', url: 'https://evola-bikes.com' }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Naprawa i regeneracja baterii e-bike',
                description: 'Diagnostyka, wymiana ogniw 18650/21700, naprawa BMS, regeneracja pojemności akumulatora.'
              },
              price: '0',
              priceCurrency: 'PLN',
              availability: 'https://schema.org/InStock',
              seller: { '@type': 'LocalBusiness', name: 'EVOLA', url: 'https://evola-bikes.com' }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Budowa akumulatora na zamówienie',
                description: 'Akumulatory 18650/21700, od 10 do 50Ah, w obudowie lub torbie, ze Smart BMS.'
              },
              price: '1200',
              priceCurrency: 'PLN',
              priceSpecification: {
                '@type': 'PriceSpecification',
                minPrice: '1200',
                priceCurrency: 'PLN'
              },
              availability: 'https://schema.org/InStock',
              seller: { '@type': 'LocalBusiness', name: 'EVOLA', url: 'https://evola-bikes.com' }
            }
          ]
        }
      })
    }
  ]
})

const stats = computed(() => [
  { value: t('conversionPage.statPriceValue'), label: t('conversionPage.statPriceLabel') },
  { value: t('conversionPage.statTimeValue'), label: t('conversionPage.statTimeLabel') },
  { value: t('conversionPage.statWarrantyValue'), label: t('conversionPage.statWarrantyLabel') },
  { value: t('conversionPage.statConsultValue'), label: t('conversionPage.statConsultLabel') },
])

const services = [
  {
    titleKey: 'conversionPage.conversionService.title',
    priceKey: 'conversionPage.conversionService.price',
    badgeKey: 'conversionPage.conversionService.badge',
    descKey: 'conversionPage.conversionService.description',
    featureKeys: ['conversionPage.conversionService.f1', 'conversionPage.conversionService.f2', 'conversionPage.conversionService.f3', 'conversionPage.conversionService.f4'],
    accent: true,
  },
  {
    titleKey: 'conversionPage.customBuild.title',
    priceKey: 'conversionPage.customBuild.price',
    badgeKey: '',
    descKey: 'conversionPage.customBuild.description',
    featureKeys: ['conversionPage.customBuild.f1', 'conversionPage.customBuild.f2', 'conversionPage.customBuild.f3', 'conversionPage.customBuild.f4'],
    accent: false,
  },
  {
    titleKey: 'conversionPage.batteryRepair.title',
    priceKey: 'conversionPage.batteryRepair.price',
    badgeKey: '',
    descKey: 'conversionPage.batteryRepair.description',
    featureKeys: ['conversionPage.batteryRepair.f1', 'conversionPage.batteryRepair.f2', 'conversionPage.batteryRepair.f3', 'conversionPage.batteryRepair.f4'],
    accent: false,
  },
  {
    titleKey: 'conversionPage.batteryBuild.title',
    priceKey: 'conversionPage.batteryBuild.price',
    badgeKey: '',
    descKey: 'conversionPage.batteryBuild.description',
    featureKeys: ['conversionPage.batteryBuild.f1', 'conversionPage.batteryBuild.f2', 'conversionPage.batteryBuild.f3', 'conversionPage.batteryBuild.f4'],
    accent: false,
  },
]

const photos = [
  { src: '/assets/bike1.webp', altKey: 'conversionPage.imageAltGiant', labelKey: 'conversionPage.photo1Label' },
  { src: '/assets/bike2.webp', altKey: 'conversionPage.imageAltWheeler', labelKey: 'conversionPage.photo2Label' },
  { src: '/assets/bike3.webp', altKey: 'conversionPage.imageAltRockrider', labelKey: 'conversionPage.photo3Label' },
]

const motors = [
  {
    nameKey: 'conversionPage.midDriveName',
    descKey: 'conversionPage.midDriveDesc',
    proKeys: ['conversionPage.midDrivePro1', 'conversionPage.midDrivePro2', 'conversionPage.midDrivePro3'],
  },
  {
    nameKey: 'conversionPage.hubMotorName',
    descKey: 'conversionPage.hubMotorDesc',
    proKeys: ['conversionPage.hubMotorPro1', 'conversionPage.hubMotorPro2', 'conversionPage.hubMotorPro3'],
  },
]

const battSpecs = [
  'conversionPage.battSpec1',
  'conversionPage.battSpec2',
  'conversionPage.battSpec3',
  'conversionPage.battSpec4',
  'conversionPage.battSpec5',
  'conversionPage.battSpec6',
]

const suitableItems = [
  'conversionPage.suitableItem1',
  'conversionPage.suitableItem2',
  'conversionPage.suitableItem3',
  'conversionPage.suitableItem4',
]

const processSteps = [
  { titleKey: 'conversionPage.step1Title', descKey: 'conversionPage.step1Desc' },
  { titleKey: 'conversionPage.step2Title', descKey: 'conversionPage.step2Desc' },
  { titleKey: 'conversionPage.step3Title', descKey: 'conversionPage.step3Desc' },
  { titleKey: 'conversionPage.step4Title', descKey: 'conversionPage.step4Desc' },
]

const whyReasons = [
  { titleKey: 'conversionPage.why1Title', descKey: 'conversionPage.why1Desc' },
  { titleKey: 'conversionPage.why2Title', descKey: 'conversionPage.why2Desc' },
  { titleKey: 'conversionPage.why3Title', descKey: 'conversionPage.why3Desc' },
  { titleKey: 'conversionPage.why4Title', descKey: 'conversionPage.why4Desc' },
]

const faqItems = [
  { qKey: 'conversionPage.q1', aKey: 'conversionPage.a1' },
  { qKey: 'conversionPage.q2', aKey: 'conversionPage.a2' },
  { qKey: 'conversionPage.q3', aKey: 'conversionPage.a3' },
  { qKey: 'conversionPage.q4', aKey: 'conversionPage.a4' },
  { qKey: 'conversionPage.q5', aKey: 'conversionPage.a5' },
]
</script>
