<script setup lang="ts">
const route = useRoute();
console.log(route.params)
</script>

<template>
  <AppProfile :nickname="route.params.nickname" />
</template>
