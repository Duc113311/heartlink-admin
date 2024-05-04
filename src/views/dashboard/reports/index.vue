<template>
  <div class="w-full h-full p-[15px]" v-loading="isLoading">
    <!-- -->
    <ProcessingPage></ProcessingPage>
  </div>
</template>

<script>
import ProcessingPage from "../../../components/reports/processing-page";
import { mapActions } from "vuex";
export default {
  components: { ProcessingPage },
  name: "report-view",

  data() {
    return {
      isLoading: false,
    };
  },

  mounted() {},

  created() {
    this.isLoading = true;

    this.getListReportAccount({
      currentPage: 0,
      pageSize: 50,
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },

  methods: {
    ...mapActions(["getListReportAccount"]),
  },
};
</script>
