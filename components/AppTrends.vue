<script setup lang="ts">
import UiBox from "~/components/ui/UiBox.vue";
import { trends } from "~/db";
</script>

<template>
  <UiBox title="Trends for you">
    <UiTrand
      v-for="trend in trends"
      :key="trend.id"
      :params="trend"
    />
  </UiBox>
</template>
