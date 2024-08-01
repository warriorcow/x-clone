<script setup lang="ts">
import type { User } from "~/types/model";
import { concatName } from "~/helpers/concatName";
import UiUserBadge from "~/components/ui/UiUserBadge.vue";

const props = defineProps<{
  user: User
}>()

const fullName = computed((): string => {
  return concatName(props.user.firstname, props.user.lastname)
})
</script>

<template>
  <div class="flex gap-x-3">
    <UiUserBadge :user="user" />
    <UiButton
      class="ml-auto"
      text="Follow"
      variant="filled"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
