<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();
const { fetchAuthStatus, fetchProfile } = userStore;
const { authUserProfile, isHomePage } = storeToRefs(userStore);
await fetchAuthStatus();
await fetchProfile();
const menu = computed(() => {
  return [
    {
      id: 9,
      text: "Profile",
      icon: "svgo-profile",
      url: `/@${authUserProfile.value?.nickname}`,
      active: isHomePage.value
    },
  ]
})
</script>

<template>
  <main class="main px-4">
    <div class="flex flex-col h-dvh sticky top-0">
      <AppMenu :links="menu" />
      <AppActiveUser class="mt-auto" />
    </div>
    <div class="h-full border-x border-gray-100">
      <slot />
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
