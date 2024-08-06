<script setup lang="ts">
import AppSearch from "~/components/AppSearch.vue";
import UiStickyScrollBox from "~/components/ui/UiStickyScrollBox.vue";
import { menu } from "~/db";
import AppMenu from "~/components/AppMenu/AppMenu.vue";
</script>

<template>
  <main class="main px-4">
    <div class="flex flex-col h-dvh sticky top-0">
      <AppMenu :links="menu" />
      <AppActiveUser class="mt-auto" />
    </div>

    <div class="h-full border-x border-gray-100">
      <NuxtPage />
    </div>
    <UiStickyScrollBox>
      <aside class="grid gap-y-4 pb-4">
        <div class="sticky top-0 py-1 bg-white">
          <AppSearch />
        </div>
        <AppRecommendation />
        <AppTrends />
      </aside>
    </UiStickyScrollBox>
  </main>
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
  max-width: 50px;
}
</style>
