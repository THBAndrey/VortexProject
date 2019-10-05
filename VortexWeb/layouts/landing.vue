<template>
  <div>
    <nav-menu>
      <div slot="content">
        <mast-head></mast-head>
        <main :class="theme">
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
    </nav-menu>
  </div>
</template>

<script>
import LandingHeader from '~/components/headers/landing-header'
import LandingFooter from '~/components/footers/landing-footer'
import MastHead from '~/components/main/masthead'
import NavMenu from '~/components/common/nav-menu'

import { mapMutations, mapActions, mapState } from 'vuex'
export default {
    components:{
        LandingHeader,
        LandingFooter,
        MastHead,
        NavMenu
    },
    computed: {
      ...mapState({
        theme: state => state.themes.currentTheme
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
main.dark{
    background-color: @body-background-dark;
    color: @parts-text-color-dark;
}
</style>
