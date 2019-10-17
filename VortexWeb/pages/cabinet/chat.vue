<template>
    <div class="h-full flex items-stretch">
        <div class="flex-1 h-full flex flex-col items-stretch pr-3">
            <div class="flex-1 overflow-auto flex flex-col pr-2 mb-3">
                <div v-ripple.dblclick class="message-item bg-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolores.</div>
                <div v-ripple.dblclick class="message-item bg-gray-200">Ea fugiat obcaecati atque quae. Ipsum magnam repudiandae nobis necessitatibus unde illo vero, cupiditate vel adipisci maiores quas autem perspiciatis ipsa eius?</div>
                <div v-ripple.dblclick class="message-item mine bg-gray-200">Vero, earum labore, repellendus consequatur ipsa incidunt nesciunt dolorum hic vel eius soluta itaque similique id! Expedita pariatur dolore repellat quos fugit!</div>
                <div v-ripple.dblclick class="message-item bg-gray-200">Aliquid animi voluptatem quo cumque debitis assumenda delectus quod magni illo? Corrupti sed quis, excepturi autem expedita consectetur perferendis voluptas qui molestiae!</div>
                <div v-ripple.dblclick class="message-item bg-gray-200">Exercitationem assumenda quasi nemo hic quibusdam. Dolorum ad at officiis nulla iste necessitatibus sed, aperiam maiores quae distinctio sint libero debitis unde.</div>
                <div v-ripple.dblclick class="message-item bg-gray-200">Totam, pariatur vel inventore temporibus ea natus est nostrum! Quaerat sit commodi repellat itaque aliquam nesciunt corporis quos tempora, accusantium, sapiente porro?</div>
                <div v-ripple.dblclick class="message-item bg-gray-200">A, harum distinctio saepe placeat odit quam earum consectetur esse maxime assumenda ea possimus sint natus dolor culpa modi illum quae perspiciatis.</div>
                <div v-ripple.dblclick class="message-item mine bg-gray-200">Facere laboriosam iste quisquam nisi excepturi assumenda. Obcaecati quae explicabo, quibusdam placeat architecto saepe facilis repellendus? Distinctio reiciendis eum autem illo ad?</div>
                <div v-ripple.dblclick class="message-item bg-gray-200">Molestiae voluptas minima ab quam enim architecto tempore itaque soluta perspiciatis, cumque ex corporis quos facere, ducimus, voluptates sequi esse quasi fuga.</div>
                <div v-ripple.dblclick class="message-item bg-gray-200">Eos maiores, odio recusandae voluptate aliquid nam provident mollitia amet ipsa nesciunt fuga minima suscipit itaque vero dicta voluptates iusto vitae. Quam?</div>
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