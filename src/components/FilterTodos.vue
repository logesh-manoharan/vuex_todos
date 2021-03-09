<template>
    <div>
        <h6>Filter todos</h6>
        <div class="input-group mb-3" style="width: 30%;">
            <input v-model="limit"  type="text" class="form-control" placeholder="Number of records...">
            <div class="input-group-append">
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
            if (this.limit > 200) {
                alert("Please, enter number <= 200");
            }
            else {
                this.filterTodos(this.limit);
            }
        }
    },
    computed: mapGetters(["todosLength"])
}
</script>