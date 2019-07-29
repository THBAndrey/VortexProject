import Vue from 'vue'
import Vuex from 'vuex'
const cookieparser = process.server ? require('cookieparser') : undefined

Vue.use(Vuex)

export const state = () => ({
  localStorage: null
})

export const mutations = {
  setLocalStorage(state, ls){
    state.localStorage = ls
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.headers.cookie) {
      let theme = null
      const parsed = cookieparser.parse(req.headers.cookie)
      theme = parsed.theme
      commit('themes/setTheme', theme)
    }
  },
  nuxtClientInit ({ commit }, { req }) {

  },
}