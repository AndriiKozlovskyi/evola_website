<template>
  <div v-editable="blok">
    <!-- Hero image with overlay -->
    <div class="relative w-full overflow-hidden" style="max-height: 520px;">
      <picture>
        <source
          media="(min-width: 768px)"
          :srcset="`${blok.image}?fit=max&w=1200&h=800&q=80`"
          :alt="blok.image.alt"
        />
        <source
          media="(max-width: 767px)"
          :srcset="`${blok.image}?fit=max&w=600&h=400&q=75`"
          :alt="blok.image.alt"
        />
        <img
          :src="blok.image"
          :alt="blok.image.alt"
          class="w-full object-cover"
          width="1200"
          height="800"
          loading="lazy"
        />
      </picture>
      <!-- gradient fade to site background -->
      <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to bottom, transparent 50%, var(--bg) 100%);"></div>
      <!-- side glows -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none" style="background: radial-gradient(circle, #f05b04 0%, transparent 70%); transform: translate(30%, -30%);"></div>
    </div>

    <!-- Article body -->
    <div class="max-w-screen-md mx-auto px-4 sm:px-6 pb-16 sm:pb-24 -mt-8 relative z-10">
      <!-- Breadcrumb / kicker -->
      <div class="label-pill mb-6 inline-flex">
        <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-3h4l2 3h4a2 2 0 012 2v11a2 2 0 01-2 2z" />
        </svg>
        Blog
      </div>

      <h1
        class="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5"
        style="color: var(--text-1); letter-spacing: -0.03em;"
      >{{ blok.title }}</h1>

      <p class="text-base sm:text-lg leading-relaxed mb-6" style="color: var(--text-2);">
        {{ blok.description }}
      </p>

      <!-- Author row -->
      <div class="flex items-center gap-2 mb-8 pb-8" style="border-bottom: 1px solid var(--border);">
        <span class="icon-dot flex-shrink-0"></span>
        <span class="text-sm" style="color: var(--text-3);">
          By <strong style="color: var(--accent); font-weight: 700;">{{ blok.author }}</strong>
        </span>
      </div>

      <!-- Article content -->
      <div
        v-html="blok.content"
        class="prose prose-invert prose-sm sm:prose-base max-w-none
               prose-headings:font-black prose-headings:tracking-tight
               prose-a:text-[#f05b04] prose-a:no-underline hover:prose-a:underline
               prose-strong:text-white
               prose-code:text-[#f05b04] prose-code:bg-white/5 prose-code:rounded prose-code:px-1
               prose-blockquote:border-l-[#f05b04] prose-blockquote:text-[#8fa3bb]
               prose-hr:border-white/10"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  aspect-ratio: 3/2;
}
</style>
