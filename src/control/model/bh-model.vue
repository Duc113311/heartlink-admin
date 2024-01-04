<template>
  <div
    class="overflow-y-auto form-popup h-full overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
  >
    <div class="w-full max-w-6xl max-h-full form-detail">
      <!-- Modal content -->
      <div
        class="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full h-full p-5"
      >
        <!-- Modal header -->
        <div class="absolute right-0 top-0 p-2">
          <img
            @click="onHideModelBg()"
            src="../../assets/icon_svg/ic_cancel.svg"
            width="25"
            alt=""
          />
        </div>

        <div class="md:p-5 space-y-4 text-black w-full h-full">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bh-model",

  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {
    onHideModelBg() {
      this.$emit("onHideModel", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-detail {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40rem;
}

.form-popup {
  background-color: #0000006b;
}
</style>
