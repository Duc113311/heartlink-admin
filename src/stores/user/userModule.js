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
};

const getters = {};

const mutations = {
  setListCardCustomer(state, data) {
    state.listUser = data;
  },

  setDetailInformationCustomer(state, data) {
    state.user_profile = data;
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
};

export default {
  state,
  getters,
  mutations,
  actions,
};
