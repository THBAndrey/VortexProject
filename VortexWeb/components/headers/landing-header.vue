<template>
    <nav :class="theme" class="" >
        <div id="header-container" class="container">
            <div class="">
                <n-link class="d-flex align-items-center" :to="localePath('index')">
                    <span class="header-logo mr-2"></span>
                    Vortex
                </n-link>
            </div>
            <div class="">
                <sui-dropdown :text="$t('lang')" class="icon" floating labeled>
                    <sui-dropdown-menu>
                        <nuxt-link tag="sui-dropdown-item" v-for="locale in availableLocales" :key="locale.code" class="text-dark" :to="switchLocalePath(locale.code)">
                            <sui-flag :name="locale.flag" />{{ locale.name }}
                        </nuxt-link>
                    </sui-dropdown-menu>
                </sui-dropdown>
                <n-link class="" :to="localePath('login')">{{ $t('login') }}</n-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    mounted(){
    },
    data(){
        return{
        }
    },
    computed: {
        theme () { return this.$store.state.themes.currentTheme },
        availableLocales () { return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale) }
    },
}
</script>


<style lang="less" scoped>

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

    a, .dropdown {
        color: @parts-text-color !important;
    }
    .header-logo{
        mask: url(~static/vortex.svg);
        display: inline-block;
        width: 40px;
        height: 40px;
        mask-size: contain;

        background: @parts-text-color !important;
    }
}

.uk-navbar-right{
    > *{
        margin-left: 20px;
    }
}

</style>

<style lang="less" scoped>

nav.dark{
    background-color: @primary-green-dark !important;
    a, .dropdown {
        color: @parts-text-color-dark !important;
    }
    .header-logo{
        background: @parts-text-color-dark !important;
    }
}

</style>
