<template>
  <button
    v-loading="isLoading"
    class="btn-bh-button"
    :class="{ 'is-disabled': isDisable, 'w-80': statusWidth }"
    ref="btn-button"
    @click="onClickActionButton()"
    :disabled="isDisable"
    :style="{
      background: codeBackground,
      color: codeText,
      fontWeight: numberWeight,
    }"
  >
    {{ nameButton }}
    <img :src="urlImageIcon" alt="" />
  </button>
</template>

<script>
export default {
  name: "bh-button-active",

  data() {
    return {};
  },

  props: {
    nameButtonDefault: String, // Xét tên button
    statusLoading: Boolean, // Xét Loading
    statusDisable: Boolean, // Xét nút Disable
    urlImage: String, // Xét Url icon
    statusWidth: Boolean, // Xét chiểu rộng
    codeColorBg: String, // Mã màu Background Button
    codeColorText: String, // Mã màu text button
    numberWeightBold: Number, // Độ đậm
  },

  computed: {
    nameButton() {
      return this.nameButtonDefault;
    },

    isLoading() {
      return this.statusLoading ? true : false;
    },

    isDisable() {
      return this.statusDisable ? true : false;
    },

    urlImageIcon() {
      return this.urlImage;
    },

    isWidth() {
      return this.statusWidth;
    },

    codeBackground() {
      return this.codeColorBg;
    },

    codeText() {
      return this.codeColorText;
    },

    numberWeight() {
      return this.numberWeightBold;
    },
  },

  mounted() {},

  methods: {
    /**
     * Xử lý sự kiện button
     */
    onClickActionButton() {
      this.$emit("onChangeActionButton", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-bh-button {
  padding: 10px 32px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  line-height: 1;
  letter-spacing: 0.5px;
  overflow: hidden;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top right, #b471bd, #c13086);
  background-clip: border-box;
  background-origin: border-box;
  border: 2px solid #00000000;
}

.btn-bh-button:hover,
.btn-bh-button:focus {
  color: #ffffff;
  background: linear-gradient(to top right, #b076b8, #b94e8e);
}
.btn-bh-button:active {
  color: #ffffff;
  border-color: #c45656;
  background-color: #4d396e;
}
.btn-bh-button:focus-visible {
  outline: 2px solid #fab6b6;
  outline-offset: 1px;
}

.is-disabled,
.is-disabled:hover {
  cursor: not-allowed;
  background-image: none;
  background-color: #8d7f7f;
  border: none;
}
</style>
