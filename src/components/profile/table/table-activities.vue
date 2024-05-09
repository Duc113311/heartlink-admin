<template>
  <div
    v-loading="isShowLoading"
    class="h-[calc(100vh-338px)] relative overflow-hidden shadow-md sm:rounded-lg"
    v-if="listDataTable"
  >
    <div class="hide-scroll h-[calc(100%-60px)]">
      <!-- Table -->

      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <!-- thead -->

        <thead
          class="text-xs sticky top-0 z-20 text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">STT</th>

            <th scope="col" class="px-6 py-3">Agent name</th>

            <th scope="col" class="px-6 py-3">Interact name</th>

            <th scope="col" class="px-6 py-3">Action</th>

            <th scope="col" class="px-6 py-3">Type Order</th>

            <th scope="col" class="px-6 py-3">Describe</th>

            <th scope="col" class="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>

        <!-- tbody -->

        <tbody v-if="listDataTable.length > 0">
          <tr
            v-for="(item, index) in listDataTable"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="px-6 py-4">
              <div class="flex items-center justify-start">{{ index }}</div>
            </td>

            <td class="px-6 py-4" :title="item.agentId">
              <el-tooltip
                v-if="item.agents.length !== 0"
                class="box-item"
                effect="light"
                :content="item.agentId"
                placement="top"
                >{{ item.agents[0].fullname }}
              </el-tooltip>
            </td>

            <td class="px-6 py-4" :title="item.interactorId">
              <el-tooltip
                v-if="item.interactors.length !== 0"
                class="box-item"
                effect="light"
                :content="item.interactorId"
                placement="top"
                >{{ item.interactors[0].fullname }}
              </el-tooltip>
            </td>

            <td class="px-6 py-4">
              <div class="" v-if="item.actionType === 0">
                <p class="text-sm font-semibold text-red-400 dark:text-black">
                  Nope
                </p>
              </div>
              <div class="" v-if="item.actionType === 1">
                <p
                  class="text-sm font-semibold text-blue-400 dark:text-blue-400"
                >
                  Like
                </p>
              </div>
              <div class="" v-if="item.actionType === 2">
                <p class="text-sm font-semibold text-red-400 dark:text-red-400">
                  Supper Like
                </p>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="" v-if="item.typeOrder === 0">
                <p class="text-sm font-semibold text-red-400 dark:text-red-400">
                  Image
                </p>
              </div>
              <div class="" v-if="item.typeOrder === 1">
                <p class="text-sm font-semibold text-red-400 dark:text-red-400">
                  Prompt
                </p>
              </div>
            </td>

            <td class="px-6 py-4">
              <div v-if="parseInt(item.typeOrder) === 0">
                <div v-if="item.typeOption.length !== 0">
                  <div v-if="item.typeOption[0].avatars">
                    <img
                      v-if="item.typeOption[0].avatars.length !== 0"
                      class="css-u226"
                      :src="`${item.typeOption[0].avatars[0].meta.url}`"
                    />
                  </div>
                </div>
              </div>

              <div v-if="parseInt(item.typeOrder) === 1">
                <div v-if="item.typeOption.length !== 0">
                  <div v-if="item.typeOption[0].promptAnswers">
                    <div v-if="item.typeOption[0].promptAnswers.length !== 0">
                      <div class="font-semibold">
                        {{ item.typeOption[0].promptAnswers[0].codePrompt }}
                      </div>
                      <div>
                        {{ item.typeOption[0].promptAnswers[0].answer }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>

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
            >{{
              currentPageUser === 0 ? "1" : parseInt(currentPageUser) + 1
            }}-{{ limitUser }}</span
          >

          of

          <span class="font-semibold text-gray-900 dark:text-white">{{
            totalUser
          }}</span></span
        >

        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="limitUser"
          :total="totalUser"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "table-activities",

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
      return this.$store.state.userModule.listActivities.list_data;
    },
    totalUser() {
      return this.$store.state.userModule.listActivities.total;
    },

    limitUser() {
      return this.$store.state.userModule.listActivities.limit;
    },
    currentPageUser() {
      return this.$store.state.userModule.listActivities.currentPage;
    },
  },

  mounted() {},

  methods: {
    handleCurrentChange(val) {
      this.$emit("onChangeLimitNext", {
        currentPage: val - 1,
        pageSize: this.limitUser,
      });
    },

    handleSizeChange() {},

    onClickView(val) {
      this.$emit("onShowDetailActivities", val);
    },

    // onClickBlockAccount(val) {
    //   this.$emit("onShowBlockAccount", val);
    // },

    // onClickUnlockAccount(val) {
    //   this.$emit("onShowUnlockAccount", val);
    // },
  },
};
</script>

<style lang="scss" scoped>
.css-u226 {
  width: 50px;
  height: 50px;
}
</style>
