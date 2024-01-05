<template>
  <div class="w-full h-full">
    <div class="float-left pl-5 pr-5 w-8/12 h-full overflow-hidden">
      <div class="text-lg font-semibold flex justify-center items-center">
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
            <img src="../../assets/icon_svg/ic_pending.svg" width="18" alt="" />
            <div class="text-sm">Pending</div>
          </div>
          <div class="flex items-center gap-2">
            <img
              src="../../assets/icon_svg/ic_approved.svg"
              width="18"
              alt=""
            />
            <div class="text-sm">Approved</div>
          </div>
          <div class="flex items-center gap-2">
            <img
              src="../../assets/icon_svg/ic_disapprove.svg"
              width="18"
              alt=""
            />
            <div class="text-sm">Disapprove</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="onChangeDisapprove()"
            type="button"
            class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2"
          >
            Disapprove
          </button>
          <button
            @click="onChangeApproved()"
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
            class="sticky top-0 text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    v-model="selectAll"
                    @change="toggleSelectAll"
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
              v-for="(item, index) in propertyImage.avatarUsers"
              :key="index"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-600"
              :class="{ 'bg-slate-100': index === activeImage }"
              @click="onClickImage(item, index)"
            >
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    v-model="selectedItems[index]"
                    @change="handleCheckboxChange(item, index)"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only"
                    >checkbox</label
                  >
                </div>
              </td>
              <td class="px-6 py-4">{{ index }}</td>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div class="flex items-center">
                  <div
                    class="avatar-img"
                    :style="`background-image:url(${item.avatarDetails})`"
                  ></div>
                </div>
              </th>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <img
                    v-if="item.statusHand === 0"
                    src="../../assets/icon_svg/ic_pending.svg"
                    width="18"
                    alt=""
                  />
                  <img
                    v-if="item.statusHand === 1"
                    src="../../assets/icon_svg/ic_approved.svg"
                    width="18"
                    alt=""
                  />
                  <img
                    v-if="item.statusHand === 2"
                    src="../../assets/icon_svg/ic_disapprove.svg"
                    width="18"
                    alt=""
                  />
                  <div class="text-sm">
                    {{ statusNameHand(item.statusHand) }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <img
                    v-if="item.statusAI === 0"
                    src="../../assets/icon_svg/ic_pending.svg"
                    width="18"
                    alt=""
                  />
                  <img
                    v-if="item.statusAI === 1"
                    src="../../assets/icon_svg/ic_approved.svg"
                    width="18"
                    alt=""
                  />
                  <img
                    v-if="item.statusAI === 2"
                    src="../../assets/icon_svg/ic_disapprove.svg"
                    width="18"
                    alt=""
                  />
                  <div class="text-sm">
                    {{ statusNameHand(item.statusAI) }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">{{ item.scores }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="float-right h-full w-4/12 overflow-hidden">
      <div class="p-5 h-full border shadow-lg">
        <div
          class="avatar-default"
          :style="`background-image:url(${imageActive})`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "check-image",

  data() {
    return {
      avatarUrl: require("@/assets/icon_svg/avatar.jpg"),
      urlImage: "",
      activeImage: 0,
      selectAll: false,
      selectedItems: [],
    };
  },
  watch: {
    selectAll(newVal) {
      debugger;
      this.selectedItems = newVal
        ? Array(this.propertyImage.avatarUsers.length).fill(true)
        : [];
    },
  },
  props: ["imageDetail"],

  mounted() {},

  computed: {
    imageActive() {
      debugger;
      if (
        this.propertyImage &&
        this.propertyImage.avatarUsers &&
        this.propertyImage.avatarUsers.length > 0
      ) {
        return this.urlImage.length !== 0
          ? this.urlImage
          : this.propertyImage.avatarUsers[0].avatarDetails;
      }
      return this.avatarUrl;
    },
    propertyImage() {
      return this.imageDetail;
    },
  },

  methods: {
    toggleSelectAll() {
      if (this.selectAll) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
    },

    handleCheckboxChange(val, index) {
      debugger;
      // Do something based on the checkbox change, for example:
      const isChecked = this.selectedItems[index];

      if (isChecked) {
        console.log(`Checkbox at index ${index} is checked.`);
        // Add your logic for when the checkbox is checked
      } else {
        console.log(`Checkbox at index ${index} is unchecked.`);
        // Add your logic for when the checkbox is unchecked
      }
    },

    statusNameHand(val) {
      if (val === 0) {
        return "Pending";
      } else if (val === 1) {
        return "Approved";
      } else {
        return "Disapprove";
      }
    },

    onClickImage(val, index) {
      this.activeImage = index;
      this.urlImage = val.avatarDetails;
    },
    onChangeDisapprove() {
      debugger;
    },

    onChangeApproved() {
      debugger;
    },
  },
};
</script>

<style lang="scss" scoped>
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
