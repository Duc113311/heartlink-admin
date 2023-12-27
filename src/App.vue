<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">
      <div class="text-slate-50">About</div>
    </router-link>
  </nav>
  <router-view /> -->

  <div class="relative">
    <div class="w-full h-full body-app">
      <router-view />
    </div>

    <LoadApp
      v-if="isShowLoading"
      :urlImage="icUrlApp"
      :codeColor="colorApp"
      :bgColor="bgColorApp"
    ></LoadApp>
  </div>
</template>

<script>
import LoadApp from "./layout/loading/load-app";
export default {
  components: { LoadApp },
  name: "App",

  data() {
    return {
      isShowLoading: false,
      icUrlApp: require("@/assets/icon_svg/ic_logo.svg"),
      colorApp: "#FF828A",
      bgColorApp: "linear-gradient(#E1BA56,#F81C51)",
    };
  },

  computed: {},

  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.body-app {
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
}
</style>
