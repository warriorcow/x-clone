<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="grid items-start content-start gap-y-6 bg-gray-100 p-5 rounded-2xl">
    <div
      v-if="title"
      class="text-xl font-bold"
    >
      {{ title }}
    </div>
    <slot />
  </div>
</template>
