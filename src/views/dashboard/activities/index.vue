<template>
  <div class="w-full h-full p-[15px]" v-loading="isLoading">
    <!-- -->
    <ActionPage></ActionPage>
    <!--  -->
  </div>
</template>

<script>
import ActionPage from "../../../components/activities/action-page";
export default {
  components: { ActionPage },
  name: "activities-view",

  data() {
    return {
      isLoading: false,
    };
  },

  mounted() {},

  async created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },

  methods: {},
};
</script>
