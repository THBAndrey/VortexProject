<template>
    <div class="ui inverted  center aligned segment rounded-0">

      <div class="container">
        <sui-menu secondary inverted >
          <sui-menu-item class="ml-1 pl-0">
                <n-link class="uk-logo d-flex align-items-center" :to="localePath('index')">
                    <span class="header-logo mr-2"></span>
                    Vortex
                </n-link>
            </sui-menu-item>
          <sui-menu-item active><n-link :to="localePath('index')">Main</n-link></sui-menu-item>
          <sui-menu-item> <n-link :to="localePath('index')">News</n-link> </sui-menu-item>
          <sui-menu-item> <n-link :to="localePath('desc')">API</n-link> </sui-menu-item>
          <sui-menu-item> <n-link :to="localePath('about')">About</n-link> </sui-menu-item>
          <sui-menu-item position="right">
            <sui-dropdown :text="$t('lang')" class="inverted mr-1" button secondary>
                <sui-dropdown-menu>
                    <n-link tag="sui-dropdown-item" v-for="locale in availableLocales" :key="locale.code" class="text-dark" :to="switchLocalePath(locale.code)">
                        <sui-flag :name="locale.flag" />{{ locale.name }}
                    </n-link>
                </sui-dropdown-menu>
            </sui-dropdown>
            <n-link class="ml-2" :to="localePath('signin')">
                <sui-button inverted>{{ $t('signin') }}</sui-button>
            </n-link>
            <n-link class="ml-2" :to="localePath('signin')">
                <sui-button inverted >{{ $t('signup') }}</sui-button>
            </n-link>
          </sui-menu-item>
        </sui-menu>
      </div>

      <div class="container">
          <slot/>
      </div>

    </div>
</template>

<script>
export default {
    computed: {
        availableLocales () { return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale) }
    },
}
</script>


<style lang="less" scoped>

@import '../../assets/less/colors.less';
@import '../../assets/less/variables.less';

.header-logo{
        mask: url(~static/vortex.svg);
        display: inline-block;
        width: 40px;
        height: 40px;
        mask-size: contain;

        background: @parts-text-color !important;
}

</style>

