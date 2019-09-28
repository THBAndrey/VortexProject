import Vue from 'vue'
import Vuex from 'vuex'
import { getUserFromCookie, getUserFromSession } from '@/authentication'
const cookieparser = process.server ? require('cookieparser') : undefined

Vue.use(Vuex)

export const strict = false

export const state = () => ({

})

export const mutations = {

}

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {
    if (req.headers.cookie) {
      let theme = null
      const parsed = cookieparser.parse(req.headers.cookie)
      theme = parsed.theme
      commit('themes/setTheme', theme)
    }
    const user = getUserFromCookie(req)
    if (user) {
      await commit('user/setUser', { name: user.name, email: user.email, avatar: user.picture, uid: user.user_id})
    }
  },
  nuxtClientInit ({ commit }, { req }) {

  },
}