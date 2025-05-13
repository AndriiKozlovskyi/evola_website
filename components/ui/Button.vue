<template>
  <button
    :type="type"
    :class="[
      'rounded-xl px-6 py-3 transition-colors duration-200',
      variant === 'primary' && 'bg-orange-700 text-white hover:bg-orange-600',
      variant === 'secondary' && 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      variant === 'outline' && 'border-2 border-orange-700 text-orange-700 hover:bg-orange-50',
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