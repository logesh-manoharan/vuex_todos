<template>
    <div>
        <h5>Add Todo</h5>
        <form @submit="onSubmit">
            <input v-model="title" style="width: 50%; display: inline;" 
                type="text" placeholder="Add todos..."
                class="form-control">
            <input style="display: inline; margin-left: 10px;" class="btn btn-outline-success" type="submit" value="SUBMIT">
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