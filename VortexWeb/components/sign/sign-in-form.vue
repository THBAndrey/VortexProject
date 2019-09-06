<template>
    <div>
        <div class="mb-8">
            <span class="text-3xl font-medium mr-5">Sign In</span>
            <span class="text-lg text-gray-600 mr-5">Sign Up</span>
        </div>
        <sui-form>

            <div class="flex items-center justify-around">
                <sui-icon name="google" class="link" @click="loginWith(loginWithGoogle)" size="big" circular />
                <sui-icon name="facebook f" class="link" @click="loginWith(loginWithFacebook)" size="big" circular />
                <sui-icon name="github" class="link" @click="loginWith(loginWithGithub)" size="big" circular />
                <sui-icon name="microsoft" class="link" @click="loginWith(loginWithMicrosoft)" size="big" circular />
                <!-- <sui-button type="button" @click="loginWith(loginWithGoogle)" >Google</sui-button> -->
                <!-- <sui-button type="button" positive @click="loginWith(loginWithFacebook)" >Facebook</sui-button> -->
                <!-- <sui-button type="button" @click="loginWith(loginWithGithub)" >GitHub</sui-button> -->
                <!-- <sui-button type="button" @click="loginWith(loginWithMicrosoft)" >Microsoft</sui-button> -->
            </div>

            <sui-divider class="mt-8" horizontal>or use your email</sui-divider>

            <sui-form-field>
                <label>Email</label>
                <input type="email" placeholder="Email" v-model="email" >
            </sui-form-field>
            <sui-form-field>
                <label>Password</label>
                <input type="password" placeholder="Password" v-model="password" >
            </sui-form-field>
            <sui-form-field>
                <sui-checkbox label="I agree to the Terms and Conditions" />
            </sui-form-field>
            <sui-button type="submit" @click.prevent="loginWith(loginUser,{ login: email, password: password })" >Sign in</sui-button>
            <span class="text-red-500">{{ error }}</span>
        </sui-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            email: null,
            password: null,
            error: null
        }
    },
    methods:{
        loginWith(func, args){
            func(args).then(()=>{
                this.$router.push(this.localePath('index'))
            })
            .catch((error)=>{
                console.log('Error', error)
                this.error = error.message
            })
        },
        ...mapActions({
            loginWithGoogle: 'user/loginWithGoogle',
            loginWithFacebook: 'user/loginWithFacebook',
            loginWithGithub: 'user/loginWithGithub',
            loginWithMicrosoft: 'user/loginWithMicrosoft',
            loginUser: 'user/loginUser',
            createUser:'user/createUser',
            logoutUser:'user/logoutUser',
            showToast:'notifications/showToast',
        }),
    }
}
</script>

<style>

</style>