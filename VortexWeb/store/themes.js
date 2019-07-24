export const state = () => ({
    currentTheme: 'light',
    themes: [
        'light','dark'
    ]
  })

export const mutations = {
    changeTheme(state, themeIndex){
        state.currentTheme = state.themes[themeIndex];
    }
}