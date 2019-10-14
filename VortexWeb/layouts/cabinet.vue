<template>
<div>
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
                { icon: 'cog', title: 'Settings', route: 'cabinet-settings' },
            ]"/>
        </div>
        <main class="p-5">
            <nuxt/>
        </main>
    </div>
</div>
</template>

<script>
import CabinetHeader from '~/components/headers/cabinet-header'
import CabinetSidebar from '~/components/sidebars/cabinet-sidebar'
import { mapState } from 'vuex'
export default {
    components:{
        CabinetHeader,
        CabinetSidebar
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
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    display: flex;
    flex-wrap: wrap;

    header{
        width: 100%;
    }

    .sidebar{
        height: calc( 100% - 90px );
        width: 230px;
    }

    main{
        flex-grow: 1;
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



</style>