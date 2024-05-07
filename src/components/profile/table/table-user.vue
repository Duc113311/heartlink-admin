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

            <th scope="col" class="px-6 py-3">Avatar</th>

            <th scope="col" class="px-6 py-3">FullName</th>

            <th scope="col" class="px-6 py-3">Age</th>

            <th scope="col" class="px-6 py-3">Address</th>

            <th scope="col" class="px-6 py-3">Gender</th>

            <th scope="col" class="px-6 py-3">Verified</th>

            <th scope="col" class="px-6 py-3">Online</th>

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

            <td class="px-6 py-4">
              <!-- <div class="relative w-fit" v-if="item.profiles.avatars">
                <img
                  class="w-14 h-14 rounded-full ring-1 ring-gray-300 dark:ring-gray-500"
                  :src="`${item.profiles.avatars[0].meta.url}`"
                />
                <div
                  class="absolute top-0 right-0 p-1 rounded-full bg-red-500 border-2 w-5 flex justify-center items-center text-white h-5"
                >
                  {{ item.profiles.avatars.length }}
                </div>
              </div> -->
              <div class="relative flex css-107" v-if="item.profiles.avatars">
                <div
                  class="css-c5"
                  v-for="(item, index) in item.profiles.avatars"
                  :key="index"
                >
                  <img class="css-u226" :src="`${item.meta.url}`" />
                </div>
              </div>
              <div v-else>{{ item._id }}</div>
            </td>

            <td class="px-6 py-4">{{ item.fullname }}</td>

            <td class="px-6 py-4">{{ convertDob(item.dob) }}</td>

            <td class="px-6 py-4">{{ item.profiles.address }}</td>

            <td class="px-6 py-4">{{ item.profiles.gender }}</td>

            <td class="px-6 py-4">
              <div class="flex items-center" v-if="item.explore.verified">
                <img
                  src="../../../assets/icon_svg/ic_verified.svg"
                  alt=""
                  srcset=""
                />
                <span class="text-sm pl-1">Verified</span>
              </div>
              <div v-else class="flex items-center">
                <img
                  src="../../../assets/icon_svg/ic_not_verified.svg"
                  alt=""
                  srcset=""
                />
                <span class="text-sm pl-1">Not verified</span>
              </div>
            </td>

            <td class="px-6 py-4">
              <div class="flex items-center" v-if="item.onlineNow">
                <img
                  src="../../../assets/icon_svg/ic_online.svg"
                  alt=""
                  srcset=""
                />
                <span class="text-sm pl-1">Online</span>
              </div>
              <div v-else class="flex items-center">
                <img
                  src="../../../assets/icon_svg/ic_offline.svg"
                  alt=""
                  srcset=""
                />
                <span class="text-sm pl-1">Offline</span>
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

                <button
                  @click="onClickBlockAccount(item)"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                >
                  <span
                    class="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                  >
                    Block
                  </span>
                </button>
                <button
                  @click="onClickUnlockAccount(item)"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                >
                  <span
                    class="relative px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0"
                  >
                    Unlock
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
            >{{ currentPageUser === 0 ? "1" : currentPageUser }}-{{
              limitUser
            }}</span
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
import funValidation from "../../../middleware/validation";

export default {
  name: "table-user",

  data() {
    return {
      currentPage: 1,
      totalPages: 50,
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
      return this.$store.state.userModule.listUser.list_data;
    },
    totalUser() {
      return this.$store.state.userModule.listUser.total;
    },

    limitUser() {
      return this.$store.state.userModule.listUser.limit;
    },
    currentPageUser() {
      return this.$store.state.userModule.listUser.currentPage;
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

    convertDob(val) {
      return funValidation.convertBirthday(val);
    },

    handleSizeChange() {},

    onClickView(val) {
      this.$emit("onShowDetailUser", val);
    },

    onClickBlockAccount(val) {
      this.$emit("onShowBlockAccount", val);
    },

    onClickUnlockAccount(val) {
      this.$emit("onShowUnlockAccount", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.css-107 {
  opacity: 1;
  background: transparent;
  color: rgb(52, 71, 103);
}

.css-c5 {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-shrink: 0;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  line-height: 1;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  transition: all 200ms ease-in-out 0s;
  background: transparent;
  font-weight: 700;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 0.75rem;
  border: 0.125rem solid rgb(255, 255, 255);
  cursor: pointer;
  position: relative;
  margin-left: -20px;
}

.css-u226 {
  width: 100%;
  text-align: center;
  object-fit: cover;
  color: transparent;
  text-indent: 10000px;
  height: auto;
}
</style>
