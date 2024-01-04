<template>
  <div class="w-full h-full">
    <!-- header -->
    <CensorshipPage @onChangeEditImage="onChangeEditImage"></CensorshipPage>
    <!--  -->

    <!-- <div
      class="overflow-y-auto form-popup h-full overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
    >
      <div class="w-full max-w-3xl max-h-full"></div>
    </div> -->
  </div>

  <!-- Main modal -->
  <bh-model @onHideModel="onHideModel" v-show="isModelCheckImage">
    <CheckImage :imageDetail="imageDetail"></CheckImage>
  </bh-model>
</template>

<script>
import CheckImage from "../../../components/form/check-image";
import BhModel from "@/control/model/bh-model.vue";
import CensorshipPage from "../../../components/check-photo/censorship-page";
export default {
  components: {
    CheckImage,
    CensorshipPage,
    BhModel,
  },
  name: "browse-photos-view",

  data() {
    return {
      isModelCheckImage: false,
      imageDetail: {},
    };
  },

  mounted() {},

  methods: {
    onChangeEditImage(val) {
      this.isModelCheckImage = val.status;
      this.imageDetail = val.data;
    },

    onHideModel(val) {
      this.isModelCheckImage = val.status;
    },
  },
};
</script>

<style lang="scss" scoped></style>
