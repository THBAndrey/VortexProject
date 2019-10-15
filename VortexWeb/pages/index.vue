<template>
  <div>
    <div >
      <section id="index-container" :class="theme" class="container" style="height:100%;">
        <div>
          <h1 class="title">
            Vortex web
          </h1>
          <h2 class="subtitle">
            {{ $t('welcomeDesc') }}
          </h2>
        </div>
        <sui-button @click="logoutUser()">Logout</sui-button>
        <sui-button @click="showToast({ title: 'Title', message: 'Message' })">Show toast</sui-button>

      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "Main",
  // transition: 'slide',
  layout: 'landing',
  data(){
    return{
      
    }
  },
  components: {
  },
  computed: {
    ...mapState({
      user: state => state.user.currentUser,
      theme: state => state.themes.currentTheme
    })
  },
  methods:{
    ...mapActions({
      logoutUser:'user/logoutUser',
      showToast:'notifications/showToast',
    }),
  }
}
</script>

<style lang="less" scoped>

#index-container{
  color: @text-color;
  padding-bottom: 50px;
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

#index-container.dark{
  color: @text-color-dark;
}
</style>