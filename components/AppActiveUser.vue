<script setup lang="ts">
import { user } from "~/db";
</script>

<template>
  <div class="py-6 flex items-center">
    <UiUserBadge
      :user="user"
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
