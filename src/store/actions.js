import axios from 'axios'

import {
  REQUESTING,
  REQUEST_ERROR,
  REQUEST_SUCCESS
} from './mutaition_types'

export default {

  async search({
    commit
  }, searchName) {
    commit(REQUESTING)
    const url = `https://api.github.com/search/repositories?q=${searchName}&sort=stars`
    try {
      const response = await axios(url)
      const users = response.data.items.map(item => ({
        username: item.name,
        url: item.url,
        avatar_url: item.owner.avatar_url
      }))
      commit(REQUEST_SUCCESS, users)
    } catch (error) {
      commit(REQUEST_ERROR, error.message)
    }
  }

}
