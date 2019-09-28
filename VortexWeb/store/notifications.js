export const state = () => ({
    token: null
    // messaging: this.$fireMess
})

export const mutations = {
    setToken(state, token){
        state.token = token
    }
}

export const actions = {
    async changeToken({ dispatch, commit }, token){
        commit('setToken',token)
        // dispatch('showToast', {
        //     title: 'Token set',
        //     message: token
        // })
    },
    async showToast({ dispatch, commit, state }, notice){
        this.$notify.show({
            title: notice.title,
            message: notice.message,
            theme: this.state.themes.currentTheme,
            progressBarColor: 'rgb(0, 255, 184)',
            layout: 1,
            maxWidth: '500px'
        })
    }
}