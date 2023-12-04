// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootId: "application",
    head: {
      title: "iTour Project",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "This a website meant to help people plan their IT tours."
        }
      ]
    },
    keepalive: true
  },
  components: [{ path: "~/components", pathPrefix: false }],
  css: ["~/assets/scss/main.scss"],
  devtools: { enabled: true }
})
