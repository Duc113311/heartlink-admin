<!-- eslint-disable prettier/prettier -->
<template>
  <div class="xl:flex justify-between items-center mt-4">
    <div class="flex items-center gap-5">
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
          class="block search-text w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search key, name"
          @input="onChangeSearch(inputSearch)"
          required
        />
      </div>
      <div class="flex items-center">
        <div class="text-sm font-medium text-black">Reviewer</div>
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
      </div>
      <div class="flex items-center">
        <div class="text-sm font-medium text-black">AI</div>
        <el-select
          v-model="valueAI"
          class="m-2 w-[200px] rounded-lg"
          placeholder="Select AI status "
          size="large"
          @change="onChangeAI"
        >
          <el-option label="Select all" value="-1" />

          <el-option
            v-for="item in listAIStatus"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <button
        @click="onClickReload()"
        type="button"
        class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Reload
      </button>
    </div>
  </div>
  <div
    class="h-[calc(100vh-308px)] mt-10 relative shadow-md rounded-xl overflow-hidden sm:rounded-lg"
    v-if="listDataTable"
  >
    <div class="show-scroll h-[calc(100%-60px)]">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="sticky z-10 top-0 text-xs text-white uppercase bg-blue-400 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">STT</th>

            <th scope="col" class="px-6 py-3">Last update</th>

            <th scope="col" class="px-6 py-3">Image</th>

            <th scope="col" class="px-6 py-3">FullName</th>

            <th scope="col" class="px-6 py-3">Reviewer Status</th>
            <th scope="col" class="px-6 py-3">AI Status</th>
            <th scope="col" class="px-6 py-3">Comment</th>

            <th scope="col" class="px-6 py-3">Review Violate</th>
            <th scope="col" class="px-6 py-3">AI Violate</th>

            <th scope="col" class="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item, index) in listDataTable"
            :key="index"
            :id="item._id"
            style="transition: all 0.3s ease;"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="px-6 py-4">
              <div class="flex items-center justify-start">{{ index }}</div>
            </td>

            <td class="px-6 py-4">
              <el-tooltip
                class="box-item rounded-md shadow-md"
                effect="light"
                placement="top"
              >
                {{ convertDate(item.avatars.update.when).formattedDate }}

                <template #content>
                  <div>
                    {{ convertDate(item.avatars.update.when).formattedTime }}
                  </div>
                </template>
              </el-tooltip>
            </td>
            <td class="px-6 py-4">
              <img
                class="w-14 h-14 rounded-full ring-1 ring-gray-300 dark:ring-gray-500"
                :src="`${item.avatars.meta.url}`"
              />
            </td>
            <td class="px-6 py-4">{{ item.profiles[0].fullname }}</td>
            <td class="px-6 py-4">
              <div
                class="font-semibold"
                :class="`${
                  renderReviewStatus(item.avatars.reviewerStatus).colorText
                }`"
              >
                {{ renderReviewStatus(item.avatars.reviewerStatus).name }}
              </div>
            </td>
            <td class="px-6 py-4">
              <div
                class="font-semibold"
                :class="`${
                  renderReviewStatus(item.avatars.aiStatus).colorText
                }`"
              >
                {{ renderReviewStatus(item.avatars.aiStatus).name }}
              </div>
            </td>

            <td class="px-6 py-4">{{ item.avatars.comment }}</td>
            <td class="px-6 py-4">
              <div class="w-[120px]">
                {{ renderViolate(item.avatars.reviewerViolateOption) }}
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="w-[120px]">
                {{ renderViolate(item.avatars.aiViolateOption) }}
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="gap-2 flex justify-center">
                <button
                  @click="onClickView(item)"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span
                    class="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                  >
                    View
                  </span>
                </button>
                <button
                  @click="onClickApproved(item)"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                >
                  <span
                    class="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                  >
                    Approved
                  </span>
                </button>

                <button
                  @click="onClickReject(item)"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                >
                  <span
                    class="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                  >
                    Rejected
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="absolute h-[60px] bottom-0 left-0 w-full bg-slate-100">
      <nav
        class="flex items-center h-full flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span
          class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
          >Showing
          <span class="font-semibold text-gray-900 dark:text-white"
            >{{ limitPage.currentPage === 0 ? "1" : limitPage.currentPage }}-{{
              limitPage.limit
            }}</span
          >
          of
          <span class="font-semibold text-gray-900 dark:text-white">{{
            limitPage.total
          }}</span></span
        >
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="50"
          :total="limitPage.total"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
      </nav>
    </div>
  </div>

  <el-dialog
    v-model="isShowViewImage"
    width="30%"
    align-center
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
      @onChangeApprove="onChangeApproveSaveHistory"
      @onChangeReject="onChangeRejectSaveHistory"
    ></ViewImage>
  </el-dialog>
</template>

<script>
import ViewImage from "../detail-cms/view-image";
import { mapActions } from "vuex";
import funValidation from "../../../middleware/validation";
import { mapMutations } from "vuex/dist/vuex.cjs";
import { ElNotification } from "element-plus";

export default {
  components: { ViewImage },
  name: "table-history",

  data() {
    return {
      currentPage: 1,
      totalPages: 10,
      isShowViewImage: false,
      objectImage: {},
      inputSearch: "",
      keyReviewer: -1,
      keyAI: -1,
      valueReviewer: "Approved",
      valueAI: "Select all",
    };
  },

  setup() {
    const options = [
      {
        value: "item_1",
        label: "Máu me, bạo lực",
      },
      {
        value: "item_2",
        label: "Trẻ em",
      },
      {
        value: "item_3",
        label: "Logo quyền sở hữu trí tuệ",
      },
      {
        value: "item_4",
        label: "Hình ảnh chứa chủ yếu là văn bản",
      },
      {
        value: "item_5",
        label: "Vũ khí",
      },
      {
        value: "item_6",
        label: "Hình ảnh chứa QR code, URL",
      },
      {
        value: "item_7",
        label: "Hình ảnh meme",
      },
      {
        value: "item_8",
        label: "Hình ảnh khỏa thân, tình dục",
      },
      {
        value: "item_9",
        label: "Vũ khí",
      },
    ];
    const successNotification = () => {
      const notificationInstance = ElNotification({
        title: "Success",
        message: "Image updated successfully",
        type: "success",
      });

      // Close the notification after 500ms (1 second)
      setTimeout(() => {
        notificationInstance.close();
      }, 500);
    };
    return {
      options,
      successNotification,
    };
  },

  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isLoading() {
      return this.loading;
    },
    listReviewerStatus() {
      return this.$store.state.cmsModule.listReviewHistory;
    },

    listAIStatus() {
      return this.$store.state.cmsModule.listAI;
    },

    listDataTable() {
      return this.$store.state.cmsModule.listHistory;
    },

    limitPage() {
      const limitData = this.$store.state.cmsModule.limitPageHistory;

      return limitData;
    },
  },

  watch: {
    selectAll(newVal) {
      this.selectedItems = newVal
        ? Array(this.listDataTable.length).fill(true)
        : [];
    },
  },

  async created() {
    // await this.getListHistoryImage({
    //   currentPage: 0,
    //   pageSize: 50,
    //   nameQuery: "",
    // });
  },

  mounted() {},

  methods: {
    ...mapMutations(["setListRemoveTableHistory"]),
    ...mapActions(["getListHistoryImage", "putApproveImage"]),

    async handleCurrentChange(val) {
      debugger;
      this.$emit("onChangeLimitNext", {
        currentPage: val - 1,
        pageSize: this.totalPages,
      });
    },

    async onChangeSearch(val) {
      await this.getListHistoryImage({
        currentPage: 0,
        pageSize: 50,
        statusReview: this.keyReviewer,
        statusAI: this.keyAI,
        nameQuery: this.inputSearch,
      });
    },
    renderViolate(val) {
      let resultString = [];
      for (let index = 0; index < val.length; index++) {
        const element = val[index];
        const findData = this.options.find((x) => x.value === element);

        resultString.push(findData.label);
      }
      return resultString.toString().replace(/,/g, ", ");
    },

    renderReviewStatus(val) {
      const objectStatus = {
        name: "Pending",
        colorText: "text-blue-700",
      };

      switch (val) {
        case 1:
          objectStatus.name = "Approved";
          objectStatus.colorText = "text-yellow-500";
          break;
        case 2:
          objectStatus.name = "Reject";
          objectStatus.colorText = "text-red-500";
          break;
        // No need for a default case, as it already returns the default objectStatus
      }

      return objectStatus;
    },

    renderAIStatus(val) {
      const objectStatus = {
        name: "Pending",
        colorText: "text-blue-700",
      };

      switch (val) {
        case 1:
          objectStatus.name = "Approved";
          objectStatus.colorText = "text-yellow-500";
          break;
        case 2:
          objectStatus.name = "Reject";
          objectStatus.colorText = "text-red-500";
          break;
        // No need for a default case, as it already returns the default objectStatus
      }

      return objectStatus;
    },
    convertDate(val) {
      const resultDate = funValidation.convertDateTime(val);
      return resultDate;
    },
    onClickView(val) {
      this.isShowViewImage = true;
      this.objectImage = val;
    },

    async onChangeApproveSaveHistory(val) {
      debugger;
      await this.putApproveImage(val).then(async (data) => {
        console.log(data);

        this.successNotification();

        // this.setListRemoveTableHistory(val.objectImage.imageId);
      });
      this.isShowViewImage = false;
    },

    async onChangeRejectSaveHistory(val) {
      await this.putApproveImage(val).then(async (data) => {
        this.successNotification();
        // this.setListRemoveTableHistory(val.objectImage.imageId);
      });
      this.isShowViewImage = false;
    },

    onClickApproved(val) {
      this.$emit("onChangeApproved", val);
    },

    onClickReject(val) {
      this.$emit("onChangeRejected", val);
    },

    async onChangeReviewer(val) {
      debugger;
      this.keyReviewer = val;
      await this.getListHistoryImage({
        currentPage: 0,
        pageSize: 50,
        statusReview: val,
        statusAI: this.keyAI,
        nameQuery: this.inputSearch,
      });
    },

    async onChangeAI(val) {
      this.keyAI = val;
      await this.getListHistoryImage({
        currentPage: 0,
        pageSize: 50,
        statusReview: this.keyReviewer,
        statusAI: val,
        nameQuery: this.inputSearch,
      });
    },

    async onClickReload() {
      await this.getListHistoryImage({
        currentPage: 0,
        pageSize: 50,
        statusReview: this.keyReviewer,
        statusAI: this.keyAI,
        nameQuery: this.inputSearch,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.font-active {
  color: #dbeafe;
  background-color: #1d4ed8;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.show-scroll {
  overflow-y: scroll;
}

.show-scroll::-webkit-scrollbar {
  width: 5px;
}

.show-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.show-scroll::-webkit-scrollbar-thumb {
  background: #888;
}

.show-scroll::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
