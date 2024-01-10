import { http_mongo } from "../../configs/http-mongo";

const state = {
  listInterest: [], // Interest
  listSexual: [], // Sexual
  listSchool: [], // School
  listJobTitle: [], // Job-title
  listGender: [], // Gender
  listLanguage: [], // Language
  listPackage: [], // Package
  listLocation: [], // Location
  limitPage: {},

  listKeyLanguages: [
    { key: "en", value: "English" },
    { key: "fr", value: "French" },
    { key: "es", value: "Spanish" },
    { key: "de", value: "German" },
    { key: "it", value: "Italian" },
    { key: "pt", value: "Portuguese" },
    { key: "ru", value: "Russian" },
    { key: "zh", value: "Chinese (Mandarin)" },
    { key: "ja", value: "Japanese" },
    { key: "ko", value: "Korean" },
    { key: "ar", value: "Arabic" },
    { key: "hi", value: "Hindi" },
    { key: "th", value: "Thai" },
    { key: "id", value: "Indonesian" },
    { key: "vi", value: "Vietnamese" },
    { key: "tr", value: "Turkish" },
    { key: "pl", value: "Polish" },
    { key: "nl", value: "Dutch" },
    { key: "sv", value: "Swedish" },
    { key: "da", value: "Danish" },
    { key: "el", value: "Greek" },
    { key: "no", value: "Norwegian" },
    { key: "fi", value: "Finnish" },
    { key: "hu", value: "Hungarian" },
    { key: "cs", value: "Czech" },
    { key: "sk", value: "Slovak" },
    { key: "ro", value: "Romanian" },
    { key: "bg", value: "Bulgarian" },
    { key: "hr", value: "Croatian" },
    { key: "sr", value: "Serbian" },
    { key: "bs", value: "Bosnian" },
    { key: "sl", value: "Slovenian" },
    { key: "mk", value: "Macedonian" },
  ],

  // Form chung
  formData: {
    _id: "",
    code: "",
    langs: {
      en: "",
      vi: "",
      ja: "",
    },
    insert: {
      by: "",
      when: "",
    },
    update: {
      by: "",
      when: "",
    },
  },

  formLocation: {},
};

const getters = {};

const mutations = {
  setLimit(state, data) {
    state.limitPage.currentPage = data.currentPage;
    state.limitPage.limit = data.limit;
    state.limitPage.total = data.total;
  },
  setListInterests(state, data) {
    state.listInterest = data.list_data;
  },
  setListGender(state, data) {
    state.listGender = data.list_data;
  },
  setListSexual(state, data) {
    state.listSexual = data.list_data;
  },
  setListSchool(state, data) {
    state.listSchool = data.list_data;
  },
  setListJobTitle(state, data) {
    state.listJobTitle = data.list_data;
  },
  setListLanguages(state, data) {
    state.listLanguage = data.list_data;
  },
  setListPackages(state, data) {
    state.listPackage = data.list_data;
  },
  setListLocation(state, data) {
    state.listLocation = data.list_data;
  },

  setFormData(state, data) {
    state.formData = data;
  },
  setFormLocation(state, data) {
    state.formLocation = data;
  },
};

const actions = {
  //#region  Interest
  /**
   * Lấy danh sách interest
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListInterests({ commit }, data) {
    await http_mongo
      .get(`api/interests`, {
        params: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListInterests", response.data.data);
          commit("setLimit", response.data.data);
        }
      })
      .catch((error) => {});
  },
  /**
   * Thêm thông tin
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  insertInterest({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .post(`api/interests`, data, {
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

  /**
   * Update interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  updateInterest({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .put(`api/interests/${data._id}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
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
  /**
   * Delete interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  deleteInterest({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .delete(`api/interests/${data._id}?hardDelete=true`, {
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

  //#endregion

  //#region Gender
  /**
   * List danh sách Gender
   * @param {*} param0
   * @param {*} data
   */
  async getListGender({ commit }, data) {
    await http_mongo
      .get(`api/genders`, {
        params: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListGender", response.data.data);
          commit("setLimit", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * Thêm thông tin
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  insertGender({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .post(`api/genders`, data, {
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

  /**
   * Update interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  updateGender({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .put(`api/genders/${data._id}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            resolve("Update successful", response.data);
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
  /**
   * Delete interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  deleteGender({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .delete(`api/genders/${data._id}?hardDelete=true`, {
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

  //#endregion

  //#region Sexual
  /**
   * List danh sách sexual
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListSexual({ commit }, data) {
    await http_mongo
      .get(`api/sexuals`, {
        params: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListSexual", response.data.data);
          commit("setLimit", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * Thêm thông tin
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  insertSexual({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .post(`api/sexuals`, data, {
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

  /**
   * Update interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  updateSexual({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .put(`api/sexuals/${data._id}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            resolve("Update successful", response.data);
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
  /**
   * Delete interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  deleteSexual({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .delete(`api/sexuals/${data._id}?hardDelete=true`, {
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

  //#endregion

  //#region School
  /**
   * List danh sách school
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListSchools({ commit }, data) {
    await http_mongo
      .get(`api/schools`, {
        params: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListSchool", response.data.data);
          commit("setLimit", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * Thêm thông tin
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  insertSchool({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .post(`api/schools`, data, {
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

  /**
   * Update interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  updateSchool({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .put(`api/schools/${data._id}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            resolve("Update successful", response.data);
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
  /**
   * Delete interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  deleteSchool({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .delete(`api/schools/${data._id}?hardDelete=true`, {
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

  //#endregion

  //#region Job-Title
  /**
   * List danh sách job title
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListJobTitle({ commit }, data) {
    await http_mongo
      .get(`api/job-titles`, {
        params: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListJobTitle", response.data.data);
          commit("setLimit", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * Thêm thông tin
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  insertJobTitle({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .post(`api/job-titles`, data, {
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

  /**
   * Update interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  updateJobTitle({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .put(`api/job-titles/${data._id}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            resolve("Update successful", response.data);
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
  /**
   * Delete interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  deleteJobTitle({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .delete(`api/job-titles/${data._id}?hardDelete=true`, {
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

  //#endregion

  //#region Languages
  /**
   * List danh sách Languages
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListLanguages({ commit }, data) {
    await http_mongo
      .get(`api/languages`, {
        params: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListLanguages", response.data.data);
          commit("setLimit", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * Thêm thông tin
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  insertLanguages({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .post(`api/languages`, data, {
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

  /**
   * Update interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  updateLanguages({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .put(`api/languages/${data._id}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            resolve("Update successful", response.data);
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
  /**
   * Delete interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  deleteLanguages({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .delete(`api/languages/${data._id}?hardDelete=true`, {
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

  //#endregion

  //#region Package
  /**
   * List danh sách Packages
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListPackages({ commit }, data) {
    await http_mongo
      .get(`api/packages`, {
        params: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListPackages", response.data.data);
          commit("setLimit", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * Thêm thông tin
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  insertPackages({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .post(`api/packages`, data, {
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

  /**
   * Update interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  updatePackages({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .put(`api/packages/${data._id}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            resolve("Update successful", response.data);
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
  /**
   * Delete interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  deletePackages({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .delete(`api/packages/${data._id}?hardDelete=true`, {
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

  //#endregion

  /**
   * Lấy danh sách location
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListLocations({ commit }, data) {
    await http_mongo
      .get(`api/areas`, {
        params: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListLocation", response.data.data);
          commit("setLimit", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * Thêm thông tin
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  insertLocation({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .post(`api/areas`, data, {
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

  /**
   * Update interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  updateLocation({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .put(`api/areas/${data._id}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            resolve("Update successful", response.data);
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
  /**
   * Delete interest
   * @param {*} param0
   * @param {*} data
   * @returns
   */
  deleteLocation({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .delete(`api/areas/${data._id}?hardDelete=true`, {
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
