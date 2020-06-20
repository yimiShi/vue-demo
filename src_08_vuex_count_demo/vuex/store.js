import Vue from "vue";
import Vuex from "vuex";

// 声明使用vue的插件
Vue.use(Vuex);

// 包含n个状态数据的对象
const state = {
  count: 1
};

// 直接更新状态数据的方法对象
const mutations = {
  // +1
  INCREMENT(state) {
    state.count++
  },

  // -1
  DECREMENT(state) {
    state.count--
  }
};

// 间件更新状态的方法对象
const actions = {
  increment(context) {
    context.commit('INCREMENT')
  },
  decrement(context) {
    context.commit('DECREMENT')
  },
  incrementIfOdd({commit, state}) {
    if(state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000);
  }

};


const getters = {
  evenOrOdd(state) {
    return state.count % 2 === 1 ? '奇数' : '偶数'
  }

};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
