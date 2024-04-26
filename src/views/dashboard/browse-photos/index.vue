<template>
  <div class="w-full h-full p-[15px]" v-loading="isLoading">
    <!-- header -->
    <CensorshipPage
      @onChangeEditImage="onChangeEditImage"
      @onChangeReload="onChangeReload"
    ></CensorshipPage>
    <!--  -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CensorshipPage from "../../../components/check-photo/censorship-page";
export default {
  components: {
    CensorshipPage,
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
    }, 2000);
    await Promise.all([
      // this.getListImageCMS({
      //   currentPage: 0,
      //   pageSize: 50,
      //   statusReview: 0,
      //   statusAI: -1,
      //   nameQuery: "",
      // }),
      this.getTotalImages(),

      // this.getListHistoryImage({
      //   currentPage: 0,
      //   pageSize: 50,
      //   nameQuery: "",
      // }),
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
          statusReview: -1,
          statusAI: -1,
          nameQuery: "",
        }),
      ]);
    },
  },
};
</script>

<style lang="scss" scoped></style>
