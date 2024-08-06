<script setup lang="ts">
import { users, authUser } from "~/db";
import type { User } from "~/types/model";

const route = useRoute();

const isAuthUser = computed((): boolean => {
  return authUser.nickname === route.params.nickname;
});

const user = computed((): User => {
  return users.filter(user => user.nickname === route.params.nickname)[0];
});

const userData = computed((): User => {
  return isAuthUser.value ? authUser : user.value
});

const tabData = computed((): string[] => {
  if (route.params.feed === '') {
    return userData.value.tabs.posts.data;
  }
  const type = route.params.feed || 'posts';
  return userData.value.tabs[type].data;
});
</script>

<template>
  <div>
    <AppProfile :user="userData" />

    <div v-if="!route.params.feed">
      {{ tabData }}
    </div>
    <NuxtPage v-else :tabData="tabData" />
  </div>
</template>
