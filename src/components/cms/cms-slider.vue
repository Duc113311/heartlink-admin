<!-- eslint-disable prettier/prettier -->
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
                v-lazy="renderImage().avatars.meta.url"
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
              @click="
                onPreviousImage(
                  currentSlideIndex !== 0
                    ? currentSlideIndex--
                    : currentSlideIndex
                )
              "
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
      <div class="w-full right-header h-[110px] bg-slate-100 p-5">
        <div class="flex justify-center items-center w-full h-full">
          <div class="w-full flex justify-between">
            <div class="flex items-center gap-2">
              <div
                v-loading="loading"
                class="image-avatar"
                :style="`background-image:url(${
                  renderImage().avatars.meta.url
                })`"
              ></div>
              <div class="text-left">
                <div class="text-base font-bold">
                  {{ renderImage().profiles[0].fullname }}
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
      <div class="w-full right-body h-[calc(100%-220px)] bg-slate-200 p-5">
        <div class="w-full pb-5">
          <div class="text-left">
            <div
              class="mb-2 text-base flex font-semibold text-gray-900 dark:text-white"
            >
              <div class="w-[140px]">Reviewer Status :</div>
              <span
                :class="
                  renderStatusImage(renderImage().avatars.reviewerStatus)
                    .colorText
                "
              >
                {{
                  renderStatusImage(renderImage().avatars.reviewerStatus).name
                }}</span
              >
            </div>
          </div>
          <div class="text-left w-full flex justify-between">
            <div
              class="mb-2 text-base flex font-semibold text-gray-900 dark:text-white"
            >
              <div class="w-[140px]">
                Reviewer AI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              </div>
              <span
                :class="
                  renderStatusImage(renderImage().avatars.aiStatus).colorText
                "
              >
                {{
                  renderStatusImage(renderImage().avatars.aiStatus).name
                }}</span
              >
            </div>
            <div>
              <div class="font-semibold text-gray-900 dark:text-white">
                {{ renderImage().avatars.comment }}
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
        </div>

        <div
          class="flex w-full justify-center items-center border-t-2 pt-3 pb-5"
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
                style="width: 240px;"
                @change="onChangeViolate"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="grid grid-cols-4 gap-2 mt-3">
              <div
                class="border p-2 rounded-lg bg-slate-100"
                v-for="(item, index) in valueViolates"
                :key="index"
              >
                {{ item.label }}
              </div>
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
                @click="onClickReject(renderImage())"
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
            @click="onClickApprove(renderImage())"
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
      const notificationInstance = ElNotification({
        title: "Success",
        message: "Image updated successfully",
        type: "success",
      });

      // Close the notification after 1000ms (1 second)
      setTimeout(() => {
        notificationInstance.close();
      }, 1000);
    };

    const options = [
      {
        value: "item_1",
        label: "Máu me, bạo lực",
      },
      {
        value: "item_2",
        label: "Trẻ em",
      },
      {
        value: "item_3",
        label: "Logo quyền sở hữu trí tuệ",
      },
      {
        value: "item_4",
        label: "Hình ảnh chứa chủ yếu là văn bản",
      },
      {
        value: "item_5",
        label: "Vũ khí",
      },
      {
        value: "item_6",
        label: "Hình ảnh chứa QR code, URL",
      },
      {
        value: "item_7",
        label: "Hình ảnh meme",
      },
      {
        value: "item_8",
        label: "Hình ảnh khỏa thân, tình dục",
      },
      {
        value: "item_9",
        label: "Vũ khí",
      },
    ];

    return {
      options,
      valueViolate,
      successNotification,
    };
  },

  // watch: {
  //   textNote(newValue, oldValue) {
  //     return newValue;
  //   },
  // },

  data() {
    return {
      textNote: "",
      avatarDefault: require("@/assets/icon_svg/avatar.jpg"),
      avatarDefault01: require("@/assets/icon_svg/avatar01.jpg"),
      currentSlideIndex: 0,
      currentPage: 0,
      loading: false,

      valueViolates: [],
      keyViolate: [],
    };
  },

  mounted() {},
  computed: {
    listCMS() {
      return this.$store.state.cmsModule.listImageCMS;
    },
  },

  methods: {
    ...mapActions([
      "putApproveImage",
      "getListImageCMS",
      "getListImageQuickPush",
    ]),

    setDefault() {
      this.currentSlideIndex = 0;
    },
    onChangeViolate(val) {
      debugger;
      this.valueViolates = [];
      this.keyViolate = val;
      console.log("valueViolate", this.valueViolate);
      console.log("new", val);
      for (let index = 0; index < val.length; index++) {
        const element = val[index];
        const findData = this.options.find((x) => x.value === element);
        this.valueViolates.push(findData);
      }
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
      debugger;
      this.loading = true;
      const itemUser = this.renderImage().avatars.id;

      this.keyViolate = [];
      this.valueViolate = [];
      this.valueViolates = [];

      const objectImage = {
        imageId: itemUser,
        objectImage: {
          imageId: this.renderImage()._id,
          reviewerStatus: 1,
          comment: this.textNote,
          reviewerViolateOption: [],
        },
      };
      setTimeout(() => {
        this.loading = false;
      }, 500);
      await this.putApproveImage(objectImage).then((data) => {
        this.renderImage().avatars.reviewerStatus = 1;
        this.successNotification();

        this.currentSlideIndex++;
      });
      this.onPreviousImage(this.currentSlideIndex);

      if (this.currentSlideIndex >= parseInt(this.listCMS.length - 1)) {
        this.getListImageQuickPush({
          currentPage: this.currentPage++,
          pageSize: 500,
        });
      }
    },

    async onPreviousImage(val) {
      debugger;
      const valueImage = this.renderImage().avatars;

      if (valueImage.reviewerStatus === 1) {
        console.log(valueImage);
        this.textNote = valueImage.comment;
        this.valueViolate = valueImage.reviewerViolateOption;
        this.onChangeViolate(valueImage.reviewerViolateOption);
      } else {
        this.textNote = "";
        this.keyViolate = [];
        this.valueViolate = [];
        this.valueViolates = [];
      }
    },

    async onClickApprove(val) {
      const objectImage = {
        imageId: val.avatars.id,
        objectImage: {
          imageId: val._id,
          reviewerStatus: 1,
          comment: this.textNote,
          reviewerViolateOption: [],
        },
      };
      await this.putApproveImage(objectImage).then((data) => {
        debugger;
        console.log(data);
        this.renderImage().avatars.reviewerStatus = 1;
        this.successNotification();

        this.currentSlideIndex++;
      });
      this.onPreviousImage(this.currentSlideIndex);

      if (this.currentSlideIndex >= parseInt(this.listCMS.length - 1)) {
        this.getListImageQuickPush({
          currentPage: this.currentPage++,
          pageSize: 500,
        });
      }
    },
    async onClickReject(val) {
      debugger;
      const objectImage = {
        imageId: val.avatars.id,
        objectImage: {
          imageId: val._id,
          reviewerStatus: 2,
          comment: "",
          reviewerViolateOption: [],
        },
      };
      await this.putApproveImage(objectImage).then((data) => {
        this.renderImage().avatars.reviewerStatus = 2;
        this.renderImage().avatars.comment = this.textNote;

        this.renderImage().avatars.reviewerViolateOption = this.keyViolate;

        this.successNotification();
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 500);
        this.currentSlideIndex++;
        this.textNote = "";
        this.keyViolate = [];
        this.valueViolate = [];
        this.valueViolates = [];
      });

      this.onPreviousImage(this.currentSlideIndex);

      if (this.currentSlideIndex >= parseInt(this.listCMS.length - 1)) {
        this.getListImageCMS({
          currentPage: this.currentPage++,
          pageSize: 500,
          statusAI: 1,
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
