<template>
    <nav :class=" theme == 'dark' ? 'dark-nav' : '' " class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
            <router-link class="uk-logo mx-4" to="">Vortex</router-link>
        </div>
        <div class="uk-navbar-right">
            <router-link class="mx-4" to="/signin">Sign in</router-link>
        </div>
    </nav>
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
@import '../../assets/less/variables.less';

nav{
    position: fixed;
    height: @landing-header-height;
    width: 100%;
    background-color: @primary-green !important;
    display: flex;
    align-items: center;

    a {
        color: @parts-text-color !important;
    }
}

</style>

<style lang="less" scoped>

@import '../../assets/less/dark-colors.less';

.dark-nav{
    background-color: @primary-green-dark !important;
    a {
        color: @parts-text-color-dark !important;
    }
}

</style>
