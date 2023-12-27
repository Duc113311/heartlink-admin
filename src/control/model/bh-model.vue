<template>
  <div class="absolute top-0 left-0 bottom-0 right-0">
    <div class="relative h-full">
      <div class="v-modal-bg" @click="onHideModelBg"></div>
      <div class="flex justify-center w-full h-full items-center z-30">
        <div class="z-model">
          <div class="relative">
            <slot> </slot>
          </div>
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
.z-model {
  z-index: 999;
  border-radius: 20px;
}

.v-modal-bg {
  background-color: #0000005e;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 99;
}
</style>
