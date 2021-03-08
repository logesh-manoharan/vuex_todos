<template>
    <div>
        <h5>Todos</h5>
        <div class="container">
            <div class="row" >
                <div class="col-12 col-lg-4 title card" v-for="todo in allTodos" :key="todo.id">
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
        ...mapActions(['fetchTodos', 'deleteTodo']),

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
</style>