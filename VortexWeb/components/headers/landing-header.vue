<template>
    <nav :class="theme" class="uk-navbar-container" uk-navbar>
        <div id="header-container" class="container">
            <div class="uk-navbar-left">
                <router-link class="uk-logo" to="">Vortex</router-link>
            </div>
            <div class="uk-navbar-right">
                <router-link class="" to="/signin">Sign in</router-link>
            </div>
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

    #header-container{
        height: 100%;
        display: flex;
        align-items: center;
    }

    a {
        color: @parts-text-color !important;
    }
}

</style>

<style lang="less" scoped>

@import '../../assets/less/dark-colors.less';

nav.dark{
    background-color: @primary-green-dark !important;
    a {
        color: @parts-text-color-dark !important;
    }
}

</style>
