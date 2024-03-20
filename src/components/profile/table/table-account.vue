<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="show-scroll">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  v-model="selectAll"
                  @change="toggleSelectAll"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only"
                  >checkbox</label
                >
              </div>
            </th>
            <th scope="col" class="px-2 py-1">STT</th>
            <th scope="col" class="px-2 py-1">Full name</th>
            <th scope="col" class="px-2 py-1">Address</th>
            <th scope="col" class="px-2 py-1">Email</th>
            <th scope="col" class="px-2 py-1">Phone number</th>
            <th scope="col" class="px-2 py-1">Disable</th>
            <th scope="col" class="px-2 py-1">Role</th>
            <th scope="col" class="px-2 py-1">Create by</th>
            <th scope="col" class="px-2 py-1 text-center">Action</th>
          </tr>
        </thead>
        <tbody v-loading="isLoading">
          <tr
            v-for="(item, index) in listDataTable"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  v-model="selectedItems[index]"
                  @change="handleCheckboxChange(item, index)"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only"
                  >checkbox</label
                >
              </div>
            </td>
            <td class="px-2 py-1">
              <div class="">{{ index }}</div>
            </td>
            <td class="px-2 py-1">{{ item.name }}</td>
            <td class="px-2 py-1">{{ item.address }}</td>
            <td class="px-2 py-1">{{ item.email }}</td>
            <td class="px-2 py-1">{{ item.phone }}</td>
            <td class="px-2 py-1">{{ item.disable }}</td>
            <td class="px-2 py-1">{{ item.role }}</td>

            <td class="px-2 py-1">
              <el-tooltip
                class="box-item rounded-md shadow-md"
                effect="light"
                placement="top"
              >
                {{ convertDate(item.insert).formattedDate }}
                <template #content>
                  <div>{{ convertDate(item.insert).formattedTime }}</div>
                </template>
              </el-tooltip>
            </td>

            <td class="px-2 py-1">
              <div class="gap-2 flex justify-center">
                <el-popover
                  placement="left"
                  :width="400"
                  trigger="click"
                  v-model:visible="popoverVisibleReset[item._id]"
                >
                  <template #reference>
                    <button
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Reset
                    </button>
                  </template>

                  <template v-slot="">
                    <div class="flex justify-center items-center w-full">
                      <div class="w-full text-center">
                        <p
                          class="mb-4 text-base text-gray-500 dark:text-gray-300"
                        >
                          Do you want to reset password
                          <span class="font-semibold">{{ item.name }}</span>
                          account?
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-center items-center space-x-4">
                      <button
                        @click="onClickCancelReset(item._id)"
                        type="button"
                        class="py-2 px-3 text-sm font-medium text-gray-500 bg-slate-50 rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        No, cancel
                      </button>
                      <button
                        @click="onClickReset(item)"
                        class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        Yes, I'm sure
                      </button>
                    </div>
                  </template>
                </el-popover>

                <button
                  @click="onClickEdit(item)"
                  class="font-medium text-green-500 dark:text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <el-popover
                  placement="left"
                  :width="400"
                  trigger="click"
                  v-model:visible="popoverVisibleDisable[item._id]"
                >
                  <template #reference>
                    <button
                      class="font-medium text-red-500 dark:text-blue-500 hover:underline"
                    >
                      Disable
                    </button>
                  </template>

                  <template v-slot="">
                    <div class="flex justify-center items-center w-full">
                      <div class="w-full text-center">
                        <p
                          class="mb-4 text-base text-gray-500 dark:text-gray-300"
                        >
                          Do you want to disable
                          <span class="font-semibold">{{ item.name }}</span>
                          account?
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-center items-center space-x-4">
                      <button
                        @click="onClickCancelDisable(item._id)"
                        type="button"
                        class="py-2 px-3 text-sm font-medium text-gray-500 bg-slate-50 rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        No, cancel
                      </button>
                      <button
                        @click="onClickDisable(item)"
                        class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        Yes, I'm sure
                      </button>
                    </div>
                  </template>
                </el-popover>
                <el-popover
                  placement="left"
                  :width="400"
                  trigger="click"
                  v-model:visible="popoverVisibleDelete[item._id]"
                >
                  <template #reference>
                    <button
                      class="font-medium text-red-500 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </button>
                  </template>

                  <template v-slot="">
                    <div class="flex justify-center items-center w-full">
                      <div class="w-full text-center">
                        <p
                          class="mb-4 text-base text-gray-500 dark:text-gray-300"
                        >
                          Do you want to delete
                          <span class="font-semibold">{{ item.name }}</span>
                          account?
                        </p>
                      </div>
                    </div>
                    <div class="flex justify-center items-center space-x-4">
                      <button
                        @click="onClickCancel(item._id)"
                        type="button"
                        class="py-2 px-3 text-sm font-medium text-gray-500 bg-slate-50 rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        No, cancel
                      </button>
                      <button
                        @click="onClickDelete(item)"
                        class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        Yes, I'm sure
                      </button>
                    </div>
                  </template>
                </el-popover>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-full bg-slate-200">
      <nav
        class="flex w-full items-center h-full flex-column flex-wrap md:flex-row justify-between pt-4"
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
import { ref } from "vue";

export default {
  name: "table-account",

  data() {
    return {
      currentPage: 1,
      totalPages: 18,
      popoverVisibleDelete: {},
      popoverVisibleDisable: {},
      popoverVisibleReset: {},

      selectAll: false,
      selectedItems: [],
    };
  },

  props: {
    dataTable: {
      type: Array,
      default: () => [],
    },
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
      return this.dataTable;
    },

    limitPage() {
      const limitData = this.$store.state.profileModule.limitPage;

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
    toggleSelectAll() {
      if (this.selectAll) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
    },

    handleCheckboxChange(val, index) {
      debugger;
      // Do something based on the checkbox change, for example:
      const isChecked = this.selectedItems[index];

      if (isChecked) {
        console.log(`Checkbox at index ${index} is checked.`);
        // Add your logic for when the checkbox is checked
      } else {
        console.log(`Checkbox at index ${index} is unchecked.`);
        // Add your logic for when the checkbox is unchecked
      }
    },

    convertDate(val) {
      const resultDate = funValidation.convertDateTime(val.when);
      return resultDate;
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

    onClickReset(val) {
      debugger;
      this.$emit("onChangeResetData", val);
      this.popoverVisibleReset[val._id] = false;
    },

    onClickEdit(val) {
      this.$emit("onChangeUpdateData", val);
    },

    onClickDelete(val) {
      this.$emit("onChangeDeleteData", val);
      this.popoverVisibleDelete[val._id] = false;
    },

    onClickDisable(val) {
      this.$emit("onChangeDisableData", val);
      this.popoverVisibleDisable[val._id] = false;
    },

    onClickCancel(itemId) {
      this.popoverVisibleDelete[itemId] = false;
    },
    onClickCancelDisable(itemId) {
      this.popoverVisibleDisable[itemId] = false;
    },

    onClickCancelReset(itemId) {
      this.popoverVisibleReset[itemId] = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.font-active {
  color: #dbeafe;
  background-color: #1d4ed8;
}
</style>
