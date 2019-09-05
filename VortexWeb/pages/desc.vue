<template>
    <div>
        <span>Desc</span>
    </div>
</template>

<script>
export default {
    transition: 'slide',
    layout: 'landing',
    data(){
        return{
          open: false
        }
    },
    components: {
    },
    computed: {
        theme () { return this.$store.state.themes.currentTheme }
    },
    methods:{
    }
}
</script>

<style>

</style>