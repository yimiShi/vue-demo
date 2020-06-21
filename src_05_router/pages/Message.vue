<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="message.id">
        <router-link
          :to="`/home/message/detail/${message.id}?id=${message.id}`"
        >
          {{ message.title }}
        </router-link>
        -- <button @click="pushShow(message.id)">push</button> --
        <button @click="replaceShow(message.id)">replace</button>
        <!-- <router-link :to="'/home/message/detail/'+message.id">{{ message.title }}</router-link> -->
      </li>
      <button @click="$router.back()">回退</button>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    console.log('message...')
    setTimeout(() => {
      const messages = [
        { id: 1, title: 'aaa' },
        { id: 2, title: 'bbb' },
        { id: 3, title: 'ccc' },
        { id: 4, title: 'ddd' }
      ]
      this.messages = messages
    }, 1000)
  },
  methods: {
    pushShow(id) {
      this.$router.push(`/home/message/detail/${id}`)
    },
    replaceShow(id) {
      this.$router.replace(`/home/message/detail/${id}`)
    }
  }
}
</script>

<style></style>
