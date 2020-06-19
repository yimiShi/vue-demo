<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"></Header>
      <List
        :todos="todos"
        :deleteTodo="deleteTodo"
        :updateTodo="updateTodo"
      ></List>
      <Footer :todos="todos" :selectAll="selectAll" :deleteCompleted="deleteCompleted"></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

export default {
  data() {
    return {
      // todos: [
      //   { id: 1, title: 'aaaa', complete: false },
      //   { id: 2, title: 'bbbb', complete: true },
      //   { id: 3, title: 'cccc', complete: false }
      // ]
      todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
    }
  },

  components: {
    Header,
    Footer,
    List
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    updateTodo(isCheck, todo) {
      todo.complete = isCheck
    },
    /*
    全选全不选
    */
    selectAll(value) {
      this.todos.forEach((todo) => {
        todo.complete = value
      })
    },
    // 删除已完成
    deleteCompleted() {
      this.todos = this.todos.filter(todo => !todo.complete)
    }
  },

  watch: {
    todos: {
      handler: function (value) { localStorage.setItem('todos_key', JSON.stringify(value)) },
      deep: true
    }
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
