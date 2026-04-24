<template>
  <header class="sticky top-0 w-full z-50 backdrop-blur-xl border-b border-white/[0.06]" style="background: rgba(8,14,26,0.88);">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-18 gap-3">

        <!-- Logo -->
        <nuxt-link to="/" class="flex-shrink-0 flex items-center ">
          <span class="text-xl sm:text-2xl font-black tracking-tight text-white">
            <span class="text-[#f05b04]">E</span>VOLA
          </span>
          <span class="hidden sm:inline-block text-[10px] font-semibold tracking-widest uppercase text-[#f05b04]/70 border border-[#f05b04]/25 rounded-full px-2 py-0.5">{{ $t('footer.brandTagline') }}</span>
        </nuxt-link>

        <nav class="hidden md:flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors duration-150"
            :class="route.path === item.to ? 'bg-[#f05b04] text-white' : 'text-[#c7d4e4] hover:text-white hover:bg-white/10'"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-3">
          <LanguageSelector />
          <button
            type="button"
            class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/15 text-white hover:bg-white/10 transition-colors"
            :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="isMobileMenuOpen"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg v-if="!isMobileMenuOpen" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
          <a
            href="tel:+48789711631"
            class="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#f05b04] hover:bg-[#d44d03] px-4 py-2 rounded-xl transition-colors duration-150"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5C3 4.67157 3.67157 4 4.5 4H7.28C8.04 4 8.69 4.53 8.83 5.28L9.45 8.37C9.56 8.94 9.35 9.53 8.89 9.9L7.09 11.37C8.09 13.83 10.05 15.79 12.51 16.79L13.98 14.98C14.35 14.53 14.93 14.31 15.51 14.43L18.6 15.04C19.34 15.19 19.88 15.84 19.88 16.6V19.38C19.88 20.2 19.2 20.88 18.38 20.88H17.25C9.38 20.88 3 14.5 3 6.63V5.5Z" />
            </svg>
            +48 789 711 631
          </a>
        </div>
      </div>

      <transition name="mobile-menu">
        <div v-if="isMobileMenuOpen" class="md:hidden pb-3">
          <nav class="grid gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-2">
            <NuxtLink
              v-for="item in navItems"
              :key="`mobile-${item.to}`"
              :to="item.to"
              class="px-3 py-2 text-sm font-semibold rounded-lg transition-colors duration-150"
              :class="route.path === item.to ? 'bg-[#f05b04] text-white' : 'text-[#c7d4e4] hover:text-white hover:bg-white/10'"
              @click="isMobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import LanguageSelector from './ui/LanguageSelector.vue'

const route = useRoute()
const { t } = useI18n()
const isMobileMenuOpen = ref(false)

const navItems = computed(() => [
  { to: '/rent', label: t('menu.rent') },
  { to: '/blog', label: t('menu.blog') }
])
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.18s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
