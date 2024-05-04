import { http_mongo } from "../../configs/http-mongo";

const state = {
  listImageCMS: [],

  listReview: [
    {
      value: 0,
      label: "Pending",
    },
    {
      value: 1,
      label: "Approved",
    },
    {
      value: 2,
      label: "Rejected",
    },
  ],

  listReviewHistory: [
    {
      value: 1,
      label: "Approved",
    },
    {
      value: 2,
      label: "Rejected",
    },
  ],

  listAI: [
    {
      value: 0,
      label: "Pending",
    },
    {
      value: 1,
      label: "Approved",
    },
    {
      value: 2,
      label: "Rejected",
    },
  ],

  listCMSTable: [],
  limitPage: {},

  totalImage: {
    totalPendingReviewer: 0,
    totalApproveReviewer: 0,
    totalRejectReviewer: 0,
    totalPendingAI: 0,
    totalApproveAI: 0,
    totalRejectAI: 0,
  },

  listHistory: [],
  limitPageHistory: {},
};

const getters = {};

const mutations = {
  setListImagesCMS(state, data) {
    debugger;
    state.listImageCMS = data.list_data;
  },

  setListCMSTable(state, data) {
    state.listCMSTable = data.list_data;
    state.limitPage.currentPage = data.currentPage;
    state.limitPage.limit = data.limit;
    state.limitPage.total = data.total;
    state.limitPage.count = data.count;
  },

  setListRemoveTable(state, id) {
    const index = state.listCMSTable.findIndex((item) => item._id === id);
    if (index !== -1) {
      state.listCMSTable.splice(index, 1);
    }
  },
  setListRemoveTableHistory(state, id) {
    const index = state.listHistory.findIndex((item) => item._id === id);
    if (index !== -1) {
      state.listHistory.splice(index, 1);
    }
  },

  setListImagesCMSPush(state, data) {
    state.listCMSTable = [...state.listCMSTable, ...data.list_data];
  },

  setListImagesQuickPush(state, data) {
    state.listImageCMS = [...state.listImageCMS, ...data.list_data];
  },

  setTotalImages(state, data) {
    state.totalImage.totalPendingReviewer = data.totalPendingReviewer;
    state.totalImage.totalApproveReviewer = data.totalApproveReviewer;
    state.totalImage.totalRejectReviewer = data.totalRejectReviewer;
    state.totalImage.totalPendingAI = data.totalPendingAI;
    state.totalImage.totalApproveAI = data.totalApproveAI;
    state.totalImage.totalRejectAI = data.totalRejectAI;
  },

  setTotalStoreImage(state, status) {
    state.totalImage.totalPendingReviewer--;
    if (status === 1) {
      state.totalImage.totalApproveReviewer++;
    } else {
      state.totalImage.totalRejectReviewer++;
    }
  },

  setHistoryImages(state, data) {
    state.listHistory = data.list_data;
  },

  setListHistoryTable(state, data) {
    state.limitPageHistory.currentPage = data.currentPage;
    state.limitPageHistory.limit = data.limit;
    state.limitPageHistory.total = data.total;
    state.limitPageHistory.count = data.count;
  },
};

const actions = {
  async getListImageCMS({ commit }, data) {
    await http_mongo
      .get(`api/avatars/card-images`, {
        params: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListImagesCMS", response.data.data);
          commit("setListCMSTable", response.data.data);
        }
      })
      .catch((error) => {});
  },

  async getListImageCMSPush({ commit }, data) {
    await http_mongo
      .get(`api/avatars/card-images`, {
        params: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListImagesCMSPush", response.data.data);
        }
      })
      .catch((error) => {});
  },

  async getListImageQuickPush({ commit }, data) {
    await http_mongo
      .get(`api/avatars/card-images`, {
        params: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          commit("setListImagesQuickPush", response.data.data);
        }
      })
      .catch((error) => {});
  },

  async putApproveImage({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .put(
          `api/avatars/${data.imageId}/update-avatar-status`,
          data.objectImage,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            resolve("Unlock successful", response);
          }
        })
        .catch((error) => {
          reject("validation error", error);
        });
    });
  },

  async getTotalImages({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .get(`api/avatars/total`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            commit("setTotalImages", response.data.data);
          }
        })
        .catch((error) => {
          reject("validation error", error);
        });
    });
  },

  async getListHistoryImage({ commit }, data) {
    return new Promise((resolve, reject) => {
      http_mongo
        .get(`api/avatars/history-images`, {
          params: data,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            commit("setHistoryImages", response.data.data);
            commit("setListHistoryTable", response.data.data);
          }
        })
        .catch((error) => {
          reject("validation error", error);
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
