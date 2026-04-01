<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow pb-24 sm:pb-0">
      <slot />
    </main>
    <Footer />

    <a
      href="tel:+48789711631"
      aria-label="Call Evola"
      class="call-cta fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-orange-700 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-orange-900/30 transition-all duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
    >
      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5C3 4.67157 3.67157 4 4.5 4H7.27924C8.03619 4 8.68713 4.53452 8.83443 5.27701L9.44824 8.37002C9.56178 8.94213 9.34706 9.52995 8.89318 9.89911L7.08765 11.3674C8.08931 13.8263 10.0488 15.7858 12.5077 16.7874L13.976 14.9819C14.3451 14.528 14.933 14.3133 15.5051 14.4268L18.5981 15.0406C19.3405 15.1879 19.8751 15.8388 19.8751 16.5958V19.375C19.8751 20.2034 19.2035 20.875 18.3751 20.875H17.25C9.37994 20.875 3 14.4951 3 6.625V5.5Z" />
      </svg>
    </a>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.call-cta {
  animation: cta-breathe 3.6s ease-in-out infinite;
}

.call-cta:hover {
  transform: translateY(-1px);
}

@keyframes cta-breathe {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 10px 24px rgba(154, 52, 18, 0.24);
  }
  50% {
    transform: scale(1.015);
    box-shadow: 0 12px 28px rgba(154, 52, 18, 0.3);
  }
}

@media (prefers-reduced-motion: reduce) {
  .call-cta {
    animation: none;
  }

  .call-cta:hover {
    transform: none;
  }
}
</style>