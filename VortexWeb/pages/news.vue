<template>
  <div>
      <sui-button>Show Modal</sui-button>
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
        
    },
    methods:{
    }
}
</script>

<style lang="less" scoped>
#index-container{
  color: @text-color;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
  color: inherit;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
  color: inherit;
}

.links {
  padding-top: 15px;
}

</style>

<style lang="less" scoped>

#index-container.dark{
  color: @text-color-dark;
}
</style>