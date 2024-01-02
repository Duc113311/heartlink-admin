<template>
  <div class="flex flex-row min-h-screen bg-gray-100 text-white">
    <Sidebar></Sidebar>
    <main
      class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in"
    >
      <HeaderCustomer></HeaderCustomer>
      <div
        class="main-content flex flex-col flex-grow p-[20px] h-[calc(100vh-130px)] show-scroll overflow-y-auto"
      >
        <!-- <h1 class="font-bold text-2xl text-gray-700">Dashboard</h1>

        <div class="border border-gray-300 rounded-md p-[20px] h-full">
          <div class="w-full h-full bg-orange-300 overflow-y-auto">
            
          </div>
        </div> -->
        <router-view />
      </div>
      <FooterAdmin></FooterAdmin>
    </main>
  </div>
</template>

<script>
import Sidebar from "../../layout/nav/sidebar";
import FooterAdmin from "../../layout/footer/footer-admin";
import HeaderCustomer from "../../layout/header/header-customer";
import { mapActions } from "vuex";

export default {
  components: {
    Sidebar,
    FooterAdmin,
    HeaderCustomer,
  },
  name: "dashboard-view",

  data() {
    return {};
  },

  mounted() {
    this.getListCardUsers(50);
  },

  methods: {
    ...mapActions(["getListCardUsers"]),
  },
};
</script>

<style lang="scss" scoped>
.form-control {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: #637381;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #c4cdd5;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  color: #637381;
  background-color: #fff;
  border-color: #b1a5ff;
  outline: 0;
  box-shadow: 0 0 0 0.15rem rgb(234 232 245 / 25%);
}

.left-nav {
  transition: 0.3s;
}

.show-scroll::-webkit-scrollbar {
  width: 5px;
}
.show-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.show-scroll::-webkit-scrollbar-thumb {
  background: #a39bd4;
}
.show-scroll::-webkit-scrollbar-thumb:hover {
  background: #8884a3;
}
</style>
