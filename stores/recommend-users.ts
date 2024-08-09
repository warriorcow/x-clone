import { defineStore } from "pinia";

export const useRecommendUsersStore = defineStore('recommend-users', {
  state:(): {
    recommendUsers: null | any
  } => ({
    recommendUsers: null
  }),
  actions: {
    async fetchRecommendUsers() {
      this.recommendUsers = await $fetch(`/api/recommend-users`);
    }
  },
  getters: {}
})
