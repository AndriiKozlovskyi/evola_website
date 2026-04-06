<template>
  <footer style="background: #050a12; border-top: 1px solid rgba(255,255,255,0.06);">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 py-16">

      <!-- Top row -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12" style="border-bottom: 1px solid rgba(255,255,255,0.06);">

        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="text-2xl font-black tracking-tight text-white mb-1">
            <span class="text-[#f05b04]">E</span>VOLA
            <span class="text-sm font-semibold text-[#f05b04]/60 ml-1">{{ $t('footer.brandTagline') }}</span>
          </div>
          <p class="text-sm text-[#566a7f] mt-3 mb-6 max-w-xs leading-relaxed">
            {{ $t('footer.description') }}
          </p>
          <div class="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61572740802927"
              class="w-9 h-9 rounded-xl flex items-center justify-center text-[#566a7f] hover:text-white transition-colors"
              style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);"
              :aria-label="$t('footer.socialLinks.facebook')"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://t.me/evola_manager"
              class="w-9 h-9 rounded-xl flex items-center justify-center text-[#566a7f] hover:text-white transition-colors"
              style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);"
              :aria-label="$t('footer.socialLinks.telegram')"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-white text-sm font-black uppercase tracking-widest mb-5">{{ $t('footer.navigation.title') }}</h3>
          <ul class="space-y-3">
            <li><nuxt-link to="/rent" class="text-sm text-[#566a7f] hover:text-white transition-colors">{{ $t('footer.navigation.rent') }}</nuxt-link></li>
            <li><nuxt-link to="/kits" class="text-sm text-[#566a7f] hover:text-white transition-colors">{{ $t('footer.navigation.kits') }}</nuxt-link></li>
            <li><nuxt-link to="/batteries" class="text-sm text-[#566a7f] hover:text-white transition-colors">{{ $t('footer.navigation.batteries') }}</nuxt-link></li>
            <li><nuxt-link to="/blog" class="text-sm text-[#566a7f] hover:text-white transition-colors">{{ $t('footer.navigation.blog') }}</nuxt-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-white text-sm font-black uppercase tracking-widest mb-5">{{ $t('footer.contact.title') }}</h3>
          <ul class="space-y-3">
            <li>
              <a href="tel:+48789711631" class="text-sm text-[#566a7f] hover:text-white transition-colors flex items-center gap-2">
                <svg class="w-3.5 h-3.5 text-[#f05b04]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5C3 4.67 3.67 4 4.5 4H7.28C8.04 4 8.69 4.53 8.83 5.28L9.45 8.37C9.56 8.94 9.35 9.53 8.89 9.9L7.09 11.37C8.09 13.83 10.05 15.79 12.51 16.79L13.98 14.98C14.35 14.53 14.93 14.31 15.51 14.43L18.6 15.04C19.34 15.19 19.88 15.84 19.88 16.6V19.38C19.88 20.2 19.2 20.88 18.38 20.88H17.25C9.38 20.88 3 14.5 3 6.63V5.5Z" /></svg>
                +48 789 711 631
              </a>
            </li>
            <li>
              <a href="mailto:evolateam@gmail.com" class="text-sm text-[#566a7f] hover:text-white transition-colors flex items-center gap-2">
                <svg class="w-3.5 h-3.5 text-[#f05b04]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                evolateam@gmail.com
              </a>
            </li>
            <li>
              <span class="text-sm text-[#566a7f] flex items-center gap-2">
                <svg class="w-3.5 h-3.5 text-[#f05b04]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {{ $t('footer.contact.address') }}
              </span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p class="text-xs text-[#3d5066]">{{ $t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
        <p class="text-xs text-[#3d5066]">{{ $t('footer.builtIn') }}</p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>