<template>
  <div class="w-full h-full">
    <CensorshipPage
      @onChangeViewImage="onChangeViewImage"
      @onChangeUpdateImage="onChangeUpdateImage"
    ></CensorshipPage>
  </div>

  <BhModel v-if="isShowModel">
    <CheckImage></CheckImage>
  </BhModel>
</template>

<script>
import CheckImage from "../../../components/form/check-image";
import BhModel from "../../../control/model/bh-model";
import CensorshipPage from "../../../components/check-photo/censorship-page";
export default {
  components: {
    CheckImage,
    BhModel,
    CensorshipPage,
  },
  name: "statistical-view",

  data() {
    return {
      isShowModel: true,
    };
  },

  mounted() {},

  methods: {
    onChangeViewImage() {
      debugger;
    },

    onChangeUpdateImage() {
      debugger;
    },
  },
};
</script>

<style lang="scss" scoped></style>
