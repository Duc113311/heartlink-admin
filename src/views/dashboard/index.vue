<template>
  <div class="fixed top-0 left-0 right-0 h-full w-full">
    <div class="nav-left h-full">
      <NavbarCustomer></NavbarCustomer>
    </div>

    <div class="body-right h-full">
      <div class="header-dash">
        <HeaderCustomer></HeaderCustomer>
      </div>

      <div class="body-dash h-full w-full overflow-hidden relative">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCustomer from "../../layout/header/header-customer";
import NavbarCustomer from "../../layout/nav/navbar-customer";
export default {
  components: {
    HeaderCustomer,
    NavbarCustomer,
  },
  name: "dashboard-view",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.nav-left {
  float: left;
  position: relative;
  width: 240px;
  z-index: 1;
  background-color: #212b35;
}

.body-right {
  width: calc(100% - 240px);
  position: relative;
  background-color: #e9e7f2;
  float: right;

  .header-dash {
    height: 60px;
    background-color: #ffffff;
    border-bottom: 1.5px solid rgb(97, 97, 199);
  }

  .body-dash {
    padding: 25px;
    height: 100%;
  }
}
</style>
