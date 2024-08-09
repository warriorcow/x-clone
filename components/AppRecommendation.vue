<script setup lang="ts">
import UiBox from "~/components/ui/UiBox.vue";

const recommendUsersStore = useRecommendUsersStore();
const { fetchRecommendUsers } = recommendUsersStore;
const { recommendUsers } = storeToRefs(recommendUsersStore);

onBeforeMount(async () => {
  await fetchRecommendUsers();
})
</script>

<template>
  <UiBox class="" title="You might like">
      <template v-if="recommendUsers">
        <UiRecommendUser
          v-for="user in recommendUsers"
          :key="user.id"
          :user="user"
        />
      </template>
      <UiLoadingIcon class="mx-auto" v-else />
  </UiBox>
</template>
