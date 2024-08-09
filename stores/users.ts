import { defineStore } from "pinia";
import type { User } from "~/types/model";

interface State {
  users: User[] | null
}

export const useUsersStore = defineStore('users', {
  state:(): State => ({
    users: null
  }),
  actions: {
    async fetchUsers() {
      this.users = null;
      this.users = await $fetch(`/api/users`);
    }
  }
})
