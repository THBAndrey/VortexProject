<template>
  <div>
    <landing-header/>
    <main>
        <nuxt/>
    </main>
    <landing-footer/>
  </div>
</template>

<script>
import LandingHeader from '../components/headers/landing-header'
import LandingFooter from '../components/footers/landing-footer'
export default {
    components:{
        LandingHeader,
        LandingFooter
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/variables.less';
main{
    padding-top: @landing-header-height;
}
</style>
