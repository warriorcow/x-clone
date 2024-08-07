import { defineStore } from "pinia";
import type { User } from "~/types/model";
import type { Ref } from "vue";

interface State {
  user: User[] | null
  test: number
}

export const useUserStore = defineStore('user', {
  state:(): State => ({
    user: null,
    test: 1
  }),
  actions: {
    async fetchUser() {
      const { data,  }: { data: Ref<User[]> } = await useFetch('/api/user');
      this.user = data.value
    }
  }
})
