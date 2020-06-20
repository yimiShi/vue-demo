// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import EventBus from './event-bus'


Vue.prototype.$globalEventBus = new Vue()


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App />'
})
