<script setup lang="ts">
import UiBox from "~/components/ui/UiBox.vue";
import { friendsRecommendation, authUser } from "~/db";

const route = useRoute();

const friendsRecommendationFiltered = computed(() => {
  return friendsRecommendation.filter(user => user.nickname !== authUser.nickname);
})
</script>

<template>
  <UiBox title="You might like">
    <UiRecommendUser
      v-for="user in friendsRecommendationFiltered"
      :key="user.id"
      :user="user"
    />
  </UiBox>
</template>
