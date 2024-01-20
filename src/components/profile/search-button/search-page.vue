<template>
  <div class="flex justify-between items-center flex-col sm:flex-row mb-4">
    <div class="flex items-center">
      <div class="relative md:w-[500px]">
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
        v-model="valueRoles"
        class="m-2 rounded-lg"
        placeholder="Please select role"
        size="large"
      >
        <el-option
          v-for="item in dataRoles"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <div class="flex items-center gap-2">
      <button
        @click="onClickAddNew()"
        type="button"
        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Add new primary key
      </button>
      <el-popover
        placement="top"
        :width="200"
        trigger="click"
        content="Coming soon"
      >
        <template #reference>
          <button
            @click="onClickDeleteAll()"
            type="button"
            class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Delete primary all
          </button>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "search-button",

  data() {
    return {
      inputSearch: "",
      valueRoles: "",
    };
  },

  props: {
    dataRoles: {
      type: Array,
      default: () => [],
    },
  },

  mounted() {},

  methods: {
    ...mapActions(["getListInterests"]),
    async onChangeSearch(val) {
      this.$emit("onChangeSearch", val);
      await this.getListInterests({
        currentPage: 0,
        pageSize: 10,
        filters: [
          {
            columnName: "langs.en",
            value: val,
            operation: "contains",
            dataType: "text",
          },
        ],
      });
    },

    onClickAddNew() {
      this.$emit("onChangeAddNew", true);
    },

    onClickDeleteAll() {},
  },
};
</script>

<style lang="scss" scoped>
.search-text:focus-visible {
  outline: none;
}
</style>
