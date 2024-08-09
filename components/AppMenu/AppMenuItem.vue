<script setup lang="ts">
defineProps<{
  text: string
  url: string
  icon: string
  active?: boolean
}>();
</script>

<template>
  <NuxtLink
    class="group"
    :to="url"
  >
    <div
      class="inline-flex items-center p-4  pr-6 text-xl group-hover:bg-gray-100 rounded-full"
      :class="{'font-bold': active}"
    >
      <component class="w-6 h-6 mr-5" :is="icon" />
      <span
        v-text="text"
      />
    </div>
  </NuxtLink>
</template>
