<!-- eslint-disable prettier/prettier -->
<template>
  <div class="w-full h-full p-[15px]" v-loading="isLoading">
    <DashboardPage></DashboardPage>
  </div>
</template>

<script>
import DashboardPage from "../../../components/customers/dashboard/dashboard-page";
export default {
  components: { DashboardPage },
  name: "user-view",

  data() {
    return {
      avatarDefault: require("@/assets/icon_svg/avatar.jpg"),
      isLoading: false,
    };
  },

  mounted() {},

  created() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.search-text:focus-visible {
  outline: none;
}
</style>
