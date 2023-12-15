import tailwindTypography from "@tailwindcss/typography";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
   modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss", "@nuxt/image"],
   microCMS: {
     serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
     apiKey: process.env.MICROCMS_API_KEY,
   },
   tailwindcss: {
      config: {
        content: [],
        plugins: [tailwindTypography],
      },
   },
   app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
      title: 'タイトル',
      meta: [
        { hid: 'description', name: 'description', content: 'サイトの説明' }
      ],
    },
   },
})