<script setup lang="ts">
definePageMeta({
  layout: 'profile',
  middleware: 'auth'
});

const userStore = useUserStore();
const { userProfile } = storeToRefs(userStore);
const { fetchProfile } = userStore;
const isLoading = ref(true);

onBeforeMount(async () => {
  await fetchProfile();
  isLoading.value = false;
})
</script>

<template>
  <div class="h-full">
    <AppProfile v-if="!isLoading" :user="userProfile" />
    <div class="flex items-center justify-center w-full h-full" v-else>
      <UiLoadingIcon  />
    </div>
  </div>
</template>
