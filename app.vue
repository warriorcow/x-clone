<script setup lang="ts">
import AppMenu from "~/components/AppMenu/AppMenu.vue";
import AppSearch from "~/components/AppSearch.vue";

import { menu } from './db.js'

useHead({
  title: 'X'
})
</script>

<template>
  <main class="main">
    <AppMenu :links="menu" />
    <div class="content">
      <NuxtPage />
    </div>
    <AppSearch></AppSearch>
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

:root {
  --primary-color: #0F1419;
  --secondary-color: #FFF;

  --text-color: var(--primary-color)
}

body,
body * {
  font-family: Roboto, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  margin: 0 auto;
  max-inline-size: 1240px;
  display: grid;
  grid-template-columns: 234px 1fr 356px;
  gap: 0 25px;
  min-block-size: 100vh;
}

.content {
  border-left: 1px solid #eff3f4;
  border-right: 1px solid #eff3f4;
}
</style>
