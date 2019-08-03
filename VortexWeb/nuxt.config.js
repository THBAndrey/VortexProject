import path from 'path'
import fs from 'fs'

module.exports = {
  head: {
    title: 'vortex-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Web part of service' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  css: [
    '~/assets/css/global.css'
  ],
  cache: true,
  modules: [
    //'bootstrap-vue/nuxt',
    '@nuxtjs/tailwindcss',
    'semantic-ui-vue/nuxt',
    //'nuxt-vuikit',
    'cookie-universal-nuxt',
    'nuxt-i18n',
    //['@nuxtjs/pwa', { }],
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
        flag: 'us'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.js',
        name: 'Русский',
        flag: 'ru'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.js',
        name: 'Français',
        flag: 'fr'
      }
    ],
    seo: true,
    //baseUrl: 'https://vortex.com',
    defaultLocale: 'en',
    lazy: true,
    langDir: 'langs/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n',
      alwaysRedirect: false,
    },
  },
  plugins: [
    { src: '~/plugins/vue-particles', ssr: false },
    { src: '~/plugins/nuxt-client-init', ssr: false },
  ],
  build: {
    vendor: [],
    extend(config, { isDev, isClient }) {
      if (isDev) {
        config.devtool = isClient ? 'source-map' : 'inline-source-map'
      }
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  server: {
    port: 3000, // default: 3000
    host: 'localhost', // default: localhost,
    timing: false,
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    // }
  }
}

