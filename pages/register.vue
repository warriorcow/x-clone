<script setup lang="ts">
const email = ref('')
const password = ref('')

const supabase = useSupabaseClient();

// function registerUser() {
//   try {
//     const { data, error } = supabase.auth.signUp({
//       email: email.value,
//       password: password.value
//     });
//
//     if (error) throw error;
//   } catch (e) {
//     console.error(e)
//   }
// }

async function registerUser() {
  console.log('adada')
  const { data, status, error, refresh, clear } = useFetch('/api/user-create', {
    method: 'post',
    body: {
      email: email.value,
      password: password.value
    }
  })
}
</script>

<template>
  <h1>Register</h1>
  <div>
    Login <input class="" autocomplete="off" data-lpignore="true" v-model="email" type="text">
  </div>
  <div>
    Password <input autocomplete="off" data-lpignore="true" v-model="password" type="password">
  </div>

  <button class="bg-blue-500 p-2" @click="registerUser">
    Register
  </button>
  <div>email: {{email}}</div>
  <div>password: {{password}}</div>
</template>

<style scoped lang="scss">

</style>
