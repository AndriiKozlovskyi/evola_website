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
      class="w-10 h-10 text-black text-xs font-semibold rounded-full border border-black shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-700 flex items-center justify-center transition"
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
        class="absolute z-30 mt-2 left-1/2 -translate-x-1/2 w-[3rem] rounded-full bg-gray-900 shadow-lg border-2 border-gray-700 ring-opacity-5 py-1 text-m text-white"
      >
      <li
  v-for="code in availableCodes"
  :key="code"
  @click="selectLanguage(code)"
  class="cursor-pointer px-2 py-1 rounded-full text-center transition-colors duration-200 ease-in-out border border-transparent hover:border-gray-800 hover:bg-gray-800 hover:text-white"
>
  {{ shortLabels[code] }}
</li>
      </ul>
    </transition>
  </div>
</template>
