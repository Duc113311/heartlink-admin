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
};

const actions = {
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
