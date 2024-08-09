<script setup lang="ts">
import { NuxtLink } from "#components";
import type { Component } from "vue";
import UiLoadingIcon from "~/components/ui/UiLoadingIcon.vue";

const props = withDefaults(defineProps<{
  text?: string
  icon?: string
  to?: string
  loading?: boolean
  expanded?: boolean
  variant?: 'filled' | 'default' | 'simple'
}>(), {
  variant: 'default',
  expanded: false,
  text: '',
  icon: ''
})

const isFilled = computed(() => {
  return props.variant === 'filled';
});

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
});

const tag = computed((): Component | string => {
  return props.to ? NuxtLink : 'button'
})
</script>

<template>
  <component
    :is="tag"
    :to="to"
    class="flex items-center  max-h-12 justify-center rounded-full p-2 transition-colors"
    :class="{
      'w-full': expanded,
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
    <UiLoadingIcon
      v-if="loading"
      class="-mr-6"
    />
  </component>
</template>
