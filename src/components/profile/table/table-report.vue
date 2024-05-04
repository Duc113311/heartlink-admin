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
            <th scope="col" class="px-6 py-3">Reviewer Status</th>
            <th scope="col" class="px-6 py-3">Reason</th>
            <th scope="col" class="px-6 py-3">Reason title</th>
            <th scope="col" class="px-6 py-3">Reason detail</th>
            <th scope="col" class="px-6 py-3">Type lock</th>
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
                <div class="font-semibold">
                  {{ item.profileAgent[0].fullname }}
                </div>
              </div>
            </td>
            <!-- Reported -->
            <td class="px-6 py-4">
              <div class="flex items-center gap-2">
                <div class="font-semibold">
                  {{ item.profileReported[0].fullname }}
                </div>
              </div>
            </td>
            <td class="px-6 py-4">
              Tiểu sử của người này
            </td>
            <td class="px-6 py-4">
              Hồ sơ giả, lừa đảo, không đúng là người trong hồ sơ
            </td>
            <td class="px-6 py-4">
              Hỏi xin tiền
            </td>
            <td class="px-6 py-4">
              Lừa đảo
            </td>
            <td class="px-6 py-4">
              Block
            </td>
            <td class="px-6 py-4"></td>
            <td class="px-6 py-4">
              <div class="gap-2 flex justify-center">
                <button
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span
                    class="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                  >
                    View
                  </span>
                </button>

                <button
                  @click="onClickBlock()"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                >
                  <span
                    class="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                  >
                    Block account
                  </span>
                </button>

                <el-popover placement="top" :width="200" trigger="click">
                  <template #reference>
                    <button
                      class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                    >
                      <span
                        class="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                      >
                        Unlock
                      </span>
                    </button>
                  </template>
                  <template v-slot="">
                    <div class="flex justify-center items-center w-full">
                      <div class="w-full text-center">
                        <div
                          class="mb-4 text-sm text-gray-500 dark:text-gray-300"
                        >
                          Do you want to unlock your account?
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-center items-center space-x-4">
                      <button
                        type="button"
                        class="py-1 px-3 text-sm font-medium text-gray-500 bg-slate-50 rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        No
                      </button>
                      <button
                        class="py-1 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        Yes
                      </button>
                    </div>
                  </template>
                </el-popover>
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
  },

  methods: {
    ...mapActions(["getDetailInformationCustomer"]),

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
