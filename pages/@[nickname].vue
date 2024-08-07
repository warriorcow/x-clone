<script setup lang="ts">
import { users, authUser } from "~/db";
import type { User } from "~/types/model";
import { useUserStore } from "~/stores/user";

const route = useRoute();
const userStore = useUserStore();
await useAsyncData('user', () => userStore.fetchUser())

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

const uploadData = ref(null)

async function changeFile(event) {
  const file: File = event.target.files[0];

  async function getBase64(file) {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  uploadData.value = {
    name: file.name,
    file: await getBase64(file),
    type: file.type
  }
}

watch(() => uploadData.value, async () => {
  await useFetch('/api/user-create', {
    method: 'post',
    headers: {
      "Content-type": "multipart/form-data"
    },
    body: uploadData
  })
})
</script>

<template>
  <div>
    <AppProfile :user="userData" />

    <div v-if="!route.params.feed">
      {{ tabData }}
      <input @change="changeFile($event)" type="file">
      <div class="test">{{ userStore.user[0] }}</div>

    </div>
    <NuxtPage v-else :tabData="tabData" />
  </div>
</template>
