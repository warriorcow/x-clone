// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-08-07',
  devtools: { enabled: true },
  modules: [
    'nuxt-svgo',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@pinia/nuxt'
  ],
  svgo: {
    defaultImport: 'component',
  },
  supabase: {
    redirect: false,
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY
  },
  css: [
    '~/assets/css/tailwind.css'
  ]
})
