// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    "nuxt-svgo",
    "@nuxtjs/tailwindcss"
  ],
  svgo: {
    defaultImport: 'component',
  },
  css: [
    '~/assets/css/tailwind.css' // ваш путь к стилям TailwindCSS
  ]
})
