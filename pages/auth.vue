<script setup lang="ts">
const email = ref('')
const password = ref('')

const supabase = useSupabaseClient();

function loginUser() {
  try {
    const { data, error } = supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });

    if (error) throw error;
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <h1>Log In</h1>
  <div>
    Login <input class="" autocomplete="off" data-lpignore="true" v-model="email" type="text">
  </div>
  <div>
    Password <input autocomplete="off" data-lpignore="true" v-model="password" type="password">
  </div>
  <button class="bg-blue-500 p-2" @click="loginUser">
    Login
  </button>

  <div>email: {{email}}</div>
  <div>password: {{password}}</div>
</template>

<style scoped lang="scss">

</style>
