<template>
    <div class="h-full w-full">
        <div class="h-full label-container flex items-center justify-center">
            <div>
                <span class="text-6xl text-white font-black leading-tight">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                <div class="mt-8">
                    <span class="text-lg text-white leading-relaxed">Corrupti porro odit voluptatibus, unde sint a consequuntur tempora tempore quisquam dolor architecto! Dolorem, enim.</span>
                </div>
            </div>
        </div>
        <div class="h-full form-container">
            <div class="action-form w-full">
                <n-link tag="div" class="flex cursor-pointer items-center header-nav-logo" :to="localePath('index')">
                    <span class="header-logo mr-2"></span>
                    <span class="text-4xl font-black">Vortex</span>
                </n-link>
                <div class="mb-8">
                    <span class="text-3xl font-medium mr-5">SignUp</span>
                    <nuxt-link tag="span" :to="localePath('login')" class="cursor-pointer text-lg text-gray-600 mr-5">Login</nuxt-link>
                </div>
                <sui-form :state="state">

                    <div class="flex items-center justify-around">
                        <sui-icon name="google" class="link" @click="registerWith(loginWithGoogle)" size="big" circular />
                        <sui-icon name="facebook f" class="link" @click="registerWith(loginWithFacebook)" size="big" circular />
                        <sui-icon name="github" class="link" @click="registerWith(loginWithGithub)" size="big" circular />
                        <sui-icon name="microsoft" class="link" @click="registerWith(loginWithMicrosoft)" size="big" circular />
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
                        <label>Name</label>
                        <input placeholder="Name" v-model="name" >
                    </sui-form-field>
                    <sui-form-field>
                        <sui-checkbox v-model="agree" label="I agree to the Terms and Conditions" />
                    </sui-form-field>

                    <div class="ui error message">
                        <div class="header">Ошибка</div>
                        <p>{{ error }}</p>
                    </div>

                    <sui-button :disabled="!agree" v-show="state != 'success'" type="submit" @click.prevent="registerWith(createUser,{ login: email, password: password, name: name })" >Sign up</sui-button>

                    <div class="ui success message">
                        <div class="header">Успешно</div>
                        <p>Вы будете переноправлены в ваш кабинет</p>
                    </div>

                </sui-form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'SignUp',
    transition: 'leftauth',
    layout: 'sign',
    components:{
    },
    data() {
        return {
            email: null,
            password: null,
            error: null,
            name: null,
            state: null,
            agree: false,
        }
    },
    methods:{
        ...mapActions({
            createUser:'user/createUser',
            loginWithGoogle: 'user/loginWithGoogle',
            loginWithFacebook: 'user/loginWithFacebook',
            loginWithGithub: 'user/loginWithGithub',
            loginWithMicrosoft: 'user/loginWithMicrosoft',
        }),
        registerWith(func, args){
            this.state = 'loading'
            func(args).then((result)=>{
                this.state = 'success'

                let cred = null;
                if(args){
                    cred = new PasswordCredential({
                        id: args.login,
                        name: args.name,
                        password: args.password,
                        // iconURL: iconUrl
                    });
                }
                // else{
                //     cred = new FederatedCredential({
                //         id: result.user.email,
                //         name: result.user.displayName ? result.user.displayName : undefined,
                //         provider: 'https://' + result.credential.providerId,
                //         iconURL: result.user.photoURL ? result.user.photoURL : undefined,
                //     });
                // }

                navigator.credentials.store(cred)
                .then(function(arg) {
                    // Do something else.
                });


                this.$nuxt.$router.push(this.localePath('index'))
            })
            .catch((error)=>{
                this.error = error.message
                this.state = 'error'
            })
        },
    },
    mounted(){

    }
}
</script>

<style lang="less" scoped>
    .form-container{
        left: 0;
    }

    .label-container{
        right: 0;
    }
</style>
