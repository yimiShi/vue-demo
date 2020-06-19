<template>
  <li
    @mouseenter="handleEnter(true)"
    @mouseleave="handleEnter(false)"
    :style="{ background: itemStyle.bgColor }"
  >
    <label>
      <input type="checkbox" v-model="isChecked" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger"
      v-show="itemStyle.isShow"
      @click="deleteItem"
    >
      删除
    </button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
  data() {
    return {
      itemStyle: {
        bgColor: 'white',
        isShow: false
      }
    }
  },
  props: {
    todo: Object,
    index: Number,
    // deleteTodo: Function,
    updateTodo: Function
  },
  methods: {
    handleEnter(isEnter) {
      if (isEnter) {
        this.itemStyle.bgColor = '#ccc'
        this.itemStyle.isShow = true
      } else {
        this.itemStyle.bgColor = 'white'
        this.itemStyle.isShow = false
      }
    },

    deleteItem() {
      if (confirm('确定删除吗?')) {
        /* props 写法 */
        // this.deleteTodo(this.index)

        /* 全局事件总线对象分发的自定义事件 */
        this.$globalEventBus.$emit('deleteTodo', this.index)
      }
    }
  },

  computed: {
    isChecked: {
      get() {
        return this.todo.complete
      },
      set(isCheck) {
        this.updateTodo(isCheck, this.todo)

        // 消息订阅
        PubSub.publish('updateTodo', {todo: this.todo, complete: isCheck})
      }
    }
  }
}
</script>

<style scope>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
