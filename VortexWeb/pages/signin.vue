<template>
    <div class="h-full w-full">
        <div :class="toggled ? 'toggle' : ''" class="h-full label-container flex items-center justify-center">
            <div style="width:400px;">
                <span class="text-6xl text-white font-black leading-tight">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                <div class="mt-8">
                    <span class="text-lg text-white leading-relaxed">Corrupti porro odit voluptatibus, unde sint a consequuntur tempora tempore quisquam dolor architecto! Dolorem, enim.</span>
                </div>
            </div>
            
            <!-- <sui-button @click="toggled = !toggled">Toggle</sui-button> -->
        </div>
        <div :class="toggled ? 'toggle' : ''" class="h-full form-container bg-white">
            <action-form/>
        </div>
    </div>
</template>

<script>
import ActionForm from '@/components/sign/action-form'

export default {
    layout: 'sign',
    components:{
        ActionForm
    },
    data() {
        return {
            toggled: true
        }
    }
}
</script>

<style lang="less" scoped>

@form-container-width: 550px;
@transition-time: .7s;
@transition: transform @transition-time ease-in-out;

.form-container{
    width: @form-container-width;
    position: absolute;
    transition: @transition;

    &.toggle{
        transform: translateX(calc(100vw - @form-container-width));
    }
}

.label-container{
    width: calc(100vw - @form-container-width);
    transform: translateX(@form-container-width);
    position: absolute;
    transition: @transition;

    &.toggle{
        transform: translateX(0);
    }
}

</style>
