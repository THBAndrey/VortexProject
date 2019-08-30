<template>
  <div>
    <!-- <landing-header/> -->
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
</template>

<script>
import LandingHeader from '../components/headers/landing-header'
import LandingFooter from '../components/footers/landing-footer'
import MastHead from '~/components/main/masthead'
import { mapMutations, mapActions } from 'vuex'
export default {
    components:{
        LandingHeader,
        LandingFooter,
        MastHead
    },
    computed: {
      theme () { return this.$store.state.themes.currentTheme }
    },
    data(){
      return{
      }
    },
    methods:{
      ...mapActions({
        changeTheme: 'themes/changeTheme'
      })
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/variables.less';
@import '../assets/less/colors.less';

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
@import '../assets/less/dark-colors.less';

main.dark{
    background-color: @body-background-dark;
    color: @parts-text-color-dark;
}
</style>
