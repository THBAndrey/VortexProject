<template>
<nav-menu>
    <div slot="content">
        <div v-if="!currentUser" class="cabinet-stub">
            <div>
                <span>Вы не авторизованы</span>
            </div>
            <nuxt-link :to="localePath('index')">Вы будете перенаправлены на главную страницу</nuxt-link>
        </div>
        <div v-else class="lay">
            <header>
                <cabinet-header></cabinet-header>
            </header>
            <div class="sidebar">
                <cabinet-sidebar :items="[
                    { icon: 'user', title: 'Profile', route: 'cabinet-profile' },
                    { icon: 'cog', title: 'Settings', route: 'cabinet-settings' },
                    { icon: 'podcast', title: 'Streaming', route: 'cabinet-streaming' },
                    { icon: 'th large', title: 'Subscriptons', route: 'cabinet-subscriptions' },
                    { icon: 'comments', title: 'Chat', route: 'cabinet-chat' },
                ]"/>
            </div>
            <main class="p-5">
                <nuxt/>
            </main>
        </div>
    </div>
    <template slot="menu-collapse">
        <n-link tag="div" :to="currentUser ? localePath('cabinet-profile') : localePath('login')">
            <span>{{ currentUser ? currentUser.email : $t('login') }}</span>
        </n-link>
        <n-link tag="div" :to="currentUser ? localePath('cabinet-profile') : localePath('login')">
            <span>Notifications</span>
        </n-link>
        <n-link tag="div" :to="currentUser ? localePath('cabinet-profile') : localePath('login')">
            <span>Settings</span>
        </n-link>
        <n-link tag="div" :to="currentUser ? localePath('cabinet-profile') : localePath('login')">
            <span>Logout</span>
        </n-link>
    </template>
    <template slot="menu">
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
    </template>
</nav-menu>
</template>

<script>
import CabinetHeader from '~/components/headers/cabinet-header'
import CabinetSidebar from '~/components/sidebars/cabinet-sidebar'
import NavMenu from '~/components/common/nav-menu'
import { mapState } from 'vuex'
export default {
    components:{
        CabinetHeader,
        CabinetSidebar,
        NavMenu
    },
    computed: {
        ...mapState({
            currentUser: state => state.user.currentUser
        }),
    },
}
</script>

<style lang="less" scoped>
.lay{
    // height: 100vh;
    width: 100%;
    overflow-x: hidden;
    display: flex;
    flex-wrap: wrap;

    header{
        width: 100%;
    }

    .sidebar{
        height: calc( 100vh - 90px );
        width: 230px;
    }

    main{
        height: calc( 100vh - 90px );
        flex: 1 1 0%;
        overflow-y: auto;
    }

    .cabinet-stub{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}

@media (max-width: 767px) {
    .lay{
        .sidebar{
            display: none;
        }

        main{
            height: calc( 100% - 90px );
            flex-grow: 1;
            overflow-y: auto;
        }
    }
}



</style>