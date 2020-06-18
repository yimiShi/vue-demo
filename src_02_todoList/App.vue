<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"></Header>
      <List
        :todos="todos"
        :deleteTodo="deleteTodo"
        :updateTodo="updateTodo"
      ></List>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer'
import List from './components/List'

export default {
  data() {
    return {
      todos: [
        { id: 1, title: 'aaa', complete: false },
        { id: 2, title: 'bbb', complete: true },
        { id: 3, title: 'ccc', complete: false }
      ]
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    updateTodo(todo, complete) {
      todo.complete = complete
    }
  },
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
