<template>
  <div class="w-full h-full">
    <!--  -->
    <div
      class="flex flex-col gap-3 h-[50px] sm:flex-row sm:items-center sm:justify-between"
    >
      <h2 class="text-xl font-bold text-black">List activities</h2>

      <nav>
        <ol class="flex items-center gap-2">
          <li>
            <a class="font-medium" href="index.html">Dashboard /</a>
          </li>

          <li class="text-blue-400">Activities</li>
        </ol>
      </nav>
    </div>
    <!-- Search -->
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
            class="block search-text w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter action to search"
            @input="onChangeSearch(inputSearch)"
            required
          />
        </div>
        <div class="flex items-center">
          <div class="text-sm font-medium text-black">Action</div>
          <el-select
            v-model="valueAction"
            class="m-2 w-[200px] rounded-lg"
            placeholder="Select action status"
            size="large"
            @change="onChangeAction"
          >
            <el-option label="Select all" value="-1" />

            <el-option
              v-for="item in listAction"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="flex items-center">
          <div class="text-sm font-medium text-black">AI</div>
          <el-select
            v-model="valueTypeOrder"
            class="m-2 w-[200px] rounded-lg"
            placeholder="Type action"
            size="large"
            @change="onChangeTypeOrder"
          >
            <el-option
              v-for="item in listTypeOrder"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <button
        @click="onClickReload()"
        type="button"
        class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Reload
      </button>
    </div>
    <!-- Table -->
    <TableActivities
      :isLoading="isLoading"
      @onChangeLimitNext="onChangeLimitNext"
      @onShowDetailActivities="onShowViewActivities"
    ></TableActivities>
    <!--  -->
  </div>
</template>

<script>
import TableActivities from "../profile/table/table-activities";
import { mapActions } from "vuex";
export default {
  components: { TableActivities },
  name: "action-page",

  data() {
    return {
      inputSearch: "",
      valueAction: "Select All",
      valueTypeOrder: "Image",
      isLoading: false,
      listAction: [
        {
          value: 0,
          label: "Nope",
        },
        {
          value: 1,
          label: "Like",
        },
        {
          value: 2,
          label: "Supper like",
        },
      ],
      listTypeOrder: [
        {
          value: 0,
          label: "Image",
        },
        {
          value: 1,
          label: "Prompt",
        },
      ],

      keyAction: -1,
      keyType: 0,
    };
  },

  mounted() {},
  async created() {
    this.isLoading = true;
    await this.getListCardActivities({
      currentPage: 0,
      pageSize: 100,
      actionType: -1, // Láy tất cả cá action
      fullname: this.inputSearch,
      typeOrder: 0,
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
  methods: {
    ...mapActions(["getListCardActivities"]),

    async onChangeSearch(val) {
      this.isLoading = true;
      await this.getListCardActivities({
        currentPage: 0,
        pageSize: 100,
        actionType: this.keyAction, // Láy tất cả cá action
        fullname: this.inputSearch,
        typeOrder: this.keyType,
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },

    async onChangeAction(val) {
      debugger;
      this.isLoading = true;
      this.keyAction = val;
      await this.getListCardActivities({
        currentPage: 0,
        pageSize: 100,
        actionType: this.keyAction, // Láy tất cả cá action
        fullname: this.inputSearch,
        typeOrder: this.keyType,
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },

    async onChangeTypeOrder(val) {
      debugger;
      this.isLoading = true;
      this.keyType = val;
      await this.getListCardActivities({
        currentPage: 0,
        pageSize: 100,
        actionType: this.keyAction, // Láy tất cả cá action
        fullname: this.inputSearch,
        typeOrder: this.keyType,
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },

    async onChangeLimitNext(val) {
      this.isLoading = true;

      await this.getListCardActivities({
        currentPage: val.currentPage,
        pageSize: val.pageSize,
        actionType: this.keyAction, // Láy tất cả cá action
        fullname: this.inputSearch,
        typeOrder: this.keyType,
      });

      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },

    async onClickReload() {
      this.isLoading = true;

      await this.getListCardActivities({
        currentPage: 0,
        pageSize: 100,
        actionType: this.keyAction, // Láy tất cả cá action
        fullname: this.inputSearch,
        typeOrder: this.keyType,
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },

    onShowViewActivities() {},
  },
};
</script>
