<template>
    <div>
        <h6>Filter todos</h6>
        <div class="input-group mb-3" style="width: 30%;">
            <input v-model="limit"  type="text" class="form-control" placeholder="Number of records...">
            <div class="input-group-append">
                <span class="input-group-text">/ {{todosLength}}</span>
                <button v-on:click="submitFilter()" type="button" class="btn btn-outline-success">Filter</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters ,mapActions } from 'vuex';

export default {
    name: "FilterTodos",
    data() {
        return {
            limit: ""
        }
    },
    methods: {
        ...mapActions(["filterTodos"]),
        submitFilter() {
            this.filterTodos(this.limit);
        }
    },
    computed: mapGetters(["todosLength"])
}
</script>