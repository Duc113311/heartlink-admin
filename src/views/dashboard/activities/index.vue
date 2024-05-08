<template>
  <div class="w-full h-full p-[15px]" v-loading="isLoading">
    <!-- -->
  </div>
</template>

<script>
export default {
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
