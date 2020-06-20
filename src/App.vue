<template>
  <div>
    <div>click {{ count }} times, count is {{ evenOrOdd }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment If Odd</button>
    <button @click="incrementAsync">increment Async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
 /*  computed: {
    count() {
      return this.$store.state.count
    },
    evenOdd() {
      return this.$store.getters.evenOdd
    }
  }, */

  computed: {
    ...mapState(['count']), //{count: ()=>this.$store.state['count']} ,对象
    // ...mapGetters(['evenOdd'])
    ...mapGetters({
      evenOdd2: 'evenOdd'  //{evenOdd2: ()=>this.$store.getters['evenOdd']}
    })
  }, 
  mounted() {
    console.log('mounted()...', this.$store);
  },

  methods: {
    ...mapMutations({
      increment: 'INCREMENT',
      decrement: 'DECREMENT'
    }),
    ...mapActions(['incrementIfOdd', 'incrementAsync'])
  
  }

  /* methods: {
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

    },
  }, */
};
</script>

<style scoped></style>
