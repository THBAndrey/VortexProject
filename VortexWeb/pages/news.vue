<template>
  <div class="container py-5">
    <div class="flex flex-wrap -mx-2">
      <div class="w-2/3 p-2">
        <div v-tilt="{ perspective: 1000, max: 2, reverse: true, glare: true }" class="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 cursor-pointer news-card"></div>
      </div>
      <div class="w-1/3 p-2">
        <div v-tilt="{ perspective: 1000, max: 2, reverse: true, glare: true }" class="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 cursor-pointer news-card"></div>
      </div>
      <div class="w-1/3 p-2">
        <div v-tilt="{ perspective: 1000, max: 2, reverse: true, glare: true }" class="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 cursor-pointer news-card"></div>
      </div>
      <div class="w-1/3 p-2">
        <div v-tilt="{ perspective: 1000, max: 2, reverse: true, glare: true }" class="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 cursor-pointer news-card"></div>
      </div>
      <div class="w-1/3 p-2">
        <div v-tilt="{ perspective: 1000, max: 2, reverse: true, glare: true }" class="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 cursor-pointer news-card"></div>
      </div>
      <div class="w-full p-2">
        <div v-tilt="{ perspective: 1000, max: 2, reverse: true, glare: true }" class="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 cursor-pointer news-card"></div>
      </div>
    </div>
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

.news-card{
  height: 400px;
}

</style>