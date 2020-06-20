/* 
路由器模块
*/
import Vue from "vue";
import VueRouter from "vue-router";

// import Home from "../pages/Home.vue";
// import About from "../pages/About.vue";
import routes from './routers.js'

Vue.use(VueRouter);

export default new VueRouter({

  // url有无  #
  mode : 'history', 
  routes
  // routes: [
  //   {
  //     path: "/about",
  //     component: About,
  //   },
  //   {
  //     path: "/home",
  //     component: Home,
  //   },
  //   {
  //     path: "/",
  //     component: Home,
  //   },
  // ],
});
