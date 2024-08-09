<script setup lang="ts">
import { useLogout } from "~/composables/useLogout";

const userStore = useUserStore();
const { authUserProfile } = storeToRefs(userStore);
</script>

<template>
  <div
    v-if="authUserProfile"
    class="py-6 grid grid-cols-[1fr_36px] gap-x-3 items-center"
  >
    <UiUserBadge
      :user="authUserProfile"
    />
    <UiButton
      @click="useLogout"
      class="ml-auto"
      icon="logout"
      variant="simple"
    />
  </div>
</template>
