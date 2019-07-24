<template>
  <div>
    <landing-header/>
    <main :class="theme == 'dark' ? 'dark-main' : ''">
        <nuxt/>
    </main>
    <landing-footer/>
    <div class="theme-switcher" >
      <div is="sui-button-group">
        <sui-button @click="setTheme(0)">Light</sui-button>
        <sui-button-or />
        <sui-button @click="setTheme(1)" secondary>Dark</sui-button>
      </div>
    </div>
  </div>
</template>

<script>
import LandingHeader from '../components/headers/landing-header'
import LandingFooter from '../components/footers/landing-footer'
import { mapMutations } from 'vuex'
export default {
    components:{
        LandingHeader,
        LandingFooter
    },
    computed: {
      theme () { return this.$store.state.themes.currentTheme }
    },
    methods:{
      ...mapMutations({
        changeTheme: 'themes/changeTheme'
      }),
      setTheme(index){
        this.changeTheme(index)
      }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/variables.less';
@import '../assets/less/colors.less';

main{
    padding-top: @landing-header-height;
    min-height: 100vh;
    background-color: @body-background;
}

.theme-switcher{
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>

<style lang="less" scoped>
@import '../assets/less/dark-colors.less';

.dark-main{
    background-color: @body-background-dark;
    color: @parts-text-color-dark;
}
</style>
