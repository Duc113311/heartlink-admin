<template>
  <div class="w-full h-full">
    <!-- header -->
    <CensorshipPage></CensorshipPage>
    <!--  -->
  </div>
</template>

<script>
import CensorshipPage from "../../../components/check-photo/censorship-page";
export default {
  components: { CensorshipPage },
  name: "browse-photos-view",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
