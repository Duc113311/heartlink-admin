<template>
  <div class="w-full h-full">
    <!--  -->
    <div
      class="flex flex-col gap-3 h-[50px] sm:flex-row sm:items-center sm:justify-between"
    >
      <h2 class="text-xl font-bold text-black">List activities</h2>

      <nav>
        <ol class="flex items-center gap-2">
          <li>
            <a class="font-medium" href="index.html">Dashboard /</a>
          </li>

          <li class="text-blue-400">Activities</li>
        </ol>
      </nav>
    </div>
    <!-- Search -->
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
          v-model="inputSearch"
          class="block search-text w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter information customer to search"
          @input="onChangeSearch(inputSearch)"
          required
        />
      </div>
    </div>
    <!-- Tale -->
  </div>
</template>

<script>
export default {
  name: "action-page",

  data() {
    return {
      inputSearch: "",
    };
  },

  mounted() {},

  methods: {},
};
</script>
