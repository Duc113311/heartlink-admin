<template>
  <div
    class="loading-app absolute top-0 left-0 w-full h-full"
    :style="`background: ${bgColorParam}`"
  >
    <div class="w-full h-full flex justify-center items-center">
      <div
        class="img-filter"
        :style="`background-image: url('${urlImageParam}')`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "load-app",
  data() {
    return {};
  },

  props: ["urlImage", "codeColor", "bgColor"],
  computed: {
    urlImageParam() {
      return this.urlImage;
    },

    colorParam() {
      const myStyle = {
        backgroundColor: this.codeColor,
      };
      return myStyle;
    },

    bgColorParam() {
      return this.bgColor;
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.loading-app {
  z-index: 2300;
}
.img-filter {
  width: 60px;
  height: 60px;
  background-position: revert;
  background-size: cover;
  position: absolute;
  z-index: 9;
}

@keyframes pulseAnimate {
  100% {
    opacity: 0;
    transform: scale(2);
  }
}

.img-filter {
  -webkit-animation: zoomeffect 5s infinite;
  -moz-animation: zoomeffect 10s infinite;
  animation: zoomeffect 5s infinite;
}
@-webkit-keyframes zoomeffect {
  0% {
    background-position: center;
    transform: scale(1, 1);
  }

  50% {
    background-position: center;
    transform: scale(1.5, 1.5);
  }
  100% {
    background-position: center;
    transform: scale(1, 1);
  }
}
@keyframes zoomeffect {
  0% {
    background-position: center;
    transform: scale(1, 1);
  }
  50% {
    background-position: center;
    transform: scale(1.5, 1.5);
  }
  100% {
    background-position: center;
    transform: scale(1, 1);
  }
}
</style>
