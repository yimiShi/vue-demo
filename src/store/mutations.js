/* 
直接更新状态数据的方法的对象
*/

import {REQUEST_ERROR, REQUEST_SUCCESS, REQUESTING} from './mutation_types'


export default {

  [REQUESTING] (state) {
    console.log(111, state);
    
    state.firstView = false
    state.loading = true
  },

  [REQUEST_SUCCESS] (state, users) {
    state.loading = false
    state.users = users
  },
  [REQUEST_ERROR] (state, msg) {
    state.isLoading = false,
    state.msg = msg
  }
}
