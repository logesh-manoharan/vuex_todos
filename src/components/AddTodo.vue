<template>
    <div>
        <h5>Add Todo</h5>
        <form @submit="onSubmit">
            <div class="input-group mb-3" style="width: 50%;">
                <input v-model="title" 
                type="text" placeholder="Add todos..."
                class="form-control">
                <div class="input-group-append">
                    <input class="btn btn-outline-success" type="submit" value="SUBMIT">
                </div>
            </div>
        </form>
        <!-- <b-form>
            <b-input  
                type="text" placeholder="Add todos..."
                v-model="title"></b-input>
            <b-button v-on:click="onSubmit(this)"  type="submit" variant="outline-success">SUBMIT</b-button>
        </b-form> -->
    </div>
</template>


<script>
import { mapActions } from 'vuex';

export default {
    name: "AddTodo",
    data() {
        return {
            title: ""
        }
    },
    methods: {
        ...mapActions(["addTodo"]),
        onSubmit(e) {
            e.preventDefault();
            this.addTodo(this.title);
        }
    }
}
</script>

<style scoped>

</style>