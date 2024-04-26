<template>
  <div
    v-loading="isShowLoading"
    class="h-[calc(100vh-338px)] relative overflow-hidden shadow-md sm:rounded-lg"
    v-if="listDataTable"
  >
    <div class="hide-scroll h-[calc(100%-60px)]">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs sticky top-0 z-20 text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">STT</th>
            <th scope="col" class="px-6 py-3">Avatar</th>
            <th scope="col" class="px-6 py-3">FullName</th>
            <th scope="col" class="px-6 py-3">Reviewer Status</th>
            <th scope="col" class="px-6 py-3">AI Status</th>
            <th scope="col" class="px-6 py-3">AI Score</th>
            <th scope="col" class="px-6 py-3">Violate option</th>
            <th scope="col" class="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in listDataTable"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="px-6 py-4">
              <div class="flex items-center justify-start">{{ index }}</div>
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
            <td class="px-6 py-4">{{ item.avatars.aiPoint }}</td>
            <td class="px-6 py-4">
              {{
                renderViolet(
                  item.avatars.aiViolateOption.length !== 0
                    ? item.avatars.aiViolateOption
                    : ""
                )
              }}
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
        class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
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
</template>

<script>
export default {
  name: "table-common",

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
    ];
    return {
      options,
    };
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 50,
    };
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isShowLoading() {
      return this.isLoading;
    },

    listDataTable() {
      return this.$store.state.cmsModule.listCMSTable;
    },

    limitPage() {
      const limitData = this.$store.state.cmsModule.limitPage;
      return limitData;
    },
  },

  methods: {
    async handleCurrentChange(val) {
      debugger;
      this.$emit("onChangeLimitNext", {
        currentPage: val - 1,
        pageSize: this.totalPages,
      });
    },

    handleSizeChange(val) {
      debugger;
    },
    renderViolet(val) {
      let resultName = [];
      if (val.length !== 0) {
        for (let index = 0; index < val.length; index++) {
          const element = val[index];

          const findData = this.options.find((x) => x.value === element);

          if (findData) {
            resultName.push(findData.label);
          }
        }
      }

      return resultName.join(", ");
    },

    onClickView(val) {
      this.$emit("onShowViewImage", val);
    },
    // Next page
    goToPage(page) {
      debugger;

      if (page >= 1 && page <= this.limitPage.total) {
        this.currentPage = page;
        // Gọi API hoặc thực hiện các thao tác khác khi chuyển trang
        this.$emit("onChangeLimitNext", {
          currentPage: this.currentPage,
          pageSize: this.totalPages,
        });
      }
    },

    // Render trạng thái Reviewer
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
      }

      return objectStatus;
    },

    // Render trạng thái AI
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
      }

      return objectStatus;
    },

    // Click approved
    onClickApproved(val) {
      this.$emit("onChangeApproved", val);
    },

    // Click Reject
    onClickReject(val) {
      this.$emit("onChangeRejected", val);
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

.hide-scroll {
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
  overflow-y: scroll;
}

.hide-scroll::-webkit-scrollbar {
  display: none;
}
</style>
