<template>
  <header class="header bg-white shadow py-4 px-4 h-[70px] z-30">
    <div class="header-content flex items-center flex-row">
      <form action="#">
        <div class="hidden md:flex relative">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div class="relative">
              <button class="absolute top-1/2 left-0 -translate-y-1/2">
                <svg
                  class="h-6 w-6 text-gray-500"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                class="w-full bg-transparent pr-4 pl-9 focus:outline-none text-black"
              />
            </div>
          </form>
        </div>

        <div class="flex md:hidden">
          <button
            class="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-stroke dark:bg-boxdark lg:hidden"
            @click="toggleSideBar"
          >
            <img
              class="w-[25px] h-[25px]"
              src="../../assets/icon_svg/ic_nav.svg"
              alt=""
              srcset=""
            />
          </button>
          <a
            href="#"
            class="flex items-center justify-center h-10 w-10 border-transparent"
          >
            <svg
              class="h-6 w-6 text-gray-500"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </a>
        </div>
      </form>
      <div class="flex ml-auto">
        <div
          class="flex items-center justify-start space-x-4 cursor-pointer"
          @click="toggleDrop"
        >
          <img
            src="../../assets/icon_svg/avatar.jpg"
            class="rounded-circle w-10 h-10 rounded-full border-2 border-gray-50"
          />
          <div class="font-semibold dark:text-gray-800 text-gray-800 text-left">
            <div>{{ inforAdmin.name }}</div>
            <div class="text-xs text-gray-500 dark:text-gray-400">
              {{ roleName }}
            </div>
          </div>
          <div
            v-show="showDropDown"
            class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 top-16"
          >
            <div class="p-[10px] text-left" role="none">
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
                >Account Setting</a
              >
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
                >Support</a
              >
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
                >Logout</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-customer",

  data() {
    return {};
  },

  computed: {
    inforAdmin() {
      const localUser = JSON.parse(localStorage.getItem("user"));

      return localUser;
    },

    roleName() {
      const localUser = JSON.parse(localStorage.getItem("user"));
      if (localUser.role === "admin") {
        return "Admin";
      } else if (localUser.role === "operator") {
        return "Operator";
      } else {
        return "Reporter";
      }
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
