<template>
  <div>
      <input type="text" v-model="text" @input="request">
  </div>
</template>

<script>
export default {
    layout: 'cabinet',
    data(){
        return{
            text: '',
            timer: null
        }
    },
    methods: {
        request(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                console.log('Request', this.text)
            }, 1000)
        }
    }
}
</script>

<style>

</style>