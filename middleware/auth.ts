export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $supabase } = useNuxtApp()
  const { data: { user } } = await $supabase.client.auth.getUser()

  const isAuthorized = !!user;
  if (!isAuthorized && to.name === '@nickname') {
    return navigateTo({
      name: 'signin'
    })
  }
})
