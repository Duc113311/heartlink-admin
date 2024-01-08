<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">STT</th>
          <th scope="col" class="px-6 py-3">Primary Key</th>
          <th scope="col" class="px-6 py-3">English</th>
          <th scope="col" class="px-6 py-3">Vietnamese</th>
          <th scope="col" class="px-6 py-3">Japanese</th>
          <th scope="col" class="px-6 py-3">Create by</th>
          <th scope="col" class="px-6 py-3 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
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
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-table-search-1" class="sr-only"
                >checkbox</label
              >
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center justify-start">{{ index }}</div>
          </td>
          <td class="px-6 py-4">{{ item.code }}</td>
          <td class="px-6 py-4">{{ item.langs.en }}</td>
          <td class="px-6 py-4">{{ item.langs.vi }}</td>
          <td class="px-6 py-4">{{ item.langs.ja }}</td>

          <td class="px-6 py-4">
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

          <td class="px-6 py-4">
            <div class="gap-2 flex justify-center">
              <button
                @click="onClickView()"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                View
              </button>
              <button
                @click="onClickEdit(item)"
                class="font-medium text-green-500 dark:text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                @click="onClickDelete(item)"
                class="font-medium text-red-500 dark:text-blue-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
      <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 gap-3">
        <li>
          <a
            href="#"
            @click.prevent="goToPage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >Previous</a
          >
        </li>
        <li v-for="page in totalPages" :key="page">
          <a
            href="#"
            :class="{
              'text-blue-700 bg-blue-100 !important': page === currentPage,
            }"
            @click.prevent="goToPage(page)"
            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {{ page }}</a
          >
        </li>
        <li v-if="showEllipsisAfterLastVisiblePage">
          <span>...</span>
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
</template>

<script>
import funValidation from "../../../middleware/validation";

export default {
  name: "table-language",

  data() {
    return {
      currentPage: 1,
      totalPages: 10,
    };
  },

  props: {
    dataTable: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    listDataTable() {
      return this.dataTable;
    },

    limitPage() {
      const limitData = this.$store.state.profileModule.limitPage;

      return limitData;
    },
  },

  mounted() {},

  methods: {
    convertDate(val) {
      const resultDate = funValidation.convertDateTime(val.when);
      return resultDate;
    },

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
  },
};
</script>

<style lang="scss" scoped>
.font-w {
  font-weight: 700;
  background-color: blueviolet;
}
</style>
