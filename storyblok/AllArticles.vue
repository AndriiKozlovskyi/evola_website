<template>
    <div class="py-12 sm:py-24 px-4">
      <h2 class="text-3xl sm:text-4xl md:text-6xl text-black font-bold text-center mb-8 sm:mb-12">{{ blok.headline }}</h2>
      <div class="container mx-auto grid md:grid-cols-3 gap-6 sm:gap-12 my-8 sm:my-12 place-items-start">
        <ArticleCard
          v-for="article in articles"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
        />
      </div>
    </div>
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