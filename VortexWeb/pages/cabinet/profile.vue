<template>
    <div>
        <sui-form>
            <sui-form-field>
                <label>Name</label>
                <input v-model="name" placeholder="Name" >
            </sui-form-field>
            <sui-form-field>
                <label>Role</label>
                <input v-model="role" placeholder="Auth role" >
            </sui-form-field>
            <sui-button @click.prevent="updateProfile()" type="submit">Submit</sui-button>
        </sui-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    middleware: 'auth',
    layout: 'cabinet',
    data(){
        return{
            name: null,
            role: "Creater"
        }
    },
    methods:{
        ...mapActions({
            updateUser: 'user/updateUser'
        }),
        updateProfile(){
            this.updateUser({ name: this.name, role: this.role }).catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>