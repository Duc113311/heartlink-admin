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
};

const getters = {};

const mutations = {
  setListInterests(state, data) {
    state.listInterest = data.list_data;
  },
};

const actions = {
  /**
   * Lấy danh sách interest
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListInterests({ commit }, pageSize) {
    await http_mongo
      .get(`api/interests?currentPage=0&pageSize=${pageSize}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListInterests", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * List danh sách sexual
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListSexual({ commit }, pageSize) {
    await http_mongo
      .get(`api/sexuals?currentPage=0&pageSize=${pageSize}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListSexual", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * List danh sách school
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListSchools({ commit }, pageSize) {
    await http_mongo
      .get(`api/schools?currentPage=0&pageSize=${pageSize}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListSchool", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * List danh sách job title
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListJobTitle({ commit }, pageSize) {
    await http_mongo
      .get(`api/job-titles?currentPage=0&pageSize=${pageSize}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListJobTitle", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * List danh sách Gender
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListGender({ commit }, pageSize) {
    await http_mongo
      .get(`api/genders?currentPage=0&pageSize=${pageSize}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListGender", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * List danh sách Languages
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListLanguages({ commit }, pageSize) {
    await http_mongo
      .get(`api/languages?currentPage=0&pageSize=${pageSize}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListLanguages", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * List danh sách Packages
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListPackages({ commit }, pageSize) {
    await http_mongo
      .get(`api/packages?currentPage=0&pageSize=${pageSize}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListPackages", response.data.data);
        }
      })
      .catch((error) => {});
  },

  /**
   * Lấy danh sách location
   * @param {*} param0
   * @param {*} pageSize
   */
  async getListLocations({ commit }, pageSize) {
    await http_mongo
      .get(`api/areas?currentPage=0&pageSize=${pageSize}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListLocation", response.data.data);
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
