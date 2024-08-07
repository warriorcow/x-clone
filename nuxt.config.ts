// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-08-07',
  devtools: { enabled: false },
  modules: [
    'nuxt-svgo',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase'
  ],
  svgo: {
    defaultImport: 'component',
  },
  supabase: {
    redirect: false,
  },
  css: [
    '~/assets/css/tailwind.css'
  ]
})