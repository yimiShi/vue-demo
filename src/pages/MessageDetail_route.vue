<template>
  <ul>
    <!-- <li>id: {{ $route.params.id }}</li> -->
    <li>id: {{ messageDetail.id }}</li>
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
  data() {
    return {
      messageDetail: {},
    };
  },
  mounted() {
    setTimeout(() => {
      
      const id = this.$route.params.id * 1;
      console.log(id);
      const detail = messageDetails.find((detail) => detail.id === id);
      this.messageDetail = detail;
    }, 1000);
  },
  watch: {
    // 路由变了, 参数和路径等
    $route(value) {
      console.log('watch...');
      
      setTimeout(() => {
      const id = this.$route.params.id * 1;
      console.log(id);
      const detail = messageDetails.find((detail) => detail.id === id);
      this.messageDetail = detail;
    }, 1000);
    }
  },

};
</script>

<style></style>
