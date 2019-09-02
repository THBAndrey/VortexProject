import firebase from 'firebase/app'
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
    async loginUser({ commit }, data){
        try {
            await firebase.auth().signInWithEmailAndPassword(
                data.login,
                data.password
            )
        } catch (e) {
            alert(e)
        }
    },
    async loginWithGoogle({ dispatch, commit }){
        var provider = new firebase.auth.GoogleAuthProvider()
        return dispatch('loginPopup',provider)
    },
    async loginWithFacebook({ dispatch, commit }){
        var provider = new firebase.auth.FacebookAuthProvider()
        return dispatch('loginPopup',provider)
    },
    async loginWithGithub({ dispatch, commit }){
        var provider = new firebase.auth.GithubAuthProvider()
        return dispatch('loginPopup',provider)
    },
    async loginWithMicrosoft({ dispatch, commit }){
        var provider = new firebase.auth.OAuthProvider('microsoft.com')
        return dispatch('loginPopup',provider)
    },
    async loginPopup({ dispatch, commit }, provider){
        return new Promise(async (resolve, reject) =>{
            await firebase.auth().signInWithPopup(provider).then(function(result) {
                dispatch('loginSuccess',result)
                resolve(result)
            }).catch(function(error) {
                dispatch('loginFailed',error)
                reject(error)
            });
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
    async loginFailed({ commit }, error){
        console.error(error);
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
    },
    async createUser({ commit }, data){
        try {
            let cu = await await firebase.auth().createUserWithEmailAndPassword(
                data.login,
                data.password
            )
        } catch (e) {
        alert(e)
        }
    },
    async authUser({ commit }, user){
        const token = await firebase.auth().currentUser.getIdToken(true)
        const userInfo = {
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL,
            uid: user.uid
        }
        cookies.set('access_token', token) 
        commit('setUser', userInfo)
    },
    async logoutUser({ commit }){
        await firebase.auth().signOut().then(function() {
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
        });
        cookies.remove('access_token');
        commit('setUser', null)
    }
}