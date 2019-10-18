<template>
    <div class="h-full flex items-stretch">
        <div class="flex-1 h-full flex flex-col items-stretch pr-3">
            <div ref="messagesArea" class="flex-1 overflow-auto flex flex-col pr-2 mb-3">
                <div v-for="(message, index) in messages" :key="index" v-ripple.dblclick :class="message.userId == 0 ? 'mine' : ''" class="message-item bg-gray-200">
                    <span style="white-space: pre-line">{{ message.messageText }}</span>
                </div>
            </div>
            <div class="bg-gray-200 flex items-stretch" style="height: 100px;">
                <div class="flex-1 pl-3 pt-3 pb-3">
                    <textarea v-model="messageText" @keydown.ctrl.enter="sendMessage" class="w-full h-full" style="resize: none;"></textarea>
                </div>
                <div>
                    <button @click="sendMessage" v-ripple class="h-full" style="width: 70px;">
                        <sui-icon size="large" name="paper plane"/>
                    </button>
                </div>
            </div>
        </div>
        <div class="bg-gray-300" style="width: 300px;">

        </div>
    </div>
</template>

<script>
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

export default {
    middleware: 'auth',
    layout: 'cabinet',
    data(){
        return{
            connection: null,
            messages: [
                { messageText: 'Welcome to chat', userId: 0 }
            ],
            messageText: ''
        }
    },
    methods: {
        initChatConnection(){
            this.connection = new HubConnectionBuilder()
                .withUrl('https://localhost:4000/chat')
                .configureLogging(LogLevel.Information)
                .build()

            this.connection.on("ReceiveMessage", (user, message) => {
                this.messages.unshift({ messageText: message, userId: user })
            })

            this.connection.start()
        },
        sendMessage(){
            function isNullOrWhitespace(input) {
                if (typeof input === 'undefined' || input == null) return true
                return input.replace(/\s/g, '').length < 1
            }

            if(!isNullOrWhitespace(this.messageText)){
                this.connection.invoke("SendMessage", 'User', this.messageText).then(() => {
                    this.messageText = ''
                })
            }
        }
    },
    created(){
        if(process.browser){
            this.initChatConnection()
        }
    }
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