import { http_mongo } from "../../configs/http-mongo";

const state = {
  listDataAvatar: [
    {
      _id: "659365f201337ad888952b14",
      oAuth2Id: "GpyE22GH7kU6fXSikpZbO5HN8mZ2",
      fullname: "NguyenVanDuc",
      avatarUsers: {
        id: "t3rUr4J3mE",
        url: "https://firebasestorage.googleapis.com/v0/b/heartlink-dating-project.appspot.com/o/dating%2F64232d69024bb701000c567e_5.jpeg?alt=media&token=bd76b9de-bafb-4012-8650-e7e8d9cc5d2b",
        reviewStatus: 1,
        aiStatus: 2,
        scores: 100,
        aiReason: "Bạo lực",
      },

      createBy: "2023-04-06T02:59:31.158+00:00",
    },
    {
      _id: "659365f201337ad888952b12",
      oAuth2Id: "GpyE22GH7kU6fXSikpZbO5HS8mZ2",
      fullname: "Trang Ha Linh",
      avatarUsers: {
        id: "t3rUr4J3mE",
        url: "https://firebasestorage.googleapis.com/v0/b/heartlink-dating-project.appspot.com/o/dating%2F64232d69024bb701000c567e_5.jpeg?alt=media&token=bd76b9de-bafb-4012-8650-e7e8d9cc5d2b",
        reviewStatus: 1,
        aiStatus: 2,
        scores: 100,
        aiReason: "Bạo lực",
      },

      createBy: "2023-04-06T02:59:31.158+00:00",
    },
  ],

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
      .get(`api/avatars/need-confirm-images`, {
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

  async getListImageQuickPush({ commit }, data) {
    await http_mongo
      .get(`api/avatars/need-confirm-images`, {
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
