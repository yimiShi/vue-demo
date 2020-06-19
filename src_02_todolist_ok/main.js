// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import './index.css'

Vue.config.productionTip = false

// 创建一个vm对象作为全局事件总线对象, 挂载到Vue原型对象上
// 所有的组件对象都可以看到他,  通过来进行事件机制通信
Vue.prototype.$globalEventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App />'
})
