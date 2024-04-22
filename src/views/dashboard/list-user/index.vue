<!-- eslint-disable prettier/prettier -->
<template>
  <div class="w-full h-full">
    <div
      class="flex flex-col gap-3 h-[50px] sm:flex-row sm:items-center sm:justify-between"
    >
      <h2 class="text-xl font-bold text-black">List user</h2>

      <nav>
        <ol class="flex items-center gap-2">
          <li>
            <a class="font-medium" href="index.html">Dashboard /</a>
          </li>

          <li class="text-blue-400">Profile</li>
        </ol>
      </nav>
    </div>

    <!-- Thống kê -->

    <div class="grid grid-cols-12 2xl:grid-cols-12 gap-x-5 mt-4">
      <div class="card col-span-12 lg:col-span-6 2xl:col-span-2 lg:mb-0 mb-4">
        <div class="md:flex-0 shrink-0">
          <div
            class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="flex-auto p-2 text-center">
              <h1
                class="relative z-10 text-sm text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
              >
                <span id="status1">Total user</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">
                0
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div class="card col-span-12 lg:col-span-6 2xl:col-span-2 lg:mb-0 mb-4">
        <div class="md:flex-0 shrink-0">
          <div
            class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="flex-auto p-2 text-center">
              <h1
                class="relative z-10 text-sm text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
              >
                <span id="status1">Total reviewer photo approved</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">
                0
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div class="card col-span-12 lg:col-span-6 2xl:col-span-2 lg:mb-0 mb-4">
        <div class="md:flex-0 shrink-0">
          <div
            class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="flex-auto p-2 text-center">
              <h1
                class="relative z-10 text-sm text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
              >
                <span id="status1">Total reviewer photo reject</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">
                0
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div class="card col-span-12 lg:col-span-6 2xl:col-span-2 lg:mb-0 mb-4">
        <div class="md:flex-0 shrink-0">
          <div
            class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="flex-auto p-2 text-center">
              <h1
                class="relative z-10 text-sm text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
              >
                <span id="status1">Total AI photo pending</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">
                0
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div class="card col-span-12 lg:col-span-6 2xl:col-span-2 lg:mb-0 mb-4">
        <div class="md:flex-0 shrink-0">
          <div
            class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="flex-auto p-2 text-center">
              <h1
                class="relative z-10 text-sm text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
              >
                <span id="status1">Total AI photo approved</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">
                0
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div class="card col-span-12 lg:col-span-6 2xl:col-span-2 lg:mb-0 mb-4">
        <div class="md:flex-0 shrink-0">
          <div
            class="hover:bg-slate-200 cursor-pointer border-black/12.5 dark:shadow-soft-dark-xl shadow-soft-xl dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-xl border-0 border-solid bg-white bg-clip-border"
          >
            <div class="flex-auto p-2 text-center">
              <h1
                class="relative z-10 text-sm text-transparent bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text"
              >
                <span id="status1">Total AI photo reject</span>
              </h1>

              <h6 class="mb-0 font-bold text-black text-lg">
                0
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- search -->

    <div
      class="flex mt-4 justify-between items-center flex-col sm:flex-row mb-4"
    >
      <div class="relative md:w-[500px]">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        <input
          type="search"
          id="default-search"
          class="block search-text w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter information to search"
          required
        />
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Disable account
        </button>

        <button
          type="button"
          class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Delete all
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="mt-4 w-full">
      <TableUser></TableUser>
    </div>
    <!--  -->
  </div>
</template>

<script>
import TableUser from "../../../components/profile/table/table-user";
export default {
  components: { TableUser },
  name: "user-view",

  data() {
    return {
      avatarDefault: require("@/assets/icon_svg/avatar.jpg"),
    };
  },

  computed: {
    listUser() {
      return this.$store.state.userModule.listUser;
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.search-text:focus-visible {
  outline: none;
}
</style>
