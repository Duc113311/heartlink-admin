<template>
  <div class="w-full h-full flex">
    <!--  -->
    <div class="w-4/6 bg-slate-400 h-full">
      <div class="w-full h-[750px] bg-slate-500">
        <div
          class="imageDetail"
          :style="`background-image:url(${avatarDefault})`"
        />
      </div>

      <div class="h-[calc(100%-750px)] w-full bg-zinc-800">
        <!--  -->

        <!--  -->
      </div>
      <!--  -->
    </div>

    <div class="w-4/12 bg-orange-100 h-full text-black">
      <!--  -->
      <div class="w-full flex justify-between">
        <div class="flex items-center">
          <div
            class="image-avatar"
            :style="`background-image:url(${avatarDefault})`"
          ></div>
          <div>
            <div>NGUYỄN VĂN ĐỨC</div>
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
  background-size: cover;
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
</style>
