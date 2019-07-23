<template>
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
            <router-link class="uk-logo mx-4" to="">Vortex</router-link>
        </div>
        <div class="uk-navbar-right">
            <router-link class="mx-4" to="/login">Login</router-link>
        </div>
    </nav>
</template>

<style lang="less" scoped>

@import '../../assets/less/colors.less';
@import '../../assets/less/variables.less';
@import '~uikit/src/less/components/inverse.less';
@import '~uikit/src/less/components/variables.less';
@import '~uikit/src/less/components/utility.less';
@import '~uikit/src/less/components/navbar.less';

nav{
    position: fixed;
    height: @landing-header-height;
    width: 100%;
    background-color: @primary-green !important;
    display: flex;
    align-items: center;

    a {
        color: @primary-text-color !important;
    }
    
}

</style>
