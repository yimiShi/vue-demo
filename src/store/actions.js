/* 
间接更新状态数据的方法的对象
*/
import axios from "axios";
import { REQUEST_ERROR, REQUEST_SUCCESS, REQUESTING } from "./mutation_types";

export default {
  /* 
    异步action: 包含异步代码的action
  */
  async search({ commit }, searchName) {
    
    // 更新状态数据(请求中)
    commit(REQUESTING);
    console.log(searchName, commit);

    // 发送ajax请求, 获取users数据
    const url = `https://api.github.com/search/repositories?q=${searchName}&sort=stars`;

    try {
      const response = await axios(url);
      console.log(response);
      console.log(response.data.items);

      const users = response.data.items.map((user) => ({
        username: user.name,
        url: user.url,
        avatar_url: user.owner.avatar_url,
      }));
      // 成功了, 更新状态数据
      commit(REQUEST_SUCCESS, users);
    } catch (error) {
      // 失败了, 也更新
      commit(REQUEST_ERROR, error.message);
    }
  },
};
