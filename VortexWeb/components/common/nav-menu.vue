<template>
    <div>
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="menu-collapse md:invisible" :class="userMenuOpen ? '' : 'height-hidden'">
            <n-link tag="div" :to="currentUser ? localePath('cabinet-profile') : localePath('login')">
                <span>{{ currentUser ? currentUser.email : $t('login') }}</span>
            </n-link>
            <n-link tag="div" :to="currentUser ? localePath('cabinet-profile') : localePath('login')">
                <span>Settings</span>
            </n-link>
            <n-link tag="div" :to="currentUser ? localePath('cabinet-profile') : localePath('login')">
                <span>Logout</span>
            </n-link>
        </div>
        <div class="menu-container md:invisible">
            <n-link tag="div" :to="localePath('index')" class="menu-item">
                <span class="vortex-icon" aria-hidden="true"></span>
            </n-link>
            <n-link tag="div" :to="localePath('news')" class="menu-item">
                <i class="fa fa-rss" aria-hidden="true"></i>
            </n-link>
            <n-link tag="div" :to="localePath('desc')" class="menu-item">
                <i class="fa fa-book" aria-hidden="true"></i>
            </n-link>
            <n-link tag="div" :to="localePath('about')" class="menu-item">
                <i class="fa fa-info" aria-hidden="true"></i>
            </n-link>
            <div class="menu-item" @click="userMenuOpen = !userMenuOpen">
                <i class="fa fa-chevron-up trasition-rotate" :class="userMenuOpen ? 'upturned': ''" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data(){
        return{
            userMenuOpen: false,
        }
    },
    computed: {
        ...mapState({
            currentUser: state => state.user.currentUser
        }),
    },
}
</script>

<style lang="less" scoped>
@import '../../assets/less/colors';
@import '../../assets/less/dark-colors';

@menu-height: 50px;

.menu-container{
    position: fixed;
    width: 100%;
    bottom: 0;
    height: @menu-height;
    background: @body-background;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
}

.menu-collapse{
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    bottom: @menu-height;
    background: @body-background;
    color: @text-color;
    max-height: 400px;
    transition: .3s;
    overflow-x: hidden;
    overflow-y: auto;

    &.height-hidden{
        max-height: 0px;
        overflow: hidden;
    }

    div{
        padding-left: 30px;
        padding-right: 30px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

.menu-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: @text-color;
    width: 20%;
    font-size: 18px;

    span{
        font-size: 11px;
        line-height: 12px;
        font-weight: 100;
    }
}

.trasition-rotate{
    transition: transform .3s;
}

.upturned{
    transform: rotate(180deg);
}

.content{
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
}

@media (max-width: 767px) {
    .content{
        padding-bottom: @menu-height;
    }
}

.vortex-icon{
    mask: url(~static/vortex.svg);
    display: inline-block;
    width: 18px;
    height: 18px;
    mask-size: contain;
    background: @text-color;
}

</style>