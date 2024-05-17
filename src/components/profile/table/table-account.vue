<template>
  <div
    v-loading="isShowLoading"
    class="relative overflow-hidden shadow-md sm:rounded-lg"
    v-if="listDataTable"
  >
    <div class="hide-scroll">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs sticky top-0 z-20 text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">STT</th>
            <th scope="col" class="px-6 py-3">Full name</th>
            <th scope="col" class="px-6 py-3">Address</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Phone number</th>
            <th scope="col" class="px-6 py-3">Disable</th>
            <th scope="col" class="px-6 py-3">Role</th>
            <th scope="col" class="px-6 py-3">Create by</th>
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
              <div class="">{{ index }}</div>
            </td>
            <td class="px-6 py-4">{{ item.name }}</td>
            <td class="px-6 py-4">{{ item.address }}</td>
            <td class="px-6 py-4">{{ item.email }}</td>
            <td class="px-6 py-4">{{ item.phone }}</td>
            <td class="px-6 py-4">{{ item.disable }}</td>
            <td class="px-6 py-4">{{ item.role }}</td>

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
                        <div
                          class="mb-4 text-base text-gray-500 dark:text-gray-300"
                        >
                          <div class="p-2">
                            Do you want to reset password
                            <b>{{ item.name }}</b>
                            account?
                          </div>
                        </div>
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
                  v-model:visible="popoverVisibleUnlock[item._id]"
                >
                  <template #reference>
                    <button
                      class="font-medium text-red-500 dark:text-blue-500 hover:underline"
                    >
                      Unlock
                    </button>
                  </template>

                  <template v-slot="">
                    <div class="flex justify-center items-center w-full">
                      <div class="w-full text-center">
                        <div
                          class="mb-4 text-base text-gray-500 dark:text-gray-300"
                        >
                          <div class="p-2">
                            Do you want to unlock
                            <b>{{ item.name }}</b>
                            account?
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-center items-center space-x-4">
                      <button
                        @click="onClickCancelUnlock(item._id)"
                        type="button"
                        class="py-2 px-3 text-sm font-medium text-gray-500 bg-slate-50 rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        No, cancel
                      </button>
                      <button
                        @click="onClickUnlock(item)"
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
                  v-model:visible="popoverVisibleDisable[item._id]"
                >
                  <template #reference>
                    <button
                      class="font-medium text-red-500 dark:text-blue-500 hover:underline"
                    >
                      Block
                    </button>
                  </template>

                  <template v-slot="">
                    <div class="flex justify-center items-center w-full">
                      <div class="w-full text-center">
                        <div
                          class="mb-4 text-base text-gray-500 dark:text-gray-300"
                        >
                          <div class="p-2">
                            Do you want to disable
                            <b>{{ item.name }}</b>
                            account?
                          </div>
                        </div>
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
                        <div
                          class="mb-4 text-base text-gray-500 dark:text-gray-300"
                        >
                          <div class="p-2">
                            Do you want to delete
                            <b>{{ item.name }}</b>
                            account?
                          </div>
                        </div>
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
    <div class="absolute h-[60px] bottom-0 left-0 w-full bg-slate-100">
      <nav
        class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span
          class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
          >Showing

          <span class="font-semibold text-gray-900 dark:text-white"
            >{{ currentPageUser === 0 ? "1" : currentPageUser }}-{{
              limitUser
            }}</span
          >

          of

          <span class="font-semibold text-gray-900 dark:text-white">{{
            totalAccount
          }}</span></span
        >

        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="limitUser"
          :total="totalAccount"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
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
      popoverVisibleUnlock: {},
      selectAll: false,
      selectedItems: [],

      number_of_columns: "8",
    };
  },

  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isShowLoading() {
      return this.loading;
    },
    listDataTable() {
      return this.$store.state.accountModule.listAccount.list_data;
    },

    totalAccount() {
      return this.$store.state.accountModule.listAccount.total;
    },

    limitUser() {
      return this.$store.state.accountModule.listAccount.limit;
    },
    currentPageUser() {
      return this.$store.state.accountModule.listAccount.currentPage;
    },
  },

  mounted() {},

  methods: {
    onClickUnlock(val) {
      this.$emit("onChangeUnlockData", val);
      this.popoverVisibleUnlock[val._id] = false;
    },

    onClickCancelUnlock(val) {
      this.popoverVisibleUnlock[val._id] = false;
    },
    convertDate(val) {
      const resultDate = funValidation.convertDateTime(val.when);
      return resultDate;
    },

    onClickReset(val) {
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
