export const state = () => ({
    currentTheme: 'light', //default theme 'light'
    themes: [
        'light','dark' //list themes
    ]
})

export const mutations = {
    setTheme(state, themeIndex){
        state.currentTheme = state.themes[themeIndex]
    }
}

export const actions = {
    changeTheme({ commit }, themeIndex){
        console.log('changeTheme')
        commit('setTheme', themeIndex)
        var date = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)
        document.cookie = `theme=${themeIndex}; path=/; expires=${date.toUTCString()}`
    },
}