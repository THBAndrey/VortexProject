import cookies from 'js-cookie'

export const state = () => ({
    currentUser: null,
    currentToken: null
})

export const mutations = {
    setUser(state, user){
        state.currentUser = user
    },
    setToken(state, token){
        state.currentToken = token
        cookies.set('access_token', token)
        localStorage.setItem('access_token', token)
        this.$axios.setToken(token, 'Bearer')
    },
    removeToken(state){
        state.currentToken = null
        cookies.remove('access_token');
        localStorage.removeItem('access_token')
        this.$axios.setToken(false)
    }
}

export const getters = {
    getToken: state => state.currentToken || cookies.get('access_token') || localStorage.getItem('access_token') 
}

export const actions = {
    loginUser({ dispatch, commit }, data){
        return new Promise((resolve, reject) => {
            this.$fireAuth.signInWithEmailAndPassword(
                data.login,
                data.password
            ).then(function(result) {
                dispatch('loginSuccess',result)
                resolve(result)
            }).catch(function(error) {
                dispatch('loginFailed',error)
                reject(error)
            })
        })
    },
    loginWithGoogle({ dispatch, commit }){
        var provider = new this.$fireAuthObj.GoogleAuthProvider()
        return dispatch('loginPopup',provider)
    },
    loginWithFacebook({ dispatch, commit }){
        var provider = new this.$fireAuthObj.FacebookAuthProvider()
        return dispatch('loginPopup',provider)
    },
    loginWithGithub({ dispatch, commit }){
        var provider = new this.$fireAuthObj.GithubAuthProvider()
        return dispatch('loginPopup',provider)
    },
    loginWithMicrosoft({ dispatch, commit }){
        var provider = new this.$fireAuthObj.OAuthProvider('microsoft.com')
        return dispatch('loginPopup',provider)
    },
    loginPopup({ dispatch, commit }, provider){
        return new Promise((resolve, reject) =>{
            this.$fireAuth.signInWithPopup(provider)
            .then(function(result) {
                dispatch('loginSuccess',result)
                resolve(result)
            }).catch(function(error) {
                dispatch('loginFailed',error)
                reject(error)
            })
        })
    },
    async loginSuccess({ commit }, result){
        // console.log(result);
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // // The signed-in user info.
        // var user = result.user;
        // // ...
    },
    async loginFailed({ dispatch, commit }, error){
        // console.error(error);
        // dispatch('notifications/showToast', { title: 'Ошибка входа', message: error.message }, { root: true })
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The this.$fireAuthObj.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
    },
    createUser({ commit }, data){
        return new Promise((resolve, reject) => {
            this.$fireAuth.createUserWithEmailAndPassword(
                data.login,
                data.password
            ).then(function(result) {
                // dispatch('registerSuccess',result)
                resolve(result)
            }).catch(function(error) {
                // dispatch('registerFailed',error)
                reject(error)
            })
        })
    },
    async authUser({ commit }, user){
        const token = await this.$fireAuth.currentUser.getIdToken(true)
        const userInfo = {
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL,
            uid: user.uid,
            emailVerified: user.emailVerified,
            // providerData: user.providerData
        }

        commit('setToken', token)
        commit('setUser', userInfo)
    },
    logoutUser({ commit }){
        this.$fireAuth.signOut()
        .then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

        commit('removeToken')
        commit('setUser', null)
    },
    updateUser({ commit }, user){
        return new Promise((resolve, reject) => {
            this.$fireAuth.currentUser.updateProfile({
                displayName: user.name,
                photoURL: user.avatar,
                role: user.role
            }).then(function(result) {
                // dispatch('updateUserSuccess',result)
                resolve(result)
            }).catch(function(error) {
                // dispatch('updateUserFailed',error)
                reject(error)
            })
        })
    },
}