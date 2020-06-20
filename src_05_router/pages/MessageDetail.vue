<template>
  <ul>
    <!-- <li>id: {{ $route.params.id }}</li> -->
    <!-- <li>id: {{ messageDetail.id }}</li> -->
    <li>{{id}}</li>
    <li>title: {{ messageDetail.title }}</li>
    <li>content: {{ messageDetail.content }}</li>
  </ul>
</template>

<script>
const messageDetails = [
  { id: 1, title: "aaa", content: "a111" },
  { id: 2, title: "bbb", content: "b222" },
  { id: 3, title: "ccc", content: "c333" },
  { id: 4, title: "ddd", content: "d4444" },
];
export default {
  props: {
    id: Number
  },
  data() {
    return {
      messageDetail: {},
    };
  },
  mounted() {
    setTimeout(() => {
      
      const id = this.id
      console.log(id);
      const detail = messageDetails.find((detail) => detail.id === id);
      this.messageDetail = detail;
    }, 1000);
  },
  watch: {
    // 路由变了, 参数和路径等
    id(value) {
      console.log('watch...');
      
      setTimeout(() => {
      const detail = messageDetails.find((detail) => detail.id === value);
      this.messageDetail = detail;
    }, 1000);
    }
  },

};
</script>

<style></style>
