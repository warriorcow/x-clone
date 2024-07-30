<template>
  <AppProfile />
</template>

<script setup>
import AppProfile from "~/components/AppProfile.vue";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Profile / ${titleChunk}` : 'Site Title';
  }
})
</script>

<style lang="scss">

</style>
