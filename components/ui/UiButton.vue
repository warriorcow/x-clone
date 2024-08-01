<script setup lang="ts">
const props = withDefaults(defineProps<{
  text?: string
  icon?: string
  variant?: 'filled' | 'default' | 'simple'
}>(), {
  variant: 'default',
  text: '',
  icon: ''
})

const isFilled = computed(() => {
  return props.variant === 'filled';
})

const isDefault = computed(() => {
  return props.variant === 'default';
})

const isSimple = computed(() => {
  return props.variant === 'simple';
})

const hasText = computed(() => {
  return props.text.length;
})

const hasIcon = computed(() => {
  return props.icon.length;
})
</script>

<template>
  <button
    class="flex items-center justify-center rounded-full p-2 transition-colors"
    :class="{
      'bg-black text-white hover:bg-gray-900': isFilled,
      'bg-transparent border-2 hover:bg-gray-200': isDefault,
      'bg-transparent border-none hover:bg-gray-200': isSimple
    }"
  >
    <component
      v-if="icon"
      :is="`svgo-${icon}`"
      class="max-w-5 max-h-5"
      :class="{
        'ml-2': hasText
      }"
    />
    <span
      v-if="text"
      v-text="text"
      class="px-3 font-bold"
    />
  </button>
</template>
