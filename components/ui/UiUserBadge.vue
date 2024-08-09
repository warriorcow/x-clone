<script setup lang="ts">
import type { User } from "~/types/model";
import { concatName } from "~/helpers/concatName";

const props = defineProps<{
  user: User
}>();

const fullName = computed((): string => {
  return concatName(props.user.firstname, props.user.lastname)
})
</script>

<template>
  <NuxtLink class="grid grid-cols-[40px_1fr] gap-x-3" :to="`/@${user.nickname}`">
    <div class="aspect-square w-10 h-10 bg-blue-50 rounded-full overflow-hidden flex items-center justify-center">
      <img
        v-if="user.avatar"
        :src="user.avatar"
        :alt="`${user.lastname}-avatar}`"
      >
      <div v-else class="select-none text-2xl font-bold">?</div>
    </div>
    <div class="grid text-sm">
      <div class="flex items-center font-bold">
        {{ fullName }}
        <svgo-verified
          v-if="user.verified"
          class="w-5 h-5 ml-1 text-blue-500"
          filled
        />
      </div>
      <div class="text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden">
        @{{ user.nickname }}
      </div>
    </div>
  </NuxtLink>
</template>
