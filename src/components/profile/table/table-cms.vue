<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">STT</th>
          <th scope="col" class="px-6 py-3">Last update</th>
          <th scope="col" class="px-6 py-3">Image</th>
          <th scope="col" class="px-6 py-3">FullName</th>
          <th scope="col" class="px-6 py-3">Reviewer Status</th>
          <th scope="col" class="px-6 py-3">AI Status</th>
          <th scope="col" class="px-6 py-3">AI Score</th>
          <th scope="col" class="px-6 py-3">AI Reason</th>
          <th scope="col" class="px-6 py-3 text-center">Action</th>
        </tr>
      </thead>
      <tbody v-loading="isLoading">
        <tr
          v-for="(item, index) in listDataTable"
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
          <td class="px-6 py-4">
            <img
              class="w-10 h-10 rounded-full ring-1 ring-gray-300 dark:ring-gray-500"
              :src="`${item.avatarUsers.url}`"
            />
          </td>
          <td class="px-6 py-4">{{ item.fullname }}</td>
          <td class="px-6 py-4">
            <div
              :class="`${
                renderReviewStatus(item.avatarUsers.reviewStatus).colorText
              }`"
            >
              {{ renderReviewStatus(item.avatarUsers.reviewStatus).name }}
            </div>
          </td>
          <td class="px-6 py-4">
            <div
              :class="`${renderAIStatus(item.avatarUsers.aiStatus).colorText}`"
            >
              {{ renderAIStatus(item.avatarUsers.aiStatus).name }}
            </div>
          </td>
          <td class="px-6 py-4">{{ item.avatarUsers.scores }}</td>
          <td class="px-6 py-4">{{ item.avatarUsers.aiReason }}</td>

          <td class="px-6 py-4">
            <div class="gap-2 flex justify-center">
              <button
                @click="onClickView(item)"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                View
              </button>
              <button
                @click="onClickEdit(item)"
                class="font-medium text-green-500 dark:text-blue-500 hover:underline"
              >
                Approved
              </button>
              <button
                @click="onClickReject(item)"
                class="font-medium text-green-500 dark:text-blue-500 hover:underline"
              >
                Rejected
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import funValidation from "../../../middleware/validation";

export default {
  name: "table-cms",

  data() {
    return {
      loading: false,
    };
  },

  props: {},

  computed: {
    isLoading() {
      return this.loading;
    },

    listDataTable() {
      return this.$store.state.cmsModule.listDataAvatar;
    },
  },

  mounted() {},

  methods: {
    renderReviewStatus(val) {
      const objectStatus = {
        name: "Pending",
        colorText: "text-blue-700",
      };

      switch (val) {
        case 1:
          objectStatus.name = "Approved";
          objectStatus.colorText = "text-yellow-500";
          break;
        case 2:
          objectStatus.name = "Reject";
          objectStatus.colorText = "text-red-500";
          break;
        // No need for a default case, as it already returns the default objectStatus
      }

      return objectStatus;
    },

    renderAIStatus(val) {
      const objectStatus = {
        name: "Pending",
        colorText: "text-blue-700",
      };

      switch (val) {
        case 1:
          objectStatus.name = "Approved";
          objectStatus.colorText = "text-yellow-500";
          break;
        case 2:
          objectStatus.name = "Reject";
          objectStatus.colorText = "text-red-500";
          break;
        // No need for a default case, as it already returns the default objectStatus
      }

      return objectStatus;
    },
    convertDate(val) {
      const resultDate = funValidation.convertDateTime(val);
      return resultDate;
    },
    onClickView(val) {},

    onClickEdit(val) {},

    onClickReject(val) {},
  },
};
</script>

<style lang="scss" scoped>
.font-active {
  color: #dbeafe;
  background-color: #1d4ed8;
}
</style>
