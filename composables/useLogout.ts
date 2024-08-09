import { useUserStore } from "~/stores/user";

export const useLogout = async () => {
  const router = useRouter();
  const { removeAuthUser } = useUserStore();
  const { success } = await $fetch('/api/logout');
  if (!success) {
    throw new Error('Не удалось выполнить выход из учетной записи');

  }

  await router.push('/signin');
  removeAuthUser();
}
