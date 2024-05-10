<!-- eslint-disable prettier/prettier -->
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
            <th scope="col" class="px-6 py-3">Agent</th>
            <th scope="col" class="px-6 py-3">Reported Object</th>
            <th scope="col" class="px-6 py-3">Reason</th>
            <th scope="col" class="px-6 py-3">Reason title</th>
            <th scope="col" class="px-6 py-3">Reason detail</th>
            <th scope="col" class="px-6 py-3">Comment</th>
            <th scope="col" class="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody v-if="listDataTable.length > 0">
          <tr
            v-for="(item, index) in listDataTable"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="px-6 py-4">
              <div class="flex items-center justify-start">{{ index }}</div>
            </td>
            <!-- Agent -->
            <td class="px-6 py-4">
              <div class="flex items-center gap-2">
                <div
                  class="font-semibold"
                  v-if="item.profileAgent.length !== 0"
                >
                  {{ item.profileAgent[0].fullname }}
                </div>
              </div>
            </td>
            <!-- Reported -->
            <td class="px-6 py-4">
              <div class="flex items-center gap-2">
                <div
                  class="font-semibold"
                  v-if="item.profileReported.length !== 0"
                >
                  {{ item.profileReported[0].fullname }}
                </div>
              </div>
            </td>
            <td class="px-6 py-4 w-[300px]">
              <div v-if="item.reasonCode.length !== 0">
                {{ renderReasonCode(item.reasonCode) }}
              </div>
            </td>
            <td class="px-6 py-4 w-[300px]">
              <div v-if="item.codeTitle.length !== 0">
                {{ renderTitleCode(item.reasonCode, item.codeTitle) }}
              </div>
            </td>
            <td class="px-6 py-4 w-[300px]">
              <div v-if="item.codeDetail.length !== 0">
                {{
                  renderDetailCode(
                    item.reasonCode,
                    item.codeTitle,
                    item.codeDetail
                  )
                }}
              </div>
            </td>
            <td class="px-6 py-4">{{ item.comments }}</td>
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
                  @click="onClickBlock(item)"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                >
                  <span
                    class="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                  >
                    Block account
                  </span>
                </button>

                <button
                  @click="onClickUnlock(item)"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                >
                  <span
                    class="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                  >
                    Unlock
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td class="text-center p-96" :colspan="number_of_columns">
              <div class="flex justify-center items-center">
                <div>
                  <img
                    src="../../../assets/icon_svg/ic_not_data.svg"
                    width="100"
                    alt=""
                  />
                  <div class="font-medium text-base">Not data</div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="absolute h-[60px] bottom-0 border-t-2 left-0 w-full bg-slate-100"
    >
      <nav
        class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span
          class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
          >Showing
          <span class="font-semibold text-gray-900 dark:text-white"
            >{{
              limitPage.currentPage === 0
                ? "1"
                : parseInt(limitPage.currentPage) + 1
            }}-{{ limitPage.limit }}</span
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
import { mapActions } from "vuex";

export default {
  name: "table-report",

  data() {
    return {
      currentPage: 1,
      totalPages: 50,
      number_of_columns: 8,
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
      return this.$store.state.commonModule.reportObject.list_data;
    },

    limitPage() {
      const limitData = this.$store.state.commonModule.reportObject;
      return limitData;
    },

    listReasons() {
      const result = this.$store.state.commonModule.listReasons;
      return result;
    },
  },

  methods: {
    ...mapActions(["getDetailInformationCustomer"]),

    renderReasonCode(val) {
      const listReasonParam = this.listReasons;

      const findData = listReasonParam.find((x) => x.code === val);

      return findData.value;
    },

    renderTitleCode(valueReasonCode, valueCodeTitle) {
      const listReasonParam = this.listReasons;

      const findData = listReasonParam.find((x) => x.code === valueReasonCode);
      if (findData) {
        const findDataTitle = findData.codeReason.find(
          (x) => x.codeTitle === valueCodeTitle
        );
        if (findDataTitle) {
          return findDataTitle.value;
        }
      }
    },

    renderDetailCode(valueReasonCode, valueCodeTitle, valueCodeDetail) {
      const listReasonParam = this.listReasons;

      const findData = listReasonParam.find((x) => x.code === valueReasonCode);
      if (findData) {
        const findDataTitle = findData.codeReason.find(
          (x) => x.codeTitle === valueCodeTitle
        );
        if (findDataTitle) {
          const findDetail = findDataTitle.codeReasonDetail.find(
            (x) => x.codeDetail === valueCodeDetail
          );

          if (findDetail) {
            return findDetail.value;
          }
        }
      }
    },

    async handleCurrentChange(val) {
      this.$emit("onChangeLimitNext", {
        currentPage: val - 1,
        pageSize: this.totalPages,
      });
    },

    goToPage(page) {
      if (page >= 1 && page <= this.limitPage.total) {
        this.currentPage = page;
        this.$emit("onChangeLimitNext", {
          currentPage: this.currentPage,
          pageSize: this.totalPages,
        });
      }
    },

    onClickBlock(val) {
      this.$emit("onShowFormBlock", val);
    },

    onClickUnlock(val) {
      this.$emit("onShowFormUnlock", val);
    },

    onClickView(val) {
      this.$emit("onShowReportDetail", val);
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

.centered-table {
  margin: auto; /* Canh giữa bảng */
  border-collapse: collapse; /* Gộp khung của bảng */
  width: 50%; /* Đặt chiều rộng của bảng */
}

.centered-table td {
  text-align: center; /* Căn giữa nội dung của ô */
  border: 1px solid #dddddd; /* Khung của ô */
  padding: 8px; /* Khoảng cách giữa nội dung và khung của ô */
}

.centered-table th {
  border: 1px solid #dddddd; /* Khung của ô tiêu đề */
  padding: 8px; /* Khoảng cách giữa nội dung và khung của ô tiêu đề */
}
</style>
