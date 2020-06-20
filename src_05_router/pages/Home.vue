<template>
  <div>
    <h2>Home</h2>
    
    <ul class="nav nav-tabs">
      <li><router-link to="/home/news">news</router-link></li>
      <li><router-link to="/home/message">message</router-link></li>
    </ul>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "123"
    }
  },
  mounted() {
    console.log('home....');
    
  }
}
</script>

<style>

</style>