<template>
    <div class="vtx-sidebar bg-gray-900">
        <div :style="acticeItemIndex >= 0 ? `top: ${54 * acticeItemIndex}px` : 'display: none'" class="arrow"></div>
        <n-link v-for="(item, index) in items" :key="index" tag="div" :to="localePath(item.route)" class="sidebar-item" :class="$route.fullPath == localePath(item.route) ? 'active' : ''">
            <sui-icon size="large" :name="item.icon"/>
            <span class="hidden md:block">{{ item.title }}</span>
        </n-link>
    </div>
</template>

<script>
export default {
    props:{
        items:{
            type: Array,
            default: () => []
        }
    },
    computed:{
        acticeItemIndex(){
            return this.items.findIndex(item => this.localePath(item.route) == this.$nuxt.$nuxt.$route.fullPath)
        }
    }
}
</script>

<style lang="less" scoped>
.vtx-sidebar{
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;

    .arrow{
        position: absolute;
        border-right: 17px solid white;
        border-top: 17px solid transparent;
        border-bottom: 17px solid transparent;
        margin-top: 10px;
        margin-bottom: 10px;
        right: 0;
        pointer-events: none;
        transition: .2s;
    }

    .sidebar-item{
        width: 100%;
        height: 54px;
        display: flex;
        align-items: center;
        color: white;
        text-transform: uppercase;
        font-weight: 400;
        cursor: pointer;

        &:hover{

        }

        &.active{
            color: @primary-green;

            &:active{
                color: @primary-green-dark;
            }
        }
    }

    i{
        margin-left: 28px;
        margin-right: 15px;
    }
}
</style>