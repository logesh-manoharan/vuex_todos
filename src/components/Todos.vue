<template>
    <div>
        <h5>Todos</h5>
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-4">
                    Double click to mark as complete
                </div>
                <div class="col-12 col-lg-4">
                    <span style="display: inline-block; width:10px; height: 10px; background: #35495e"></span> - Complete
                </div>
                <div class="col-12 col-lg-4">
                    <span style="display: inline-block; width:10px; height: 10px; background: #41b883"></span> - Incomplete
                </div>  
            </div><br>
            <div class="row" >
                <div @dblclick="onDblclick(todo)" 
                    class="col-12 col-lg-4 title card" 
                    v-for="todo in allTodos" 
                    :key="todo.id"
                    v-bind:class="{'complete': todo.completed}">
                    <h4>{{todo.title}}</h4>
                    <div class="card-body">
                        <font-awesome-icon @click="deleteTodo(todo.id)" style="cursor: pointer; color: white" :icon="['fas', 'trash-alt']" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Todos",
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
        onDblclick(todo) {
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            };

            this.updateTodo(updTodo);
        }
    },
    computed: mapGetters(["allTodos"]),
    created() {
        this.fetchTodos();
    }
}
</script>

<style scoped>
.title {
    background: #41b883;
    text-align: center;
    cursor: pointer;
}

.complete {
    background: #35495e;
    color: white;
}

</style>