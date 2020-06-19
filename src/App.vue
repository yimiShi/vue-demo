<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header @addTodo="addTodo"></Header> -->
      <Header ref="header"></Header>
      <List :todos="todos" :updateTodo="updateTodo"></List>
      <Footer
        :todos="todos"
        :selectAll="selectAll"
        :deleteCompleted="deleteCompleted"
      >
        <input type="checkbox" v-model="checkAll"  slot="left"/>
        <span slot="middle">
          <span>已完成{{ completeCount }}</span> / 全部{{ todos.length }}
        </span>
        <button
          class="btn btn-danger"
          v-if="completeCount > 0"
          @click="deleteCompleted"
          slot="right"
        >
          清除已完成任务
        </button>
      </Footer>
    </div>
  </div>
</template>

<script>
import Publish from 'pubsub-js'
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

  mounted() {
    /* 自定义事件监听 */
    this.$refs.header.$on('addTodo', this.addTodo)

    /*  通过事件总线绑定的事件监听 */
    this.$globalEventBus.$on('deleteTodo', this.deleteTodo)

    // 订阅消息
    this.token = Publish.subscribe('updateTodo', function (
      msg,
      { todo, complete }
    ) {
      this.updateTodo(todo, complete)
    })
  },

  beforeDestroy() {
    this.$refs.header.$off('addTodo')
    this.$globalEventBus.$off('deleteTodo')
    Publish.unsubscribe(this.token)
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
      this.todos = this.todos.filter((todo) => !todo.complete)
    }
  },
  computed: {
    completeCount() {
      return this.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0)
    },
    checkAll: {
      get() {
        return (
          this.todos.length === this.completeCount && this.completeCount > 0
        )
      },
      set(value) {
        this.selectAll(value)
      }
    }
  },

  watch: {
    todos: {
      handler: function (value) {
        localStorage.setItem('todos_key', JSON.stringify(value))
      },
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
