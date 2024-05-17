import { http_mongo } from "../../configs/http-mongo";

const state = {
  listAccount: {
    currentPage: 0,
    skip: 0,
    limit: 0,
    count: 0,
    total: 0,
    list_data: [],
  },
  formAccount: {
    address: "",
    email: "",
    name: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: "",
  },
  listRole: [],
};

const getters = {};

const mutations = {
  setListAccount(state, data) {
    state.listAccount = data;
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
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  updateUnlockAccount({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .put(`api/unlock-account/${data._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        .post(`api/users`, data, {
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
