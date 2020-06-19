<template>
  <div>
    <mt-button type="primary" style="width: 100%;" @click="hint"
      >primary</mt-button
    >
    <mt-button type="danger">danger</mt-button>
    <mt-button type="deault">deault</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  methods: {
    hint() {
      Toast({
        message: "提示",
        position: "bottom",
        duration: 2000,
        // iconClass: 'icon icon-success'
      });
    },
  },
};
</script>

<style scoped></style>
