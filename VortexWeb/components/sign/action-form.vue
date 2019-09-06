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
import SignInForm from '@/components/sign/sign-in-form'
import SignUpForm from '@/components/sign/sign-up-form'

export default {
    components:{
        SignInForm,
        SignUpForm
    }
}
</script>

<style lang="less" scoped>

@import '../../assets/less/colors.less';
@import '../../assets/less/variables.less';

.header-logo{
    mask: url(~static/vortex.svg);
    display: inline-block;
    width: 40px;
    height: 40px;
    mask-size: contain;
    transition: 1s;
    background: #000 !important;
}

.header-nav-logo:hover > .header-logo{
    transform: rotate(360deg);
}

</style>