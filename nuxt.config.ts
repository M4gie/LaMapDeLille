// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { static: true },
    '/blog': { isr: 10 },
  },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
  eslint: {
    config: {
      stylistic: true,
      typescript: {
        strict: true,
      },
    },
  },
})
