<script setup lang="ts">
import UiDivider from "~/components/ui/UiDivider.vue";

definePageMeta({
  layout: 'login'
});

const router = useRouter();

const email = ref('');
const password = ref('');
const lastname = ref('');
const firstname = ref('');
const isLoading = ref(false);
async function signUp() {
  try {
    isLoading.value = true;
    const { data } = await useFetch('/api/signup', {
      method: 'post',
      body: {
        email: email.value,
        password: password.value,
        lastname: lastname.value,
        firstname: firstname.value
      }
    })

    if (data.value) {
      await router.push(data.value.redirectUrl)
    }
  } catch (e) {
    throw new Error('Ошибка');
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <section class="signUp">
    <div class="max-w-80">
      <form class="mt-6 grid gap-4" @submit.prevent="signUp">
        <UiInput type="text" placeholder="Firstname" @value="inputValue => { firstname = inputValue }" />
        <UiInput type="text" placeholder="Lastname" @value="inputValue => { lastname = inputValue }" />
        <UiInput type="text" placeholder="E-mail" @value="inputValue => { email = inputValue }" />
        <UiInput type="password" placeholder="Password" @value="inputValue => { password = inputValue }" />
        <UiButton text="Sign Up" :loading="isLoading" />
      </form>

      <UiDivider text="or" />

      <UiButton to="/signin" text="Sign In" variant="filled" />
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
