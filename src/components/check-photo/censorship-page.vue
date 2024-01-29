<template>
  <div class="w-full h-full">
    <!-- header -->
    <div class="flex w-full">
      <div class="flex items-start w-[600px]">
        <div class="text-center flex items-center">
          <div class="relative">
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
            v-model="valueRoles"
            class="m-2 w-[170px] rounded-lg"
            placeholder="Please select role"
            size="large"
          >
            <el-option
              v-for="item in dataRoles"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-select
            v-model="valueRoles"
            class="m-2 w-[170px] rounded-lg"
            placeholder="Please select role"
            size="large"
          >
            <el-option
              v-for="item in dataRoles"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="flex justify-end w-[calc(100%-600px)] items-center">
        <!--  -->
        <div class="grid grid-cols-3 gap-3">
          <div class="w-[300px] md:flex-0 shrink-0">
            <div
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
          <div class="w-[300px] md:flex-0 shrink-0">
            <div
              class="hover:bg-slate-200 border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
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
          <div class="w-[300px] md:flex-0 shrink-0">
            <div
              class="hover:bg-slate-200 border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
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
          <div class="w-[300px] md:flex-0 shrink-0">
            <div
              class="hover:bg-slate-200 border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
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
          <div class="w-[300px] md:flex-0 shrink-0">
            <div
              class="hover:bg-slate-200 border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
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
          <div class="w-[300px] md:flex-0 shrink-0">
            <div
              class="hover:bg-slate-200 border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
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
        </div>
      </div>
    </div>
    <!-- Search -->

    <div class="flex justify-between items-center pt-5 pb-5">
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
        <el-table-column prop="date" label="Images" sortable>
          <template v-slot="{ row }">
            <div
              class="imageAvatar"
              :id="row"
              :style="`background-image:url(${avatarDefault})`"
            ></div>
          </template>
        </el-table-column>

        <el-table-column prop="name" label="Username" sortable>
          <template v-slot="{ row }">
            <div class="font-medium text-gray-900 whitespace-nowrap">
              <span :id="row" class="w-[100px]">Nguyễn Văn Đức</span>
            </div>
          </template>
        </el-table-column>
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
        <el-table-column prop="name" label="AI Score" sortable>
          <template v-slot>
            <div class="text-base font-medium">100</div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Last Update" sortable>
          <template v-slot>
            <div class="text-base font-medium">08/01/2024</div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Ai Reason" sortable>
          <template v-slot>
            <div class="text-base font-medium">Bạo lực, Khỏa thân</div>
          </template>
        </el-table-column>
        <el-table-column prop="action" label="Action" :formatter="formatter">
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
      </el-table>
      <div class="example-pagination-block">
        <el-pagination
          v-model:current-page="currentPage2"
          v-model:page-size="pageSize2"
          :page-sizes="[100, 200, 300, 400]"
          :background="true"
          layout="sizes, prev, pager, next"
          :total="1000"
        />
      </div>
    </div>

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

    <el-drawer
      v-model="drawerView"
      title="Check verify image"
      :with-header="true"
      size="100%"
    >
      <!--  -->
      <cms-slider></cms-slider>
      <!--  -->
    </el-drawer>
    <!--  -->
  </div>
</template>

<script>
import { ref } from "vue";
import funValidation from "../../middleware/validation";
import CmsSlider from "../cms/cms-slider.vue";
import { mapActions } from "vuex";
export default {
  name: "censorship-page",

  components: { CmsSlider },
  data() {
    return {
      avatarDefault: require("@/assets/icon_svg/avatar.jpg"),
      checked2: false,
    };
  },

  setup() {
    const currentPage2 = ref(5);
    const pageSize2 = ref(100);
    const small = ref(false);
    const background = ref(false);
    const disabled = ref(false);
    const drawer = ref(false);
    const drawerView = ref(true);
    return {
      currentPage2,
      pageSize2,
      small,
      background,
      disabled,
      drawer,
      drawerView,
    };
  },

  computed: {
    listUser() {
      return this.$store.state.cmsModule.listDataAvatar;
    },
  },

  async created() {
    debugger;
    await this.getListImageCMS({
      currentPage: 0,
      pageSize: 50,
    });
  },

  mounted() {},

  methods: {
    ...mapActions(["getListImageCMS"]),
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
