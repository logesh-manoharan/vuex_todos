import axios from 'axios';

const state = {
    todos: [
    ]
};

// to get the piece of data or computed data from state
const getters = {
    allTodos: (state) => {
        return state.todos
    },
    todosLength: () => {
        const responseData = actions.lengthTodos();
        console.log(Object.values(responseData).length);
        return Object.values(responseData).length;
    }
};


// creation of actions
const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        commit("setTodos", response.data);
    },

    async addTodo({commit}, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, 
                        completed: false});

        commit("newTodo", response.data);
    },

    async deleteTodo({commit}, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit("removeTodo", id);
    },

    async filterTodos({commit}, l) {
        // get the selected number 
        // const limit = parseInt(l);
        const limit = parseInt(l);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        console.log("Selected limit: "+ parseInt(l));
        commit('setTodos', response.data);
    },

    async updateTodo({commit}, updTodo) {
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
            updTodo
          );
      
          console.log(response.data);
      
          commit('updateTodo', response.data);
    },

    async lengthTodos() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data;
    }
};


// creation of mutations = by this we can mutate the states
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),      //unshift() => is used to add the element at the beginning of the list 
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);    // returns the INDEX to update
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo);
        }
    }
};


export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}

