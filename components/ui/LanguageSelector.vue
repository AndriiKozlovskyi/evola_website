<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locales, locale, setLocale } = useI18n();

type LanguageCode = 'en' | 'ru' | 'pl';

const language = ref(locale.value as LanguageCode);
const isOpen = ref(false);

const shortLabels: Record<LanguageCode, string> = {
  en: 'EN',
  ru: 'RU',
  pl: 'PL',
};

const availableCodes = computed(() =>
  locales.value.map((item) =>
    typeof item === 'object' ? item.code : item
  ).filter((code): code is LanguageCode =>
    ['en', 'ru', 'pl'].includes(code)
  )
);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectLanguage = (code: LanguageCode) => {
  language.value = code;
  setLocale(code);
  localStorage.setItem('lang', code);
  isOpen.value = false;
};

onMounted(() => {
  const saved = localStorage.getItem('lang');
  if (saved && availableCodes.value.includes(saved as LanguageCode)) {
    selectLanguage(saved as LanguageCode);
  }
});
</script>

<template>
  <div class="relative inline-block">
    <!-- Circular Language Button -->
    <button
      @click="toggleDropdown"
      class="w-9 h-9 text-xs font-black rounded-xl flex items-center justify-center transition-all duration-150 focus:outline-none"
      style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #8fa3bb;"
      :style="isOpen ? 'border-color: rgba(240,91,4,0.4); color: #f05b04;' : ''"
    >
      {{ shortLabels[language] }}
    </button>

    <!-- Dropdown -->
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <ul
        v-if="isOpen"
        class="absolute z-30 mt-2 left-1/2 -translate-x-1/2 w-12 rounded-xl py-1 overflow-hidden"
        style="background: #0d1626; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 8px 32px rgba(0,0,0,0.5);"
      >
      <li
        v-for="code in availableCodes"
        :key="code"
        @click="selectLanguage(code)"
        class="cursor-pointer px-2 py-1.5 text-center text-xs font-bold transition-colors"
        :class="code === language ? 'text-[#f05b04]' : 'text-[#8fa3bb] hover:text-white hover:bg-white/5'"
      >
        {{ shortLabels[code] }}
      </li>
      </ul>
    </transition>
  </div>
</template>
