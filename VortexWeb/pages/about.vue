<template>
    <div>
        <span>About</span>
    </div>
</template>

<script>
import { mapState } from 'vuex'
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
        ...mapState({
            theme: state => state.themes.currentTheme
        })
    },
    methods:{
    }
}
</script>

<style>

</style>