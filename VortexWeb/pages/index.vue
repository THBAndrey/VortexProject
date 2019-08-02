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

      <div class="mt-3">
        <sui-button style="background:hsl(188, 78%, 15%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(188, 78%, 22%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(188, 78%, 27%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(188, 78%, 35%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(188, 78%, 41%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(188, 78%, 60%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(188, 78%, 75%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(188, 78%, 87%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(188, 78%, 95%);color:white;height:50px;width:50px;"></sui-button>
      </div>

      <div class="mt-3">
        <sui-button style="background:hsl(180, 69%, 15%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(175, 69%, 22%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(170, 69%, 27%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(165, 69%, 35%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(160, 69%, 45%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(155, 69%, 60%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(150, 69%, 75%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(145, 69%, 87%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(140, 69%, 95%);color:white;height:50px;width:50px;"></sui-button>
      </div>

      <div class="mt-3">
        <sui-button style="background:hsl(145, 50%, 15%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(145, 50%, 22%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(145, 50%, 27%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(145, 50%, 35%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(145, 50%, 50%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(145, 50%, 60%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(145, 50%, 75%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(145, 50%, 87%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(145, 50%, 95%);color:white;height:50px;width:50px;"></sui-button>
      </div>

      <div class="mt-3">
        <sui-button style="background:hsl(210, 10%, 15%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(210, 10%, 20%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(210, 10%, 30%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(210, 10%, 40%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(210, 10%, 50%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(210, 10%, 60%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(210, 10%, 75%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(210, 10%, 87%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(210, 10%, 96%);color:white;height:50px;width:50px;"></sui-button>
      </div>

      <div class="mt-3">
        <sui-button style="background:hsl(43, 69%, 20%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(43, 69%, 30%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(43, 69%, 37%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(43, 69%, 45%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(43, 69%, 53%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(43, 69%, 60%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(43, 69%, 75%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(43, 69%, 87%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(43, 69%, 95%);color:white;height:50px;width:50px;"></sui-button>
      </div>

      <div class="mt-3">
        <sui-button style="background:hsl(0, 69%, 20%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(0, 69%, 30%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(0, 69%, 37%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(0, 69%, 45%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(0, 69%, 53%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(0, 69%, 60%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(0, 69%, 75%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(0, 69%, 87%);color:white;height:50px;width:50px;"></sui-button>
        <sui-button style="background:hsl(0, 69%, 95%);color:white;height:50px;width:50px;"></sui-button>
      </div>


    </section>
  </div>
</template>

<script>
import MastHead from '~/components/main/masthead'

export default {
  layout: 'landing',
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