<template>
    <sui-modal v-model="open" :closable="true" :closeIcon="true" size="mini">
        <sui-modal-header>Make payment</sui-modal-header>
        <sui-modal-content>
            <form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml">
                <input type="hidden" name="receiver" value="410015951193873">
                <input type="hidden" name="formcomment" value="Проект «Железный человек»: реактор холодного ядерного синтеза">
                <input type="hidden" name="short-dest" value="Проект «Железный человек»: реактор холодного ядерного синтеза">
                <input type="hidden" name="label" value="$order_id">
                <input type="hidden" name="quickpay-form" value="donate">
                <input type="hidden" name="targets" value="транзакция {order_id}">
                <input type="hidden" name="sum" value="4568.25" data-type="number">
                <input type="hidden" name="comment" value="Хотелось бы дистанционного управления.">
                <input type="hidden" name="need-fio" value="false">
                <input type="hidden" name="need-email" value="false">
                <input type="hidden" name="need-phone" value="false">
                <input type="hidden" name="need-address" value="false">
                <label><input type="radio" name="paymentType" value="PC">Яндекс.Деньгами</label>
                <label><input type="radio" name="paymentType" value="AC">Банковской картой</label>
                <input type="submit" value="Перевести">
            </form>
        </sui-modal-content>
        <!-- <sui-modal-actions>
            <sui-button positive @click="cancelResult">
                Cancel
            </sui-button>
            <sui-button positive @click="okResult">
                OK
            </sui-button>
        </sui-modal-actions> -->
    </sui-modal>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true
        }
    },
}
</script>

<style>

</style>