<template>
  <div class="w-full h-full">
    <!-- header -->
    <CensorshipPage></CensorshipPage>
    <!--  -->

    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto form-popup h-full overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
    >
      <div class="w-full max-w-6xl max-h-full form-detail">
        <!-- Modal content -->
        <div
          class="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full h-full p-5"
        >
          <!-- Modal header -->
          <div class="absolute right-0 top-0 p-2">
            <img
              @click="onHideModelBg"
              src="../../../assets/icon_svg/ic_cancel.svg"
              width="25"
              alt=""
            />
          </div>
          <!-- Modal body -->
          <div class="md:p-5 space-y-4 text-black w-full h-full">
            <div class="w-full h-full">
              <div class="float-left pl-5 pr-5 w-8/12 h-full overflow-hidden">
                <div
                  class="text-lg font-semibold flex justify-center items-center"
                >
                  CENSORED USER PHOTOS
                </div>
                <div class="text-left h-cen-name w-full pt-2 pb-2">
                  <div>
                    <span class="text-sm font-semibold">User name:</span>
                    <span class="text-sm ml-2">Nguyen Van Duc</span>
                  </div>
                  <div>
                    <span class="text-sm font-semibold">Birthday:</span>
                    <span class="text-sm ml-2">01/08/1999</span>
                  </div>
                </div>
                <!-- Ghi chú -->
                <div class="flex justify-between h-cen-option items-center">
                  <div class="flex justify-center items-center gap-3">
                    <div class="flex items-center gap-2">
                      <img
                        src="../../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Pending</div>
                    </div>
                    <div class="flex items-center gap-2">
                      <img
                        src="../../../assets/icon_svg/ic_approved.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Approved</div>
                    </div>
                    <div class="flex items-center gap-2">
                      <img
                        src="../../../assets/icon_svg/ic_disapprove.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-sm">Disapprove</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <button
                      type="button"
                      class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2"
                    >
                      Disapprove
                    </button>
                    <button
                      type="button"
                      class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2"
                    >
                      Approved
                    </button>
                  </div>
                </div>

                <!-- Table -->
                <div class="table-view mt-5">
                  <table
                    class="w-full text-sm overflow-y- text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    <thead
                      class="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                    >
                      <tr>
                        <th scope="col" class="p-4">
                          <div class="flex items-center">
                            <input
                              id="checkbox-all-search"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-all-search" class="sr-only"
                              >checkbox</label
                            >
                          </div>
                        </th>
                        <th scope="col" class="px-6 py-3">STT</th>
                        <th scope="col" class="px-6 py-3">Avatar</th>
                        <th scope="col" class="px-6 py-3">Status hand</th>
                        <th scope="col" class="px-6 py-3">Status AI</th>
                        <th scope="col" class="px-6 py-3">AI scores</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
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
                        <td class="px-6 py-4">1</td>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div class="flex items-center">
                            <div
                              class="avatar-img"
                              :style="`background-image:url(${avatarUrl})`"
                            ></div>
                          </div>
                        </th>
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-2">
                            <img
                              src="../../../assets/icon_svg/ic_pending.svg"
                              width="18"
                              alt=""
                            />
                            <div class="text-sm">Pending</div>
                          </div>
                        </td>
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-2">
                            <img
                              src="../../../assets/icon_svg/ic_pending.svg"
                              width="18"
                              alt=""
                            />
                            <div class="text-sm">Pending</div>
                          </div>
                        </td>
                        <td class="px-6 py-4">100</td>
                      </tr>
                      <tr
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
                        <td class="px-6 py-4">1</td>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div class="flex items-center">
                            <div
                              class="avatar-img"
                              :style="`background-image:url(${avatarUrl})`"
                            ></div>
                          </div>
                        </th>
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-2">
                            <img
                              src="../../../assets/icon_svg/ic_pending.svg"
                              width="18"
                              alt=""
                            />
                            <div class="text-sm">Pending</div>
                          </div>
                        </td>
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-2">
                            <img
                              src="../../../assets/icon_svg/ic_pending.svg"
                              width="18"
                              alt=""
                            />
                            <div class="text-sm">Pending</div>
                          </div>
                        </td>
                        <td class="px-6 py-4">100</td>
                      </tr>
                      <tr
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
                        <td class="px-6 py-4">1</td>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div class="flex items-center">
                            <div
                              class="avatar-img"
                              :style="`background-image:url(${avatarUrl})`"
                            ></div>
                          </div>
                        </th>
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-2">
                            <img
                              src="../../../assets/icon_svg/ic_pending.svg"
                              width="18"
                              alt=""
                            />
                            <div class="text-sm">Pending</div>
                          </div>
                        </td>
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-2">
                            <img
                              src="../../../assets/icon_svg/ic_pending.svg"
                              width="18"
                              alt=""
                            />
                            <div class="text-sm">Pending</div>
                          </div>
                        </td>
                        <td class="px-6 py-4">100</td>
                      </tr>
                      <tr
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
                        <td class="px-6 py-4">1</td>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div class="flex items-center">
                            <div
                              class="avatar-img"
                              :style="`background-image:url(${avatarUrl})`"
                            ></div>
                          </div>
                        </th>
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-2">
                            <img
                              src="../../../assets/icon_svg/ic_pending.svg"
                              width="18"
                              alt=""
                            />
                            <div class="text-sm">Pending</div>
                          </div>
                        </td>
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-2">
                            <img
                              src="../../../assets/icon_svg/ic_pending.svg"
                              width="18"
                              alt=""
                            />
                            <div class="text-sm">Pending</div>
                          </div>
                        </td>
                        <td class="px-6 py-4">100</td>
                      </tr>
                      <tr
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
                        <td class="px-6 py-4">1</td>
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div class="flex items-center">
                            <div
                              class="avatar-img"
                              :style="`background-image:url(${avatarUrl})`"
                            ></div>
                          </div>
                        </th>
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-2">
                            <img
                              src="../../../assets/icon_svg/ic_pending.svg"
                              width="18"
                              alt=""
                            />
                            <div class="text-sm">Pending</div>
                          </div>
                        </td>
                        <td class="px-6 py-4">
                          <div class="flex items-center gap-2">
                            <img
                              src="../../../assets/icon_svg/ic_pending.svg"
                              width="18"
                              alt=""
                            />
                            <div class="text-sm">Pending</div>
                          </div>
                        </td>
                        <td class="px-6 py-4">100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="float-right h-full w-4/12 overflow-hidden">
                <div class="p-5 h-full border shadow-lg">
                  <div
                    class="avatar-default"
                    :style="`background-image:url(${avatarUrl})`"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal footer -->
        </div>
      </div>
    </div>
  </div>

  <!-- Main modal -->
</template>

<script>
import CensorshipPage from "../../../components/check-photo/censorship-page";
export default {
  components: { CensorshipPage },
  name: "browse-photos-view",

  data() {
    return {
      nameDisapprove: "Disapprove",
      nameApproved: "Approved",
      avatarUrl: require("@/assets/icon_svg/avatar.jpg"),
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.form-popup {
  background-color: #0000006b;
}

.form-detail {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40rem;
}

.avatar-default {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.avatar-img {
  width: 40px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 40px;
}

.table-view {
  height: 27rem;
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
</style>
