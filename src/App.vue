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
import { mapActions } from "vuex";
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

  async created() {
    const tokenId = localStorage.getItem("token");
    if (tokenId) {
      try {
        await Promise.all([
          this.getReasonReport(),
          this.getCommonBasicInformation(),
          this.getCommonLifeStyle(),
          this.getCommonPrompts(),
        ]);
        this.$router.push({ path: "/dashboard" }).catch(() => {});
      } catch (error) {
        console.error("Error fetching data:", error);
        // Xử lý lỗi nếu cần
      }
    } else {
      this.$router.push({ path: "/" }).catch(() => {});
    }
  },
  mounted() {
    const userLocal = localStorage.getItem("user");

    console.log(JSON.parse(userLocal));
  },
  methods: {
    ...mapActions(["getReasonReport"]),
  },
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
  padding: 14px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  position: relative;
  margin: 0px;
  height: 100%;
  background-color: #42b983;
  font-family: Inter, sans-serif;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  --tw-text-opacity: 1;
  color: black;
}
.body-app {
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
}
</style>
