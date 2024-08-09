<script setup lang="ts">
definePageMeta({
  layout: 'login',
  layoutTransition: {
    name: 'blur'
  }
});

const router = useRouter();
const email = ref('');
const password = ref('');
const isLoading = ref(false);
async function signIn() {
  try {
    isLoading.value = true;
    const { redirectUrl } = await $fetch('/api/signin', {
      method: 'post',
      body: {
        email: email.value,
        password: password.value,
      }
    });

    await router.push(redirectUrl)

  } catch (e) {
    throw new Error('Ошибка');
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <section class="signIn">
    <div class="max-w-80">
      <form class="mt-6 grid gap-4" @submit.prevent="signIn">
        <UiInput type="text" placeholder="E-mail" @value="inputValue => { email = inputValue }" />
        <UiInput type="password" placeholder="Password" @value="inputValue => { password = inputValue }" />
        <UiButton text="Sign In" />
      </form>

      <UiDivider text="or" />

      <UiButton to="/signup" text="Sign Up" variant="filled" />
    </div>
  </section>
</template>

<style>
.blur-enter-active,
.blur-leave-active {
  transition: all 0.4s;
}
.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
