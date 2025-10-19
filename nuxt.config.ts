// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@unocss/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  icon: {
    localApiEndpoint: '/nuxt-icon',
  },
  css: ['@unocss/reset/tailwind-compat.css', '~/assets/scss/index.scss'],
  ssr: true, // 是否开启 ssr
  devServer: {
    // 服务端口号
    port: 3000,
  },
  nitro: {
    // 代理，前后端分离有用
    // devProxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     changeOrigin: true,
    //     prependPath: true,
    //   },
    // },
  },
})
