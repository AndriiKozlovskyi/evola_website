<template>
  <header class="sticky top-0 w-full z-50 backdrop-blur-xl border-b border-white/[0.06]" style="background: rgba(8,14,26,0.88);">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-18">

        <!-- Logo -->
        <nuxt-link to="/" class="flex-shrink-0 flex items-center gap-2">
          <span class="text-xl sm:text-2xl font-black tracking-tight text-white">
            <span class="text-[#f05b04]">E</span>VOLA
          </span>
          <span class="hidden sm:inline-block text-[10px] font-semibold tracking-widest uppercase text-[#f05b04]/70 border border-[#f05b04]/25 rounded-full px-2 py-0.5">{{ $t('footer.brandTagline') }}</span>
        </nuxt-link>

        <div class="flex items-center gap-3">
          <LanguageSelector />
          <a
            href="tel:+48789711631"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#f05b04] hover:bg-[#d44d03] px-4 py-2 rounded-xl transition-colors duration-150"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5C3 4.67157 3.67157 4 4.5 4H7.28C8.04 4 8.69 4.53 8.83 5.28L9.45 8.37C9.56 8.94 9.35 9.53 8.89 9.9L7.09 11.37C8.09 13.83 10.05 15.79 12.51 16.79L13.98 14.98C14.35 14.53 14.93 14.31 15.51 14.43L18.6 15.04C19.34 15.19 19.88 15.84 19.88 16.6V19.38C19.88 20.2 19.2 20.88 18.38 20.88H17.25C9.38 20.88 3 14.5 3 6.63V5.5Z" />
            </svg>
            +48 789 711 631
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import LanguageSelector from './ui/LanguageSelector.vue'
</script>
