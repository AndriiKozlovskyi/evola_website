<template>
  <button
    :type="type"
    :class="[
      'inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2',
      variant === 'primary' && 'bg-[#f05b04] text-white hover:bg-[#d44d03] shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 hover:-translate-y-px btn-glow',
      variant === 'secondary' && 'bg-white/10 text-white border border-white/15 hover:bg-white/15',
      variant === 'outline' && 'border-2 border-[#f05b04] text-[#f05b04] hover:bg-[#f05b04]/10',
      className
    ]"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  className: {
    type: String,
    default: ''
  }
})

defineEmits(['click'])
</script>