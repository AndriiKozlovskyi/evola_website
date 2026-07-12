<template>
  <div>

    <!-- ═══ HERO ═══ -->
    <section class="relative overflow-hidden min-h-[560px] md:min-h-[640px] flex flex-col">

      <!-- Diagonal split background: left = site dark, right = orange-tinted panel -->
      <!-- Full dark base -->
      <div class="absolute inset-0" style="background: var(--bg-1, #07111f);"></div>

      <!-- Right orange panel with diagonal left edge (desktop only) -->
      <div class="absolute inset-y-0 right-0 hidden md:block"
           style="width: 52%; clip-path: polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%); background: linear-gradient(135deg, rgba(240,91,4,0.18) 0%, rgba(180,60,0,0.10) 50%, rgba(100,30,0,0.06) 100%);">
        <!-- inner radial glow -->
        <div class="absolute inset-0"
             style="background: radial-gradient(ellipse at 60% 40%, rgba(240,91,4,0.22) 0%, transparent 65%);"></div>
      </div>

      <!-- Mobile: diagonal orange panel (bottom portion, diagonal top edge) -->
      <div class="absolute inset-x-0 bottom-0 md:hidden pointer-events-none"
           style="top: 30%; clip-path: polygon(0% 60%, 100% 0%, 100% 100%, 10% 100%); background: linear-gradient(160deg, rgba(240,91,4,0.17) 0%, rgba(160,50,0,0.10) 50%, rgba(80,20,0,0.05) 100%);">
        <div class="absolute inset-0"
             style="background: radial-gradient(ellipse at 50% 60%, rgba(240,91,4,0.18) 0%, transparent 65%);"></div>
      </div>
      <!-- Mobile: diagonal border line -->
      <div class="absolute inset-x-0 bottom-0 md:hidden pointer-events-none" style="top: 30%;">
        <svg class="absolute top-0 left-0 w-full" style="height: 60px;" preserveAspectRatio="none" viewBox="0 0 100 10">
          <line x1="0" y1="1.8" x2="100" y2="0"
                stroke="rgba(240,91,4,0.30)" stroke-width="0.25" vector-effect="non-scaling-stroke"/>
        </svg>
      </div>

      <!-- Desktop: diagonal border line -->
      <div class="absolute inset-y-0 right-0 hidden md:block pointer-events-none"
           style="width: 52%;">
        <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <line x1="12" y1="0" x2="0" y2="100"
                stroke="rgba(240,91,4,0.25)" stroke-width="0.3" vector-effect="non-scaling-stroke"/>
        </svg>
      </div>

      <div class="relative z-10 flex-1 max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 pb-10 sm:pt-14 sm:pb-14 md:py-24 flex flex-col justify-center">

        <!-- Title — always at the very top on mobile, hidden inside grid on desktop -->
        <div class="md:hidden">
          <div class="label-pill mb-4 self-start inline-flex">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
            </svg>
            {{ $t('batteries.kicker') }}
          </div>
          <h1 class="text-3xl font-black leading-[1.1]" style="color: var(--text-1);">
            {{ $t('batteries.title') }}
          </h1>
        </div>

        <div class="grid md:grid-cols-2 md:gap-0 items-center w-full">

          <!-- Left: text -->
          <div class="flex flex-col md:pr-10 lg:pr-16">
            <!-- Desktop-only kicker + H1 (mobile version is above the grid) -->
            <div class="hidden md:block">
              <div class="label-pill mb-6 self-start inline-flex">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
                </svg>
                {{ $t('batteries.kicker') }}
              </div>
              <h1 class="text-3xl sm:text-5xl lg:text-[3.6rem] font-black leading-[1.08] mb-5" style="color: var(--text-1);">
                {{ $t('batteries.title') }}
              </h1>
            </div>

            <p class="text-base sm:text-lg text-[#8fa3bb] leading-relaxed mb-6">
              {{ $t('batteries.description') }}
            </p>

            <!-- Bullet points -->
            <div class="hidden md:grid gap-2.5 mb-8">
              <div v-for="pt in heroPoints" :key="pt" class="flex items-start gap-3 text-sm text-[#d7e1ec]">
                <span class="icon-dot mt-1.5 flex-shrink-0"></span>
                <span>{{ pt }}</span>
              </div>
            </div>


            <!-- Stats row -->
            <div class="hidden md:grid grid-cols-4 gap-x-6 gap-y-5">
              <div v-for="stat in heroStats" :key="stat.label" class="flex flex-col">
                <span class="text-xl sm:text-2xl font-black text-white">{{ stat.value }}</span>
                <span class="text-xs text-[#566a7f] mt-0.5">{{ stat.label }}</span>
              </div>
            </div>
          </div>

          <!-- Right: battery image over diagonal panel (image before text on mobile) -->
          <div class="relative flex items-center justify-center min-h-[280px] md:min-h-[480px]">

            <!-- floating spec chips (desktop) -->
            <div class="absolute top-6 right-6 hidden md:flex flex-col gap-2 z-20">
              <div class="flex items-center gap-2 rounded-xl px-3 py-2"
                   style="background: rgba(0,0,0,0.55); backdrop-filter: blur(8px); border: 1px solid rgba(240,91,4,0.25);">
                <div class="w-2 h-2 rounded-full bg-[#f05b04] animate-pulse flex-shrink-0"></div>
                <span class="text-xs font-bold text-white">Smart BMS</span>
              </div>
              <div class="flex items-center gap-2 rounded-xl px-3 py-2"
                   style="background: rgba(0,0,0,0.55); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.1);">
                <svg class="w-3.5 h-3.5 text-[#f05b04]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span class="text-xs text-[#8fa3bb]">Bluetooth · 48V</span>
              </div>
            </div>

            <!-- Battery image — centered, large, no container box -->
            <img
              src="/assets/battery_hero.png"
              alt="E-bike battery EVOLA"
              class="mb-20 relative z-10 w-auto object-contain drop-shadow-2xl select-none"
              style="max-height: 340px; max-width: 100%; filter: drop-shadow(0 20px 60px rgba(240,91,4,0.25)) drop-shadow(0 8px 24px rgba(0,0,0,0.6));"

              decoding="async"
              fetchpriority="high"
            />

            <!-- Bottom price strip (mobile) -->
            <div class="bottom-0 absolute inset-x-0 md:hidden flex justify-center gap-2.5 pb-3">
              <div v-for="b in batteryData.slice(1)" :key="`m-${b.key}`"
                   class="flex flex-col items-center rounded-xl px-3 py-2.5 gap-0.5"
                   :style="b.key === 'b30'
                     ? 'background: rgba(240,91,4,0.15); backdrop-filter: blur(6px); border: 1px solid rgba(240,91,4,0.35);'
                     : 'background: rgba(0,0,0,0.6); backdrop-filter: blur(6px); border: 1px solid rgba(255,255,255,0.08);'">
                <span class="text-[14px] font-black text-white leading-none">{{ $t(`batteries.${b.key}.label`) }}</span>
                <span class="text-[13px] font-bold leading-none" :class="b.key === 'b30' ? 'text-[#f05b04]' : 'text-[#f07040]'">{{ $t(`batteries.${b.key}.rentPrice`) }}</span>
                <span class="text-[12px] text-[#566a7f] leading-none mt-0.5">{{ $t(`batteries.${b.key}.buyPrice`) }}</span>
              </div>
            </div>
          </div>
          <!-- CTA buttons -->
          <div class="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center sm:items-center mb-6 md:mb-10">
            <a href="tel:+48789711631"
              class="inline-flex items-center justify-center w-full gap-2 text-sm font-bold text-white bg-[#f05b04] hover:bg-[#d44d03] px-6 py-3.5 rounded-xl transition-colors">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5C3 4.67 3.67 4 4.5 4H7.28C8.04 4 8.69 4.53 8.83 5.28L9.45 8.37C9.56 8.94 9.35 9.53 8.89 9.9L7.09 11.37C8.09 13.83 10.05 15.79 12.51 16.79L13.98 14.98C14.35 14.53 14.93 14.31 15.51 14.43L18.6 15.04C19.34 15.19 19.88 15.84 19.88 16.6V19.38C19.88 20.2 19.2 20.88 18.38 20.88H17.25C9.38 20.88 3 14.5 3 6.63V5.5Z"/>
              </svg>
              {{ $t('header.callUs') }}
            </a>
            <a href="https://t.me/evola_manager" target="_blank" rel="noopener"
              class="inline-flex items-center justify-center w-full gap-2 text-sm font-semibold text-[#8fa3bb] hover:text-white transition-colors px-6 py-3.5 rounded-xl"
              style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
          </div>

        </div>
      </div>
    </section>

    <div class="max-w-screen-xl mx-auto px-4 sm:px-6"><div class="divider-glow"></div></div>

    <!-- ═══ RENT SECTION ═══ -->
    <section class="max-w-screen-xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div class="label-pill mb-3 inline-flex">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            {{ $t('batteries.rentTitle') }}
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white">{{ $t('batteries.rentTitle') }}</h2>
          <p class="text-[#8fa3bb] text-sm mt-2 max-w-lg">{{ $t('batteries.rentDescription') }}</p>
        </div>
        <a href="tel:+48789711631"
          class="inline-flex hidden items-center gap-2 text-sm font-bold text-white bg-[#f05b04] hover:bg-[#d44d03] px-5 py-2.5 rounded-xl transition-colors flex-shrink-0">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5C3 4.67 3.67 4 4.5 4H7.28C8.04 4 8.69 4.53 8.83 5.28L9.45 8.37C9.56 8.94 9.35 9.53 8.89 9.9L7.09 11.37C8.09 13.83 10.05 15.79 12.51 16.79L13.98 14.98C14.35 14.53 14.93 14.31 15.51 14.43L18.6 15.04C19.34 15.19 19.88 15.84 19.88 16.6V19.38C19.88 20.2 19.2 20.88 18.38 20.88H17.25C9.38 20.88 3 14.5 3 6.63V5.5Z"/>
          </svg>
          {{ $t('header.callUs') }}
        </a>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="b in batteryData"
          :key="`rent-${b.key}`"
          class="rounded-2xl flex flex-col overflow-hidden relative"
          :class="b.key === 'b30' ? 'card-accent' : 'card-premium'"
          :style="b.key === 'b30' ? 'border-color: rgba(240,91,4,0.4);' : ''"
        >
          <!-- Image zone -->
          <div class="relative flex flex-col items-center justify-end pt-6 pb-4 px-6"
               :style="b.key === 'b30'
                 ? 'min-height: 200px; background: linear-gradient(160deg, rgba(240,91,4,0.14) 0%, rgba(240,91,4,0.04) 100%);'
                 : 'min-height: 200px; background: rgba(255,255,255,0.015);'"
          >
            <div v-if="b.key === 'b30'" class="absolute top-3 right-3">
              <span class="text-[10px] font-black uppercase tracking-widest text-white bg-[#f05b04] px-2.5 py-0.5 rounded-full">
                {{ $t(`batteries.${b.key}.badge`) }}
              </span>
            </div>
            <!-- Battery SVG -->
            <div class="mb-3 flex justify-center">
              <svg :viewBox="`0 0 ${b.key === 'b35' ? 90 : 80} 44`" class="w-20 h-12" style="filter: drop-shadow(0 0 6px rgba(240,91,4,0.3));">
                <rect x="1" y="4" width="72" height="36" rx="5" fill="none"
                      :stroke="b.key === 'b30' ? '#f05b04' : 'rgba(255,255,255,0.15)'" stroke-width="1.5"/>
                <rect x="73" y="16" width="6" height="12" rx="2"
                      :fill="b.key === 'b30' ? '#f05b04' : 'rgba(255,255,255,0.15)'"/>
                <rect x="3" y="6" :width="b.fillW" height="32" rx="3"
                      :fill="b.key === 'b30' ? '#f05b04' : '#1e4a8a'" opacity="0.85"/>
                <text x="37" y="27" text-anchor="middle" font-size="12" fill="white" font-weight="900" opacity="0.9">{{ b.fillLabel }}</text>
              </svg>
            </div>
            <div class="text-4xl font-black" :class="b.key === 'b30' ? 'text-[#f05b04]' : 'text-white'">
              {{ $t(`batteries.${b.key}.label`) }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-5 flex flex-col gap-3 flex-1">
            <p class="text-xs text-[#8fa3bb] leading-relaxed flex-1">{{ $t(`batteries.${b.key}.desc`) }}</p>

            <!-- Range pill -->
            <div class="flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-[#f05b04] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span class="text-xs text-[#566a7f]">~{{ b.rangeEst }} km</span>
            </div>

            <div class="pt-3" style="border-top: 1px solid rgba(255,255,255,0.07);">
              <div class="text-[10px] text-[#566a7f] uppercase tracking-widest mb-1">{{ $t('batteries.priceLabel') }}</div>
              <div class="text-2xl font-black mb-3" :class="b.key === 'b30' ? 'text-[#f05b04]' : 'text-white'">
                {{ $t(`batteries.${b.key}.rentPrice`) }}
              </div>
              <a href="tel:+48789711631"
                class="block w-full text-center text-xs font-bold py-2.5 rounded-xl transition-colors"
                :class="b.key === 'b30' ? 'bg-[#f05b04] text-white hover:bg-[#d44d03]' : 'text-white hover:bg-white/10'"
                :style="b.key !== 'b30' ? 'background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);' : ''"
              >
                {{ $t('batteries.rentButton') }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Service tags strip -->
      <div class="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        <div v-for="tag in serviceTags" :key="tag.text" class="flex items-center gap-1.5 text-xs text-[#566a7f]">
          <svg class="w-3.5 h-3.5 text-[#f05b04]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
          {{ tag.text }}
        </div>
      </div>
    </section>

    <div class="max-w-screen-xl mx-auto px-4 sm:px-6"><div class="divider-glow"></div></div>

    <!-- ═══ BUY SECTION ═══ -->
    <section class="max-w-screen-xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div class="label-pill mb-3 inline-flex">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            {{ $t('batteries.advantages.warranty') }}
          </div>
          <h2 class="text-2xl sm:text-4xl font-black text-white">{{ $t('batteries.buyTitle') }}</h2>
          <p class="text-[#8fa3bb] text-sm mt-2 max-w-lg">{{ $t('batteries.buyDescription') }}</p>
        </div>
        <a href="https://t.me/evola_manager" target="_blank" rel="noopener"
          class="inline-flex items-center gap-2 text-sm font-semibold text-[#8fa3bb] hover:text-white transition-colors px-5 py-2.5 rounded-xl flex-shrink-0"
          style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">
          <svg class="w-4 h-4 text-[#f05b04]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          Telegram
        </a>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <!-- Left: featured image card -->
        <div class="card-accent rounded-3xl overflow-hidden flex flex-col" style="border-color: rgba(240,91,4,0.25);">
          <div class="relative flex-1 flex items-center justify-center p-8"
               style="min-height: 280px; background: linear-gradient(135deg, rgba(240,91,4,0.08) 0%, rgba(240,91,4,0.03) 100%);">
            <div class="absolute inset-0"
                 style="background: radial-gradient(ellipse at center, rgba(240,91,4,0.12) 0%, transparent 65%);"></div>
            <img src="/assets/dp7.webp" alt="Battery 30Ah EVOLA"
                 class="relative max-h-56 w-auto object-contain drop-shadow-2xl" />
          </div>
          <div class="p-6 flex flex-col gap-4">
            <div>
              <div class="text-xs text-[#f05b04] font-black uppercase tracking-widest mb-1">30 – 35 Ah</div>
              <p class="text-sm text-[#8fa3bb]">{{ $t('batteries.b30.desc') }}</p>
            </div>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li v-for="spec in buySpecs" :key="spec"
                  class="flex items-center gap-2 text-xs text-[#8fa3bb]">
                <svg class="w-3.5 h-3.5 text-[#f05b04] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                {{ spec }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Right: 2×2 price grid -->
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="b in batteryData"
            :key="`buy-${b.key}`"
            class="card-premium rounded-2xl flex flex-col p-5 gap-3"
          >
            <!-- Product image -->
            <div class="flex items-center justify-center h-20 rounded-xl"
                 style="background: rgba(255,255,255,0.02);">
              <img
                :src="b.key === 'b22' || b.key === 'b25' ? '/assets/dp5c.webp' : '/assets/dp7.webp'"
                :alt="`Battery ${b.key}`"
                class="h-16 w-auto object-contain opacity-90"
              />
            </div>

            <div class="text-2xl font-black text-white">{{ $t(`batteries.${b.key}.label`) }}</div>

            <!-- Warranty tag -->
            <div class="flex items-center gap-1.5">
              <svg class="w-3 h-3 text-[#f05b04] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span class="text-[10px] text-[#566a7f]">{{ $t('batteries.advantages.warranty') }}</span>
            </div>

            <div class="flex-1"></div>

            <div class="pt-3" style="border-top: 1px solid rgba(255,255,255,0.07);">
              <div class="text-xl font-black text-white mb-2">{{ $t(`batteries.${b.key}.buyPrice`) }}</div>
              <a href="tel:+48789711631"
                class="block w-full text-center text-xs font-bold py-2.5 rounded-xl transition-colors text-white hover:bg-white/10"
                style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">
                {{ $t('batteries.buyButton') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-screen-xl mx-auto px-4 sm:px-6"><div class="divider-glow"></div></div>

    <!-- ═══ FEATURES + IMAGE ═══ -->
    <section class="max-w-screen-xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div class="grid md:grid-cols-2 gap-12 items-center">

        <!-- Left: feature list -->
        <div>
          <div class="label-pill mb-5 inline-flex">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            {{ $t('batteries.advantages.title') }}
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-white mb-8">{{ $t('batteries.rangeTitle') }}</h2>

          <div class="flex flex-col gap-4">
            <div v-for="adv in advantageList" :key="adv.key"
              class="flex items-start gap-4 p-4 rounded-2xl"
              style="background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06);">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                   style="background: rgba(240,91,4,0.12); border: 1px solid rgba(240,91,4,0.2);">
                <svg class="w-5 h-5 text-[#f05b04]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="adv.iconPath"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-bold text-white">{{ $t(`batteries.advantages.${adv.key}`) }}</div>
                <div class="text-xs text-[#566a7f] mt-0.5">{{ adv.note }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: image -->
        <div class="relative flex items-center justify-center">
          <div class="absolute inset-0 rounded-3xl"
               style="background: radial-gradient(ellipse at center, rgba(240,91,4,0.1) 0%, transparent 70%);"></div>
          <div class="relative rounded-3xl overflow-hidden ring-1 ring-white/10 w-full flex items-center justify-center"
               style="min-height: 340px; background: linear-gradient(135deg, #09111f 0%, #060e1a 100%);">
            <img src="/assets/dp5c.webp" alt="EVOLA battery 25Ah"
                 class="max-h-72 w-auto object-contain drop-shadow-2xl p-6" />
          </div>
          <!-- Range badge -->
          <div class="absolute bottom-4 right-4 card-premium bg-black/90 px-4 py-3 rounded-2xl text-center">
            <div class="text-3xl font-black text-[#f05b04]">100</div>
            <div class="text-[10px] text-[#566a7f] uppercase tracking-widest -mt-0.5">km max</div>
          </div>
          <!-- BMS badge -->
          <div class="absolute top-4 left-4 card-premium bg-black/90 px-3 py-2 rounded-xl flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-[#f05b04] animate-pulse"></div>
            <span class="text-xs text-[#8fa3bb] font-semibold">Smart BMS</span>
          </div>
        </div>
      </div>

      <p class="text-center text-xs text-[#3d5066] mt-10">{{ $t('batteries.rangeNote') }}</p>
    </section>

    <div class="max-w-screen-xl mx-auto px-4 sm:px-6"><div class="divider-glow"></div></div>

    <!-- ═══ FAQ ═══ -->
    <FaqSection
      namespace="batteriesFaq"
      :item-keys="['sizes','standalone','serviceInBattery','warranty','minTerm','range']"
    />

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import FaqSection from '@/components/FaqSection.vue'

const { t, locale } = useI18n()

const heroPoints = computed(() => [
  t('batteries.points.one'),
  t('batteries.points.two'),
  t('batteries.points.three'),
])

const heroStats = computed(() => [
  { value: '22–35 Ah', label: t('batteries.statCapacity') },
  { value: '50–130 zł', label: t('batteries.statRent') },
  { value: '1200–2000 PLN', label: t('batteries.statBuy') },
  { value: '12 ' + (locale.value === 'ru' ? 'мес.' : locale.value === 'pl' ? 'mies.' : 'mo.'), label: t('batteries.statWarranty') },
])

const batteryData = [
  { key: 'b22', fillW: 26, fillLabel: '22', rangeEst: 50 },
  { key: 'b25', fillW: 36, fillLabel: '25', rangeEst: 65 },
  { key: 'b30', fillW: 50, fillLabel: '30', rangeEst: 85 },
  { key: 'b35', fillW: 64, fillLabel: '35', rangeEst: 100 },
]

const serviceTags = computed(() => [
  { text: t('batteries.advantages.service') },
  { text: t('batteries.advantages.warranty') },
  { text: locale.value === 'ru' ? 'Мин. 1 неделя' : locale.value === 'pl' ? 'Min. 1 tydzień' : 'Min. 1 week' },
  { text: locale.value === 'ru' ? 'Договор аренды' : locale.value === 'pl' ? 'Umowa wynajmu' : 'Rental contract' },
])

const buySpecs = computed(() => [
  'Cells: 21700 M58T',
  'Smart BMS + Bluetooth',
  '48V · 4A charging',
  t('batteries.advantages.warranty'),
  t('batteries.advantages.temperature'),
  t('batteries.advantages.monitoring'),
])

const advantageList = computed(() => {
  const noteWarranty = locale.value === 'ru' ? 'На все аккумуляторы при покупке' : locale.value === 'pl' ? 'Na wszystkie akumulatory przy zakupie' : 'On all batteries when purchased'
  const noteService = locale.value === 'ru' ? 'Диагностика и обслуживание' : locale.value === 'pl' ? 'Diagnostyka i obsługa techniczna' : 'Diagnostics and maintenance'
  const noteCells = '21700 M58T · Smart BMS · 48V'
  const noteTemp = locale.value === 'ru' ? 'Защита от перегрева' : locale.value === 'pl' ? 'Ochrona przed przegrzaniem' : 'Overheating protection'
  const noteBT = locale.value === 'ru' ? 'iOS и Android' : locale.value === 'pl' ? 'iOS i Android' : 'iOS and Android'
  return [
    { key: 'warranty', iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', note: noteWarranty },
    { key: 'service', iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z', note: noteService },
    { key: 'cells', iconPath: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18', note: noteCells },
    { key: 'temperature', iconPath: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3', note: noteTemp },
    { key: 'monitoring', iconPath: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0', note: noteBT },
  ]
})

const pageTitle = computed(() => t('batteries.title'))
const pageDesc = computed(() => t('batteries.description'))

const batterySchema = [
  { key: 'b22', capacity: '22Ah', rentPrice: 50, buyPrice: 1200 },
  { key: 'b25', capacity: '25Ah', rentPrice: 70, buyPrice: 1400 },
  { key: 'b30', capacity: '30Ah', rentPrice: 90, buyPrice: 1600 },
  { key: 'b35', capacity: '35Ah', rentPrice: 130, buyPrice: 2000 },
]

useSeoMeta({
  title: () => t('batteries.title'),
  description: () => t('batteries.description'),
  ogTitle: () => t('batteries.title'),
  ogDescription: () => t('batteries.description'),
  ogImage: 'https://evola.pl/assets/dp7.webp',
  twitterCard: 'summary_large_image',
})

useHead(() => ({
  script: [
    {
      key: 'batteries-itemlist-ld',
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: pageTitle.value,
        description: pageDesc.value,
        url: 'https://evola.pl/batteries',
        itemListElement: batterySchema.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Product',
            name: `E-bike Battery ${b.capacity} – EVOLA`,
            brand: { '@type': 'Brand', name: 'EVOLA' },
            description: t(`batteries.${b.key}.desc`),
            offers: [
              {
                '@type': 'Offer',
                name: 'Purchase',
                price: String(b.buyPrice),
                priceCurrency: 'PLN',
                availability: 'https://schema.org/InStock',
                itemCondition: 'https://schema.org/NewCondition',
                seller: { '@type': 'LocalBusiness', name: 'EVOLA', url: 'https://evola.pl', telephone: '+48789711631' }
              },
              {
                '@type': 'Offer',
                name: 'Weekly Rental',
                price: String(b.rentPrice),
                priceCurrency: 'PLN',
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: String(b.rentPrice),
                  priceCurrency: 'PLN',
                  referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'WEE' }
                }
              }
            ]
          }
        }))
      })
    }
  ]
}))
</script>
