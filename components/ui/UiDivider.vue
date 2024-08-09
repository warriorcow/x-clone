<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<template>
<div class="flex min-h-5 my-4 items-center gap-2">
  <span class="h-px w-full bg-black"></span>
  <div v-if="text" class="leading-5 mb-px" >{{text}}</div>
  <span v-if="text" class="h-px w-full bg-black"></span>
</div>
</template>
