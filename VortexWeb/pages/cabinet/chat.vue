<template>
    <div class="h-full flex items-stretch">
        <div class="flex-1 h-full flex flex-col items-stretch pr-3">
            <div ref="messagesArea" class="flex-1 overflow-auto flex flex-col pr-2 mb-3">
                <div v-for="(message, index) in messages" :key="index" v-ripple.dblclick :class="message.userId == currentUser.uid ? 'mine' : ''" class="message-item bg-gray-200">
                    <span style="white-space: pre-line">{{ message.messageText }}</span>
                </div>
            </div>
            <div class="bg-gray-200 flex items-stretch" style="height: 100px;">
                <div class="flex-1 pl-3 pt-3 pb-3">
                    <textarea v-model="messageText" @keydown.ctrl.enter="sendMessage" class="w-full h-full p-2" style="resize: none; outline: none;"></textarea>
                </div>
                <div>
                    <button @click="sendMessage" v-ripple class="h-full" style="width: 70px; outline: none;">
                        <sui-icon size="large" name="paper plane"/>
                    </button>
                </div>
            </div>
        </div>
        <div class="bg-gray-300 p-3 chat-clients">
            <div v-for="(client, index) in clients" :key="index" v-ripple class="bg-gray-400 chat-user px-3">
                <sui-image v-if="client.photoUrl" :src="client.photoUrl" shape="circular" size="mini"/>
                <sui-icon v-else name="user circle outline"  style="height: 35px; width: 35px; font-size: 35px; line-height: 35px;" />
                <span class="ml-3 font-semibold">{{ client.email }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

export default {
    middleware: 'auth',
    layout: 'cabinet',
    data(){
        return{
            connection: null,
            clients: [],
            messages: [
                { messageText: 'Welcome to chat', userId: 0 }
            ],
            messageText: ''
        }
    },
    computed: {
        ...mapState({
            currentUser: state => state.user.currentUser,
        }),
        ...mapGetters({
            userToken: 'user/getToken'
        })
    },
    methods: {
        initChatConnection(){
            this.connection = new HubConnectionBuilder()
                .withUrl('https://localhost:4000/chat', { accessTokenFactory: () => this.userToken })
                .configureLogging(LogLevel.Information)
                .withAutomaticReconnect()
                .build()

            this.connection.on('ChatReady', (data) => {
                this.messages = data.messages.sort((a, b) => b.id.timestamp - a.id.timestamp)
                this.clients = data.clients
            })

            this.connection.on('UserJoin', (user) => {
                this.clients.push(user)
            })

            this.connection.on('UserLeave', (user) => {
                this.clients = this.clients.filter(client => client.uid != user.uid)
            })

            this.connection.on('ReceiveMessage', (message) => {
                this.messages.unshift(message)
            })

            this.connection.on('ReciveOldMessages', (messages) => {
                this.messages = messages.sort((a, b) => b.id.timestamp - a.id.timestamp)
            })

            this.connection.start()
        },
        sendMessage(){
            function isNullOrWhitespace(input) {
                if (typeof input === 'undefined' || input == null) return true
                return input.replace(/\s/g, '').length < 1
            }

            if(!isNullOrWhitespace(this.messageText)){
                this.connection.invoke('SendMessage', this.messageText).then(() => {
                    this.messageText = ''
                })
            }
        }
    },
    created(){
        if(process.browser){
            this.initChatConnection()
        }
    },
    beforeDestroy(){
        this.connection.stop()
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
.chat-clients{
    width: 300px;
    overflow-x: hidden;
    overflow-y: auto;


    .chat-user{
        width: 100%;
        height: 50px;
        user-select: none;
        display: flex;
        align-items: center;
        margin-top: 0.75rem;

        &:first-child{
            margin-top: 0;
        }
    }
}
</style>