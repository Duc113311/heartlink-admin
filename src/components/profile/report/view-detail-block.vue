<template>
  <div class="w-full items-center">
    <!-- -->
    <div class="w-full">
      <div class="w-full flex justify-center items-center gap-8 pb-4">
        <div class="items-center">
          <div class="font-semibold text-base">Duc Nguyen</div>
          <div class="flex items-center justify-center">
            <img
              class="rounded-circle w-16 h-16 rounded-full border-2 border-gray-50"
              :src="avatarDefault"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div>
          <img src="../../../assets/icon_svg/ic_arrow_right.svg" alt="" />
        </div>
        <div class="items-center">
          <div class="font-semibold text-base">Duc Nguyen</div>
          <div class="flex items-center justify-center">
            <img
              class="rounded-circle w-16 h-16 rounded-full border-2 border-gray-50"
              :src="avatarDefault"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <div class="flex w-full p-3">
        <!-- Left -->
        <div class="w-[400px]">
          <img :src="avatarDefault" alt="" />
        </div>
        <!-- Right -->
        <div class="w-[calc(100%-100px)]">
          <div class="text-left pl-3 pr-3 text-base">
            <div>Fullname: Duc nguyen</div>
            <div>Birthday: 01/08/1999</div>
            <div>Gender: Nam</div>
            <div>Height: 165 cm</div>
            <div>Address: Cầu Giấy, Hà Nội</div>
            <div>School: Đại học sư phạm kỹ thuật Hưng Yên</div>
            <div class="flex">
              <div>Công việc: &nbsp;</div>
              <div>
                <span class="font-semibold">Lập trình viên </span>tại
                <span class="font-semibold">Bachasoft</span>
              </div>
            </div>
            <div class="font-semibold">Interests :</div>
            <div>Cầu lông, Bóng bàn, Bóng rổ</div>
            <div class="font-semibold">Orientation sexuals :</div>
            <div>Demisexual, Pansexual</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "view-detail-block",

  data() {
    return {
      avatarDefault: require("@/assets/icon_svg/avatar.jpg"),
    };
  },

  mounted() {},

  methods: {},
};
</script>
