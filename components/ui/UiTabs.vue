<script setup lang="ts">
import type { Tabs } from "~/types/model";

const router = useRouter();

const props = defineProps<{
  tabs: Tabs
  nickname: string
}>();

function routeLink(url: string): string {
  return url ? `/@${props.nickname}/${url}` : `/@${props.nickname}`
}
</script>

<template>
  <div class="grid grid-cols-dynamic border-b border-gray-100 mt-3">
    <NuxtLink :to="routeLink(tab.url)"
      v-for="(tab, key) in tabs"
      :key="key"
      :class="{'active': routeLink(tab.url) === router.currentRoute.value.path}"
      class="group"
    >
      <div class="
        group-[.active]:after:opacity-100
        after:opacity-0 after:h-1
        after:block after:bg-blue-500
        after:w-3/4
        after:mx-auto
      ">
        <div class="px-2 pb-3 text-center capitalize">
          {{ key }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
