<template>
  <div :class="theme">
    <nav-menu>
      <div slot="content">
        <mast-head :links="[
          { title: 'Main', route: 'index' },
          { title: 'News', route: 'news' },
          { title: 'API', route: 'desc' },
          { title: 'About', route: 'about' },
        ]"/>
        <main>
            <nuxt/>
        </main>
        <landing-footer/>
        <div class="theme-switcher" >
          <div is="sui-button-group">
            <sui-button @click="changeTheme(0)">Light</sui-button>
            <sui-button-or />
            <sui-button @click="changeTheme(1)" secondary>Dark</sui-button>
          </div>
        </div>
      </div>
      <template slot="menu-collapse">
        <n-link tag="div" :to="currentUser ? localePath('cabinet-profile') : localePath('login')">
          <span>{{ currentUser ? currentUser.email : $t('login') }}</span>
        </n-link>
        <n-link tag="div" :to="currentUser ? localePath('cabinet-profile') : localePath('login')">
          <span>Settings</span>
        </n-link>
        <n-link tag="div" :to="currentUser ? localePath('cabinet-profile') : localePath('login')">
          <span>Logout</span>
        </n-link>
      </template>
      <template slot="menu">
        <n-link tag="div" :to="localePath('index')" class="menu-item">
          <span class="vortex-icon" aria-hidden="true"></span>
        </n-link>
        <n-link tag="div" :to="localePath('news')" class="menu-item">
          <i class="fa fa-rss" aria-hidden="true"></i>
        </n-link>
        <n-link tag="div" :to="localePath('desc')" class="menu-item">
          <i class="fa fa-book" aria-hidden="true"></i>
        </n-link>
        <n-link tag="div" :to="localePath('about')" class="menu-item">
          <i class="fa fa-info" aria-hidden="true"></i>
        </n-link>
      </template>
    </nav-menu>
  </div>
</template>

<script>
import LandingFooter from '~/components/footers/landing-footer'
import MastHead from '~/components/main/masthead'
import NavMenu from '~/components/common/nav-menu'

import { mapMutations, mapActions, mapState } from 'vuex'
export default {
    components:{
        LandingFooter,
        MastHead,
        NavMenu
    },
    computed: {
      ...mapState({
        theme: state => state.themes.currentTheme,
        currentUser: state => state.user.currentUser
      })
    },
    data(){
      return{
      }
    },
    methods:{
      ...mapActions({
        changeTheme: 'themes/changeTheme'
      }),
    }
}
</script>

<style lang="less" scoped>

main{
    // padding-top: @landing-header-height;
    min-height: 100vh;
    background-color: @body-background;
}

.theme-switcher{
  position: fixed;
  bottom: 10px;
  right: 27px;
}
</style>

<style lang="less" scoped>
.dark{
  main{
      background-color: @body-background-dark;
      color: @parts-text-color-dark;
  }
}

</style>
