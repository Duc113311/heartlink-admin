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

  basicInfors: {
    zodiacs: [],
    educations: [],
    familyPlans: [],
    covidVaccines: [],
    personalities: [],
    communicationStyles: [],
    loveStyles: [],
  },

  lifeStyles: {
    pets: [],
    drinkings: [],
    smokings: [],
    workouts: [],
    foodPreferences: [],
    socials: [],
    sleepingStyles: [],
  },

  commonStatic: {
    datingPurposes: [],
    languages: [],
    interests: [],
    schools: [],
    jobTitles: [],
    sexuals: [],
    genders: [],
    genderFilters: [],
  },

  listPrompt: {},
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

  setObjectReportBlock(state, data) {
    debugger;
    const findData = state.reportObject.list_data.filter(
      (x) => x.reportedSubjectId === data.interactorId
    );
    debugger;
    let now = Date.now();
    let unlockTime = now + data.lockDuration * 24 * 60 * 60 * 1000;
    if (findData) {
      findData.block = {
        when: unlockTime,
      };
      findData.disable = data.disable;
    }
  },

  setObjectReportUnlock(state, data) {
    const findData = state.reportObject.list_data.find(
      (x) => x._id === data.interactorId
    );
    let now = Date.now();
    let unlockTime = now;
    if (findData) {
      if (findData.block) {
        delete findData.block;
      }
      findData.unlock = {
        when: unlockTime,
      };
      findData.disable = false;
    }
  },

  setCommonBasicInformation(state, data) {
    state.basicInfors = data;
  },

  setCommonLifeStyle(state, data) {
    state.lifeStyles = data;
  },

  setCommonPrompts(state, data) {
    state.listPrompt = data;
  },

  setCommonStatic(state, data) {
    state.commonStatic = data;
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

  async getCommonStatic({ commit }, data) {
    await http_mongo
      .get(`api/static/common`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Accept-Language": "en",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setCommonStatic", response.data.data);
        }
      })
      .catch((error) => {});
  },

  async getCommonBasicInformation({ commit }, data) {
    await http_mongo
      .get(`api/static/basic-infos`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Accept-Language": "en",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setCommonBasicInformation", response.data.data);
        }
      })
      .catch((error) => {});
  },

  async getCommonLifeStyle({ commit }, data) {
    await http_mongo
      .get(`api/static/life-style-infos`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Accept-Language": "en",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setCommonLifeStyle", response.data.data);
        }
      })
      .catch((error) => {});
  },

  async getCommonPrompts({ commit }, data) {
    await http_mongo
      .get(`api/static/prompts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Accept-Language": "en",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setCommonPrompts", response.data.data);
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
