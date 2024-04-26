import { http_mongo } from "../../configs/http-mongo";

const state = {
  // Model userProfile
  user_profile: {
    oAuth2Id: "",
    fullname: "",
    username: "",
    email: "",
    phone: "",
    dob: "",
    profiles: {
      avatars: [],
      gender: "",
      about: "",
      datingPurpose: "",
      languages: [],
      zodiac: "",
      education: "",
      school: "",
      company: "",
      familyFlan: "",
      covidVaccine: "",
      personality: "",
      communicationType: "",
      loveStyle: "",
      pet: "",
      drinking: "",
      smoking: "",
      workout: "",
      dietaryPreference: "",
      socialMedia: "",
      sleepingHabit: "",
      favoriteSongs: [],
      jobTitle: "",
      showGender: false,
      orientationSexuals: [],
      showSexual: false,
      interests: [],
      address: "",
      showAge: false,
      showDistance: false,
    },
    settings: {
      distancePreference: {
        range: 10,
        unit: "km",
        onlyShowInThis: false,
      },
      genderFilter: "",
      agePreference: {
        min: 20,
        max: 30,
        onlyShowInThis: false,
      },
      showSameOrientationSexual: false,
      showOnlineStatus: false,
      showActiveStatus: false,
      autoPlayVideo: "always",
      notiSeenMsg: false,
      showMePersonLikeMe: false,
      global: {
        isEnabled: false,
        languages: [],
      },
      incognitoMode: false,
      toppicksDiscoverable: true,
    },
    verifyStatus: false,
    onlineNow: false,
    activeStatus: "",
    location: {},
    coins: 0,
    numberBooster: 0,
    numberSuperLike: 0,
    numberNotiSeenMsg: 0,
  },

  listUser: {},
};

const getters = {};

const mutations = {
  setListUsers(state, data) {
    state.listUser = data;
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
          commit("setListUsers", response.data.data);
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
