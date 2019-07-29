<template>
    <footer :class="theme">

    </footer>
</template>

<script>
export default {
    computed: {
      theme () { return this.$store.state.themes.currentTheme }
    },
}
</script>

<style lang="less" scoped>
@import '../../assets/less/colors.less';

footer{
    height: 300px;
    width: 100%;
    background-color: @secondary-green !important;
}

</style>


<style lang="less" scoped>

@import '../../assets/less/dark-colors.less';

footer.dark{
    background-color: @secondary-green-dark !important;
}

</style>
