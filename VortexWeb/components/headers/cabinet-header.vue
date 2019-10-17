<template>
    <div class="ui inverted center aligned segment m-0 rounded-none bg-gray-900">
        <sui-menu secondary inverted class="mb-0" >
            <sui-menu-item>
                <n-link class="flex items-center header-nav-logo" :to="localePath('index')">
                    <span class="header-logo mr-2"></span>
                    <span class="text-3xl">Vortex</span>
                </n-link>
                <sui-dropdown :text="$i18n.locale.toUpperCase()" class="ml-5 py-3 inverted" style="padding-top: 14px !important;">
                    <sui-dropdown-menu>
                        <n-link tag="sui-dropdown-item" v-for="locale in availableLocales" :key="locale.code" class="text-dark" :to="switchLocalePath(locale.code)">
                            <sui-flag :name="locale.flag" />{{ locale.code.toUpperCase() }}
                        </n-link>
                    </sui-dropdown-menu>
                </sui-dropdown>
            </sui-menu-item>
            <sui-menu-item class="hidden md:flex" position="right">
                <sui-dropdown :text="currentUser.email" class="py-3" >
                    <sui-dropdown-menu class="left">
                        <sui-dropdown-item><sui-icon name="bell"/>Notificatons</sui-dropdown-item>
                        <sui-dropdown-item><sui-icon name="cog"/>Settings</sui-dropdown-item>
                        <sui-dropdown-divider/>
                        <sui-dropdown-item @click="logout()"><sui-icon name="sign-out"/>Exit</sui-dropdown-item>
                    </sui-dropdown-menu>
                </sui-dropdown>

            </sui-menu-item>
        </sui-menu>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState({
            currentUser: state => state.user.currentUser
        }),
        availableLocales () { return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale) }
    },
    methods:{
        logout(){
            this.$nuxt.$router.push(
                this.localePath('index'),
                (arg) => {
                    this.logoutUser()
                }
            )
        },
        ...mapActions({
            logoutUser:'user/logoutUser',
        }),
    }
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