<template>
  <div>
    <h1 v-if="firstView">请输入关键字进行搜索</h1>
    <h1 v-else-if="loading"></h1>
    <h1 v-else-if="errorMsg">{{ errorMsg }}</h1>

    <div class="row" v-else-if="users.length > 0">
      <div class="card" v-for="(user, index) in users" :key="user.username">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px;" />
        </a>
        <p class="card-text">{{ user.username }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstView: true,
      loading: false,
      users: [],
      errorMsg: "",
    };
  },
  mounted() {
    this.$globalEventBus.$on("search", async (searchName) => {
      // 发送ajax请求
      this.firstView = false;
      this.loading = true;

      const url = `https://api.github.com/search/repositories?q=${searchName}&sort=stars`;

      try {
        const response = await this.$axios.get(url);
        console.log(response);
        console.log(response.data.items);
        
        const users = response.data.items.map((user) => ({
          username: user.name,
          url: user.url,
          avatar_url: user.owner.avatar_url,
        }));
        this.loading = false;
        this.users = users;
      } catch (error) {
        this.loading = false;
        this.errorMsg = error.message
      }
    });
  },
};
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
