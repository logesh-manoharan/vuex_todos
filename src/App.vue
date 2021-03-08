<template>
  <div class="container" id="body">
    <AddTodo /><br>
    <FilterTodos /><br>
    <Todos />
  </div>
</template>

<script>

import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';
import FilterTodos from './components/FilterTodos.vue';

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>

<style scoped>
* {
  background: #e8f7f0;
}
</style>
