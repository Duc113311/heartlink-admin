<template>
  <div class="w-full h-full">
    <!-- Logo -->

    <aside
      id="sidebar"
      class="px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out md:flex md:flex-col md:justify-between overflow-y-auto"
      data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
    >
      <div
        class="flex flex-col"
        data-dev-hint="optional div for having an extra footer navigation"
      >
        <div class="logo">
          <img src="../../assets/icon_svg/ic_logo_name.svg" alt="" srcset="" />
        </div>

        <div class="navbar">
          <a
            href="#"
            class="flex items-center space-x-2 py-4 px-6 transition duration-200 hover:bg-gray-700 hover:text-white hover:border-white hover:border-l-4 focus:bg-gray-700 focus:text-white focus:border-l-4 focus:border-white focus:outline-none"
          >
            <img
              src="../../assets/icon_svg/ic_dashboard.svg"
              width="20"
              alt=""
            />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            class="flex items-center space-x-2 py-4 px-6 transition duration-200 hover:bg-gray-700 hover:text-white hover:border-white hover:border-l-4 focus:bg-gray-700 focus:text-white focus:border-l-4 focus:border-white focus:outline-none"
          >
            <img
              src="../../assets/icon_svg/ic_check-photo.svg"
              width="20"
              alt=""
            />
            <span>Photo censorship</span>
          </a>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "navbar-customer",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.logo {
  padding: 15px;
}
.navbar a {
  color: white;
  font-size: 16px;
}
</style>
