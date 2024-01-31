<template>
  <div
    class="h-[calc(100vh-438px)] relative shadow-md rounded-xl overflow-hidden sm:rounded-lg"
    v-if="listDataTable"
  >
    <div class="overflow-x-auto h-[calc(100%-60px)]">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="sticky z-10 top-0 text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">STT</th>
            <th scope="col" class="px-6 py-3">Last update</th>
            <th scope="col" class="px-6 py-3">Image</th>
            <th scope="col" class="px-6 py-3">FullName</th>
            <th scope="col" class="px-6 py-3">Reviewer Status</th>
            <th scope="col" class="px-6 py-3">AI Status</th>
            <th scope="col" class="px-6 py-3">AI Score</th>
            <th scope="col" class="px-6 py-3">AI Reason</th>
            <th scope="col" class="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody v-loading="isLoading">
          <tr
            v-for="(item, index) in listDataTable"
            :key="index"
            :id="item._id"
            style="transition: all 0.3s ease"
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
                {{ convertDate(item.dob).formattedDate }}
                <template #content>
                  <div>{{ convertDate(item.dob).formattedTime }}</div>
                </template>
              </el-tooltip>
            </td>
            <td class="px-6 py-4">
              <img
                class="w-14 h-14 rounded-full ring-1 ring-gray-300 dark:ring-gray-500"
                :src="`${item.profiles.avatars.url}`"
              />
            </td>
            <td class="px-6 py-4">{{ item.fullname }}</td>
            <td class="px-6 py-4">
              <div
                :class="`${
                  renderReviewStatus(item.profiles.avatars.status).colorText
                }`"
              >
                {{ renderReviewStatus(item.profiles.avatars.status).name }}
              </div>
            </td>
            <td class="px-6 py-4">
              <div
                :class="`${
                  renderReviewStatus(item.profiles.avatars.status).colorText
                }`"
              >
                {{ renderReviewStatus(item.profiles.avatars.status).name }}
              </div>
            </td>
            <td class="px-6 py-4">100</td>
            <td class="px-6 py-4">Bạo lưc</td>

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
                    Teal to Lime
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
        <ul
          class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 gap-3"
        >
          <li>
            <a
              href="#"
              @click.prevent="goToPage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Previous</a
            >
          </li>

          <li v-for="page in visiblePages" :key="page">
            <a
              href="#"
              :class="{
                'font-active': page === currentPage,
              }"
              @click.prevent="goToPage(page)"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {{ page }}</a
            >
          </li>
          <li v-if="showEllipsisAfterLastVisiblePage">
            <a
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >...</a
            >
          </li>
          <li>
            <a
              href="#"
              @click.prevent="goToPage(currentPage + 1)"
              :disabled="currentPage === limitPage.total"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Next</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import funValidation from "../../../middleware/validation";

export default {
  name: "table-cms",

  data() {
    return {
      currentPage: 1,
      totalPages: 10,
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

    listDataTable() {
      return this.$store.state.cmsModule.listCMSTable;
    },

    limitPage() {
      const limitData = this.$store.state.cmsModule.limitPage;

      return limitData;
    },

    visiblePages() {
      const maxVisiblePages = 5; // Đặt số lượng trang hiển thị tối đa
      const totalPages = this.limitPage.total;
      const startPage = Math.max(
        1,
        this.currentPage - Math.floor(maxVisiblePages / 2)
      );
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      const pages = [];
      for (let page = startPage; page <= endPage; page++) {
        pages.push(page);
      }

      debugger;
      return pages;
    },
    showEllipsisAfterLastVisiblePage() {
      return (
        this.visiblePages[this.visiblePages.length - 1] < this.limitPage.total
      );
    },
  },

  watch: {
    selectAll(newVal) {
      this.selectedItems = newVal
        ? Array(this.listDataTable.length).fill(true)
        : [];
    },
  },

  mounted() {},

  methods: {
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
    onClickView(val) {},

    onClickApproved(val) {
      this.$emit("onChangeApproved", val);
    },

    onClickReject(val) {
      this.$emit("onChangeRejected", val);
    },

    goToPage(page) {
      if (page >= 1 && page <= this.limitPage.total) {
        this.currentPage = page;
        // Gọi API hoặc thực hiện các thao tác khác khi chuyển trang

        this.$emit("onChangeLimitNext", {
          currentPage: this.currentPage,
          pageSize: this.totalPages,
        });
      }
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
</style>
