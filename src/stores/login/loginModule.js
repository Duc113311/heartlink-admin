import { http_mongo } from "../../configs/http-mongo";

const state = {
  tokenUser: {},
};

const getters = {};

const mutations = {
  setTokenLogin(state, data) {
    debugger;
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", data.user);

    state.tokenUser = data;
  },
};

const actions = {
  /**
   * Login App
   * @param {*} param0
   * @param {*} pageSize
   */
  async loginApp({ commit }, data) {
    await http_mongo
      .get(`api/login`, data)
      .then((response) => {
        if (response.status === 200) {
          commit("setTokenLogin", response.data.data);
        }
      })
      .catch((error) => {});
  },

  async loginAppView({ commit }, data) {
    debugger;
    return new Promise((resolve, reject) => {
      http_mongo
        .post(`api/login`, data)
        .then((response) => {
          debugger;
          if (response.status === 200) {
            commit("setTokenLogin", response.data.data);
            resolve("login successful", response.data);
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            reject("validation error", err);
          } else {
            reject("something went wrong", err);
          }
        });
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
