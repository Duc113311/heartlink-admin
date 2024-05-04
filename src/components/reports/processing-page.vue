<!-- eslint-disable prettier/prettier -->
<template>
  <div class="w-full h-full">
    <!-- Title -->

    <TitlePage></TitlePage>

    <!-- Thống kê -->
    <!-- <div class="grid grid-cols-12 2xl:grid-cols-12 gap-x-5 mt-4">
      <div class="card col-span-12 lg:col-span-6 2xl:col-span-2 lg:mb-0 mb-4">
        <div class="md:flex-0 shrink-0">
          <div
            class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="flex-auto p-2 text-center">
              <h1
                class="relative z-10 text-sm text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
              >
                <span id="status1"></span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg"></h6>
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
                <span id="status1"></span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg"></h6>
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
                <span id="status1"></span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg"></h6>
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
                <span id="status1"></span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg"></h6>
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
                <span id="status1"></span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg"></h6>
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
                <span id="status1"></span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg"></h6>
            </div>
          </div>
        </div>
      </div>
    </div> -->
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
            class="block search-text w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search key, name"
            @input="onChangeSearch(inputSearch)"
            required
          />
        </div>
      </div>
      <div class="flex justify-between items-center gap-3">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Reload
        </button>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Block many
        </button>

        <button
          type="button"
          class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          History
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="mt-4 w-full">
      <TableReport @onShowFormBlock="onShowFormBlock"></TableReport>
    </div>

    <el-dialog
      v-model="isShowViewBlock"
      width="20%"
      align-center
      @close="closeDialog"
      draggable
    >
      <template #title>
        <div class="text-lg font-semibold text-slate-500">
          Bạn chắc chắn muốn block account?
        </div>
      </template>
      <ViewBlock></ViewBlock>
    </el-dialog>

    <el-dialog
      v-model="isShowViewBlockDetail"
      width="30%"
      align-center
      @close="closeDialog"
      draggable
    >
      <template #title>
        <div class="text-lg font-semibold text-slate-500">
          View detail report
        </div>
      </template>
      <ViewDetailBlock></ViewDetailBlock>
    </el-dialog>
  </div>
</template>

<script>
import ViewDetailBlock from "../profile/report/view-detail-block";
import ViewBlock from "../profile/report/view-block";
import TableReport from "../profile/table/table-report";
import TitlePage from "../profile/title/title-page";
export default {
  components: {
    ViewDetailBlock,
    ViewBlock,
    TableReport,
    TitlePage,
  },
  name: "processing-page",

  data() {
    return {
      inputSearch: "",
      isShowViewBlock: false,
      isShowViewBlockDetail: true,
    };
  },

  mounted() {},

  methods: {
    onShowFormBlock(val) {
      this.isShowViewBlock = true;
    },
  },
};
</script>
