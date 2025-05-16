<template>
  <header class="fixed w-full bg-white shadow-md z-50">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <nuxt-link to="/" class="text-2xl font-bold">
            <span class="">
              <span class="text-orange-700">E</span>VOLA
            </span>
          </nuxt-link>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Desktop menu -->
        <nav class="hidden md:flex space-x-8">
          <nuxt-link
            v-for="item in menuItems"
            :key="item.name"
            :to="item.href"
            class="text-gray-700 hover:text-red-700 px-3 py-2 text-sm font-medium"
          >
            {{ $t(item.name) }}
          </nuxt-link>
        </nav>
        <div class="hidden sm:flex">
          <LanguageSelector/>

        </div>

      </div>

      <!-- Mobile menu -->
      <div
        v-show="isOpen"
        class="md:hidden flex flex-row justify-between"
      >

        <div class="px-2 pt-2 pb-3 space-y-1">
          <nuxt-link
            v-for="item in menuItems"
            :key="item.name"
            :to="item.href"
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-700"
            @click="isOpen = false"
          >
            {{ $t(item.name) }}
          </nuxt-link>
        </div>
        <LanguageSelector/>

      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSelector from './ui/LanguageSelector.vue'

const { t } = useI18n()
const isOpen = ref(false)

const menuItems = [
  { name: 'menu.kits', href: '/kits' },
  { name: 'menu.batteries', href: '/batteries' },
  { name: 'menu.blog', href: '/blog' },
]
</script>