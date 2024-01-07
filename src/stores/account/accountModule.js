import { http_mongo } from "../../configs/http-mongo";

const state = {
  listAccount: [],
};

const getters = {};

const mutations = {
  setListAccount(state, data) {
    state.listAccount = data.list_data;
  },

  setListReport(state, data) {
    state.listReport = data.list_data;
  },
};

const actions = {
  /**
   * Lấy danh sách account admin
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListAccount({ commit }, pageSize) {
    await http_mongo
      .get(`api/users?currentPage=0&pageSize=${pageSize}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListAccount", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * Lấy danh sách các report account
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListReport({ commit }, pageSize) {
    await http_mongo
      .get(`api/reports?currentPage=0&pageSize=${pageSize}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListReport", response.data.data);
        }
      })
      .catch((error) => {});
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
