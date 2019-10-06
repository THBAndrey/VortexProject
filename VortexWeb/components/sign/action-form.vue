<template>
  <div class="action-form w-full h-full p-32">
        <n-link tag="div" class="flex cursor-pointer items-center header-nav-logo mb-32" :to="localePath('index')">
            <span class="header-logo mr-2"></span>
            <span class="text-4xl font-black">Vortex</span>
        </n-link>
        <sign-in-form/>
  </div>
</template>

<script>
import SignUpForm from '@/components/sign/sign-up-form'

export default {
    components:{
        SignUpForm
    }
}
</script>

<style lang="less" scoped>

</style>