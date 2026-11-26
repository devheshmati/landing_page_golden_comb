import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "Golden Comb", // default fallback title
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/icon",
    "nuxt-lottie",
    "nuxt-nodemailer",
    "nuxt-notify",
    "nuxt-zod",
    "@nuxt/image",
  ],
  nodemailer: {
    from: '"Bee Farm Golden Comb" <reza2boyce@gmail.com>',
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,
    service: "gmail",
    auth: {
      user: "reza2boyce@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  },
});
