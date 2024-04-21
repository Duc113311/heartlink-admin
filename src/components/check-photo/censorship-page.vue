<!-- eslint-disable prettier/prettier -->
<template>
  <div class="w-full h-full">
    <!-- Title -->
    <TitlePage></TitlePage>

    <!-- Search -->

    <!-- Thống kê -->
    <div class="grid grid-cols-12 2xl:grid-cols-12 gap-x-5 mt-4">
      <div class="card col-span-12 lg:col-span-6 2xl:col-span-2 lg:mb-0 mb-4">
        <div class="md:flex-0 shrink-0">
          <div
            class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="flex-auto p-2 text-center">
              <h1
                class="relative z-10 text-sm text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
              >
                <span id="status1">Total reviewer photo pending</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">
                {{ totalImage.totalPendingReviewer }}
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div class="card col-span-12 lg:col-span-6 2xl:col-span-2 lg:mb-0 mb-4">
        <div class="md:flex-0 shrink-0">
          <div
            class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="flex-auto p-2 text-center">
              <h1
                class="relative z-10 text-sm text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
              >
                <span id="status1">Total reviewer photo approved</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">
                {{ totalImage.totalApproveReviewer }}
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div class="card col-span-12 lg:col-span-6 2xl:col-span-2 lg:mb-0 mb-4">
        <div class="md:flex-0 shrink-0">
          <div
            class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="flex-auto p-2 text-center">
              <h1
                class="relative z-10 text-sm text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
              >
                <span id="status1">Total reviewer photo reject</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">
                {{ totalImage.totalRejectReviewer }}
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div class="card col-span-12 lg:col-span-6 2xl:col-span-2 lg:mb-0 mb-4">
        <div class="md:flex-0 shrink-0">
          <div
            class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="flex-auto p-2 text-center">
              <h1
                class="relative z-10 text-sm text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
              >
                <span id="status1">Total AI photo pending</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">
                {{ totalImage.totalPendingAI }}
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div class="card col-span-12 lg:col-span-6 2xl:col-span-2 lg:mb-0 mb-4">
        <div class="md:flex-0 shrink-0">
          <div
            class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="flex-auto p-2 text-center">
              <h1
                class="relative z-10 text-sm text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
              >
                <span id="status1">Total AI photo approved</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">
                {{ totalImage.totalApproveAI }}
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div class="card col-span-12 lg:col-span-6 2xl:col-span-2 lg:mb-0 mb-4">
        <div class="md:flex-0 shrink-0">
          <div
            class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="flex-auto p-2 text-center">
              <h1
                class="relative z-10 text-sm text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
              >
                <span id="status1">Total AI photo reject</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">
                {{ totalImage.totalRejectAI }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Search -->
    <div class="xl:flex justify-between items-center mt-4">
      <div class="flex items-center">
        <div class="relative md:w-[300px]">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            type="search"
            id="default-search"
            v-model="inputSearch"
            class="block search-text w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search key, name"
            @input="onChangeSearch(inputSearch)"
            required
          />
        </div>

        <el-select
          v-model="valueReviewer"
          class="m-2 w-[200px] rounded-lg"
          placeholder="Select reviewer status"
          size="large"
          @change="onChangeReviewer"
        >
          <el-option label="Select all" value="-1" />

          <el-option
            v-for="item in listReviewerStatus"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <el-select
          v-model="valueAI"
          class="m-2 w-[200px] rounded-lg"
          placeholder="Select AI status "
          size="large"
          @change="onChangeAI"
        >
          <el-option label="Select all" value="all" />

          <el-option
            v-for="item in listAIStatus"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="flex justify-between items-center gap-3">
        <button
          @click="drawerView = true"
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Quick Action
        </button>

        <button
          @click="drawer = true"
          type="button"
          class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          History
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="mt-4 w-full">
      <!-- <TableCms
        :loading="isLoading"
        @onChangeApproved="onChangeApproved"
        @onChangeRejected="onChangeRejected"
        @onChangeLimitNext="onChangeLimitNext"
      ></TableCms> -->

      <TableCommon
        :loading="isLoading"
        @onChangeApproved="onChangeApproved"
        @onChangeRejected="onChangeRejected"
        @onChangeLimitNext="onChangeLimitNext"
        @onShowViewImage="onShowViewImage"
      ></TableCommon>
    </div>

    <!-- History -->
    <el-drawer v-model="drawer" :with-header="false" size="80%">
      <template v-slot>
        <div class="w-full h-full text-black text-left">
          <div class="text-xl font-bold text-blue-300 pt-2 pb-2">
            Review History
          </div>

          <TableHistory
            :loading="isLoadingHistory"
            @onChangeApproved="onChangeApproved"
            @onChangeLimitNext="onChangeLimitNext"
            @onChangeRejected="onChangeRejected"
          ></TableHistory>
        </div>
      </template>
    </el-drawer>

    <!-- Quick action -->
    <el-drawer
      @close="onCloseModel()"
      v-model="drawerView"
      :with-header="true"
      size="100%"
    >
      <template #title>
        <div class="text-lg text-slate-600 font-semibold">
          CHECK VERIFY IMAGE
        </div>
      </template>
      <!--  -->
      <cms-slider ref="cmsSlider"></cms-slider>
      <!--  -->
    </el-drawer>

    <el-dialog
      v-model="isShowViewImage"
      width="30%"
      @close="closeDialog"
      draggable
    >
      <template #title>
        <div class="text-lg font-semibold text-slate-500">
          View detail image
        </div>
      </template>
      <ViewImage
        :objectImageValue="objectImage"
        @onChangeApprove="onChangeApproveSave"
        @onChangeReject="onChangeRejectSave"
      ></ViewImage>
    </el-dialog>
  </div>
</template>

<script>
import ViewImage from "../profile/detail-cms/view-image";
import TableCommon from "../profile/table/table-common";
import TableHistory from "../profile/table/table-history";
// import TableCms from "../profile/table/table-cms";
import TitlePage from "../profile/title/title-page";
import { ref } from "vue";
import funValidation from "../../middleware/validation";
import CmsSlider from "../cms/cms-slider.vue";
import { mapActions, mapMutations } from "vuex";
import { ElNotification } from "element-plus";

export default {
  name: "censorship-page",

  components: {
    ViewImage,
    TableCommon,
    TableHistory,
    // TableCms,
    TitlePage,
    CmsSlider,
  },
  data() {
    return {
      inputSearch: "",
      avatarDefault: require("@/assets/icon_svg/avatar.jpg"),
      checked2: false,
      valueReviewer: "Pending",
      valueAI: "Pending",
      isLoading: false,
      isLoadingHistory: false,
      keyReviewer: 0,
      keyAI: 0,
      isShowViewImage: false,
      objectImage: {},
    };
  },

  setup() {
    const currentPage2 = ref(5);
    const pageSize2 = ref(100);
    const small = ref(false);
    const background = ref(false);
    const disabled = ref(false);
    const drawer = ref(false);
    const drawerView = ref(false);

    const successNotification = () => {
      const notificationInstance = ElNotification({
        title: "Success",
        message: "Image updated successfully",
        type: "success",
      });

      // Close the notification after 1000ms (1 second)
      setTimeout(() => {
        notificationInstance.close();
      }, 1000);
    };
    return {
      currentPage2,
      pageSize2,
      small,
      background,
      disabled,
      drawer,
      drawerView,
      successNotification,
    };
  },

  computed: {
    listUser() {
      return this.$store.state.cmsModule.listHistory;
    },

    listReviewerStatus() {
      return this.$store.state.cmsModule.listReview;
    },

    listAIStatus() {
      return this.$store.state.cmsModule.listAI;
    },

    totalImage() {
      return this.$store.state.cmsModule.totalImage;
    },
  },

  async created() {
    this.isLoading = true;
    await this.getListImageCMS({
      currentPage: 0,
      pageSize: 100,
      statusReview: 0,
      statusAI: 0,
      nameQuery: "",
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  },

  mounted() {},

  methods: {
    ...mapMutations([
      "setListRemoveTable",
      "getListImageCMSPush",
      "setTotalStoreImage",
    ]),

    ...mapActions([
      "getListImageCMS",
      "putApproveImage",
      "getTotalImages",
      "getListHistoryImage",
    ]),

    onShowViewImage(val) {
      this.isShowViewImage = true;
      this.objectImage = val;
    },

    async onChangeApproveSave(val) {
      await this.putApproveImage(val).then(async (data) => {
        console.log(data);

        this.successNotification();

        this.setListRemoveTable(val.objectImage.imageId);
      });

      const valueStatus = 1;
      this.setTotalStoreImage(valueStatus);
      const totalCMSTable = this.$store.state.cmsModule.listCMSTable.length;

      if (totalCMSTable === 90) {
        await this.getListImageCMSPush({
          currentPage: 0,
          pageSize: 100,
        });
      }

      this.isShowViewImage = false;
    },

    async onChangeRejectSave(val) {
      await this.putApproveImage(val).then(async (data) => {
        this.successNotification();
        this.setListRemoveTable(val.objectImage.imageId);
      });
      const valueStatus = 2;
      this.setTotalStoreImage(valueStatus);
      const totalCMSTable = this.$store.state.cmsModule.listCMSTable.length;
      if (totalCMSTable === 90) {
        await this.getListImageCMSPush({
          currentPage: 0,
          pageSize: 100,
        });
      }
      this.isShowViewImage = false;
    },

    closeDialog() {},

    async onChangeReviewer(val) {
      debugger;
      this.isLoading = true;
      this.keyReviewer = val;
      await this.getListImageCMS({
        currentPage: 0,
        pageSize: 100,
        statusReview: val,
        statusAI: this.keyAI,
        nameQuery: this.inputSearch,
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },

    async onChangeAI(val) {
      this.isLoading = true;
      this.keyAI = val;
      await this.getListImageCMS({
        currentPage: 0,
        pageSize: 100,
        statusReview: this.keyReviewer,
        statusAI: val,
        nameQuery: this.inputSearch,
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },

    async onChangeLimitNext(val) {
      debugger;
      this.isLoading = true;
      await this.getListImageCMS({
        currentPage: val.currentPage,
        pageSize: val.pageSize,
        statusReview: this.keyReviewer,
        statusAI: this.keyAI,
        nameQuery: this.inputSearch,
      });

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    async onChangeRejected(val) {
      debugger;
      const objectImage = {
        imageId: val.avatars.id,
        objectImage: {
          imageId: val._id,
          reviewerStatus: 2,
          comment: "",
          reviewerViolateOption: [],
        },
      };
      await this.putApproveImage(objectImage).then(async (data) => {
        debugger;
        this.successNotification();
        this.setListRemoveTable(val._id);
      });
      const valueStatus = 2;
      this.setTotalStoreImage(valueStatus);
      const totalCMSTable = this.$store.state.cmsModule.listCMSTable.length;

      if (totalCMSTable === 90) {
        await this.getListImageCMSPush({
          currentPage: 0,
          pageSize: 100,
        });
      }
      this.isLoadingHistory = true;
      setTimeout(() => {
        this.isLoadingHistory = false;
      }, 500);
      await this.getListHistoryImage({
        currentPage: 0,
        pageSize: 100,
        nameQuery: "",
      });
    },

    async onChangeApproved(val) {
      const objectImage = {
        imageId: val.avatars.id,
        objectImage: {
          imageId: val._id,
          reviewerStatus: 1,
          comment: "",
          reviewerViolateOption: [],
        },
      };
      await this.putApproveImage(objectImage).then(async (data) => {
        console.log(data);

        this.successNotification();

        this.setListRemoveTable(val._id);
      });
      const valueStatus = 1;
      this.setTotalStoreImage(valueStatus);
      const totalCMSTable = this.$store.state.cmsModule.listCMSTable.length;

      if (totalCMSTable === 90) {
        await this.getListImageCMSPush({
          currentPage: 0,
          pageSize: 100,
        });
      }
      this.isLoadingHistory = true;
      setTimeout(() => {
        this.isLoadingHistory = false;
      }, 500);
      await this.getListHistoryImage({
        currentPage: 0,
        pageSize: 100,
        nameQuery: "",
      });
    },

    async onChangeSearch(val) {
      debugger;
      this.isLoading = true;
      await this.getListImageCMS({
        currentPage: 0,
        pageSize: 100,
        statusReview: this.keyReviewer,
        statusAI: this.keyAI,
        nameQuery: this.inputSearch,
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },

    convertDate(val) {
      const resultDate = funValidation.convertDateTime(val);
      return resultDate;
    },

    onClickView(val) {
      this.$emit("onChangeViewImage", true);
    },

    onClickEdit(item) {
      this.$emit("onChangeEditImage", {
        data: item,
        status: true,
      });
    },

    onClickAI(val) {
      switch (val) {
        case 1:
          this.valueAI = "Approved";
          break;
        case 2:
          this.valueAI = "Rejected";
          break;
        default:
          this.valueAI = "Pending";
      }
    },

    onClickReviewer(val) {
      debugger;
      switch (val) {
        case 1:
          this.valueReviewer = "Approved";
          break;
        case 2:
          this.valueReviewer = "Rejected";
          break;
        default:
          this.valueReviewer = "Pending";
      }

      this.onChangeReviewer(val);
    },

    async onCloseModel() {
      debugger;
      console.log("hello", this.$refs.cmsSlider.setDefault);
      if (this.$refs.cmsSlider) {
        // Đảm bảo component con đã được mount
        this.$refs.cmsSlider.setDefault();

        console.log("hello", this.$refs.cmsSlider.currentSlideIndex);
      }
      this.isLoading = true;
      await this.getListImageCMS({
        currentPage: 0,
        pageSize: 100,
      });

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-avatar-default {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.search-text:focus-visible {
  outline: none;
}

.imageAvatar {
  width: 50px;
  height: 50px;
  border-radius: 70px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
