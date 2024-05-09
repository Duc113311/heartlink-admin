import { http_mongo } from "../../configs/http-mongo";

const state = {
  reportObject: {
    currentPage: 0,
    skip: 0,
    limit: 0,
    count: 0,
    total: 0,
    list_data: [],
  },

  listReasons: [],
};

const getters = {};
const mutations = {
  /**
   * Xét state reportObject
   * @param {*} state
   * @param {*} data
   */
  setListReportAccount(state, data) {
    state.reportObject = data;
  },

  setReasonReport(state, data) {
    state.listReasons = data;
  },
};
const actions = {
  /**
   * Lấy danh sách report account
   * @param {*} param0
   * @param {*} data
   */
  async getListReportAccount({ commit }, data) {
    await http_mongo
      .get(`api/list-report`, {
        params: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListReportAccount", response.data.data);
        }
      })
      .catch((error) => {});
  },

  async getReasonReport({ commit }, data) {
    await http_mongo
      .get(`api/static/reason-account`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Accept-Language": "en",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setReasonReport", response.data.data);
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
