<template>
  <div>
    <div>click {{ $store.state.count }} times, count is {{ $store.getters.evenOrOdd }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment If Odd</button>
    <button @click="incrementAsync">increment Async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    // evenOrOdd () {
    //   return this.count % 2 === 1 ? '奇数' : '偶数'
    // }
  },
  mounted() {
    console.log('mounted()...', this.$store)
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
      // this.$store.commit('INCREMENT')
    },
    decrement() {
      this.$store.commit('DECREMENT')
    },
    incrementIfOdd() {
      // if (this.count % 2 === 1) {
      //   this.count++;
      // }
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync() {
      // setTimeout(() => {
      //   this.count++;
      // }, 1000);
      this.$store.dispatch('incrementAsync')
    }
  }
}
</script>

<style scoped></style>
