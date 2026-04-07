<template>
  <section id="contact" class="py-16 sm:py-24">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
      <div class="max-w-2xl mx-auto">

        <!-- Header -->
        <div class="text-center mb-12">
          <div class="label-pill mb-5 inline-flex">{{ $t('contact.kicker') }}</div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style="color: var(--text-1);">
            {{ $t('contact.title') }}
          </h2>
          <p class="text-[#8fa3bb] text-base">
            {{ $t('contact.description') }}
          </p>
        </div>

        <!-- Form Card -->
        <div class="card-premium rounded-3xl p-8 sm:p-10">
          <form class="space-y-5" @submit.prevent="handleSubmit">
            <div>
              <label for="name" class="block text-sm font-semibold text-[#8fa3bb] mb-2">{{ $t('contact.nameLabel') }}</label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                class="input-dark"
                :placeholder="$t('contact.namePlaceholder')"
                required
              />
            </div>
            <div>
              <label for="phone" class="block text-sm font-semibold text-[#8fa3bb] mb-2">{{ $t('contact.phoneLabel') }}</label>
              <input
                v-model="form.phone"
                type="tel"
                id="phone"
                class="input-dark"
                :placeholder="$t('contact.phonePlaceholder')"
                required
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-semibold text-[#8fa3bb] mb-2">{{ $t('contact.messageLabel') }} <span class="text-[#566a7f] font-normal">({{ $t('contact.optional') }})</span></label>
              <textarea
                v-model="form.message"
                id="message"
                rows="3"
                class="input-dark resize-none"
                :placeholder="$t('contact.messagePlaceholder')"
              ></textarea>
            </div>

            <Button type="submit" variant="primary" class="w-full py-4 text-base mt-2">
              {{ $t('contact.submitButton') }}
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </form>

          <!-- Contact links -->
          <div class="mt-8 pt-6 flex flex-wrap justify-center gap-6" style="border-top: 1px solid var(--border);">
            <a href="tel:+48789711631" class="inline-flex items-center gap-2 text-sm text-[#8fa3bb] hover:text-white transition-colors">
              <svg class="w-4 h-4 text-[#f05b04]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.5C3 4.67157 3.67157 4 4.5 4H7.28C8.04 4 8.69 4.53 8.83 5.28L9.45 8.37C9.56 8.94 9.35 9.53 8.89 9.9L7.09 11.37C8.09 13.83 10.05 15.79 12.51 16.79L13.98 14.98C14.35 14.53 14.93 14.31 15.51 14.43L18.6 15.04C19.34 15.19 19.88 15.84 19.88 16.6V19.38C19.88 20.2 19.2 20.88 18.38 20.88H17.25C9.38 20.88 3 14.5 3 6.63V5.5Z" />
              </svg>
              +48 789 711 631
            </a>
            <a href="mailto:evolateam@gmail.com" class="inline-flex items-center gap-2 text-sm text-[#8fa3bb] hover:text-white transition-colors">
              <svg class="w-4 h-4 text-[#f05b04]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              evolateam@gmail.com
            </a>
            <a href="https://t.me/evola_manager" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm text-[#8fa3bb] hover:text-white transition-colors">
              <svg class="w-4 h-4 text-[#f05b04]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              {{ $t('footer.socialLinks.telegram') }}
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import Button from './ui/Button.vue'

const { t } = useI18n()

const form = reactive({
  name: '',
  phone: '',
  message: '',
})

function handleSubmit() {
  window.location.href = 'tel:+48789711631'
}
</script>
