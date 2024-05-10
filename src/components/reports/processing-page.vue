<!-- eslint-disable prettier/prettier -->
<template>
  <div class="w-full h-full">
    <!-- Title -->

    <TitlePage></TitlePage>

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
          @click="onClickReload()"
          type="button"
          class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Reload
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="mt-4 w-full">
      <TableReport
        :isLoading="isLoading"
        @onShowFormBlock="onShowFormBlock"
        @onChangeLimitNext="onChangeLimitNext"
        @onShowReportDetail="onShowReportDetail"
        @onShowFormUnlock="onShowFormUnlock"
      ></TableReport>
    </div>

    <!-- Block -->
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
      <ViewBlock ref="view_block" :fullName="propertyName"></ViewBlock>
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

    <!-- Unlock -->
    <el-dialog v-model="isShowFormUnlock" title="Shipping address" width="500">
      <template #title>
        <div class="text-lg font-semibold text-slate-500">
          Bạn chắc chắn muốn unlock account?
        </div>
      </template>
      <div>
        Bạn mở khóa tài khoản
        <span class="font-semibold">{{ propertyName }}</span> sẽ có thể truy cập
        vào Ứng dụng!
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
    <!-- View -->
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
      <ViewDetailBlock :objectReport="objectReport"></ViewDetailBlock>
    </el-dialog>
  </div>
</template>

<script>
import ViewDetailBlock from "../profile/report/view-detail-block";
import ViewBlock from "../profile/report/view-block";
import TableReport from "../profile/table/table-report";
import TitlePage from "../profile/title/title-page";
import { mapActions, mapMutations } from "vuex";

import { ElNotification } from "element-plus";

export default {
  components: {
    ViewDetailBlock,
    ViewBlock,
    TableReport,
    TitlePage,
  },
  name: "processing-page",
  setup() {
    const success = (val) => {
      ElNotification({
        title: "Success",
        message: val,
        type: "success",
      });
    };
    return {
      success,
    };
  },
  data() {
    return {
      inputSearch: "",
      isShowViewBlock: false,
      isShowViewBlockDetail: false,
      objectReport: {},
      propertyName: "",
      isShowFormUnlock: false,
      isLoading: false,
    };
  },

  mounted() {},

  methods: {
    ...mapMutations(["setObjectReportUnlock", "setObjectReportBlock"]),
    ...mapActions([
      "getListReportAccount",
      "postBlockAccountCustomer",
      "postUnlockAccountCustomer",
    ]),
    onShowFormBlock(val) {
      this.propertyName = val.profileReported[0].fullname;
      this.objectReport = val;
      this.isShowViewBlock = true;
    },

    async onClickReload() {
      this.isLoading = true;
      await this.getListReportAccount({
        currentPage: 0,
        pageSize: 50,
        fullname: this.inputSearch,
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },

    async onChangeSearch(val) {
      this.isLoading = true;
      await this.getListReportAccount({
        currentPage: 0,
        pageSize: 50,
        fullname: this.inputSearch,
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },

    async onChangeLimitNext(val) {
      this.isLoading = true;

      await this.getListReportAccount({
        currentPage: 0,
        pageSize: 50,
        fullname: this.inputSearch,
      });

      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },

    onShowFormUnlock(val) {
      this.objectReport = val;
      this.isShowFormUnlock = true;
    },

    onShowReportDetail(val) {
      this.objectReport = val;
      this.isShowViewBlockDetail = true;
    },

    onClickCancelBlock(val) {
      this.isShowViewBlock = false;
    },

    async onClickApplyBlock(val) {
      this.isShowViewBlock = false;

      const refBlock = this.$refs.view_block;
      let object = {
        interactorId: this.objectReport.reportedSubjectId,
        lockDuration: refBlock.valueNumberDay,
        disable: refBlock.valueForever,
      };
      await this.postBlockAccountCustomer(object).then((data) => {
        if (data) {
          this.isShowFormBlock = false;
          this.setObjectReportBlock(object);
          this.success("Block successfully");
        }
      });
    },

    async onClickApplyUnlock() {
      const object = {
        interactorId: this.objectReport.reportedSubjectId,
      };
      await this.postUnlockAccountCustomer(object).then((data) => {
        if (data) {
          this.isShowFormUnlock = false;
          this.setObjectReportUnlock(object);
          this.success("Unlock successfully ");
        }
      });
    },

    onClickCancelUnlock() {
      this.isShowFormUnlock = false;
    },
  },
};
</script>
