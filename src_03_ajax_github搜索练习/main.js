// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import axios from 'axios'
import App from './App'

Vue.use(VueResource)

Vue.prototype.$globalEventBus = new Vue()
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App />'
})
