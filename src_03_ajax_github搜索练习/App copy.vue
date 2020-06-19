<template>
  <div>
  <div v-if="!repoName">isLoading</div>
    <div v-else>most stars repo is
      <a :href="repoUrl">{{repoName}}</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      repoName: '',
      repoUrl: ''
    }
  },
  mounted() {
    // 利用Vue的vue-resourse库发送ajax请求
    const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
    this.$http.get(url).then((response)=>{
      const result = response.data.items[0]
      console.log(result)
      const {name,html_url} = result;
      //更新状态数据
      this.repoUrl = html_url
      this.repoName = name
    }).catch((error)=>{
      alert(error.statusText)
    })

    // 利用独立axios库发送ajax请求
    // const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
    // axios.get(url).then((response) => {
    //   const result = response.data.items[0]
    //   console.log(result)
    //   const {name, html_url} = result
    //   // 更新状态数据
    //   this.repoUrl = html_url
    //   this.repoName = name
    // }).catch((error) => {
    //   alert(error.message)
    // })
  }
}
</script>

<style >

</style>
