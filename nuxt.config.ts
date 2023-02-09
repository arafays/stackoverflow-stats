export default defineNuxtConfig({
  css: ["@/assets/css/main.pcss"],
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    preset: 'vercel-edge',
  },
})
