import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state:(): {
    authUserProfile: null | any
    isAuthorized: boolean,
    userProfile: null | any
  } => ({
    authUserProfile: null,
    isAuthorized: false,
    userProfile: null
  }),
  actions: {
    async fetchAuthStatus() {
      const { data } = await useFetch('/api/auth-user');
      this.isAuthorized = !!data.value;
      this.authUserProfile = data.value;
    },

    async fetchProfile() {
      const { params } = useRoute();
      if (params.nickname) {
        const { data } = await useFetch(`/api/profile/${params.nickname}`);
        this.userProfile = data.value;
      } else {
        console.error('fetchProfile::/api/profile/${params.nickname}')
      }
    },

    updateAuthUserProfile(updatedProfile) {
      this.authUserProfile = { ...this.authUserProfile, ...updatedProfile }
      if (this.isHomePage) {
        this.userProfile = { ...this.userProfile, ...updatedProfile }
      }
    },

    removeAuthUser() {
      this.authUser = null
      this.authUserProfile = null
      this.isAuthorized = false
      this.userProfile = null
    }
  },
  getters: {
    isHomePage: (state) => {
      const route = useRoute();
      return route.path === `/@${state.authUserProfile?.nickname}`
    }
  }
})
