<template>
    <div class="ui inverted center aligned segment m-0 rounded-none bg-gray-900">


        <sui-menu secondary inverted class="mb-0" >
            <sui-menu-item>
                <n-link class="flex items-center header-nav-logo" :to="localePath('index')">
                    <span class="header-logo mr-2"></span>
                    <span class="text-3xl">Vortex</span>
                </n-link>
            </sui-menu-item>
            <sui-menu-item class="hidden md:flex" :active="$nuxt.$route.fullPath === localePath('index')"><n-link :to="localePath('index')">Main</n-link></sui-menu-item>
            <sui-menu-item class="hidden md:flex" :active="$nuxt.$route.fullPath === localePath('news')"> <n-link :to="localePath('news')">News</n-link> </sui-menu-item>
            <sui-menu-item class="hidden md:flex" :active="$nuxt.$route.fullPath === localePath('desc')"> <n-link :to="localePath('desc')">API</n-link> </sui-menu-item>
            <sui-menu-item class="hidden md:flex" :active="$nuxt.$route.fullPath === localePath('about')"> <n-link :to="localePath('about')">About</n-link> </sui-menu-item>
            <sui-menu-item position="right">
                <sui-button inverted><i class="fa fa-bell-o" aria-hidden="true"></i></sui-button>
                <sui-dropdown :text="$t('lang')" class="ml-2 inverted" button secondary>
                    <sui-dropdown-menu>
                        <n-link tag="sui-dropdown-item" v-for="locale in availableLocales" :key="locale.code" class="text-dark" :to="switchLocalePath(locale.code)">
                            <sui-flag :name="locale.flag" />{{ locale.name }}
                        </n-link>
                    </sui-dropdown-menu>
                </sui-dropdown>
                <sui-button @click="$nuxt.$router.push(currentUser ? localePath('cabinet-profile') : localePath('login'))" class="hidden md:flex ml-2" inverted>{{ currentUser ? currentUser.email : $t('login') }}</sui-button>
            </sui-menu-item>
        </sui-menu>

        <div class="container">
            <slot/>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            currentUser: state => state.user.currentUser
        }),
        availableLocales () { return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale) }
    },
}
</script>


<style lang="less" scoped>

.header-logo{
    mask: url(~static/vortex.svg);
    display: inline-block;
    width: 40px;
    height: 40px;
    mask-size: contain;
    transition: 1s;
    background: @parts-text-color !important;
}

.header-nav-logo:hover > .header-logo{
    transform: rotate(360deg);
}

</style>
