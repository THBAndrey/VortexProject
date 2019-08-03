<template>
  <div>
    <mast-head></mast-head>
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

      <sui-modal v-model="open" :animationDuration="200" size="tiny">
        <sui-modal-header>This is modal</sui-modal-header>
        <sui-modal-content>
          <sui-modal-description>
            <sui-header>Default Profile Image</sui-header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </sui-modal-description>
        </sui-modal-content>
        <sui-modal-actions>
          <sui-button positive @click="open = !open">OK</sui-button>
        </sui-modal-actions>
      </sui-modal>
    </section>
  </div>
</template>

<script>
import MastHead from '~/components/main/masthead'

export default {
  layout: 'landing',
  data(){
    return{
      open: false
    }
  },
  components: {
    MastHead
  },
  computed: {
    theme () { return this.$store.state.themes.currentTheme }
  },
  methods:{
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