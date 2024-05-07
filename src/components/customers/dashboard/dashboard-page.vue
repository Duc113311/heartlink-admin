<!-- eslint-disable prettier/prettier -->
<template>
  <div class="w-full h-full">
    <div
      class="flex flex-col gap-3 h-[50px] sm:flex-row sm:items-center sm:justify-between"
    >
      <h2 class="text-xl font-bold text-black">List user</h2>

      <nav>
        <ol class="flex items-center gap-2">
          <li>
            <a class="font-medium" href="index.html">Dashboard /</a>
          </li>

          <li class="text-blue-400">Profile</li>
        </ol>
      </nav>
    </div>

    <!-- Thong ke -->

    <div class="grid grid-cols-12 2xl:grid-cols-12 gap-x-5 mt-4">
      <div class="card col-span-12 lg:col-span-6 2xl:col-span-2 lg:mb-0 mb-4">
        <div class="md:flex-0 shrink-0">
          <div
            class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="flex-auto p-2 text-center">
              <h1
                class="relative z-10 text-sm text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
              >
                <span id="status1">Total customer</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">0</h6>
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
                <span id="status1">Total customer verified</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">0</h6>
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
                <span id="status1">Total customer block</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">0</h6>
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
                <span id="status1">Total customer online</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">0</h6>
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
                <span id="status1">Total customer offline</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">0</h6>
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
                <span id="status1">Total reported</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">0</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Search -->

    <div
      class="flex mt-4 justify-between items-center flex-col sm:flex-row mb-4"
    >
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
          placeholder="Enter information customer to search"
          @input="onChangeSearch(inputSearch)"
          required
        />
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Disable account
        </button>

        <button
          type="button"
          class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Delete all
        </button>
      </div>
    </div>

    <!-- Table -->

    <div class="mt-4 w-full">
      <TableUser
        :isLoading="isLoading"
        @onChangeLimitNext="onChangeLimitNext"
        @onShowBlockAccount="onShowBlockAccount"
        @onShowUnlockAccount="onShowUnlockAccount"
        @onShowDetailUser="onShowDetailUser"
      ></TableUser>
    </div>

    <!-- Show detail -->
    <el-dialog
      v-model="isShowViewDetailCustomer"
      width="25%"
      align-center
      @close="closeDialog"
      draggable
    >
      <template #title>
        <div class="text-lg font-semibold text-slate-500">
          View detail customer
        </div>
      </template>
      <ViewDetail :objectCustomer="objectCustomer"></ViewDetail>
    </el-dialog>

    <el-dialog v-model="isShowFormBlock" title="Shipping address" width="500">
      <template #title>
        <div class="text-lg font-semibold text-slate-500">
          Bạn chắc chắn muốn block account?
        </div>
      </template>
      <ViewBlock></ViewBlock>
      <template #footer>
        <div class="dialog-footer">
          <button
            @click="onClickCancelBlock()"
            type="button"
            class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-semibold rounded-lg text-base px-5 py-1 text-center me-2 mb-2"
          >
            Cancel
          </button>
          <button
            @click="onClickApplyBlock()"
            type="button"
            class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-semibold rounded-lg text-base px-5 py-1 text-center mb-2"
          >
            Apply
          </button>
        </div>
      </template>
    </el-dialog>

    <el-dialog v-model="isShowFormUnlock" title="Shipping address" width="500">
      <template #title>
        <div class="text-lg font-semibold text-slate-500">
          Bạn chắc chắn muốn unlock account?
        </div>
      </template>
      <div>
        Bạn mở khóa tài khoản <span class="font-semibold">Duc nguyen</span> sẽ
        có thể truy cập vào Ứng dụng!
      </div>
      <template #footer>
        <div class="dialog-footer">
          <button
            @click="onClickCancelUnlock()"
            type="button"
            class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-semibold rounded-lg text-base px-5 py-1 text-center me-2 mb-2"
          >
            Cancel
          </button>
          <button
            @click="onClickApplyUnlock()"
            type="button"
            class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-semibold rounded-lg text-base px-5 py-1 text-center mb-2"
          >
            Apply
          </button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import ViewBlock from "../../profile/report/view-block";
import ViewDetail from "../../profile/detail-cms/view-detail";
import TableUser from "../../profile/table/table-user";
import { mapActions } from "vuex";
export default {
  name: "dashboard-page",
  components: {
    ViewBlock,
    ViewDetail,
    TableUser,
  },
  data() {
    return {
      inputSearch: "",
      isLoading: false,
      isShowViewDetailCustomer: false,
      objectCustomer: {},
      isShowFormBlock: false,
      isShowFormUnlock: false,
    };
  },

  async created() {
    this.isLoading = true;
    await this.getListCardUsers({
      currentPage: 0,
      pageSize: 200,
      nameQuery: this.inputSearch,
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },

  mounted() {},

  methods: {
    ...mapActions(["getListCardUsers"]),

    // On change limit
    async onChangeLimitNext(val) {
      this.isLoading = true;
      await this.getListCardUsers({
        currentPage: val.currentPage,
        pageSize: val.pageSize,
        nameQuery: this.inputSearch,
      });

      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    },

    onClickApplyBlock(val) {
      this.isShowFormBlock = false;
    },

    onClickCancelBlock(val) {
      this.isShowFormBlock = false;
    },

    onClickApplyUnlock(val) {
      this.isShowFormBlock = false;
    },

    onClickCancelUnlock(val) {
      this.isShowFormBlock = false;
    },

    // Unlock
    async onShowUnlockAccount(val) {
      this.isShowFormUnlock = true;
    },

    // Block
    async onShowBlockAccount(val) {
      this.isShowFormBlock = true;
    },
    async onChangeSearch(val) {
      this.isLoading = true;
      await this.getListCardUsers({
        currentPage: 0,
        pageSize: 200,
        nameQuery: this.inputSearch,
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },

    onShowDetailUser(val) {
      this.isShowViewDetailCustomer = true;
      this.objectCustomer = val;
    },
  },
};
</script>

<style lang="scss">
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
