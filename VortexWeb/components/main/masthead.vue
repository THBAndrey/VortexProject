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
            <div ref="arrow" :style="arrowLeftOffset > 0 ? `left: ${arrowLeftOffset}px` : 'visibility: hidden;'" class="arrow hidden md:block"></div>
            <sui-menu-item v-for="(item, index) in links" :ref="`link${index}`" :key="index" class="hidden md:flex"><n-link :to="localePath(item.route)">{{ item.title }}</n-link></sui-menu-item>
            <!--  :active="$nuxt.$route.fullPath === localePath(item.route)" -->
            <sui-menu-item position="right">
                <sui-button inverted><i class="fa fa-bell-o" aria-hidden="true"></i></sui-button>
                <sui-button @click="$nuxt.$router.push(currentUser ? localePath('cabinet-profile') : localePath('login'))" class="hidden md:flex ml-2" inverted>{{ currentUser ? /*currentUser.email*/ 'Cabinet' : $t('login') }}</sui-button>
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
    props: {
        links: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return{
            arrowLeftOffset: this.arrowLeftOffsetCalc()
        }
    },
    methods: {
        arrowLeftOffsetCalc(){
            if(this.$refs['link'+this.acticeItemIndex]){
                let activeLink = this.$refs['link'+this.acticeItemIndex][0].$el
                let arrow = this.$refs['arrow']
                return activeLink.offsetLeft + (activeLink.offsetWidth / 2) - (arrow.offsetWidth / 2)
            }
            return 0
        }
    },
    mounted(){
        this.arrowLeftOffset = this.arrowLeftOffsetCalc()
    },
    watch: {
        '$nuxt.$route'(to, from){
            this.arrowLeftOffset = this.arrowLeftOffsetCalc()
        }
    },
    computed: {
        ...mapState({
            currentUser: state => state.user.currentUser
        }),
        availableLocales(){ 
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale) 
        },
        acticeItemIndex(){
            return this.links.findIndex(item => this.localePath(item.route) == this.$nuxt.$route.fullPath)
        },
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

.arrow{
    position: absolute;
    border-bottom: 17px solid @body-background;
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
    bottom: 0;
    pointer-events: none;
    transition: .2s;
}

.dark{
    .arrow{
        border-bottom: 17px solid @body-background-dark;
    }
}

</style>
