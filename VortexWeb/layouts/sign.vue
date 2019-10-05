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
import { mapState } from 'vuex'
export default {
  computed: {
    theme: state => state.themes.currentTheme
  },
}
</script>


<style lang="less" scoped>

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
