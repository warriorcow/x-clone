<script setup lang="ts">
import type { Trend } from "~/types/model";

defineProps<{
  params: Trend
}>()
</script>

<template>
  <div class="flex">
    <div class="grid gap-y-1">
      <div class="text-sm text-gray-500">
        {{ params.category }}
      </div>
      <div class="font-bold">
        {{ params.title }}
      </div>
      <div class="text-sm text-gray-500">
        {{ params.postsCount }} posts
      </div>
    </div>
    <UiButton
      class="ml-auto"
      icon="multidot"
      variant="simple"
    />
  </div>
</template>
