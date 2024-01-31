<template>
  <div class="w-full h-full">
    <!-- Title -->
    <TitlePage></TitlePage>

    <!-- Search -->

    <div
      class="h-[160px] flex justify-between items-center flex-col sm:flex-row mb-4"
    >
      <div class="flex items-center">
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
            class="block search-text w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search key, name"
            @input="onChangeSearch(inputSearch)"
            required
          />
        </div>
        <el-select
          v-model="valueReviewer"
          class="m-2 w-[200px] rounded-lg"
          placeholder="Select reviewer status"
          size="large"
        >
          <!-- <el-option label="Select reviewer status" value="all" /> -->
          <el-option
            v-for="item in listReviewerStatus"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>

        <el-select
          v-model="valueAI"
          class="m-2 w-[200px] rounded-lg"
          placeholder="Select AI status "
          size="large"
        >
          <!-- <el-option label="Select AI status" value="all" /> -->
          <el-option
            v-for="item in listAIStatus"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div class="flex items-center gap-2">
        <div class="grid grid-cols-3 gap-3">
          <div class="w-[250px] md:flex-0 shrink-0">
            <div
              @click="onClickAI(0)"
              class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
            >
              <div class="flex-auto p-2 text-center">
                <h1
                  class="relative z-10 text-base text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
                >
                  <span id="status1">AI Pending</span>
                </h1>
                <h6 class="mb-0 font-bold text-black text-lg">120.200.111</h6>
              </div>
            </div>
          </div>
          <div class="w-[250px] md:flex-0 shrink-0">
            <div
              @click="onClickAI(2)"
              class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
            >
              <div class="flex-auto p-2 text-center">
                <h1
                  class="relative z-10 text-base text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
                >
                  <span id="status1">AI Rejected</span>
                </h1>
                <h6 class="mb-0 font-bold text-black text-lg">120.200.111</h6>
              </div>
            </div>
          </div>
          <div class="w-[250px] md:flex-0 shrink-0">
            <div
              @click="onClickAI(1)"
              class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
            >
              <div class="flex-auto p-2 text-center">
                <h1
                  class="relative z-10 text-base text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
                >
                  <span id="status1">AI Approved</span>
                </h1>
                <h6 class="mb-0 font-bold text-black text-lg">120.200.111</h6>
              </div>
            </div>
          </div>
          <div class="w-[250px] md:flex-0 shrink-0">
            <div
              @click="onClickReviewer(0)"
              class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
            >
              <div class="flex-auto p-2 text-center">
                <h1
                  class="relative z-10 text-base text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
                >
                  <span id="status1">Reviewer Pending</span>
                </h1>
                <h6 class="mb-0 font-bold text-black text-lg">120.200.111</h6>
              </div>
            </div>
          </div>
          <div class="w-[250px] md:flex-0 shrink-0">
            <div
              @click="onClickReviewer(1)"
              class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
            >
              <div class="flex-auto p-2 text-center">
                <h1
                  class="relative z-10 text-base text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
                >
                  <span id="status1">Reviewer Approved</span>
                </h1>
                <h6 class="mb-0 font-bold text-black text-lg">120.200.111</h6>
              </div>
            </div>
          </div>
          <div class="w-[250px] md:flex-0 shrink-0">
            <div
              @click="onClickReviewer(2)"
              class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
            >
              <div class="flex-auto p-2 text-center">
                <h1
                  class="relative z-10 text-base text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
                >
                  <span id="status1">Reviewer Rejected</span>
                </h1>
                <h6 class="mb-0 font-bold text-black text-lg">120.200.111</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Button -->
    <div
      class="h-[50px] flex justify-between items-center flex-col sm:flex-row mb-4"
    >
      <button
        @click="drawerView = true"
        type="button"
        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Quick Action
      </button>

      <button
        @click="drawer = true"
        type="button"
        class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        History
      </button>
    </div>

    <!-- Table -->
    <TableCms
      :loading="isLoading"
      @onChangeApproved="onChangeApproved"
      @onChangeRejected="onChangeRejected"
      @onChangeLimitNext="onChangeLimitNext"
    ></TableCms>

    <!-- History -->
    <el-drawer v-model="drawer" :with-header="false" size="80%">
      <template v-slot>
        <div class="w-full h-full text-black text-left">
          <div class="text-xl font-bold text-blue-300 pt-2 pb-2">
            Review History
          </div>
          <div class="table-view w-full h-full">
            <div>
              <el-table :data="listUser" style="width: 100%">
                <el-table-column prop="date" label="STT" width="80">
                  <template v-slot="{ row }">
                    <el-checkbox
                      :size="10"
                      :id="row.id"
                      style="width: 20px; height: 20px !important"
                    ></el-checkbox>
                  </template>
                </el-table-column>
                <!--  -->
                <el-table-column
                  prop="date"
                  label="Images"
                  sortable
                  width="100"
                >
                  <template v-slot="{ row }">
                    <div
                      class="imageAvatar"
                      :id="row"
                      :style="`background-image:url(${avatarDefault})`"
                    ></div>
                  </template>
                </el-table-column>
                <!--  -->
                <el-table-column prop="name" label="Username" sortable>
                  <template v-slot="{ row }">
                    <div class="font-medium text-gray-900 whitespace-nowrap">
                      <span :id="row" class="w-[100px]">Nguyễn Văn Đức</span>
                    </div>
                  </template>
                </el-table-column>
                <!--  -->
                <el-table-column prop="name" label="Reviewer Status" sortable>
                  <template v-slot="{ row }">
                    <div class="flex items-center gap-2" :id="row">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-base">Pending</div>
                    </div>
                  </template>
                </el-table-column>
                <!--  -->
                <el-table-column prop="name" label="AI Status" sortable>
                  <template v-slot="{ row }">
                    <div class="flex items-center gap-2" :id="row">
                      <img
                        src="../../assets/icon_svg/ic_pending.svg"
                        width="18"
                        alt=""
                      />
                      <div class="text-base">Pending</div>
                    </div>
                  </template>
                </el-table-column>
                <!--  -->
                <el-table-column
                  prop="name"
                  label="AI Score"
                  sortable
                  width="120"
                >
                  <template v-slot>
                    <div class="text-base font-medium">100</div>
                  </template>
                </el-table-column>
                <!--  -->
                <el-table-column prop="name" label="Last Update" sortable>
                  <template v-slot>
                    <div class="text-base font-medium">08/01/2024</div>
                  </template>
                </el-table-column>
                <!--  -->
                <el-table-column prop="name" label="Ai Reason" sortable>
                  <template v-slot>
                    <div class="text-base font-medium">Bạo lực, Khỏa thân</div>
                  </template>
                </el-table-column>
                <!--  -->
                <el-table-column
                  prop="action"
                  label="Action"
                  :formatter="formatter"
                >
                  <template v-slot>
                    <div class="gap-2 flex justify-center">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >View</a
                      >
                      <a
                        href="#"
                        class="font-medium text-green-500 dark:text-blue-500 hover:underline"
                        >Approve</a
                      >
                      <a
                        href="#"
                        class="font-medium text-gray-800 dark:text-blue-500 hover:underline"
                        >Deject</a
                      >
                    </div>
                  </template>
                </el-table-column>
                <!--  -->
              </el-table>
            </div>
          </div>
        </div>
      </template>
    </el-drawer>

    <!-- Quick action -->
    <el-drawer
      @close="onCloseModel()"
      v-model="drawerView"
      :with-header="true"
      size="100%"
    >
      <template #title>
        <div class="text-lg text-slate-600 font-semibold">
          Check verify image
          <!-- You can add additional HTML content here for the title -->
        </div>
      </template>
      <!--  -->
      <cms-slider ref="cmsSlider"></cms-slider>
      <!--  -->
    </el-drawer>
  </div>
</template>

<script>
import TableCms from "../profile/table/table-cms";
import TitlePage from "../profile/title/title-page";
import { ref } from "vue";
import funValidation from "../../middleware/validation";
import CmsSlider from "../cms/cms-slider.vue";
import { mapActions, mapMutations } from "vuex";
import { ElNotification } from "element-plus";

export default {
  name: "censorship-page",

  components: {
    TableCms,
    TitlePage,
    CmsSlider,
  },
  data() {
    return {
      inputSearch: "",
      avatarDefault: require("@/assets/icon_svg/avatar.jpg"),
      checked2: false,
      valueReviewer: "",
      valueAI: "",
      isLoading: false,
    };
  },

  setup() {
    const currentPage2 = ref(5);
    const pageSize2 = ref(100);
    const small = ref(false);
    const background = ref(false);
    const disabled = ref(false);
    const drawer = ref(false);
    const drawerView = ref(false);

    const successNotification = () => {
      ElNotification({
        title: "Success",
        message: "Image updated successfully",
        type: "success",
      });
    };
    return {
      currentPage2,
      pageSize2,
      small,
      background,
      disabled,
      drawer,
      drawerView,
      successNotification,
    };
  },

  computed: {
    listUser() {
      return this.$store.state.cmsModule.listDataAvatar;
    },

    listReviewerStatus() {
      return this.$store.state.cmsModule.listReview;
    },

    listAIStatus() {
      return this.$store.state.cmsModule.listAI;
    },
  },

  async created() {
    this.isLoading = true;
    await this.getListImageCMS({
      currentPage: 0,
      pageSize: 100,
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },

  mounted() {},

  methods: {
    ...mapMutations(["setListRemoveTable"]),

    ...mapActions(["getListImageCMS", "putApproveImage"]),
    async onChangeLimitNext(val) {
      debugger;
      this.isLoading = true;
      await this.getListImageCMS({
        currentPage: val.currentPage,
        pageSize: val.pageSize,
      });

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    async onChangeRejected(val) {
      debugger;
      const objectImage = {
        imageId: val.profiles.avatars.id,
        objectImage: {
          status: 2,
        },
      };

      await this.putApproveImage(objectImage).then(async (data) => {
        debugger;
        this.successNotification();
        this.setListRemoveTable(val._id);
      });
    },

    async onChangeApproved(val) {
      const objectImage = {
        imageId: val.profiles.avatars.id,
        objectImage: {
          status: 1,
        },
      };

      await this.putApproveImage(objectImage).then(async (data) => {
        console.log(data);

        this.successNotification();

        this.setListRemoveTable(val._id);
      });
    },

    async onChangeSearch(val) {
      await this.getListImageCMS({
        currentPage: 0,
        pageSize: 100,
        filters: [
          {
            columnName: "fullname",
            value: val,
            operation: "contains",
            dataType: "text",
          },
        ],
      });
    },

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

    onClickAI(val) {
      switch (val) {
        case 1:
          this.valueAI = "Approved";
          break;
        case 2:
          this.valueAI = "Rejected";
          break;
        default:
          this.valueAI = "Pending";
      }
    },

    onClickReviewer(val) {
      debugger;
      switch (val) {
        case 1:
          this.valueReviewer = "Approved";
          break;
        case 2:
          this.valueReviewer = "Rejected";
          break;
        default:
          this.valueReviewer = "Pending";
      }
    },

    async onCloseModel() {
      debugger;
      await this.getListImageCMS({
        currentPage: 0,
        pageSize: 100,
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

.search-text:focus-visible {
  outline: none;
}

.imageAvatar {
  width: 50px;
  height: 50px;
  border-radius: 70px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
