<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-screen-xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo and Description -->
        <div class="col-span-1 md:col-span-2">
          <div class="text-2xl font-bold mb-4">
            <span class="text-white">
              <span class="text-red-700">E</span>VOLA
            </span>
          </div>
          <p class="text-sm mb-4">
            {{ $t('footer.description') }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">{{ $t('footer.navigation.title') }}</h3>
          <ul class="space-y-2">
            <li>
              <nuxt-link to="/kits" class="hover:text-white transition-colors">
                {{ $t('footer.navigation.kits') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blog" class="hover:text-white transition-colors">
                {{ $t('footer.navigation.blog') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/batteries" class="hover:text-white transition-colors">
                {{ $t('footer.navigation.batteries') }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-white font-semibold mb-4">{{ $t('footer.contact.title') }}</h3>
          <ul class="space-y-2">
            <li>
              <a href="tel:+48789711631" class="hover:text-white transition-colors">
                +48 789 711 631
              </a>
            </li>
            <li>
              <a href="mailto:evolateam@gmail.com" class="hover:text-white transition-colors">
                evolateam@gmail.com
              </a>
            </li>
            <li>
              <a href="https://goo.gl/maps/2v1x5Z3g6Qk" class="hover:text-white transition-colors">
                {{ $t('footer.contact.address') }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm">
          {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
        </p>
        <!-- Social Links -->
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/profile.php?id=61572740802927" 
             class="hover:text-white transition-colors"
             :aria-label="$t('footer.socialLinks.facebook')">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a href="https://t.me/evola_manager" 
             class="hover:text-white transition-colors"
             :aria-label="$t('footer.socialLinks.telegram')">
            <span class="sr-only">Telegram</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>