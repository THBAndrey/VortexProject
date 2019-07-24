<template>
  <section id="index-container" :class="theme == 'dark' ? 'dark-theme' : ''" class="container" style="height:100%;">
    <div>
      <h1 class="title">
        Vortex web
      </h1>
      <h2 class="subtitle">
        Remote control of your services
      </h2>
    </div>
  </section>
</template>

<script>

export default {
  layout: 'landing',
  components: {
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

#index-container.dark-theme{
  color: @text-color-dark;
}
</style>