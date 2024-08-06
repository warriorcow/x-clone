<script setup lang="ts">;
import { authUser } from "~/db";
</script>

<template>
  <div class="py-6 flex items-center">
    <UiUserBadge
      :user="authUser"
    />
    <UiButton
      class="ml-auto"
      icon="multidot"
      variant="simple"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
