import { http_mongo } from "../../configs/http-mongo";

const state = {
  // Model userProfile
  user_profile: {
    oAuth2Id: "",
    fullname: "",
    email: "",
    phone: "",
    dob: "",
    profiles: {
      showCommon: {
        showSexual: false,
        showGender: false,
        showAge: false,
        showHeight: false,
        showEthnicity: false,
        showChildrenPlan: false,
        showFamilyPlan: false,
        showWork: false,
        showSchool: false,
        showEducation: false,
        showDrinking: false,
        showSmoking: false,
        showDrug: false,
        showDistance: false,
      },
      interests: [],
      orientationSexuals: [],
      languages: [],
      ethnicitys: [],
      smartPhoto: false,
      favoriteSongs: [],
      gender: "",
      address: "",
      school: "",
      height: 0,
      childrenPlan: "",
      familyPlan: "",
      company: "",
      education: "",
      drinking: "",
      smoking: "",
      drug: "",
      about: "",
      zodiac: "",
      covidVaccine: "",
      personality: "",
      communicationType: "",
      loveStyle: "",
      pet: "",
      workout: "",
      dietaryPreference: "",
      socialMedia: "",
      sleepingHabit: "",
      datingPurpose: "",
      prompts: [],
      avatars: [],
    },
    settings: {
      global: {
        isEnabled: false,
        languages: [],
      },
      distancePreference: {
        range: 10,
        unit: "km",
        onlyShowInThis: false,
      },
      agePreference: {
        min: 15,
        max: 30,
        onlyShowInThis: false,
      },
      notiSeenEmail: {
        newMatchs: false,
        incomingMessage: false,
        promotions: false,
      },
      notiSeenApp: {
        newMatchs: false,
        incomingMessage: false,
        promotions: false,
        superLike: false,
      },
      genderFilter: "all",
      autoPlayVideo: "always",
      showTopPick: true,
      showOnlineStatus: true,
      showActiveStatus: true,
      incognitoMode: true,
    },
    verifyStatus: false,
    activeStatus: false,
    location: {
      lat: "",
      long: "",
    },
    coins: 0,
    explore: {
      verified: false,
      topics: [],
    },
    plusCtrl: {
      whoYouSee: "default",
      whoSeeYou: "everyone",
    },
    numberLike: 0,
    numberSuperLike: 0,
    numberBooster: 0,
  },

  listUser: {},
  listActivities: {
    currentPage: 0,
    skip: 0,
    limit: 0,
    count: 0,
    total: 0,
    list_data: [],
  },
  statusBlock: false,
  statusUnlock: false,
};

const getters = {};

const mutations = {
  setListCardCustomer(state, data) {
    state.listUser = data;
  },

  setDetailInformationCustomer(state, data) {
    state.user_profile = data;
  },

  setPostBlockAccountCustomer(state, data) {
    state.statusBlock = data;
  },

  setListCardActivities(state, data) {
    state.listActivities = data;
  },

  setUnlockAccountCustomer(state, data) {
    state.statusUnlock = data;
  },

  setObjectCustomerBlock(state, data) {
    debugger;
    const findData = state.listUser.list_data.find(
      (x) => x._id === data.interactorId
    );
    let now = Date.now();
    let unlockTime = now + data.lockDuration * 24 * 60 * 60 * 1000;
    if (findData) {
      findData.block = {
        when: unlockTime,
      };
      findData.disable = data.disable;
    }
  },

  setObjectCustomerUnlock(state, data) {
    const findData = state.listUser.list_data.find(
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
};

const actions = {
  async getListCardUsers({ commit }, data) {
    await http_mongo
      .get(`api/customers`, {
        params: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListCardCustomer", response.data.data);
        }
      })
      .catch((error) => {});
  },

  async getDetailInformationCustomer({ commit }, data) {
    await http_mongo
      .get(`api/customers/${data}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setDetailInformationCustomer", response.data.data);
        }
      })
      .catch((error) => {});
  },

  async postBlockAccountCustomer({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .post(`api/customers/block`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            commit("setPostBlockAccountCustomer", response.data.data);
            resolve("Block successful", response.data);
          }
        })
        .catch((error) => {
          reject("something went wrong", error);
        });
    });
  },

  async postUnlockAccountCustomer({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .post(`api/customers/unlock`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            commit("setUnlockAccountCustomer", response.data.data);
            resolve("Unlock successful", response.data);
          }
        })
        .catch((error) => {
          reject("something went wrong", error);
        });
    });
  },

  async getListCardActivities({ commit }, data) {
    await http_mongo
      .get(`api/list-activities`, {
        params: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListCardActivities", response.data.data);
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
