<template>
    <sui-modal v-model="open" size="mini"  :animationDuration="animDuration" @clickAwayModal="negativeResult">
        <sui-modal-header>Verify 2FA</sui-modal-header>
        <sui-modal-content>
            <sui-form>
                <sui-image src="../QR-code.png" class="w-full"/>
                <sui-divider class="mt-8" horizontal>or use code</sui-divider>
                <sui-form-field>
                    <label>2FA Code</label>
                    <input placeholder="Enter 2FA Code">
                </sui-form-field>
            </sui-form>
        </sui-modal-content>
        <sui-modal-actions>
            <sui-button positive @click="cancelResult">
                Cancel
            </sui-button>
            <sui-button positive @click="okResult">
                OK
            </sui-button>
        </sui-modal-actions>
    </sui-modal>
</template>

<script>

export default {
    props: {
        positiveResult: {
            type: Function,
            reqired: true
        },
        negativeResult: {
            type: Function,
            reqired: true
        },
        animDuration: {
            type: Number,
            default: 500
        }
    },
    data(){
        return{
            open: false
        }
    },
    methods:{
        okResult(){
            this.open = false
            this.positiveResult()
        },
        cancelResult(){
            console.log(this)
            this.open = false
            this.negativeResult()
        }
    },
    mounted(){
        this.open = true
    }
}
</script>

<style>

</style>