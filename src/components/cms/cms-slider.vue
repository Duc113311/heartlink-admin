<template>
  <div class="w-full h-full flex">
    <!--  -->
    <div class="w-4/6 bg-slate-400 h-full">
      <div class="w-full h-full bg-slate-500">
        <!-- <div
          class="imageDetail"
          :style="`background-image:url(${avatarDefault})`"
        /> -->

        <div
          id="default-carousel"
          class="relative w-full h-full"
          data-carousel="slide"
        >
          <!-- Carousel wrapper -->
          <div class="relative h-full overflow-hidden rounded-lg">
            <!-- Item 1 -->
            <div class="duration-700 ease-in-out">
              <div
                :style="`background-image:url(${avatarDefault})`"
                class="imageDetail absolute"
              />
              <div class="overlay absolute w-full h-full"></div>
            </div>

            <div class="duration-700 ease-in-out">
              <div
                :style="`background-image:url(${avatarDefault01})`"
                class="imageDetail absolute"
              />
              <div class="overlay absolute w-full h-full"></div>
            </div>
          </div>

          <!-- Slider controls -->
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

      <!--  -->
    </div>

    <div class="w-4/12 bg-orange-100 h-full text-black p-5">
      <!--  -->
      <div class="w-full flex justify-between">
        <div class="flex items-center gap-2">
          <div
            class="image-avatar"
            :style="`background-image:url(${avatarDefault})`"
          ></div>
          <div class="text-left">
            <div class="text-base font-bold">NGUYỄN VĂN ĐỨC</div>
            <div>Số lần vi phạm: 01</div>
          </div>
        </div>

        <button
          type="button"
          class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2"
        >
          Xử lý account
        </button>
      </div>
    </div>

    <!--  -->
  </div>
</template>

<script>
export default {
  name: "cms-slider",

  data() {
    return {
      avatarDefault: require("@/assets/icon_svg/avatar.jpg"),
      avatarDefault01: require("@/assets/icon_svg/avatar01.jpg"),
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.imageDetail {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.image-avatar {
  width: 50px;
  height: 50px;
  border-radius: 40px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.overlay {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.3), transparent 30%),
    linear-gradient(to right, rgba(0, 0, 0, 0.3), transparent 30%);
}
</style>
