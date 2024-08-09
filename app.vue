<script setup lang="ts">

useHead({
  title: 'X'
});

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

:root {
  --primary-color: #0F1419;
  --secondary-color: #FFF;
  --text-color: var(--primary-color)
}

body,
body * {
  font-family: Inter, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  margin: 0 auto;
  max-inline-size: 1240px;
  display: grid;
  align-items: start;
  grid-template-columns: 234px 1fr 356px;
  gap: 0 25px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

svg {
  width: 100%;
  height: 100%;
  box-sizing: content-box;
}
</style>
