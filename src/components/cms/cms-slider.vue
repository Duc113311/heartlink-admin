<template>
  <div class="w-full h-full flex" v-if="renderImage()">
    <!--  -->
    <div class="w-4/6 bg-slate-400 h-full">
      <div class="w-full h-full bg-slate-500 p-5">
        <!-- <div
          class="imageDetail"
          :style="`background-image:url(${avatarDefault})`"
        /> -->

        <div
          id="default-carousel"
          class="relative w-full h-full"
          data-carousel="slide"
        >
          <!-- Carousel wrapper -->
          <div class="relative h-full overflow-hidden rounded-lg">
            <!-- Item 1 -->

            <div
              class="duration-700 ease-in-out flex justify-center relative overflow-hidden w-full h-full"
            >
              <img
                v-lazy="renderImage().profiles.avatars.url"
                alt="Image"
                class="imageDetail absolute object-contain"
                loading="lazy"
              />

              <!-- <div
                :style="`background-image:url(${renderImage()})`"
                class="imageDetail absolute"
              /> -->
              <div class="overlay absolute w-full h-full"></div>
            </div>

            <button
              @click="onPrewImage(currentSlideIndex--)"
              type="button"
              class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span
                class="inline-flex items-center justify-center w-[100px] h-[100px] rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
              >
                <svg
                  class="w-14 h-14 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              @click="onNextImage()"
              type="button"
              class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span
                class="inline-flex items-center justify-center w-[100px] h-[100px] rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
              >
                <svg
                  class="w-14 h-14 text-slate-50 dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>

          <!-- Slider controls -->
        </div>
      </div>

      <!--  -->
    </div>

    <div class="w-4/12 bg-orange-100 h-full text-black p-5">
      <div class="w-full right-header h-[110px] bg-slate-400 p-5">
        <div class="flex justify-center items-center w-full h-full">
          <div class="w-full flex justify-between">
            <div class="flex items-center gap-2">
              <div
                v-loading="loading"
                class="image-avatar"
                :style="`background-image:url(${
                  renderImage().profiles.avatars.url
                })`"
              ></div>
              <div class="text-left">
                <div class="text-base font-bold">
                  {{ renderImage().fullname }}
                </div>
                <div>Số lần vi phạm: 01</div>
              </div>
            </div>
            <el-popover
              placement="top"
              title="Coming soon..."
              :width="200"
              trigger="hover"
            >
              <template #reference>
                <button
                  type="button"
                  class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-semibold rounded-lg text-base px-5 py-1 text-center me-2 mb-2"
                >
                  Xử lý account
                </button>
              </template>
            </el-popover>
          </div>
        </div>
      </div>
      <div class="w-full right-body h-[calc(100%-220px)] bg-slate-300 p-5">
        <div class="flex w-full justify-between items-center pb-5">
          <div class="text-left">
            <div
              class="mb-2 text-base font-semibold text-gray-900 dark:text-white"
            >
              Reviewer Status :
              <span
                :class="
                  renderStatusImage(renderImage().profiles.avatars.status)
                    .colorText
                "
              >
                {{
                  renderStatusImage(renderImage().profiles.avatars.status).name
                }}</span
              >
            </div>
            <ul
              class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            >
              <li>Liên quan trẻ em</li>
              <li>Tôn giáo, chính trị</li>
              <li>Súng đạn</li>
            </ul>
          </div>
          <div class="text-left">
            <div
              class="mb-2 text-base font-semibold text-gray-900 dark:text-white"
            >
              Reviewer AI : <span class="text-blue-700"> Pending</span>
            </div>
            <ul
              class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"
            >
              <li>Liên quan trẻ em</li>
              <li>Tôn giáo, chính trị</li>
              <li>Súng đạn</li>
            </ul>
          </div>
        </div>

        <div
          class="flex w-full justify-center items-center border-t-2 pt-5 pb-5"
        >
          <div class="w-full">
            <div class="">
              <div class="text-lg font-semibold p-2">Chose option violate:</div>
              <el-select
                v-model="valueViolate"
                multiple
                value-key="id"
                collapse-tags
                placeholder="Select violate"
                style="width: 240px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
        </div>

        <div
          class="flex justify-center items-center w-full border-t-2 pt-5 pb-5"
        >
          <div class="w-full">
            <div class="text-lg font-semibold text-left">Add comment:</div>
            <div class="w-full pt-5 pb-5 justify-center flex items-center">
              <div class="w-[500px]">
                <el-input
                  v-model="textNote"
                  maxlength="30"
                  class="w-full h-full rounded-lg"
                  placeholder="Please enter the reason for the report"
                  type="textarea"
                  :autosize="{ minRows: 6, maxRows: 4 }"
                />
              </div>
            </div>
            <div class="w-full justify-center flex items-center">
              <button
                @click="onClickReject(renderImage().profiles.avatars.id)"
                type="button"
                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-semibold rounded-lg text-lg px-10 py-2.5 text-center me-2 mb-2"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full right-footer h-[110px] bg-slate-100 p-5">
        <div class="flex justify-center items-center w-full h-full">
          <button
            @click="onClickApprove(renderImage().profiles.avatars.id)"
            type="button"
            class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-semibold rounded-lg text-lg px-10 py-2.5 text-center me-2 mb-2"
          >
            Approve
          </button>
        </div>
      </div>
      <!--  -->
    </div>

    <!--  -->
  </div>
</template>

<script>
import { ref } from "vue";
import { mapActions } from "vuex";
import { ElNotification } from "element-plus";

export default {
  name: "cms-slider",

  setup() {
    const valueViolate = ref([]);
    const successNotification = () => {
      ElNotification({
        title: "Success",
        message: "Image updated successfully",
        type: "success",
      });
    };
    const options = [
      {
        value: "Option1",
        label: "Máu me, bạo lực",
      },
      {
        value: "Option2",
        label: "Trẻ em",
      },
      {
        value: "Option3",
        label: "Logo quyền sở hữu trí tuệ",
      },
      {
        value: "Option4",
        label: "Hình ảnh chứa chủ yếu là văn bản",
      },
      {
        value: "Option5",
        label: "Vũ khí",
      },
      {
        value: "Option6",
        label: "Hình ảnh chứa QR code, URL",
      },
      {
        value: "Option7",
        label: "Hình ảnh meme",
      },
      {
        value: "Option8",
        label: "Hình ảnh khỏa thân, tình dục",
      },
      {
        value: "Option5",
        label: "Vũ khí",
      },
    ];

    return {
      options,
      valueViolate,
      successNotification,
    };
  },

  computed: {
    listCMS() {
      return this.$store.state.cmsModule.listImageCMS;
    },
  },

  data() {
    return {
      textNote: "",
      avatarDefault: require("@/assets/icon_svg/avatar.jpg"),
      avatarDefault01: require("@/assets/icon_svg/avatar01.jpg"),
      currentSlideIndex: 0,
      currentPage: 0,
      loading: false,
    };
  },

  mounted() {},

  methods: {
    ...mapActions(["putApproveImage", "getListImageCMS"]),

    setDefault() {
      this.currentSlideIndex = 0;
    },
    onChangeViolate(val) {
      debugger;
      console.log(val);
    },

    renderImage() {
      const listImgs = this.listCMS[this.currentSlideIndex];
      debugger;
      return listImgs;
    },

    renderStatusImage(val) {
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
    async onNextImage() {
      this.loading = true;
      const itemUser = this.renderImage().profiles.avatars.id;
      const objectImage = {
        imageId: itemUser,
        objectImage: {
          status: 1,
        },
      };
      setTimeout(() => {
        this.loading = false;
      }, 500);
      await this.putApproveImage(objectImage).then((data) => {
        this.renderImage().profiles.avatars.status = 1;
        this.successNotification();
        this.currentSlideIndex++;
      });

      if (this.currentSlideIndex >= parseInt(this.listCMS.length - 1)) {
        this.getListImageCMS({
          currentPage: this.currentPage++,
          pageSize: 5,
        });
      }
    },

    async onPrewImage() {},

    async onClickApprove(val) {
      const objectImage = {
        imageId: val,
        objectImage: {
          status: 1,
        },
      };
      await this.putApproveImage(objectImage).then((data) => {
        debugger;
        console.log(data);
        this.renderImage().profiles.avatars.status = 1;
        this.successNotification();

        this.currentSlideIndex++;
      });

      if (this.currentSlideIndex >= parseInt(this.listCMS.length - 1)) {
        this.getListImageCMS({
          currentPage: this.currentPage++,
          pageSize: 5,
        });
      }
    },
    async onClickReject(val) {
      const objectImage = {
        imageId: val,
        objectImage: {
          status: 2,
        },
      };
      debugger;
      await this.putApproveImage(objectImage).then((data) => {
        debugger;
        console.log(data);
        this.renderImage().profiles.avatars.status = 2;
        this.successNotification();
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 500);
        this.currentSlideIndex++;
      });

      if (this.currentSlideIndex >= parseInt(this.listCMS.length - 1)) {
        this.getListImageCMS({
          currentPage: this.currentPage++,
          pageSize: 5,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.imageDetail {
  width: 100%;
  height: 100%;
}

.image-avatar {
  width: 50px;
  height: 50px;
  border-radius: 40px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid #ccc;
  border-radius: 30px;
  overflow: hidden;
}

.overlay {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent 50%),
    linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent 50%);
}
</style>
