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
  <NuxtLink class="flex gap-x-3" :to="`/@${user.nickname}`">
    <div class="w-10 h-10 rounded-full overflow-hidden bg-white">
      <img :src="user.avatar" alt="">
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
      <div class="text-gray-500">
        @{{ user.nickname }}
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">

</style>
