<template>
  <div class="w-full h-full">
    <!-- header -->
    <div
      class="flex flex-col gap-3 h-[50px] sm:flex-row sm:items-center sm:justify-between"
    >
      <h2 class="text-xl font-bold text-black">CMS Avatar</h2>

      <nav>
        <ol class="flex items-center gap-2">
          <li>
            <a class="font-medium" href="index.html">Dashboard /</a>
          </li>
          <li class="text-blue-400">Check image</li>
        </ol>
      </nav>
    </div>
    <!-- Search -->

    <div class="flex justify-between items-center flex-col sm:flex-row mb-4">
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
          class="block search-text w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
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

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">STT</th>
            <th scope="col" class="px-6 py-3">Date</th>
            <th scope="col" class="px-6 py-3">Full name</th>
            <th scope="col" class="px-6 py-3">Avatar</th>
            <th scope="col" class="px-6 py-3">Status hand check</th>
            <th scope="col" class="px-6 py-3">Status AI check</th>
            <th scope="col" class="px-6 py-3">AI scores</th>
            <th scope="col" class="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in listUser"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="px-6 py-4">
              <div class="flex items-center justify-start">{{ index }}</div>
            </td>
            <td class="px-6 py-4">
              <el-tooltip
                class="box-item rounded-md shadow-md"
                effect="light"
                placement="top"
              >
                {{ convertDate(item.createBy).formattedDate }}
                <template #content>
                  <div>{{ convertDate(item.createBy).formattedTime }}</div>
                </template>
              </el-tooltip>
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <div class="w-[100px] truncate" :title="item.fullname">
                {{ item.fullname }}
              </div>
            </th>
            <td class="px-6 py-4">
              <div class="flex items-center justify-start relative">
                <el-tooltip
                  class="box-item rounded-md shadow-md"
                  effect="light"
                  placement="right"
                >
                  <div class="flex items-center justify-start relative">
                    <div
                      class="w-16 h-16 p-1 rounded-full bg-avatar-default"
                      :style="`background-image:url(${
                        item.avatarUsers[0].avatarDetails !== null
                          ? item.avatarUsers[0].avatarDetails
                          : avatarDefault
                      })`"
                    />
                    <div
                      class="top-0 flex justify-center items-center left-12 text-white absolute w-[25px] h-[25px] text-center bg-red-600 border-2 border-white dark:border-gray-800 rounded-full"
                    >
                      <span class="text-xs">+9</span>
                    </div>
                  </div>
                  <template #content> <div>9 image</div> </template>
                </el-tooltip>
              </div>
            </td>

            <td class="px-6 py-4">
              <div class="flex items-center gap-2">
                <el-tooltip
                  class="box-item rounded-md shadow-md"
                  effect="light"
                  placement="right"
                >
                  <div class="flex items-center gap-2">
                    <img
                      src="../../assets/icon_svg/ic_pending.svg"
                      width="18"
                      alt=""
                    />
                    <div class="text-sm">Pending</div>
                  </div>
                  <template #content>
                    <div class="p-1 gap-2 grid">
                      <div class="flex justify-between items-center w-full">
                        <div class="flex items-center gap-2">
                          <img
                            src="../../assets/icon_svg/ic_pending.svg"
                            width="18"
                            alt=""
                          />
                          <div class="text-sm">Pending</div>
                        </div>
                        <div class="text-sm">: 5</div>
                      </div>
                      <div class="flex justify-between items-center w-full">
                        <div class="flex items-center gap-2">
                          <img
                            src="../../assets/icon_svg/ic_approved.svg"
                            width="18"
                            alt=""
                          />
                          <div class="text-sm">Approved</div>
                        </div>
                        <div class="text-sm">: 5</div>
                      </div>
                      <div class="flex justify-between items-center w-full">
                        <div class="flex items-center gap-2">
                          <img
                            src="../../assets/icon_svg/ic_disapprove.svg"
                            width="18"
                            alt=""
                          />
                          <div class="text-sm">Disapprove</div>
                        </div>
                        <div class="text-sm">: 5</div>
                      </div>
                    </div>
                  </template>
                </el-tooltip>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center gap-2">
                <el-tooltip
                  class="box-item rounded-md shadow-md"
                  effect="light"
                  placement="right"
                >
                  <div class="flex items-center gap-2">
                    <img
                      src="../../assets/icon_svg/ic_pending.svg"
                      width="18"
                      alt=""
                    />
                    <div class="text-sm">Pending</div>
                  </div>
                  <template #content>
                    <div class="p-1 gap-2 grid">
                      <div class="flex justify-between items-center w-full">
                        <div class="flex items-center gap-2">
                          <img
                            src="../../assets/icon_svg/ic_pending.svg"
                            width="18"
                            alt=""
                          />
                          <div class="text-sm">Pending</div>
                        </div>
                        <div class="text-sm">: 5</div>
                      </div>
                      <div class="flex justify-between items-center w-full">
                        <div class="flex items-center gap-2">
                          <img
                            src="../../assets/icon_svg/ic_approved.svg"
                            width="18"
                            alt=""
                          />
                          <div class="text-sm">Approved</div>
                        </div>
                        <div class="text-sm">: 5</div>
                      </div>
                      <div class="flex justify-between items-center w-full">
                        <div class="flex items-center gap-2">
                          <img
                            src="../../assets/icon_svg/ic_disapprove.svg"
                            width="18"
                            alt=""
                          />
                          <div class="text-sm">Disapprove</div>
                        </div>
                        <div class="text-sm">: 5</div>
                      </div>
                    </div>
                  </template>
                </el-tooltip>
              </div>
            </td>
            <td class="px-6 py-4">100</td>

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
          <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
          of
          <span class="font-semibold text-gray-900 dark:text-white"
            >1000</span
          ></span
        >
        <ul
          class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 gap-3"
        >
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Previous</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >3</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >4</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >5</a
            >
          </li>
          <li>
            <a
              href="#"
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
import funValidation from "../../middleware/validation";
export default {
  name: "censorship-page",

  data() {
    return {
      avatarDefault: require("@/assets/icon_svg/avatar.jpg"),
    };
  },

  computed: {
    listUser() {
      return this.$store.state.cmsModule.listDataAvatar;
    },
  },

  mounted() {},

  methods: {
    convertDate(val) {
      const resultDate = funValidation.convertDateTime(val);
      return resultDate;
    },

    onClickView(val) {
      this.$emit("onChangeViewImage", true);
    },

    onClickEdit(item) {
      this.$emit("onChangeEditImage", {
        data: item,
        status: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-avatar-default {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
