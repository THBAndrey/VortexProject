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
        <div class="h-full form-container bg-white">
            <div class="action-form w-full">
                <n-link tag="div" class="flex cursor-pointer items-center header-nav-logo" :to="localePath('index')">
                    <span class="header-logo mr-2"></span>
                    <span class="text-4xl font-black">Vortex</span>
                </n-link>
                <div class="mb-8">
                    <span class="text-3xl font-medium mr-5">Login</span>
                    <nuxt-link :to="localePath('signup')" class="text-lg text-gray-600 mr-5">SignUp</nuxt-link>
                </div>
                <sui-form :state="state">

                    <div class="flex items-center justify-around">
                        <sui-icon name="google" class="link" @click="loginWith(loginWithGoogle)" size="big" circular />
                        <sui-icon name="facebook f" class="link" @click="loginWith(loginWithFacebook)" size="big" circular />
                        <sui-icon name="github" class="link" @click="loginWith(loginWithGithub)" size="big" circular />
                        <sui-icon name="microsoft" class="link" @click="loginWith(loginWithMicrosoft)" size="big" circular />
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

                    <div class="ui error message">
                        <div class="header">Ошибка</div>
                        <p>{{ error }}</p>
                    </div>

                    <sui-button v-show="state != 'success'" type="submit" @click.prevent="loginWith(loginUser,{ login: email, password: password })" >Log in</sui-button>

                    <div class="ui success message">
                        <div class="header">Успешно</div>
                        <p>Вы будете перенаправлены в ваш кабинет</p>
                    </div>
                </sui-form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Login',
    transition: 'rightauth',
    layout: 'sign',
    components:{
    },
    data() {
        return {
            email: null,
            password: null,
            error: null,
            state: null,
        }
    },
    methods: {
        loginWith(func, args){
            this.state = 'loading'

            func(args).then(()=>{
                this.state = 'success'
                this.$router.push(this.localePath('index'))
            })
            .catch((error)=>{
                this.error = error.message
                this.state = 'error'
            })
        },
        ...mapActions({
            loginWithGoogle: 'user/loginWithGoogle',
            loginWithFacebook: 'user/loginWithFacebook',
            loginWithGithub: 'user/loginWithGithub',
            loginWithMicrosoft: 'user/loginWithMicrosoft',
            loginUser: 'user/loginUser',
            showToast:'notifications/showToast',
        }),
    },
    mounted() {
        if (window.PasswordCredential || window.FederatedCredential) {
            navigator.credentials.get({
                password: true,
            }).then((credential) => {
                if(credential){
                    switch (credential.type) {
                        case 'password':
                            this.loginWith(this.loginUser,{ login: credential.id, password: credential.password })
                            break;
                    }
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>

@form-container-width: 550px;
@label-container-width: 400px;
@transition-time: .7s;
@transition: transform @transition-time ease-in-out;

.form-container{
    width: @form-container-width;
    position: absolute;
    transition: @transition;
    right: 0;
    overflow-x: hidden;
}

.label-container{
    width: calc(100vw - @form-container-width);
    position: absolute;
    transition: @transition;
    left: 0;
    & > div{
        width: @label-container-width;
    }
}

.header-logo{
    mask: url(~static/vortex.svg);
    display: inline-block;
    width: 40px;
    height: 40px;
    mask-size: contain;
    transition: 1s;
    background: #000 !important;
}

.header-nav-logo{
    margin-bottom: 8rem;
}

.header-nav-logo:hover > .header-logo{
    transform: rotate(360deg);
}

.action-form{
    padding: 8rem;
}

@media (max-width: 1024px) {
    .action-form{
        padding:  4rem;
    }

    .form-container{
        width: 400px;
    }

    .label-container{
        width: calc(100vw - 400px);
    }
}

@media (max-width: 850px) {

    .form-container{
        width: 100%;
    }

    .action-form{
        padding: 2rem;
    }

    .label-container{
        display: none !important;
    }

}

</style>
