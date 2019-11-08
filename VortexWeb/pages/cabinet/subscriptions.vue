<template>
    <div class="w-full h-full flex flex-column">
        <div class="w-full flex justify-center">
            <div v-for="(sub, index) in subs" :key="index" @mouseover="cardOver(index)" @mouseout="cardOut" class="bg-gray-600 shadow-lg sub-card" :class="sub.selected ? 'selected bg-gray-700' : ''">
                <span class="card-title">
                    {{ sub.name }}
                </span>
                <span class="card-price">
                    ₽{{ sub.price }} <br>
                    <span class="price-descrition">per month</span>
                </span>
                <div class="card-advantages">
                    <div v-for="(adv, index) in sub.advantages" :key="'adv' + index"> ✓ {{ adv }}</div>
                    <div v-for="(adv, index) in sub.aditions" :key="'adi' + index"> + {{ adv }}</div>
                </div>
                <button class="select-sub shadow-lg" @click="selectSub(sub)">
                    Select
                </button>
            </div>
        </div>
        <sui-modal v-model="openPayment" :closable="true" size="mini">
            <sui-modal-header>Make payment</sui-modal-header>
            <sui-modal-content v-if="selectedSub">
                <sui-form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml">
                    <input type="hidden" name="receiver" value="410015951193873">
                    <input type="hidden" name="quickpay-form" value="shop">
                    <input type="hidden" name="targets" :value="`Подписка ${selectedSub.name}`">
                    <sui-form-fields grouped>
                        <label>Select payment type</label>
                        <sui-form-field><sui-checkbox label="Яндекс.Деньгами" radio value="PC" v-model="paymentType"/></sui-form-field>
                        <sui-form-field><sui-checkbox label="Банковской картой" radio value="AC" v-model="paymentType"/></sui-form-field>
                    </sui-form-fields>
                    <input type="hidden" name="paymentType" :value="paymentType">
                    <input type="hidden" name="sum" :value="selectedSub.price" data-type="number">
                    <sui-button type="submit">Submit</sui-button>
                </sui-form>
            </sui-modal-content>
        </sui-modal>
    </div>
</template>

<script>

export default {
    layout: 'cabinet',
    components: {
    },
    data(){
        return{
            selectedSub: null,
            openPayment: false,
            paymentType: null,
            subs: [
                {
                    name: 'basic',
                    price: 100,
                    selected: false,
                    advantages: [
                        'Lorem ipsum sit dolor',
                        'Adipiscing ipsum',
                        'Dolar sitamet elete'
                    ],
                    aditions: [],
                },
                {
                    name: 'pro',
                    price: 200,
                    selected: true,
                    advantages: [
                        'Lorem ipsum sit dolor',
                        'Adipiscing ipsum',
                        'Dolar sitamet elete'
                    ],
                    aditions: [
                        'Basic plan'
                    ],
                },
                {
                    name: 'enterprise',
                    price: 300,
                    selected: false,
                    advantages: [
                        'Lorem ipsum sit dolor',
                        'Adipiscing ipsum',
                        'Dolar sitamet elete'
                    ],
                    aditions: [
                        'Pro plan'
                    ],
                },
            ],
            selectedDefault: 1
        }
    },
    methods: {
        selectSub(sub){
            this.selectedSub = sub
            this.openPayment = true
        },
        cardOver(index){
            this.subs.forEach((sub) => sub.selected = false)
            this.subs[index].selected = true
        },
        cardOut(){
            this.subs.forEach((sub) => sub.selected = false)
            this.subs[this.selectedDefault].selected = true
        }
    }
}
</script>

<style lang="less" scoped>
.sub-card{
    width: 300px;
    height: 500px;
    margin: 25px 0;
    transition: .3s;

    display: flex;
    flex-direction: column;

    .card-title{
        position: relative;
        align-self: center;
        text-transform: uppercase;
        color: white;
        font-weight: bold;
        padding-bottom: 10px;
        font-size: 1.1em;
        margin: 30px;

        &::after{
            content: ' ';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 1px;
            width: 25px;
            background: white;
        }
    }

    .card-price{
        align-self: center;
        font-size: 2em;
        color: white;
        font-weight:bold;
        margin: 30px;

        .price-descrition{
            font-size: 0.8rem;
            font-weight: 100;
        }
    }

    .card-advantages{
        margin: 30px;
        align-self: center;
        color: white;
    }

    .select-sub{
        margin-top: auto;
        margin-bottom: 15px;
        align-self: center;
        width: 90%;
        height: 50px;
        background: white;
        transition: transform .3s;
        text-transform: uppercase;
    }

    &.selected{
        z-index: 1;
        width: 350px;
        height: 550px;
        margin: 0 -25px;

        .select-sub{
            transform: translateY(40px);
        }
    }
}

</style>