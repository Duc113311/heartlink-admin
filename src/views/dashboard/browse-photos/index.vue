<template>
  <div class="w-full h-full p-[15px]" v-loading="isLoading">
    <!-- header -->
    <CensorshipPage
      @onChangeEditImage="onChangeEditImage"
      @onChangeReload="onChangeReload"
    ></CensorshipPage>
    <!--  -->

    <!-- <div
      class="overflow-y-auto form-popup h-full overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
    >
      <div class="w-full max-w-3xl max-h-full"></div>
    </div> -->
  </div>

  <!-- Main modal -->
  <!-- <bh-model @onHideModel="onHideModel" v-show="isModelCheckImage">
    <CheckImage :imageDetail="imageDetail"></CheckImage>
  </bh-model> -->
</template>

<script>
import { mapActions } from "vuex";
// import CheckImage from "../../../components/form/check-image";
// import BhModel from "@/control/model/bh-model.vue";
import CensorshipPage from "../../../components/check-photo/censorship-page";
export default {
  components: {
    // CheckImage,
    CensorshipPage,
    // BhModel,
  },
  name: "browse-photos-view",

  data() {
    return {
      isModelCheckImage: true,
      imageDetail: {},
      isLoading: false,
    };
  },

  async mounted() {},

  async created() {
    debugger;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
    await Promise.all([
      this.getListImageCMS({
        currentPage: 0,
        pageSize: 50,
        statusReview: 0,
        statusAI: -1,
        nameQuery: "",
      }),
      // Lấy tổng số danh sách
      this.getTotalImages(),

      // Lấy danh sách history
      this.getListHistoryImage({
        currentPage: 0,
        pageSize: 50,
        nameQuery: "",
      }),
    ]);
  },

  methods: {
    ...mapActions(["getTotalImages", "getListHistoryImage", "getListImageCMS"]),
    onChangeEditImage(val) {
      this.isModelCheckImage = val.status;
      this.imageDetail = val.data;
    },

    onHideModel(val) {
      this.isModelCheckImage = val.status;
    },

    // Reload data
    async onChangeReload(val) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);

      await Promise.all([
        this.getListImageCMS({
          currentPage: 0,
          pageSize: 50,
          statusReview: 0,
          statusAI: 0,
          nameQuery: "",
        }),
        // Lấy tổng số danh sách
        this.getTotalImages(),

        // Lấy danh sách history
        this.getListHistoryImage({
          currentPage: 0,
          pageSize: 50,
          nameQuery: "",
        }),
      ]);
    },
  },
};
</script>

<style lang="scss" scoped></style>
