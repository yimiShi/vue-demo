<template>
  <div>
    <Item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :deleteTodo="deleteTodo"
      :updateTodo="updateTodo"
      :index="index"
    ></Item>
  </div>
</template>

<script>
import Item from './Item'

export default {
  props: ['todos', 'deleteTodo', 'updateTodo'],

  components: {
    Item
  }
}
</script>

<style></style>
