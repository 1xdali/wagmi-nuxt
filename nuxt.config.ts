// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue: 21.45,
        propList: ["*"],
        unitPrecision: 5,
        replace: true,
      }
    },
  },
  modules: [
    [
      '@use-wagmi/nuxt',
      {
        excludeImports: ['useQuery'],
      },
    ],
  ],
})
