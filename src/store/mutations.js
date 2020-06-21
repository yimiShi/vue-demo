import { REQUESTING, REQUEST_ERROR, REQUEST_SUCCESS } from './mutaition_types'

export default {

  [REQUESTING] (state) {
    state.firstView = false
    state.loading = true
  },

  [REQUEST_SUCCESS] (state, users) {
    state.firstView = false
    state.loading = false
    state.users = users
  },

  [REQUEST_ERROR] (state, errorMsg) {
    state.loading = false
    state.errorMsg = errorMsg
  }

}
