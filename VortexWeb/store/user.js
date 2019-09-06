import cookies from 'js-cookie'

export const state = () => ({
    currentUser: null
})

export const mutations = {
    setUser(state, user){
        state.currentUser = user
    }
}

export const actions = {
    async loginUser({ dispatch, commit }, data){
        return new Promise(async (resolve, reject) => {
            await this.$fireAuth.signInWithEmailAndPassword(
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
    async loginWithGoogle({ dispatch, commit }){
        var provider = new this.$fireAuthObj.GoogleAuthProvider()
        return dispatch('loginPopup',provider)
    },
    async loginWithFacebook({ dispatch, commit }){
        var provider = new this.$fireAuthObj.FacebookAuthProvider()
        return dispatch('loginPopup',provider)
    },
    async loginWithGithub({ dispatch, commit }){
        var provider = new this.$fireAuthObj.GithubAuthProvider()
        return dispatch('loginPopup',provider)
    },
    async loginWithMicrosoft({ dispatch, commit }){
        var provider = new this.$fireAuthObj.OAuthProvider('microsoft.com')
        return dispatch('loginPopup',provider)
    },
    async loginPopup({ dispatch, commit }, provider){
        return new Promise(async (resolve, reject) =>{
            await this.$fireAuth.signInWithPopup(provider).then(function(result) {
                dispatch('loginSuccess',result)
                resolve(result)
            }).catch(function(error) {
                dispatch('loginFailed',error)
                reject(error)
            })
        })
        
    },
    async loginSuccess({ commit }, result){
        console.log(result);
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // // The signed-in user info.
        // var user = result.user;
        // // ...
    },
    async loginFailed({ dispatch, commit }, error){
        console.error(error);
        dispatch('notifications/showToast', { title: 'Ошибка входа', message: error.message }, { root: true })
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The this.$fireAuthObj.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
    },
    async createUser({ commit }, data){
        try {
            let cu = await await this.$fireAuth.createUserWithEmailAndPassword(
                data.login,
                data.password
            )
        } catch (e) {
            alert(e)
        }
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
        cookies.set('access_token', token) 
        commit('setUser', userInfo)
    },
    async logoutUser({ commit }){
        await this.$fireAuth.signOut().then(function() {
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
        });
        cookies.remove('access_token');
        commit('setUser', null)
    }
}