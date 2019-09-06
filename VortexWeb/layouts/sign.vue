<template>
  <div>
    <client-only>
      <vue-particles class="particles" :clickEffect="false" color="#fff" />
    </client-only>
    <main>
      <nuxt/>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    theme () { return this.$store.state.themes.currentTheme }
  },
}
</script>


<style lang="less" scoped>

@import '../assets/less/colors.less';

.particles{
  position: absolute;
  width: 100%;
  height: 100%;
}

main{
    background-color: @primary-green;
    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
