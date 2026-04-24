<template>
  <section class="py-16 sm:py-24 px-4">
    <div class="max-w-screen-xl mx-auto">
      <!-- Section header -->
      <div class="text-center mb-10 sm:mb-14">
        <div class="label-pill mb-5 mx-auto inline-flex">
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-3h4l2 3h4a2 2 0 012 2v11a2 2 0 01-2 2z" />
          </svg>
          Blog
        </div>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-black"
          style="color: var(--text-1); letter-spacing: -0.025em;"
        >{{ blok.headline }}</h2>
      </div>

      <!-- Article grid -->
      <div class="grid md:grid-cols-3 gap-6 sm:gap-8">
        <ArticleCard
          v-for="article in articles"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })

const articles = ref([])
const storyblokApi = useStoryblokApi()

try {
  const { data } = await storyblokApi.get('cdn/stories', {
    version: useRoute().query._storyblok ? 'draft' : 'published',
    starts_with: 'blog',
    is_startpage: false,
  })
  articles.value = data?.stories ?? []
} catch (error) {
  console.error('Failed to fetch Storyblok articles:', error)
  articles.value = []
}
</script>