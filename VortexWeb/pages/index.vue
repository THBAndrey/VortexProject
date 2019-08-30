<template>
  <div>
    <div class="bg-gray-900 " style="height: 700px;">
      <section id="index-container" :class="theme" class="container" style="height:100%;">
        <div>
          <h1 class="title">
            Vortex web
          </h1>
          <h2 class="subtitle">
            {{ $t('welcomeDesc') }}
          </h2>
        </div>
        <sui-button @click="open = !open">Show Modal</sui-button>
        <sui-button @click="register()">Create user</sui-button>
        <sui-button @click="login()">Login user</sui-button>
        <sui-button @click="logoutUser()">Logout</sui-button>

        <sui-modal v-model="open" :animationDuration="200" size="tiny">
          <sui-modal-header>Login</sui-modal-header>
          <sui-modal-content>
            <sui-form :state="state">
              <sui-form-field>
                <sui-button type="button" positive @click="loginWithGoogle" >Google</sui-button>
                <sui-button type="button" positive @click="loginWithFacebook" >Facebook</sui-button>
                <sui-button type="button" positive @click="loginWithGithub" >GitHub</sui-button>
                <sui-button type="button" positive @click="loginWithMicrosoft" >Microsoft</sui-button>
              </sui-form-field>
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
            </sui-form>
          </sui-modal-content>
          <sui-modal-actions>
            <sui-button @click="open = !open">Cancel</sui-button>
            <sui-button positive @click="state = 'loading'">Login</sui-button>
          </sui-modal-actions>
        </sui-modal>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  transition: 'slide',
  layout: 'landing',
  data(){
    return{
      open: false,
      email: null,
      password: null,
      loading: false,
      state: null
    }
  },
  components: {
  },
  computed: {
    theme () { return this.$store.state.themes.currentTheme },
    ...mapState({
      user: state => state.user.currentUser
    })
  },
  methods:{
    async register(){
      await this.createUser({login:'lazarevand.20@gmail.com', password:'keeper74'})
    },
    async login(){
      await this.loginUser({login:'lazarevand.20@gmail.com', password:'keeper74'})
    },
    ...mapActions({
      loginWithGoogle: 'user/loginWithGoogle',
      loginWithFacebook: 'user/loginWithFacebook',
      loginWithGithub: 'user/loginWithGithub',
      loginWithMicrosoft: 'user/loginWithMicrosoft',
      loginUser: 'user/loginUser',
      createUser:'user/createUser',
      logoutUser:'user/logoutUser'
    }),
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/colors.less';

#index-container{
  color: @text-color;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  color: inherit;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
  color: inherit;
}

.links {
  padding-top: 15px;
}

</style>

<style lang="less" scoped>
@import '../assets/less/dark-colors.less';

#index-container.dark{
  color: @text-color-dark;
}
</style>