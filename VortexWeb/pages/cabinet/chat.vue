<template>
    <div class="h-full flex items-stretch">
        <div class="flex-1 h-full flex flex-col items-stretch pr-3">
            <div class="flex-1 overflow-auto flex flex-col pr-2 mb-3">
                <div v-ripple.dblclick class="message-item bg-gray-200">ку</div>
                <div v-ripple.dblclick class="message-item bg-gray-200">ку</div>
                <div v-ripple.dblclick class="message-item mine bg-gray-200">ку</div>
                <div v-ripple.dblclick class="message-item bg-gray-200">ку</div>
                <div v-ripple.dblclick class="message-item bg-gray-200">ку</div>
                <div v-ripple.dblclick class="message-item bg-gray-200">ку</div>
                <div v-ripple.dblclick class="message-item bg-gray-200">ку</div>
                <div v-ripple.dblclick class="message-item mine bg-gray-200">ку</div>
                <div v-ripple.dblclick class="message-item bg-gray-200">ку</div>
                <div v-ripple.dblclick class="message-item bg-gray-200">ку</div>
            </div>
            <div class="bg-gray-200" style="height: 100px;">

            </div>
        </div>
        <div class="bg-gray-300" style="width: 300px;">

        </div>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    layout: 'cabinet',

}
</script>

<style lang="less" scoped>
.message-item{
    padding: 20px;
    margin-bottom: 20px;
    align-self: flex-start;
    &.mine{
        align-self: flex-end;
    }
}
</style>