import { http_mongo } from "../../configs/http-mongo";

const state = {
  listAccount: [],
  formAccount: {},
  listRole: [],
};

const getters = {};

const mutations = {
  setListAccount(state, data) {
    state.listAccount = data.list_data;
  },

  setListReport(state, data) {
    state.listReport = data.list_data;
  },

  setFormAccount(state, data) {
    state.formAccount = data;
  },

  setRoles(state, data) {
    state.listRole = data;
  },
};

const actions = {
  /**
   * Lấy danh sách account admin
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListAccount({ commit }, data) {
    await http_mongo
      .get(`api/users`, {
        params: data,
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

  updateDisableAccount({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .put(`api/lock-account/${data._id}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDBlZjZlMDM5NmMwMjEwMjZhNjk1ODQiLCJlbWFpbCI6ImFkbWluIiwibmFtZSI6IkFkbWluaXN0cmF0b3IiLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE3MDU0NTE4OTAsImlhdCI6MTcwNDg0NzA5MH0.6ssxcLHJ5SaifAvQRRNbdzLTqLsQKYSEfSP6MfdwkGE`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            resolve("Unlock successful", response.data);
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

  insertAccount({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .post(`api/users`, {
          params: data,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            resolve("Insert successful", response.data);
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

  resetAccount({ commit }, data) {
    debugger;
    return new Promise((resolve, reject) => {
      http_mongo
        .put(`api/reset-password/${data._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            resolve("Reset successful", response.data);
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
  // updateAccount({ commit }, data) {
  //   return new Promise((resolve, reject) => {
  //     http_mongo
  //       .put(`api/users/${data._id}`, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       })
  //       .then((response) => {
  //         if (response.status === 200) {
  //           resolve("Update successful", response.data);
  //         }
  //       })
  //       .catch((err) => {
  //         if (err.response.status === 401) {
  //           reject("validation error", err);
  //         } else {
  //           reject("something went wrong", err);
  //         }
  //       });
  //   });
  // },

  deleteAccount({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .delete(`api/users/${data._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            resolve("Delete successful", response.data);
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

  async getRoles({ commit }, pageSize) {
    await http_mongo
      .get(`api/users/getRoles`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setRoles", response.data.data);
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
