/*jshint esversion: 6 */

import path from 'path';
import fs from 'fs';

module.exports = {
  head: {
    title: 'Vortex web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Web part of service' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  loading: { color: '#3B8070' },
  css: [
    '~assets/css/global.css',
    '~assets/less/transitions.less',
    '~assets/less/scrollbars.less'
  ],
  styleResources: {
    less: [
      '~/assets/less/colors.less',
      '~/assets/less/dark-colors.less',
      '~/assets/less/variables.less'
    ]
  },
  // cache: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    'semantic-ui-vue/nuxt',
    'cookie-universal-nuxt',
    'nuxt-i18n',
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', { }],
    ['nuxt-izitoast', 
      { 
        position: 'bottomLeft', 
        transitionIn: 'bounceInRight', 
        transitionOut: 'fadeOutRight', 
      }
    ],
    ['nuxt-fire',
      {
        // Required:
        config: {
          development: {
            apiKey: 'AIzaSyBtf8H9U6pzjsLMJLNs1p86e_95B4ASYH4',
            authDomain: 'vortex-4b6db.firebaseapp.com',
            databaseURL: 'https://vortex-4b6db.firebaseio.com',
            projectId: 'vortex-4b6db',
            storageBucket: '',
            messagingSenderId: '951093526823',
            appId: '1:951093526823:web:691535202ea0b370'
          },
          production: {
            apiKey: 'AIzaSyBtf8H9U6pzjsLMJLNs1p86e_95B4ASYH4',
            authDomain: 'vortex-4b6db.firebaseapp.com',
            databaseURL: 'https://vortex-4b6db.firebaseio.com',
            projectId: 'vortex-4b6db',
            storageBucket: '',
            messagingSenderId: '951093526823',
            appId: '1:951093526823:web:691535202ea0b370'
          }
        },
        // The following options are optional:
        useOnly: ['auth', 'messaging'],
        // useOnly: ['auth','firestore','functions','storage','realtimeDb', 'messaging', 'performance'],
        // customEnv: false,
        // functionsLocation: 'us-central1',
      }
    ]
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
    { src: '~/plugins/auth-handler.js', ssr: false },
    { src: '~/plugins/notifications.js', ssr: false },
    { src: '~/plugins/vue-particles', ssr: false },
    { src: '~/plugins/nuxt-client-init', ssr: false },
    { src: '~/plugins/vue-tilt', ssr: false },
    { src: '~/plugins/ripple-effect', ssr: false },
    { src: '~/plugins/axios' },
    // { src: '~/plugins/dynamic-modal' },
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
  }
};

