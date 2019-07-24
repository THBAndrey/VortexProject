<template>
    <div>
        <vk-card>
            <vk-card-title class="align-middle">
                <router-link to="/">
                    <vk-icon icon="chevron-left" ratio="1.5" class="back-button"></vk-icon>
                </router-link>
                Sign up
            </vk-card-title>
            <div class="d-flex form-section">
                <div class="uk-width-1-2">
                    <vk-button class="uk-width-1-1 uk-margin-small">Sign in with Facebook</vk-button>
                    <vk-button class="uk-width-1-1 uk-margin-small">Sign in with Facebook</vk-button>
                    <vk-button class="uk-width-1-1 uk-margin-small">Sign in with Telegram</vk-button>
                    <hr class="uk-divider-icon">
                    <form class="uk-width-1-2" action="">
                        <div class="uk-margin">
                            <input class="uk-input uk-form-danger uk-form-width-medium" type="text" placeholder="form-danger" value="form-danger">
                        </div>

                        <div class="uk-margin">
                            <input class="uk-input uk-form-success uk-form-width-medium" type="text" placeholder="form-success" value="form-success">
                        </div>

                        <div class="uk-margin">
                            <input class="uk-input uk-form-width-medium" type="text" placeholder="disabled" value="disabled" disabled>
                        </div>
                    </form>
                </div>
            </div>
        </vk-card>
    </div>
</template>

<script>
export default {
    layout: 'sign',
}
</script>

<style lang="less" scoped>
.form-section{
    max-width: 700px;
}

.back-button{
    // cursor: pointer;
}

</style>
